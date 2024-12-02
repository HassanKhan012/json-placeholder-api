// useScriptRunner.js
export const runScript = async (setOutput) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      setOutput(JSON.stringify(data, null, 2)); // Pretty-print JSON data
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };
  