import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import * as path from "path"

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
