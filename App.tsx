import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";

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
      <canvas></canvas>
      <Image
        source={require("./assets/images/background.png")}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 195,
          height: 265,
          zIndex: -11,
        }}
      />
      <Image
        source={require("./assets/images/second.png")}
        style={{
          position: "absolute",
          left: 70,
          top: 10,
          width: 50,
          height: 50,
          display: mengenlehreuhr.second ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-left.png")}
        style={{
          position: "absolute",
          left: 10,
          top: 78,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour05 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-middle.png")}
        style={{
          position: "absolute",
          left: 54,
          top: 78,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour10 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-middle.png")}
        style={{
          position: "absolute",
          left: 98,
          top: 78,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour15 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-right.png")}
        style={{
          position: "absolute",
          left: 142,
          top: 78,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour20 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-left.png")}
        style={{
          position: "absolute",
          left: 10,
          top: 127,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour01 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-middle.png")}
        style={{
          position: "absolute",
          left: 54,
          top: 127,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour02 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-middle.png")}
        style={{
          position: "absolute",
          left: 98,
          top: 127,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour03 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/hour-right.png")}
        style={{
          position: "absolute",
          left: 142,
          top: 127,
          width: 38,
          height: 27,
          display: mengenlehreuhr.hour04 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-left.png")}
        style={{
          position: "absolute",
          left: 10,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute05 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-yellow.png")}
        style={{
          position: "absolute",
          left: 26,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute10 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-red.png")}
        style={{
          position: "absolute",
          left: 42,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute15 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-yellow.png")}
        style={{
          position: "absolute",
          left: 58,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute20 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-yellow.png")}
        style={{
          position: "absolute",
          left: 74,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute25 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-red.png")}
        style={{
          position: "absolute",
          left: 90,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute30 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-yellow.png")}
        style={{
          position: "absolute",
          left: 106,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute35 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-yellow.png")}
        style={{
          position: "absolute",
          left: 122,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute40 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-red.png")}
        style={{
          position: "absolute",
          left: 138,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute45 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-yellow.png")}
        style={{
          position: "absolute",
          left: 154,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute50 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-small-right.png")}
        style={{
          position: "absolute",
          left: 170,
          top: 176,
          width: 10,
          height: 27,
          display: mengenlehreuhr.minute55 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-left.png")}
        style={{
          position: "absolute",
          left: 10,
          top: 225,
          width: 38,
          height: 27,
          display: mengenlehreuhr.minute01 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-middle.png")}
        style={{
          position: "absolute",
          left: 54,
          top: 225,
          width: 38,
          height: 27,
          display: mengenlehreuhr.minute02 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-middle.png")}
        style={{
          position: "absolute",
          left: 98,
          top: 225,
          width: 38,
          height: 27,
          display: mengenlehreuhr.minute03 ? "flex" : "none",
        }}
      />
      <Image
        source={require("./assets/images/minute-right.png")}
        style={{
          position: "absolute",
          left: 142,
          top: 225,
          width: 38,
          height: 27,
          display: mengenlehreuhr.minute04 ? "flex" : "none",
        }}
      />
      <StatusBar style="auto" />
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
