// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'sort-exports'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {},
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.ts'], // Specify the file patterns for the src folder
      rules: {
        "sort-exports/sort-exports": ["error", {"sortDir": "asc"}],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        "comma-dangle": ["error", "always-multiline"],
        "no-var": "error",
        "prefer-const": "error",
        "indent": [
          "error",
          2,
          {"SwitchCase": 1},
        ],
        "max-len": [
          "error",
          200,
          2,
          {
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
          },
        ],
        "object-curly-newline": [
          "error",
          {
            "ObjectExpression": {"multiline": true},
            "ObjectPattern": {"multiline": true},
            "ImportDeclaration": "never",
            "ExportDeclaration": {
              "multiline": true,
              "minProperties": 3,
            },
          },
        ],
        "no-underscore-dangle": "off",
        "no-return-assign": ["error", "except-parens"],
        "class-methods-use-this": "off",
        "newline-per-chained-call": "off",
        "func-names": "off",
        "no-param-reassign": "off",
        "space-before-function-paren": [
          "error",
          {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
          },
        ],
        "lines-between-class-members": ["error", "always"],
        "sort-imports": [
          "error",
          {
            "ignoreCase": false,
            "ignoreDeclarationSort": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "single", "multiple"],
          },
        ],
      }
    },
  ],
  "globals": {
    "describe": "readonly",
    "test": "readonly",
    "expect": "readonly"
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};