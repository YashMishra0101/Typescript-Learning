import React from "react";

interface ButtonProps{
    text:string | number ;
    onClick?:()=>void;
}

const Button :React.FC<ButtonProps>=(props)=>{
    // Destructuring the props object to extract text and onClick
    // props is an object
    const {text,onClick}=props;  // Destructuring props
    return <button onClick={onClick}>{text}</button>
}
//Not right way :  
// const Button =(props:{text:string})=>{
//     return <button>{props.text}</button>
// }

export default Button; 