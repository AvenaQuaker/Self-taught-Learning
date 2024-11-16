// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: ["expo", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                trailingComma: "es5",
                bracketSpacing: true,
                printWidth: 100,
                semi: "always",
                jsxBracketSameLine: false,
                arrowParens: "avoid",
                objectCurlySpacing: "always",
                "import/no-default-export": "off",
            },
        ],
    },
};
