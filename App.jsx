import React from "react";
import GameButton from "./GameButton"

export default function App() {

  const [gameRunning, setGameRunning] = React.useState(false)

  function handleClick() {
    setGameRunning(!gameRunning)
  }

  return (
    <div className="App">
      <GameButton />
    </div>
  )
}