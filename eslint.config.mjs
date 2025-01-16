import globals from 'globals'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/**
 * @type {import('@eslint/eslintrc').Linter.Config}
 */
const eslintConfig = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '.next/**', 'public', '.husky'],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx,html,css}'],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // 使用严格模式
      strict: ['error', 'safe'],
      // 禁止多行无用换行
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      // 行尾必须使用分号
      'no-extra-semi': 'error',
      // 使用单引号
      quotes: ['error', 'single'],
      // 大括号两侧必须有空格
      curly: ['error', 'multi-line'],
      // 运算符两侧必须有空格
      'space-infix-ops': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      // 禁止变量重新声明，与 @typescript-eslint 重复提示了，关闭它
      'no-redeclare': 'off',
      // function 后面必须有空格
      'space-before-function-paren': ['error', 'always'],
      indent: ['error', 'tab'],
    },
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]

export default eslintConfig
