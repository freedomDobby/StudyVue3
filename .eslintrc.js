module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // parserOptions: {
  //   parser: '@babel/eslint-parser',
  //   requireConfigFile: false, 
  // },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['nuxt', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error', 
    'vue/multi-word-component-names': 'off', 
    'vue/html-self-closing': 'off', 
    'nuxt/rule-name': 'off', 
  },
};
