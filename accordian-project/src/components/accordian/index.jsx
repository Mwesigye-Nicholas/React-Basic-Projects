//*Single selection
//*Multiple section 
import data from "./data";
import { useState } from "react";
import "./styles.css"

function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId) {
        const copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId == -1) copyMultiple.push(getCurrentId);
        else copyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMultiple);
    }
    console.log(selected, multiple);
  return (
      <div className="wrapper">
          <div>
            <h1 className="wrapper__header">MERN Stack</h1>
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)} className="wrapper-button">Enable Multi-Selection</button>
         </div>
          <div className="accordion">
              {
                  data && data.length > 0 ? 
                      data.map(dataItem => <div className="dataItem" key={data.id}>
                          <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () =>handleSingleSelection(dataItem.id)} className="title">
                              <h3>{dataItem.question}</h3>
                              <span>+</span>
                          </div>
                          {enableMultiSelection
                              ? multiple.indexOf(dataItem.id) !== -1 && (<div className="answer">{dataItem.answer}</div>)
                              : selected === dataItem.id && (
                                  <div className="answer">{dataItem.answer}</div>
                            )}
                          
                          {
                              /*{selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                              <div className="answer">{ dataItem.answer}</div>
                              : null}*/
                          }
                      </div>)
                      : <div>No Data present</div>
              }
        </div>
    </div>
  )
}

export default Accordion;
