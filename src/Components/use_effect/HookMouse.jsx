import { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const logMousePosion = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosion);

    return () => {
      console.log("useEffect cleanUp");
      window.removeEventListener("mousemove", logMousePosion);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouse;
