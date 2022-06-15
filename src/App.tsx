import DarkMode from './components/DarkMode'
import Content from './components/Content'
import Actions from './components/Actions'
import { pages } from './Data/pages'

export default function App() {
  const initialIndex = window.localStorage.getItem('page') ?? 'intro'

  const [page, setPage] = useState(pages[initialIndex])

  useEffect(() => {
    window.localStorage.setItem('page', page.id)
  }, [page.id])

  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <DarkMode />
      <Content html={page.html} />
      <Actions actions={page.actions} setPage={setPage} random={page.random} />
    </main>
  )
}
