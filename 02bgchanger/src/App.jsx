import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-350"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap top-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">

          <button onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-2xl"
          style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-2xl text-white"
          style={{backgroundColor: "black"}}>Black</button>

          <button onClick={() => setColor("gray")}
          className="outline-none px-4 py-1 rounded-2xl"
          style={{backgroundColor: "gray"}}>Gray</button>

          <button onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-2xl"
          style={{backgroundColor: "green"}}>Green</button>


        
        </div>
      
      </div>
    </div>
  );
}

export default App;
