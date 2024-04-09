import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: (alias) => {
      return {
        '@/atoms': './src/atoms',
        '@/molecules': './src/molecules',
        '@/organisms': './src/organisms',
        '@/templates': './src/templates',
        '@/pages': './src/pages',
        '@/app': './src/app',
        '@/commons': './src/commons'
      };
    }
  }
});
