/*********************************************************************
 * © Copyright IBM Corp. 2024
 *********************************************************************/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// eslint-disable-next-line eslint-plugin-import/no-default-export
export default defineConfig({
  plugins: [react()],
});
