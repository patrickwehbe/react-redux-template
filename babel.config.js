export default function(api) {
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
    sourceType: 'unambiguous',
  };
}
