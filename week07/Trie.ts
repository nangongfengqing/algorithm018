class Trie {
  private root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let node: TrieNode = this.root
    for (let s of word) {
      if (!node.containsKey(s)) {
        node.put(s, new TrieNode())
      }
      node = node.pick(s)
    }
    node.setEnd()
  }

  private searchPrefix(word: string): TrieNode | null {
    let node: TrieNode = this.root
    for (let s of word) {
      if (node.containsKey(s)) {
        node = node.pick(s)
      } else {
        return null
      }
    }
    return node
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word)
    return node != null && node.isEnd()
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) != null
  }
}

class TrieNode {
  private links: TrieNode[]
  private R = 26
  private ended: boolean

  constructor() {
    this.links = new Array(this.R)
    this.ended = false
  }

  containsKey(ch: string) {
    return this.links[ch.charCodeAt(0) - 97] != null
  }

  pick(ch: string) {
    return this.links[ch.charCodeAt(0) - 97]
  }

  put(ch: string, node: TrieNode) {
    this.links[ch.charCodeAt(0) - 97] = node
  }

  setEnd() {
    this.ended = true
  }

  isEnd() {
    return this.ended
  }
}
