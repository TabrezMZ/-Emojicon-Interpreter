import "./App.css";
import React from "react"; 
import { useState } from "react";

const emojisWallet = {
  "😇": "doing good deeds",
  "😊": "Smiling",
  "✨": "flashes of sparkles",  
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "⌚": "Watch",
  "❤️": "love",
  "😑": "annoyance",
  "🍒": "Cherries"
}

const emojiArr = Object.keys(emojisWallet);




export default function App() {
  const [emoji , setEmoji] = useState("")
  const [meaning, setMeaning] = useState("Meaning is appear here ...")


  function changeEvent(event){
    const inputEmoji = event.target.value
    setEmoji(inputEmoji)

    if(inputEmoji in emojisWallet){
      setMeaning(emojisWallet[inputEmoji])
    }
    else{
      setMeaning("this value is not available in our data")
    }
  }

  function tapDisplay(inputEmoji){
    setMeaning(emojisWallet[inputEmoji])
  }

  return (
    <div className="App">
      <h1>Emojis Translator</h1>
      <input value={emoji}
        placeholder={"Hey , Search your emoji"}
        style={{
          padding: "1em",
          width: "90%"
        }} onChange={()=>changeEvent(event)} />
      {" "}
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>

    {
      emojiArr.map((emoji)=>(
        <span key={emoji} style={{  fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }} onClick={()=>tapDisplay(emoji)} >{" "}{emoji}
          </span>
      ))
    }
      
    </div>
  );
}
