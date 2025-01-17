import chalk from 'chalk'
import fs from 'node:fs'
import path from 'node:path'
import { tailWindAttrs } from '../theme/tailwind.config.json'
const CACHE_PATH = '../.cache/tailwindcss'
const FILE_NAME = 'tailwind.tmp.json'
const FULL_PATH = path.join(CACHE_PATH, FILE_NAME)
const isCache = () => {
  const tmp = path.resolve(__dirname, CACHE_PATH, FILE_NAME)
  if (fs.existsSync(tmp)) {
    return true
  }
  return false
}

const getCache = () => {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, FULL_PATH), 'utf-8'))
}

const getAttrubutes = (target: number) => {
  const obj: Record<string, Record<string, string>> = {}
  for (let i = 0; i < target; i++) {
    for (let index = 0; index < tailWindAttrs.length; index++) {
      const cur = tailWindAttrs[index]
      if (cur.max > i) {
        if (obj[cur.key]) {
          obj[cur.key] = {
            ...obj[cur.key],
            [i]: i + 'px',
          }
        } else {
          obj[cur.key] = {
            [i]: i + 'px',
          }
        }
      }
      continue
    }
  }
  return obj
}

const setCache = () => {
  const now = new Date().getTime()
  console.log(chalk.yellow('[ tailwindcss ] no cached, now is generate attrubutes, please wait ...\n'))
  const result = getAttrubutes(2000)
  const cur = new Date().getTime()
  console.log(chalk.cyan(`[ tailwindcss ] attrubutes is created, Total time spent ${(cur - now) / 1000}s \n`))
  // 将result写入到cache文件目录下
  fs.mkdirSync(path.resolve(__dirname, CACHE_PATH), { recursive: true })
  fs.writeFileSync(path.resolve(__dirname, FULL_PATH), JSON.stringify(result), {
    encoding: 'utf-8',
  })
  const ctm = new Date().getTime()
  console.log(
    chalk.green(`[ tailwindcss ] is write ${FILE_NAME} in ${FULL_PATH}, Total time spent ${(ctm - now) / 1000}s\n`)
  )
  return result
}

export const init = () => {
  if (isCache()) {
    console.log(chalk.green('[ tailwindcss ] is cached 🎉, now is using cache file. \n'))
    return getCache()
  }
  return setCache()
}

export const themeExtend = init()
