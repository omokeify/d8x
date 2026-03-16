/**
 * ShaderAnimation - WebGL shader effect for hero section
 * Vanilla JS port of React ShaderAnimation component.
 * Load as type="module" - imports Three.js from CDN.
 */

const vertexShader = `
  void main() {
    gl_Position = vec4( position, 1.0 );
  }
`;

const fragmentShader = `
  #define TWO_PI 6.2831853072
  #define PI 3.14159265359

  precision highp float;
  uniform vec2 resolution;
  uniform float time;

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    float t = time*0.1;
    float lineWidth = 0.003;

    vec3 color = vec3(0.03);
    for(int j = 0; j < 3; j++){
      for(int i=0; i < 5; i++){
        color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*2.0 - length(uv) + mod(uv.x+uv.y, 0.2));
      }
    }
    vec3 tint = vec3(0.400, 0.286, 0.875); // #6649DF
    gl_FragColor = vec4(color * tint * 2.0, 1.0);
  }
`;

function initShader(container, THREE) {
  if (!container || !THREE) return null;

  const camera = new THREE.Camera();
  camera.position.z = 1;

  const scene = new THREE.Scene();
  const geometry = new THREE.PlaneGeometry(2, 2);

  const uniforms = {
    time: { value: 1.0 },
    resolution: { value: new THREE.Vector2() },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000);

  container.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";

  const onWindowResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    uniforms.resolution.value.x = renderer.domElement.width;
    uniforms.resolution.value.y = renderer.domElement.height;
  };

  onWindowResize();
  window.addEventListener("resize", onWindowResize);

  let animationId = 0;
  const animate = (timeValue) => {
    animationId = requestAnimationFrame(animate);
    uniforms.time.value = (timeValue || 0) / 1000.0;
    renderer.render(scene, camera);
  };
  animate();

  return {
    cleanup: () => {
      window.removeEventListener("resize", onWindowResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    },
  };
}

async function mount() {
  const container = document.getElementById("hero-shader");
  if (!container) return;

  const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js");
  initShader(container, THREE);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
