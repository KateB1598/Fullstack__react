import useFetch from "../hooks/useFetch";

const Cart = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <h1>Loading ...</h1>}
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
