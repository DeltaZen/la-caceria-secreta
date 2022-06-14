import Footer from './components/Footer'
import Content from './components/Content'
import Actions from './components/Actions'
import { pages } from './Data/pages'

export default function App() {
  const [page, setPage] = useState(pages.intro)
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Footer />
      <Content html={page.html}/>
      <Actions actions={page.actions} setPage={setPage} />
    </main>
  )
}
