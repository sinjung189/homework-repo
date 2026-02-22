import useCounter from '../components/Hook';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, {
    min: 0,
    max: 10,
  });

  return (
    <div className="time-card">
      <p className="time-label">COUNTER</p>

      <h1>{count}</h1>

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        <button className="time-btn stop" onClick={decrement}>-</button>
        <button className="time-btn start" onClick={increment}>+</button>
        <button className="time-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
