import { useState } from 'preact/hooks';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span class="text-xl text-yellow-300 mr-4">Count: {count}</span>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count + 1)}>+1</button>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
}