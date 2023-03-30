// import serve from "rollup-plugin-serve";
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import ts from "rollup-plugin-typescript2"
export default {
  input: "./index.ts",   // 以哪个文件作为打包的入口
  output: {
    // 输出目录
    dir: 'dist',
    // 输出文件名
    name: 'zhangsan',
    // 输出格式，这里使用了 umd 格式
    format: 'umd',
    // 是否开启 sourcemap，方便调试
    sourcemap: true,
  },
  // 插件配置
  plugins: [
    // 解析 ts 中的模块
    ts(),
    // 解析 node_modules 中的模块
    resolve(),
    // 将 CommonJS 模块转换为 ES6 模块
    commonjs(),
    // 使用 Babel 转换 ES6 代码为 ES5 代码
    babel({
      exclude: 'node_modules/**',
    }),
    // 压缩代码
    terser(),
  ],
  // 需要打包的依赖库名称
  external: ['lodash'],
}