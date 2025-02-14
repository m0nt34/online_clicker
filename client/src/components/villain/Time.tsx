import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(formatAMPM());
  const [currentSeconds, setCurrentSeconds] = useState(new Date().getSeconds());

  function formatAMPM() {
    let hours = date.getHours();
    let minutes;
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDate(new Date());
    }, 1000 - new Date().getMilliseconds());
    setCurrentSeconds(new Date().getSeconds());
    return () => clearTimeout(timeout);
  }, [date.getSeconds()]);
  useEffect(() => {
    setCurrentTime(formatAMPM());
  }, [date.getMinutes()]);
  return (
    <div className="time_cont">
      {currentTime}{" "}
      <span>
        {currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}s
      </span>
    </div>
  );
};

export default Time;
