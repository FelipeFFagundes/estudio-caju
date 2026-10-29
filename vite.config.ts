import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Plain ASCII file names (no accents or spaces) so FTP uploads never choke on them.
        assetFileNames: (asset) => {
          const name = (asset.names?.[0] ?? asset.name ?? 'asset')
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/\.[^.]+$/, '')
            .replace(/[^a-zA-Z0-9-]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .toLowerCase();
          return `assets/${name || 'asset'}-[hash][extname]`;
        },
      },
    },
  },
})
