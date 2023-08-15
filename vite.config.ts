import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { outputFolderName } from './utils/constants';
import { makeManifest } from './utils/plugins/make-manifest';
import { buildContentScript } from './utils/plugins/build-content-script';

const outDir = resolve(__dirname, outputFolderName);
const publicDir = resolve(__dirname, 'public');
const root = resolve(__dirname, 'src');
const assetsDir = resolve(root, 'assets');
const stylesDir = resolve(root, 'styles');
const componentsDir = resolve(root, 'components');
const pagesDir = resolve(root, 'pages');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': root,
      '@assets': assetsDir,
      '@styles': stylesDir,
      '@components': componentsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [react(), makeManifest(), buildContentScript()],
  publicDir,
  build: {
    outDir,
    sourcemap: process.env.__DEV__ === 'true',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        background: resolve(pagesDir, 'background', 'index.ts'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: chunk => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
});
