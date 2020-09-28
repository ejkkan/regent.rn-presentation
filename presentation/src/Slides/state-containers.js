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

const StateContainers = () => (
  <Slide>
    <Heading>State Containers</Heading>
    <OrderedList>
      <Appear elementNum={0}>
        <ListItem>Flux</ListItem>
      </Appear>
      <Appear elementNum={0}>
        <ListItem>Redux</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Context API</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Recoil</ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);

export default StateContainers;
