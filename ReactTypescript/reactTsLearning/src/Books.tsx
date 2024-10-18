import React, { useState } from "react";

const Books = () => {
  interface BooksData {
    name: string;
    price: number;
  }
  const [initail, setUpdated] = useState<BooksData>({
    name: "Yashu",
    price: 100,
  });
  return (
    <>
      <h2>Book Name : {initail.name}</h2>
      <h3>Price : {initail.price}</h3>
      <button onClick={()=>setUpdated({name:"Yashu Two",price:300})}>Increase The Price</button>
    </>
  );
};

export default Books;
