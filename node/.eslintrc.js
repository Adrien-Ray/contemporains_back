module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    rules: {
        indent: ['error', 4],
        'import/extensions': 'off',
        'spaced-comment': 'off',
        'no-underscore-dangle': 'off',
        'no-inner-declarations': 'off',
        'no-console': 'off',
        eqeqeq: 'off',
        'no-undef': 'off',
        'no-restricted-syntax': 'off',
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
    },
};
