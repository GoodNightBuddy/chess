import { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Color";
import { Player } from "../models/Player";

interface ITimerProps {
  currentPlayer: Player;
  restart: () => void;
}


const Timer: FC<ITimerProps> = (currentPlayer, restart) => {

  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function startTimer() {
      if(timer.current) {
        clearInterval(timer.current)
      }
  
      const callback = currentPlayer.currentPlayer.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime;
  
      timer.current = setInterval(callback, 1000)
    }

    startTimer()
  }, [currentPlayer])

  

  function decrementWhiteTime() {
    setWhiteTime(prev => prev -1);
  }

  function decrementBlackTime() {
    setBlackTime(prev => prev -1);
  }

  return (
    <div>
      <div>
        <button type="button" className="btn btn-warning" onClick={restart}>Restart game</button>
      </div>
      <h2>Black - {blackTime}</h2>
      <h2>White- {whiteTime}</h2>
    </div>

  );
};

export default Timer;