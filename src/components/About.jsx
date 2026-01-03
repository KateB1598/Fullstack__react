import { useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <h1>Counter</h1>

      <button onClick={() => setIsVisible((prev) => !prev)}>
        Toggle visibility
      </button>
    </div>
  );
};
export default About;
