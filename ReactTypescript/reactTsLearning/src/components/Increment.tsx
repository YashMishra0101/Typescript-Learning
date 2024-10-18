import React, { useState } from "react";

const Increment = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <>
      <button onClick={()=>setValue(value+1)}>Increment The Value</button>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value-1)}>Decrement The Value</button>
    </>
  );
};

export default Increment;
