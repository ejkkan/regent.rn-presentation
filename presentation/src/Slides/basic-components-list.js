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

const BasicComponentsList = () => (
  <Slide>
    <Heading>Vanliga komponenter</Heading>
    <UnorderedList>
      <ListItem>
        <CodeSpan>View</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>Text</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>ScrollView</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>FlatList</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>Image</CodeSpan>
      </ListItem>
    </UnorderedList>
  </Slide>
);

export default BasicComponentsList;
