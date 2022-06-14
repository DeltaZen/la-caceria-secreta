import { pages } from '~/Data/pages'

const Actions: React.FC<Links> = (props: Links) => {
  return (
          <ul>
              {props.actions.map((action: Action) => {
                return (
                      <li key={action.id}>
                          <button
                          className=""
                          onClick={() => props.setPage(pages[action.id])}
                          >
                              {action.text}
                          </button>
                      </li>
                )
              })}
          </ul>
  )
}

export default Actions
