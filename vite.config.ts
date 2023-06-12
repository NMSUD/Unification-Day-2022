import { resolve } from 'path';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				previous: resolve(__dirname, 'previous.html'),
				2022: resolve(__dirname, '2022/index.html'),
			},
		},
	},
})