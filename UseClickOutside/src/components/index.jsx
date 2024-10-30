import { useRef, useState } from "react";
import UseOutsideClick from "./test";
import "./styles.css"

const UseOnClickOutSideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));
  return (
    <div className="container">
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please Click outside of this content in order to close the content.
            It wont close if you click inside this content.
          </p>
        </div>
      ) : (
        <button className="button" onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};
export default UseOnClickOutSideTest;
