import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // プロジェクトのベースパスを設定
  build: {
    outDir: 'dist', // 出力先ディレクトリ
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-Z6VMWTYC'], // 問題の依存関係を指定
  },
});
