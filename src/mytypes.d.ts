interface Action {
  id: string
  text: string
}

interface IPage {
  id: string
  html: string
  actions: Action[]
}

type PageDict = Record<string, IPage>

interface IContent {
  html: string
}

interface Links {
  actions: Action[]
  setPage: React.Dispatch<React.SetStateAction<IPage>>
}
