let fs = require('fs')

const mark = s => (/1/.test(s) ? true : /0/.test(s) ? false : undefined)

let data = fs.readFileSync('data.tsv', 'utf8')

let comparison = data
  .split('\n')
  .slice(1)
  .map(line => {
    let [feature, framerx, storybook, supernova, views, viewsnext, description = ''] = line.split(
      '\t'
    )

    return {
      feature,
      description: description.trim(),
      framerx: mark(framerx),
      storybook: mark(storybook),
      supernova: mark(supernova),
      views: mark(views),
      viewsnext: mark(viewsnext),
    }
  }).filter(c => c.feature)

let stats = {}
stats.framerx = comparison.filter(c => c.framerx).length
stats.storybook = comparison.filter(c => c.storybook).length
stats.supernova = comparison.filter(c => c.supernova).length
stats.views = comparison.filter(c => c.views).length
stats.viewsnext = comparison.filter(c => c.viewsnext).length
stats.total = comparison.length

fs.writeFileSync(
  'src/Main/comparison.json',
  JSON.stringify({ stats, comparison }, null, '  '),
  'utf8'
)
