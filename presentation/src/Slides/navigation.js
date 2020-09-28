import React from "react";

import {
  Heading,
  OrderedList,
  UnorderedList,
  CodeSpan,
  Appear,
  ListItem,
  Slide,
  FlexBox,
} from "spectacle";

const Navigation = () => (
  <Slide>
    <Heading>Navigations Libraries</Heading>
    <UnorderedList>
      <ListItem>
        <CodeSpan>React Navigation</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>React Native Navigation</CodeSpan>
      </ListItem>
    </UnorderedList>
  </Slide>
);

export default Navigation;
