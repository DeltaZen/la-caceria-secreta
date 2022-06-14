import Footer from './components/Footer'

export default function App() {
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <div>
        <div className="i-carbon-identification text-4xl inline-block" />
        <p>
          Hello, { window.webxdc.selfName }
        </p>
        <p className="text-sm op50">
          <em>Your address: { window.webxdc.selfAddr }</em>
        </p>
      </div>
      <Footer />
    </main>
  )
}
