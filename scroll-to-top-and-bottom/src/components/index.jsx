import { useRef } from "react";
import useFetch from "../../../use-fetch/src/components";

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100", 
    {}
    );
     const bottomRef = useRef(null);

  if (pending) return <h1>Loading Data ! please wait...</h1>;
    if (error) return <h1>`Error Occurred please try again later${error}`</h1>;
    
    const handelScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    const handelScrollToBottom = () => {
        bottomRef.current.scrollIntoView({behavior: "smooth"})
    }
   

  return (
    <div>
      <h1>Scroll To Top And To Bottom feature</h1>
      <h3>This is the Top Section</h3>
      <button onClick={handelScrollToBottom}>Scroll To Bottom</button>
      <ul style={{listStyle: "none"}}>
        {data && data.products.length && data.products
          ? data.products.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))
          : null}
          </ul>
          <button onClick={handelScrollToTop}>Scroll To Top</button>
          <h3>This is the bottom of the Page</h3>
          <div ref={bottomRef}></div>
    </div>
  );
};
export default ScrollToTopAndBottom;
