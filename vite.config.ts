import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
type ViteConfigInput = {
  mode: string;
  command: string;
};
export default ({ mode }: ViteConfigInput) => {
  const generateScopedName = mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';

  return defineConfig({
    // --------------- Build configuration
    build: {
      outDir: 'build',
      rollupOptions: {
        cache: false,
      },
      sourcemap: true,
    },
    // --------------- Ports configuration
    server: {
      // https: true,
      port: 4010,
      open: true,
      host: '127.0.0.1',
    },
    preview: {
      port: 4000,
    },
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },

    // --------------- Plugins
    plugins: [react(), tsconfigPaths(), svgr()],

    // --------------- Css configuration
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
  });
};
