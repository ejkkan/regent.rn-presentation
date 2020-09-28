import React from "react";

import {
  Heading,
  OrderedList,
  CodeSpan,
  Appear,
  ListItem,
  Slide,
  FlexBox,
} from "spectacle";
import Notes from "../Notes";

const Content = () => (
  <Slide>
    <Heading>Innehåll</Heading>
    <OrderedList>
      <Appear elementNum={0}>
        <ListItem>Skillnad - Native vs Web</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Grundläggande koncept</ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>Riktigt exempel</ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);

export default Content;
