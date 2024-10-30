import useFetch from ".";

const UseFetchHookTest = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);
  return (
    <div>
      <h1>Use fetch custom hook.</h1>
      {pending ? <h1>Pending ! please wait..</h1> : null}
      {error ? <h3>`Some Error Occurred ${ error }`</h3>: null}
      {data && data.products && data.products.length
        ? data.products.map((product, index) => (
            <p key={index}>{product.title}</p>
          ))
        : null}
    </div>
  );
};
export default UseFetchHookTest;
