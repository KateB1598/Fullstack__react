const useOwnState = (initialValue) => {
  let count = initialValue;
  const updateValue = (value) => {
    count = value;
  };
  return [updateValue, count];
};
const [updateCount, count] = useOwnState();
count;
updateCount(10);
count;
updateCount(15);
count;
