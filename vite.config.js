import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import replace from '@rollup/plugin-replace';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [
      react(),
      svgr({
        exportAsDefault: true,
        svgrOptions: {
          icon: true,
        },
      }),
      replace({
        preventAssignment: true,
        values: {
          __VITE_API_KEY__: JSON.stringify(env.VITE_API_KEY),
          __VITE_AUTH_DOMAIN__: JSON.stringify(env.VITE_AUTH_DOMAIN),
          __VITE_PROJECT_ID__: JSON.stringify(env.VITE_PROJECT_ID),
          __VITE_STORAGE_BUCKET__: JSON.stringify(env.VITE_STORAGE_BUCKET),
          __VITE_MESSAGING_SENDER_ID__: JSON.stringify(env.VITE_MESSAGING_SENDER_ID),
          __VITE_APP_ID__: JSON.stringify(env.VITE_APP_ID),
        },
      }),
    ],
    server: {
      fs: {
        allow: ['..'],
      },
    },
  };
});
