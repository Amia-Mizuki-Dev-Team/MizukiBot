globalThis.escapeRegExp = value =>
  String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

await import('./prepare-seo.mjs')
