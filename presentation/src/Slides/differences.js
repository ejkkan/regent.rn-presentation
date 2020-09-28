import React from "react";

import {
  Heading,
  OrderedList,
  CodeSpan,
  Appear,
  ListItem,
  Slide,
  FlexBox,
  Markdown,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Text,
} from "spectacle";
import Notes from "../Notes";

const Differences = () => (
  <Slide>
    {Notes.Differences()}
    <Heading fontSize={60}>Bakgrund</Heading>

    <OrderedList>
      <FlexBox paddingBottom={100}>
        <CodeSpan>
          <Appear elementNum={0}>React - en snabbare DOM</Appear>
        </CodeSpan>
      </FlexBox>
      <FlexBox paddingBottom={100}>
        <CodeSpan>
          <Appear elementNum={1}>
            "The biggest mistake we made as a company was betting too much on
            HTML as opposed to native" - Mackan
          </Appear>
        </CodeSpan>
      </FlexBox>
    </OrderedList>
  </Slide>
);

export default Differences;
