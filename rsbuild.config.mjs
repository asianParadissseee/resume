import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: (alias) => {
      return {
        '@/components': './src/components',
        '@/features': './src/features',
        '@/pages': './src/pages',
        '@/layouts': './src/layouts',
        '@/app': './src/app',
        '@/commons': './src/commons'
      };
    }
  }
});
