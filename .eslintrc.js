{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "airbnb-base",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    "no-underscore-dangle": ["error", { "allow": ["_id"] }]
  }
}
