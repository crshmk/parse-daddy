import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
//import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: './src/index.js',
    output: {
        file: './dist/index.js',
        format: 'cjs',
        name: 'bundle',
        globals: {
            'ramda': 'r',
        }
    },
    external: ['ramjam'],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        typescript({
          rollupCommonJSResolveHack: false,
          clean: true,
        }),
        resolve(),
        commonjs(),
        uglify()
    ]
}