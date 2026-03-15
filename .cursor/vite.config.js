import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
    root: '.',
    base: './',
    plugins: [react()],
    server: { port: 3000 },
    preview: { port: 3000 },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: '.',
        emptyOutDir: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html'),
            output: {
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
            },
        },
    },
});
