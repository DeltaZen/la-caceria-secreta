import DarkMode from './components/DarkMode'
import Content from './components/Content'
import Actions from './components/Actions'
import { pages } from './Data/pages'

export default function App() {
  const initialIndex = window.localStorage.getItem('page') ?? 'intro'

  const [page, setPage] = useState(pages[initialIndex])

  useEffect(() => {
    if (page && page.id)
      window.localStorage.setItem('page', page.id)
  }, [page?.id])

  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <DarkMode />
      {
        page !== undefined
          ? <>
            <Content html={page.html} />
            <Actions actions={page.actions} setPage={setPage} random={page.random} />
          </>

          : <>
            <div>
              <h1>Error al seleccionar la página</h1>
              <button
                onClick={() => setPage(pages.intro)}
                className="text-left w-[80%] border-l rounded-lg my-2 p-2"
              >
                Ir al principio
              </button>
            </div>
          </>

      }
    </main>
  )
}
