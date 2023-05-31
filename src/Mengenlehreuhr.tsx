import React, { useMemo, useState } from "react";
import { StyleSheet, useWindowDimensions,  } from "react-native";
import { Box, Path, Rect, RoundedRect, Shadow, SkiaValue, useImage,  Image} from "@shopify/react-native-skia";
import {
  useComputedValue,
  useLoop,
  BlurMask,
  vec,
  Canvas,
  Circle,
  Fill,
  Group,
  polar2Canvas,
  Easing,
  mix,
} from "@shopify/react-native-skia";

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
const yellowShadow = "#786E50";

const gray = "#CECECE";
const grayShadow = "#000000";

const Seconds = (mengenlehreuhr: Mengenlehreuhr) => {
  return (
    <>
      <Circle
        cx={96.5}
        cy={34}
        r={29}
        color={gray}
        style="stroke"
        strokeWidth={6}
      >
        <Shadow dx={2} dy={2} blur={5} color={grayShadow} />
      </Circle>
      <Circle
        cx={96.5}
        cy={34}
        r={27}
        color={mengenlehreuhr.second ? yellowOn : yellowOff}
      >
        <Shadow dx={2} dy={2} blur={5} color={yellowShadow} inner />
      </Circle>
    </>
  );
};

/**
 * Get path data for a rounded rectangle. Allows for different radius on each corner.
 * @param  {Number} w   Width of rounded rectangle
 * @param  {Number} h   Height of rounded rectangle
 * @param  {Number} tlr Top left corner radius
 * @param  {Number} trr Top right corner radius
 * @param  {Number} brr Bottom right corner radius
 * @param  {Number} blr Bottom left corner radius
 * @return {String}     Rounded rectangle SVG path data
 */
var roundedRectData = function (w, h, tlr, trr, brr, blr) {
  return 'M 0 ' + tlr
    + ' A ' + tlr + ' ' + tlr + ' 0 0 1 ' + tlr + ' 0'
    + ' L ' + (w - trr) + ' 0'
    + ' A ' + trr + ' ' + trr + ' 0 0 1 ' + w + ' ' + trr
    + ' L ' + w + ' ' + (h - brr)
    + ' A ' + brr + ' ' + brr + ' 0 0 1 ' + (w - brr) + ' ' + h
    + ' L ' + blr + ' ' + h
    + ' A ' + blr + ' ' + blr + ' 0 0 1 0 ' + (h - blr)
    + ' Z';
};

const RowFiveHourPeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 75;
  return(
    <>
      <Rect x={9} y={y} width={43} height={32} color={mengenlehreuhr.hour05 ? redOn : redOff} />
      <Rect x={52} y={y} width={43} height={32} color={mengenlehreuhr.hour10 ? redOn : redOff} />
      <Rect x={95} y={y} width={43} height={32} color={mengenlehreuhr.hour15 ? redOn : redOff} />
      <Rect x={138} y={y} width={43} height={32} color={mengenlehreuhr.hour20 ? redOn : redOff} />

       <Group transform={[{ translateX: 7 }, { translateY: y }]} color={gray} style="stroke" strokeWidth={6} strokeJoin="round" antiAlias>
        <Path path={`${roundedRectData(175, 33, 7, 7, 7, 7)} 
        M 45 ${0} L 45 ${0+32} Z 
        M 88 ${0} L 88 ${0+32} Z 
        M 132 ${0} L 132 ${0+32} Z`}></Path>
        <Shadow dx={2} dy={2} blur={5} color={grayShadow} />
      </Group> 
    </>
  );
}

const RowOneHourPeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 124.5;
  return(
    <>
       <Rect x={9} y={y} width={43} height={32} color={mengenlehreuhr.hour01 ? redOn : redOff} />
      <Rect x={52} y={y} width={43} height={32} color={mengenlehreuhr.hour02 ? redOn : redOff} />
      <Rect x={95} y={y} width={43} height={32} color={mengenlehreuhr.hour03 ? redOn : redOff} />
      <Rect x={138} y={y} width={43} height={32} color={mengenlehreuhr.hour04 ? redOn : redOff} />

      <Group transform={[{ translateX: 7 }, { translateY: y }]} color={gray} style="stroke" strokeWidth={6} strokeJoin="round" antiAlias>
        <Path path={`${roundedRectData(175, 33, 7, 7, 7, 7)} 
        M 45 ${0} L 45 ${0+32} Z 
        M 88 ${0} L 88 ${0+32} Z 
        M 132 ${0} L 132 ${0+32} Z`}></Path>
        <Shadow dx={2} dy={2} blur={5} color={grayShadow} />
      </Group>
    </>
  );
}

const RowFiveMinutesPeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 174;
  return(
    <>
      <Rect x={7} y={y} width={13} height={32} color={mengenlehreuhr.minute05 ? yellowOn : yellowOff} />
      <Rect x={7+16} y={y} width={13} height={32} color={mengenlehreuhr.minute10 ? yellowOn : yellowOff} />
      <Rect x={7+16*2} y={y} width={13} height={32} color={mengenlehreuhr.minute15 ? yellowOn : yellowOff} />
      <Rect x={7+16*3} y={y} width={13} height={32} color={mengenlehreuhr.minute20 ? yellowOn : yellowOff} />
      <Rect x={7+16*4} y={y} width={13} height={32} color={mengenlehreuhr.minute25 ? yellowOn : yellowOff} />
      <Rect x={7+16*5} y={y} width={13} height={32} color={mengenlehreuhr.minute30 ? yellowOn : yellowOff} />
      <Rect x={7+16*6} y={y} width={13} height={32} color={mengenlehreuhr.minute35 ? yellowOn : yellowOff} />
      <Rect x={7+16*7} y={y} width={13} height={32} color={mengenlehreuhr.minute40 ? yellowOn : yellowOff} />
      <Rect x={7+16*8} y={y} width={13} height={32} color={mengenlehreuhr.minute45 ? yellowOn : yellowOff} />
      <Rect x={7+16*9} y={y} width={13} height={32} color={mengenlehreuhr.minute50 ? yellowOn : yellowOff} />
      <Rect x={7+16*10} y={y} width={13} height={32} color={mengenlehreuhr.minute55 ? yellowOn : yellowOff} />

      <Group transform={[{ translateX: 7 }, { translateY: y }]} color={gray} style="stroke" strokeWidth={6} strokeJoin="round" antiAlias>
        <Path path={`${roundedRectData(175, 33, 7, 7, 7, 7)} 
        M ${16} ${0} L ${16} ${0+32} Z
        M ${16*2} ${0} L ${16*2} ${0+32} Z
        M ${16*3} ${0} L ${16*3} ${0+32} Z 
        M ${16*4} ${0} L ${16*4} ${0+32} Z 
        M ${16*5} ${0} L ${16*5} ${0+32} Z 
        M ${16*6} ${0} L ${16*6} ${0+32} Z 
        M ${16*7} ${0} L ${16*7} ${0+32} Z 
        M ${16*8} ${0} L ${16*8} ${0+32} Z 
        M ${16*9} ${0} L ${16*9} ${0+32} Z 
        M ${16*10} ${0} L ${16*10} ${0+32} Z`}></Path>
        <Shadow dx={2} dy={2} blur={5} color={grayShadow} />
      </Group>
    </>
  );
}

const RowOneMinutePeriod = (mengenlehreuhr: Mengenlehreuhr) => {
  const y = 223;
  return(
    <>
       <Rect x={9} y={y} width={43} height={32} color={mengenlehreuhr.minute01 ? yellowOn : yellowOff} />
      <Rect x={52} y={y} width={43} height={32} color={mengenlehreuhr.minute02 ? yellowOn : yellowOff} />
      <Rect x={95} y={y} width={43} height={32} color={mengenlehreuhr.minute03 ? yellowOn : yellowOff} />
      <Rect x={138} y={y} width={43} height={32} color={mengenlehreuhr.minute04 ? yellowOn : yellowOff} />

      <Group transform={[{ translateX: 7 }, { translateY: y }]} color={gray} style="stroke" strokeWidth={6} strokeJoin="round" antiAlias>
        <Path path={`${roundedRectData(175, 33, 7, 7, 7, 7)} 
        M 45 ${0} L 45 ${0+32} Z 
        M 88 ${0} L 88 ${0+32} Z 
        M 132 ${0} L 132 ${0+32} Z`}></Path>
        <Shadow dx={2} dy={2} blur={5} color={grayShadow} />
      </Group>
    </>
  );
}

const Breathe = () => {
  const time = new Date();
  const [mengenlehreuhr, setMengenlehreuhr] = useState<Mengenlehreuhr>(
    encoder(time)
  );

  const updateMengenlehreuhr = () => {
    const time = new Date();

    setMengenlehreuhr(encoder(time));
  };

  setInterval(updateMengenlehreuhr, 1000);

  const image=null; //useImage(require("../assets/images/background.png"));
  console.log(image);

  return (
    <>
    <Canvas style={styles.container} debug>
    {image && <Image image={image}  fit="contain" x={0} y={0} width={190} height={265}/>}
      <Seconds {...mengenlehreuhr} />
      <RowFiveHourPeriod {...mengenlehreuhr}/>
      <RowOneHourPeriod {...mengenlehreuhr}/>
      <RowFiveMinutesPeriod {...mengenlehreuhr}/>
      <RowOneMinutePeriod {...mengenlehreuhr}/>
    </Canvas>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    height: 265,
    width: 190,
  },
});

export default Breathe;
