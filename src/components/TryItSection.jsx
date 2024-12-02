import React, { useState } from "react";
import { Button } from "antd";
import { runScript } from "../utils/useScriptRunner";




const TryItSection = () => {
  const [output, setOutput] = useState("{}"); 

  const handleRunScript = () => {
    runScript(setOutput);
  };

  return (
    <div className="text-left p-4 pl-32 mt-24">
      <h1 className="text-4xl font-normal">Try it</h1>
      <p className="mt-6">Run this code here, in a console or from any site:</p>

      {/* Textarea with custom background color */}
      <div className="mt-8">
        <textarea
          className="bg-[#263e52] text-white w-full md:w-2/3 h-40 p-4 rounded focus:outline-none focus:border-none"
          value={`fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))`}
          readOnly
        />
      </div>

      {/* Ant Design Black Button */}
      <div className="mt-6">
        <Button
          type="default"
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            borderColor: "#000000",
          }}
          className="mt-4"
          onClick={handleRunScript} // Button click handler
        >
          Run Script
        </Button>
      </div>

      {/* Output Textarea */}
      <div className="mt-8">
        <textarea
          className="bg-[#263e52] text-white w-full md:w-2/3 h-40 p-4 rounded focus:outline-none focus:border-none"
          value={output} // Output displayed here
          readOnly
        />
      </div>
    </div>
  );
};

export default TryItSection;
