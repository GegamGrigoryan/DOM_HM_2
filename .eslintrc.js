module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    '@typescript-eslint/no-var-requires': 0,
    }
}