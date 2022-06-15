import { pages } from '~/Data/pages'

const Actions: React.FC<Links> = (props: Links) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {!props.random
        ? props.actions.map((action: Action) => {
          return (
            <button key={action.id}
              onClick={() => props.setPage(pages[action.id])}
              className="text-left w-[80%] rounded-lg my-2 p-2 first-letter:uppercase btn"
            >
              {action.text}
            </button>
          )
        })
        : <button
          onClick={() => props.setPage(pages[props.actions[Math.floor(Math.random() * props.actions.length)].id])}
          className="text-left w-[80%] rounded-lg my-2 p-2 btn"
        >
          Continuar
        </button>
      }
    </div>
  )
}

export default Actions
