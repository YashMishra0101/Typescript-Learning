import React ,{useState} from "react";

const Form = () => {

  const [value,setValue]=useState<string|undefined>("");  

  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);
  }

  const formHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
    <form onSubmit={formHandler}>
    <input onChange={handleNameChange} type="text" placeholder="Enter Your Name" />
    <h2>{value}</h2>
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Form;
