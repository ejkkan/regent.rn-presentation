import React from "react";

import { FlexBox, Heading, Slide } from "spectacle";
import Notes from "../Notes";

const Presentation = () => (
  <Slide>
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="h1">
        React Native Presentation
      </Heading>
      <Heading margin="0px 32px" color="primary" fontSize="h4">
        Grundläggande koncept och 'gotchas' för när du startar ditt första React
        Native projekt
      </Heading>
    </FlexBox>
    <Notes.Presentation />
  </Slide>
);

export default Presentation;
