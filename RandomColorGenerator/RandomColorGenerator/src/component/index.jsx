import { useCallback, useEffect, useState } from "react"

function RandomColorGenerator() {
    const [color, setColor] = useState("#000000");
    const [typeOfColor, setTypeOfColor] = useState("hex");

    const generateRandomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleGenerateRandomHexColor = useCallback(() => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomColorUtility(hex.length)];
        }
       
        setColor(hexColor);
       
    }, []);

    const handleGenerateRandomRgbColor = useCallback(() => {
        const r = generateRandomColorUtility(256);
        const g = generateRandomColorUtility(256);
        const b = generateRandomColorUtility(256);

       
        setColor(`rgb(${r}, ${g}, ${b})`);

    }, [])

    useEffect(() => {
        if (typeOfColor === "rgb") handleGenerateRandomRgbColor();
        else  handleGenerateRandomHexColor()
    }, [typeOfColor, handleGenerateRandomRgbColor, handleGenerateRandomHexColor]);


  return (
      <div>
          <div style={{
              height: "65vh",
              width: "50vw",
              backgroundColor: color,
              marginBottom: "20px",
              borderRadius: "15px",
              margin: "20px 15px"
          }}>
              <h3 style={{
                  color: "#fff",
                  paddingTop: "50px",
                  fontSize: "2rem",
                  fontFamily: "monospace",
              }}>
                  {
                      typeOfColor === "rgb"
                          ? "RGB"
                          : "HEX"
                  }
              </h3> 
              <h2 style={{
                  color: "#fff",
                  paddingTop: "50px",
                  fontSize: "2rem",
                  fontFamily: "monospace",
              }}>{ color }</h2>
          </div>
      
          <button onClick={() => setTypeOfColor("rgb")}>
              generate Random RGB color
          </button>
          <button onClick={() => setTypeOfColor("hex")}>
              generate Random HEX color
          </button>
          <button
              onClick={
                  typeOfColor === "rgb"
                  ? handleGenerateRandomRgbColor
                  : handleGenerateRandomHexColor
              }
          >
              Generate Random Color
          </button>
    </div>
  )
}

export default RandomColorGenerator
