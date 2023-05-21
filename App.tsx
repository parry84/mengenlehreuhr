import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Rect, Line } from "react-native-svg";

type Mengenlehreuhr = {
  second: boolean;
  hour05: boolean;
  hour10: boolean;
  hour15: boolean;
  hour20: boolean;
  hour01: boolean;
  hour02: boolean;
  hour03: boolean;
  hour04: boolean;
  minute05: boolean;
  minute10: boolean;
  minute15: boolean;
  minute20: boolean;
  minute25: boolean;
  minute30: boolean;
  minute35: boolean;
  minute40: boolean;
  minute45: boolean;
  minute50: boolean;
  minute55: boolean;
  minute01: boolean;
  minute02: boolean;
  minute03: boolean;
  minute04: boolean;
};

function encoder(time: Date): Mengenlehreuhr {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  return {
    second: seconds % 2 != 0,
    hour05: hours >= 5,
    hour10: hours >= 10,
    hour15: hours >= 15,
    hour20: hours >= 20,
    hour01: hours % 5 >= 1,
    hour02: hours % 5 >= 2,
    hour03: hours % 5 >= 3,
    hour04: hours % 5 >= 4,
    minute05: minutes >= 5,
    minute10: minutes >= 10,
    minute15: minutes >= 15,
    minute20: minutes >= 20,
    minute25: minutes >= 25,
    minute30: minutes >= 30,
    minute35: minutes >= 35,
    minute40: minutes >= 40,
    minute45: minutes >= 45,
    minute50: minutes >= 50,
    minute55: minutes >= 55,
    minute01: minutes % 5 >= 1,
    minute02: minutes % 5 >= 2,
    minute03: minutes % 5 >= 3,
    minute04: minutes % 5 >= 4,
  };
}

const redOff = "#91626F";
const redOn = "#E7002A";

const yellowOff = "#B8A873";
const yellowOn = "#FFF500";

const gray = "#CECECE";

const shadow = "drop-shadow(3px 4px 2px rgb(0 0 0 / 0.4))";

const Seconds = (mengenlehreuhr: Mengenlehreuhr) => {
  return(
    <>
      <Circle cx="97.5px" cy={33} r={27} fill={mengenlehreuhr.second ? yellowOn : yellowOff} />
      <Circle cx="97.5px" cy={33} r={29} stroke={gray} strokeWidth={5} fillOpacity={0} filter={shadow}/>
    </>
  );
}

const RowFiveHourPeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 75;
  return(
    <>
      <Rect x={7} y={y} width={43} height={32} fill={mengenlehreuhr.hour05 ? redOn : redOff} />
      <Rect x={50} y={y} width={43} height={32} fill={mengenlehreuhr.hour10 ? redOn : redOff} />
      <Rect x={95} y={y} width={43} height={32} fill={mengenlehreuhr.hour15 ? redOn : redOff} />
      <Rect x={142} y={y} width={43} height={32} fill={mengenlehreuhr.hour20 ? redOn : redOff} />

      <Line x1={50} y1={y} x2={50} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      <Line x1={95} y1={y} x2={95} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      <Line x1={140} y1={y} x2={140} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      <Rect x={7} y={y} width={180} height={33} stroke="#CECECE" strokeWidth={5} rx={5} fillOpacity={0} filter={shadow} />
    </>
  );
}

const RowOneHourPeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 125;
  return(
    <>
      <Rect x={7} y={y} width={43} height={32} fill={mengenlehreuhr.hour01 ? redOn : redOff} />
      <Rect x={50} y={y} width={43} height={32} fill={mengenlehreuhr.hour02 ? redOn : redOff} />
      <Rect x={95} y={y} width={43} height={32} fill={mengenlehreuhr.hour03 ? redOn : redOff} />
      <Rect x={142} y={y} width={43} height={32} fill={mengenlehreuhr.hour04 ? redOn : redOff} />

      <Line x1={50} y1={y} x2={50} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow} />
      <Line x1={95} y1={y} x2={95} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow} />
      <Line x1={140} y1={y} x2={140} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow} />
      <Rect x={7} y={y} width={180} height={33} stroke="#CECECE" strokeWidth={5} rx={5} fillOpacity={0} filter={shadow} />
    </>
  );
}

const RowFiveMinutesPeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 175;
  return(
    <>
      <Rect x={7} y={y} width={13} height={32} fill={mengenlehreuhr.minute05 ? yellowOn : yellowOff} />
      <Rect x={7+16.5} y={y} width={13} height={32} fill={mengenlehreuhr.minute10 ? yellowOn : yellowOff} />
      <Rect x={7+16.5*2} y={y} width={13} height={32} fill={mengenlehreuhr.minute15 ? redOn : redOff} />
      <Rect x={7+16.5*3} y={y} width={13} height={32} fill={mengenlehreuhr.minute20 ? yellowOn : yellowOff} />
      <Rect x={7+16.5*4} y={y} width={13} height={32} fill={mengenlehreuhr.minute25 ? yellowOn : yellowOff} />
      <Rect x={7+16.5*5} y={y} width={13} height={32} fill={mengenlehreuhr.minute30 ? redOn : redOff} />
      <Rect x={7+16.5*6} y={y} width={13} height={32} fill={mengenlehreuhr.minute35 ? yellowOn : yellowOff} />
      <Rect x={7+16.5*7} y={y} width={13} height={32} fill={mengenlehreuhr.minute40 ? yellowOn : yellowOff} />
      <Rect x={7+16.5*8} y={y} width={13} height={32} fill={mengenlehreuhr.minute45 ? redOn : redOff} />
      <Rect x={7+16.5*9} y={y} width={13} height={32} fill={mengenlehreuhr.minute50 ? yellowOn : yellowOff} />
      <Rect x={7+16.5*10} y={y} width={13} height={32} fill={mengenlehreuhr.minute55 ? yellowOn : yellowOff} />

      {[...Array(10)].map((_, i) =>
        <Line key={i} x1={(i+1)*16.5+5} y1={y} x2={(i+1)*16.5+5} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      )}
      <Rect x={7} y={y} width={180} height={33} stroke="#CECECE" strokeWidth={5} rx={5} fillOpacity={0} filter={shadow}  />
    </>
  );
}

const RowOneMinutePeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 225;
  return(
    <>
      <Rect x={7} y={y} width={43} height={32} fill={mengenlehreuhr.minute01 ? yellowOn : yellowOff} />
      <Rect x={50} y={y} width={43} height={32} fill={mengenlehreuhr.minute02 ? yellowOn : yellowOff} />
      <Rect x={95} y={y} width={43} height={32} fill={mengenlehreuhr.minute03 ? yellowOn : yellowOff} />
      <Rect x={142} y={y} width={43} height={32} fill={mengenlehreuhr.minute04 ? yellowOn : yellowOff} />

      <Line x1={50} y1={y} x2={50} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      <Line x1={95} y1={y} x2={95} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      <Line x1={140} y1={y} x2={140} y2={y+32} stroke="#CECECE" strokeWidth={5} filter={shadow}  />
      <Rect x={7} y={y} width={180} height={33} stroke="#CECECE" strokeWidth={5} rx={5} fillOpacity={0} filter={shadow}  />
    </>
  );
}

export default function App() {
  const time = new Date();
  const [mengenlehreuhr, setMengenlehreuhr] = useState<Mengenlehreuhr>(
    encoder(time)
  );

  const updateMengenlehreuhr = () => {
    const time = new Date();

    setMengenlehreuhr(encoder(time));
  };

  setInterval(updateMengenlehreuhr, 1000);

  return (
    <View style={styles.container}>
      <Svg
        height="265"
        width="195"
        viewBox="0 0 195 265"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 195,
          height: 265,
          zIndex: -11,
        }}
      >
        <Seconds {...mengenlehreuhr}/>
        <RowFiveHourPeriod {...mengenlehreuhr}/>
        <RowOneHourPeriod {...mengenlehreuhr}/>
        <RowFiveMinutesPeriod {...mengenlehreuhr}/>
        <RowOneMinutePeriod {...mengenlehreuhr}/>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
