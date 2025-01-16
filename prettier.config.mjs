/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  // 对象大括号内两边是否加空格 { a:0 }
  bracketSpacing: true,
  jsxBracketSameLine: false,
  endOfLine: 'auto',
  // 单个参数的箭头函数不加括号 x => x
  arrowParens: 'avoid',
  // 自动删除类之间不必要的空格
  tailwindPreserveWhitespace: false,
}

export default config
