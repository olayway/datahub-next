import fs from 'fs'
import path from 'path'

import parse from '../lib/markdown.js'

import DataLiterate from '../components/drd/DataLiterate'


export default function PostPage({ source, frontMatter }) {
  return (
    <DataLiterate source={source} frontMatter={frontMatter} />
  )
}

export const getStaticProps = async ({ params }) => {
  const mdxPath = path.join('content', 'drd', 'demo.mdx')
  const source = fs.readFileSync(mdxPath)

  const { mdxSource, frontMatter } = await parse(source)

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter,
    },
  }
}
