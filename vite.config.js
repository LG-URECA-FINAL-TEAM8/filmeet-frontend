import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

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
    ],
    define: {
      'process.env': {
        VITE_API_KEY: JSON.stringify(env.VITE_API_KEY),
        VITE_AUTH_DOMAIN: JSON.stringify(env.VITE_AUTH_DOMAIN),
        VITE_PROJECT_ID: JSON.stringify(env.VITE_PROJECT_ID),
        VITE_STORAGE_BUCKET: JSON.stringify(env.VITE_STORAGE_BUCKET),
        VITE_MESSAGING_SENDER_ID: JSON.stringify(env.VITE_MESSAGING_SENDER_ID),
        VITE_APP_ID: JSON.stringify(env.VITE_APP_ID),
        VITE_VAPID_KEY: JSON.stringify(env.VITE_VAPID_KEY),
      },
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
  };
});
