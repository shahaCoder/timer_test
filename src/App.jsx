import { useEffect, useState } from "react";
function App() {
  const [hour, setHour] = useState(1)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(10)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1000)
    if(seconds === 0){
      setSeconds(59)
      setMinutes(minutes - 1)
    } else if(minutes === 0){
      setHour(hour - 1)
      setMinutes(59)
    }
    return () => clearInterval(interval) 
  }, [seconds, minutes, hour])
  return (
    <div>
      <h1>{hour < 10 ? '0' + hour : hour}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1>
    </div>
  );
}

export default App;
