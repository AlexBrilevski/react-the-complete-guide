import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText ?
        <Output>It's good to see you!</Output>
        :
        <Output>Check out this new text!</Output>
      }
      <button onClick={() => setChangeText(true)}>
        Change text
      </button>
    </div>
  );
};

export default Greeting;
