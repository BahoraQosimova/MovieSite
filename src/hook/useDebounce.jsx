const useDebounce = () => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearInterval(time);
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
