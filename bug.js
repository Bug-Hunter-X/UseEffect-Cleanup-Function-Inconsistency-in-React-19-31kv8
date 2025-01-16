```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run on every render
    console.log('Count changed:', count);
    return () => {
      // Cleanup function – this runs before the next effect runs
      console.log('Cleanup!');
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