import { babel } from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";


export default {
	input: "src/index.js",
	output: [
		{
			format: "cjs",
			file: "./dist/tiny-component.js",
			sourcemap: true,
		},
		{
			format: "esm",
			file: "./dist/tiny-component.esm.js",
			sourcemap: true,
		}
	],
	external: ["vue"],
	plugins: [
		babel({ babelHelpers: "bundled" }),
		vue()
	]
};
