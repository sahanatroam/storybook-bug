import url from '@rollup/plugin-url';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.peerDependencies || {}),
  plugins: [
    // autoExternal() is required to allow external modules (like nanoId and react-transition-group) to be used by the UI package
    autoExternal(),
    typescript({
      typescript: require('typescript'),
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.gif', '**/*.webp', '**/*.otf'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE),
      preventAssignment: true,
    }),
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
};
