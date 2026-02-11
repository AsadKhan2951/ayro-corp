import fs from 'node:fs/promises'
import path from 'node:path'

const [componentName] = process.argv.slice(2)

if (!componentName) {
  console.error('Usage: node scripts/reactbits-add.mjs <Component-Variant>')
  console.error('Example: node scripts/reactbits-add.mjs BlurText-JS-CSS')
  process.exit(1)
}

const registryBase = process.env.REACTBITS_REGISTRY ?? 'https://reactbits.dev/r'
const url = `${registryBase}/${componentName}.json`

const response = await fetch(url)
if (!response.ok) {
  console.error(`Failed to fetch registry item: ${response.status} ${response.statusText}`)
  console.error(`URL: ${url}`)
  process.exit(1)
}

const data = await response.json()

if (!Array.isArray(data.files)) {
  console.error('Registry item has no files array.')
  process.exit(1)
}

const targetRoot = path.resolve('src/components/reactbits')

for (const file of data.files) {
  if (!file?.path || typeof file.content !== 'string') {
    continue
  }

  const outputPath = path.join(targetRoot, file.path)
  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, file.content, 'utf8')
}

const deps = Array.isArray(data.dependencies) ? data.dependencies : []

console.log(`✅ Installed ${componentName} into ${targetRoot}`)
if (deps.length > 0) {
  console.log('Dependencies to add:')
  deps.forEach((dep) => console.log(`- ${dep}`))
}
