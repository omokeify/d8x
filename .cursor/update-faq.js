const fs = require('fs');
const path = 'assets/index-GniKqz-W.js';
let s = fs.readFileSync(path, 'utf8');

const faqs = [
  {
    q: "How can I white-label D8X?",
    a: "D8X offers flexible white-labeling options, including a UI-kit, a NodeSDK, APIs and contract-integrations.\n\nD8X's ready-to-use UI kit enables an easy custom front-end setup. Fork, brand and host your own UI and start collecting broker fees in no time. Through D8X's Node SDK you can integrate D8X's perpetuals through the backend of your existing app and add perpetuals to your offering.\n\nWhite-label partners can also connect to D8X to their existing app through a Node SDK or REST API.\n\nContract-trading allows to integrate directly on-chain, enabling efficient on-chain hedging."
  },
  {
    q: "What can liquidity providers do on D8X and how do they benefit?",
    a: "Liquidity providers can deposit funds into the participation fund in the collateral currency of their chosen liquidity pool (such as USDC or stETH). They are then eligible to participate in the protocol's PnL and fees accrued in the token of their selected liquidity pool, earning in mature tokens that are independent of the protocol."
  },
  {
    q: "What risks do liquidity providers face on D8X?",
    a: "On D8X, liquidity providers deposit funds into smart contracts, funds are in custody of the smart contract. In the event of a smart contract exploit, the funds of liquidity providers may be at risk of loss.\n\nThe D8X token is not used as a liquidity reward token, so its price movements do not pose any risk to liquidity providers.\n\nLiquidity providers face market risks and, in the event that the margin account for a perpetual is insufficient to pay traders, the AMM fund and participation fund are used. If the AMM fund for a given perpetual is empty, the perpetual is settled, and if the default fund for a liquidity pool runs out of funds, all perpetuals in the pool are settled"
  },
  {
    q: "How is D8X able to offer best-in-class trading conditions?",
    a: "D8X offers the best trading conditions in the DeFi space (see our medium article). This is due to D8X's use of a derivative pricing approach borrowed from traditional finance and the application of risk-mitigation techniques similar to those used by enterprise-wide risk management and clearing houses. These methods, which are novel in the DeFi space, allow D8X's automated market maker (AMM) to offer superior trading conditions. In comparison, competitor platforms' linear pricing functions often result in overpricing in benign conditions and underpricing when risk is high. On average, D8X's pricing approach offers lower slippage and better prices for trades that minimize AMM risk."
  },
  {
    q: "How can I participate in governing D8X and how do I benefit?",
    a: "Holding $D8X, the token of the D8X protocol, gives you the right to participate in the governance of the protocol. As a fully decentralized protocol with advanced governance options, D8X allows its token holders to shape the direction of the protocol and share in its success. More information about the mechanics and rewards of the protocol governance will be made available soon."
  }
];

function escapeJs(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function makeFaqItem(q, a) {
  const aEsc = escapeJs(a);
  return `u.jsxs("details",{className:"group bg-white/5 border border-white/10 rounded-lg overflow-hidden",children:[u.jsx("summary",{className:"flex items-center justify-between cursor-pointer list-none p-4 text-white font-medium",children:["${escapeJs(q)}",u.jsx("span",{className:"text-white/50 text-xs transition-transform group-open:rotate-180",children:"▼"})]}),u.jsx("div",{className:"px-4 pb-4",children:u.jsx("p",{className:"text-white/50 text-sm leading-relaxed",children:"${aEsc}"})})]})`;
}

const newFaqContent = faqs.map(f => makeFaqItem(f.q, f.a)).join(',');

// Find and replace the FAQ details section
// Pattern: children:[u.jsxs("details",...first FAQ...),u.jsxs("details",...last FAQ...)]})
const oldStart = s.indexOf('u.jsxs("details",{className:"group bg-white/5 border border-white/10 rounded-lg overflow-hidden",children:[u.jsx("summary",{className:"flex items-center justify-between cursor-pointer list-none p-4 text-white font-medium",children:["What is D8X?"');
const endMarker = 'FINMA guidance and built for DeFi and institutional users."})})]})]})]})]})';
const oldEnd = s.indexOf(endMarker);
if (oldStart === -1 || oldEnd === -1) {
  console.log('Could not find FAQ section, oldStart:', oldStart, 'oldEnd:', oldEnd);
  process.exit(1);
}

const beforeFaq = s.slice(0, oldStart);
const afterFaq = s.slice(oldEnd + endMarker.length);

// The last FAQ ends with: "})})]})]})]})]})
// We need to preserve the correct bracket structure. The last FAQ has:
// "})})  - closes p and div
// ]})]})]})]}) - closes details, parent divs
// So after our replacement we need: newFaqContent + "]})]})]})]})"
// Wait - the structure is: children:[ faq1, faq2, ... ]
// So we need ] to close the array. So we have ,faq1,faq2,...,faq5]
// The "flex-1 space-y-3" div has children:[...]. So we need ]}) for that.
// Then the flex container has children:[leftCol, rightCol]. So ]}) for that.
// So we need ]})]}) at the end. Let me check the original structure.
// Original: ...details6...]})]})]})]}) - so we have 4 ]}) for the nesting.
// For 5 items we need the same: ]})]})]})]})

// Use 3 ]}) - afterFaq adds 2 more; 4 caused "Unexpected token ']'"
const replacement = newFaqContent + ']})]})]})';
const newS = beforeFaq + replacement + afterFaq;

// But wait - we need to include the opening. The original has:
// children:[ u.jsxs("details",...
// So we need children:[ + newFaqContent + ]})
// So replacement should be: 'children:[' + newFaqContent + ']})]})]})]})'
// No - beforeFaq ends with "children:[", so we just need newFaqContent + the closings.
// Let me check - what does beforeFaq end with?
fs.writeFileSync(path, newS);
console.log('Updated. Verifying parse...');
try {
  new Function(newS);
  console.log('Parse OK');
} catch (e) {
  console.log('Parse error:', e.message);
}
