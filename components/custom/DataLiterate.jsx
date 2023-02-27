import Layout from '../components/Layout'
import Head from 'next/head'
import Excel from '../components/Excel'
import Table from '../components/Table'
import TableGrid from '../components/TableGrid'
import LineChart from '../components/LineChart'
import { Vega, VegaLite } from 'react-vega'


export const components = {
  Table,
  Excel,
  Vega,
  VegaLite,
  LineChart,
  Head,
  TableGrid
}


export default function DataLiterate({ children }) {
  const { Component, frontmatter } = children

  return (
    <div className="prose mx-auto">
      <header>
        <div className="mb-6">
          <h1>{frontmatter.title}</h1>
          {frontmatter.authors && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{frontmatter.authors}</p></div>
          )}
          {frontmatter.description && (
            <p className="description">{frontmatter.description}</p>
          )}
        </div>
      </header>
      <main>
        <Component components={components} />
      </main>
    </div>
  )
}
