import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Henrique Arantes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure laboriosam officia fugit eos commodi odit atque ut, officiis obcaecati eaque, aliquam veniam consectetur nesciunt at nihil quis ducimus a."
          />
          <Post
            author="Luísa Belisário"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}