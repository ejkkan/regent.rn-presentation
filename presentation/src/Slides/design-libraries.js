import React from "react";

import {
  Heading,
  OrderedList,
  UnorderedList,
  CodeSpan,
  Image,
  ListItem,
  Slide,
  FlexBox,
} from "spectacle";

const DesignLibaries = () => (
  <Slide>
    <Heading>Design Libraries</Heading>

    <UnorderedList>
      <ListItem>
        <CodeSpan>NativeBase</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>React Native Elements</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>React Native Material UI</CodeSpan>
      </ListItem>
    </UnorderedList>
  </Slide>
);

export default DesignLibaries;
