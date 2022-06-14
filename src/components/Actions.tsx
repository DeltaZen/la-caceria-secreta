import { pages } from '~/Data/pages'

const Actions: React.FC<Links> = (props: Links) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.actions.map((action: Action) => {
        return (
          <button key={action.id}
            onClick={() => props.setPage(pages[action.id])}
            className="text-left w-[80%] border-l rounded-lg my-2 p-2"
          >
            {action.text}
          </button>
        )
      })}
    </div>
  )
}

export default Actions
