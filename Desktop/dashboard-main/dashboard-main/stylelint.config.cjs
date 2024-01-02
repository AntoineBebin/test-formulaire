module.exports = {
  extends: [
    'stylelint-config-recommended', // https://github.com/thibaudcolas/stylelint-config-cookbook
    'stylelint-config-styled-components', // https://github.com/styled-components/stylelint-config-styled-components
  ],
  rules: {
    'selector-attribute-quotes': 'always',
    'font-family-name-quotes': 'always-where-required',
    'color-hex-length': 'short',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      customSyntax: 'postcss-styled-syntax',
    },
    {
      files: ['**/*.scss', '**/*.sass'],
      customSyntax: 'postcss-scss',
    },
  ],
}
