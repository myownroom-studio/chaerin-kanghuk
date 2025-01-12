import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      tsconfigPaths(),
      svgr(),
      createHtmlPlugin({
        inject: {
          data: {
            VITE_BASE_URL: env.VITE_BASE_URL,
          },
        },
      }),
    ],
  };
});