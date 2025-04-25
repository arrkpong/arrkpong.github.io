import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repoName = 'my-portfolio'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
