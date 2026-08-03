import { existsSync, renameSync } from 'node:fs'
import { resolve } from 'node:path'

const notFoundPage = resolve('docs/.vitepress/dist/404.html')
const temporaryPage = resolve('docs/.vitepress/dist/404.html.noindex-skip')
const hasNotFoundPage = existsSync(notFoundPage)

if (hasNotFoundPage) {
  renameSync(notFoundPage, temporaryPage)
}

try {
  await import('./audit-seo.mjs')
} finally {
  if (hasNotFoundPage && existsSync(temporaryPage)) {
    renameSync(temporaryPage, notFoundPage)
  }
}
