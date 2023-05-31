import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import { AsyncSkia } from "./src/AsyncSkia";

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
      <AsyncSkia
        getComponent={() => import("./src/Mengenlehreuhr")}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 265,
    width: 190,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
