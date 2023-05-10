import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import json from "@rollup/plugin-json";


export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/cjs/index.js",
				format: "cjs",
				sourcemap: true,
			},
			{
				file: "dist/esm/index.js",
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			typescript({ tsconfig: "./tsconfig.json" }),
			json(),
			sourcemaps(),
			commonjs({
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				include: /node_modules/,
			}),
			postcss({
				config: {
					path: "./postcss.config.js",
				},
				extensions: [".css"],
				minimize: true,
				inject: {
					insertAt: "top",
				},
			}),
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
