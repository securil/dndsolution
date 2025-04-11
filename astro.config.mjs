// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/dndsolution/', // ✅ GitHub Pages 하위 디렉토리 배포 시 필수
  build: {
    outDir: './dist',    // ✅ 기본값이지만 명시해도 좋음
  },
});
