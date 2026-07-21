/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

/** Required for SharedArrayBuffer / multi-threaded Stockfish WASM. */
const crossOriginIsolationHeaders = {
	"Cross-Origin-Opener-Policy": "same-origin",
	"Cross-Origin-Embedder-Policy": "credentialless",
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueDevTools()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		headers: crossOriginIsolationHeaders,
	},
	preview: {
		headers: crossOriginIsolationHeaders,
	},
	test: {
		environment: "node",
	},
});
