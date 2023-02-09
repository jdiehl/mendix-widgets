import { textEditor } from 'react-data-grid'

export class ODataResource {
  private readonly endpoint: string
  private skip = 0
  hasMore = false

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  private async loadMetadata(metaurl: string): Promise<any> {
    const res = await fetch(metaurl)
    const text = await res.text()
    const doc = new DOMParser().parseFromString(text, 'text/xml')

    const key = doc.querySelector('EntityType > Key > PropertyRef')?.getAttribute('Name')
    const nodes = doc.querySelectorAll('EntityType > Property')
    const columns = []

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      columns.push({
        key: node.getAttribute('Name'),
        name: node.getAttribute('Name'),
        editor: textEditor
      })
    }
    return { key, columns }
  }

  private async fetch(): Promise<any> {
    const res = await fetch(`${this.endpoint}?$orderby=Cca2&$skip=${this.skip}`)
    const data = await res.json()
    const rows = data.value as any[]
    this.hasMore = !!data['@odata.nextLink']
    this.skip += rows.length
    return data
  }

  async load(): Promise<any> {
    const data = await this.fetch()
    const { key, columns } = await this.loadMetadata(data['@odata.context'])
    return { key, columns, rows: data.value }
  }

  async loadMore(): Promise<any> {
    const data = await this.fetch()
    return data.value
  }

  async update(key: string, change: any): Promise<void> {
    const method = 'PATCH'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(change)
    await fetch(`${this.endpoint}('${key}')`, { method, headers, body })
  }
}
