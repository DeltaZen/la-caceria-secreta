// just an example component that is tested with the tests suit

export default function Counter({ initial }: { initial: number }) {
  const { count, increment, decrement } = useCounter(initial ?? 0)

  return (
    <div>
      {count}
      <button className="inc" onClick={() => increment()}>
      +
      </button>
      <button className="dec" onClick={() => decrement()}>
      -
      </button>
    </div>
  )
}
