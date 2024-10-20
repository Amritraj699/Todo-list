import { useState } from "react";
export default function LudoBoard()
{
    let [moves , setMove] = useState({Blue: 0, yellow : 0, red : 0,green : 0});
let getblue = () =>{
 setMove({...moves, Blue: moves.Blue +1});
};

let getyellow = () =>{
    setMove({...moves, yellow: moves.yellow +1});
   };

   let getred = () =>{
    setMove({...moves, red: moves.red +1});
   };

   let getgreen = () =>{
    setMove({...moves, green: moves.green +1});
   };

    return <>
      <h2>Game begins</h2>

       <p >Blue move   = {moves.Blue}</p>
       <button style={{background : "blue"}} onClick={getblue}>+1</button> 
       <p>yellow move = {moves.yellow}</p>
       <button style={{background : "yellow"}}  onClick={getyellow}>+1</button> 
       <p>red  move   = {moves.red} </p>
       <button style={{background : "red"}}   onClick={getred}>+1</button> 
       <p>green move  = {moves.green}</p>
       <button style={{background : "green"}}   onClick={getgreen}>+1</button> 
    
    </>


}