```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const cleanupRef = useRef(null);

  useEffect(() => {
    cleanupRef.current = () => {
      console.log('Cleanup!');
    };
    return () => {
      //Ensure cleanupRef.current exists before calling 
      cleanupRef.current && cleanupRef.current();
    };
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
    return () => {
      cleanupRef.current && cleanupRef.current();
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```