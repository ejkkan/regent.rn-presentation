import React from "react";

import {
  Slide,
  Box,
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  CodeSpan,
  Image,
} from "spectacle";

const Lottie = () => (
  <Slide>
    <Heading>LottieFiles</Heading>
    <FlexBox alignContent="center">
      <Image
        height={400}
        width={700}
        src="https://codesandchips.files.wordpress.com/2019/07/lottiefile.gif?w=618&zoom=2"
      ></Image>
    </FlexBox>
  </Slide>
);

export default Lottie;
