import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";

export default {
  entry: "main.ts",
  plugins: [commonjs(), vue()],
};
