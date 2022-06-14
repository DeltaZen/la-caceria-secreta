import { useDark } from '~/hooks'

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="absolute top-2 left-2">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </button>
    </nav>

  )
}
