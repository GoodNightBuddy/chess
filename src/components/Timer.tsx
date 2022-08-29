import { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Color";
import { Player } from "../models/Player";

interface ITimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}


const Timer: FC<ITimerProps> = ({ currentPlayer, restart }) => {

  const [blackTime, setBlackTime] = useState(600);
  const [whiteTime, setWhiteTime] = useState(600);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function startTimer() {
      if (timer.current) {
        clearInterval(timer.current)
      }

      if (currentPlayer) {
        const decrementCallback = currentPlayer.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime;
        timer.current = setInterval(decrementCallback, 1000)
      } else {
        console.log('Oops, something went wrong... no current player');
      }
    }

    startTimer()
  }, [currentPlayer]);


  function decrementWhiteTime() {
    setWhiteTime(prev => prev - 1);
  };

  function decrementBlackTime() {
    setBlackTime(prev => prev - 1);
  };

  function restartHandler() {
    setWhiteTime(600);
    setBlackTime(600);
    restart();
  };

  if (blackTime <= 0) {
    alert('Black lose');
    restartHandler();
  };

  if (whiteTime <= 0) {
    alert('White lose');
    restartHandler();
  };

  return (
    <div className="d-flex flex-row justify-content-between align-items-center w-100 mb-2 row"style={{maxWidth: '870px'}}>
      <div className="col-4">
        <h2>Black - {blackTime}</h2>
      </div>

      <div className="col-4 text-center">
        <button type="button" className="btn btn-warning" onClick={restartHandler}>Restart game</button>
      </div>

      <div className="col-4 text-end">
        <h2>White- {whiteTime}</h2>
      </div>
    </div>

  );
};

export default Timer;