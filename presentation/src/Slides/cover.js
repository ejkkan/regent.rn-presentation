import React from "react";

import { Slide, Box, FlexBox, Heading, Image } from "spectacle";

const Cover = () => (
  <Slide>
    <FlexBox height="100%">
      <Heading margin="0px" fontSize="150px">
        <i>✨ </i>
        <Image
          width={600}
          margin="20"
          src={process.env.PUBLIC_URL + "/regentlogo.png"}
        ></Image>
        <i> ✨</i>
      </Heading>
    </FlexBox>
  </Slide>
);

export default Cover;
