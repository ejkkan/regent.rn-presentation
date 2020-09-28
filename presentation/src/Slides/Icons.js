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

const Navigation = () => (
  <Slide>
    <Heading>Icons</Heading>

    <UnorderedList>
      <ListItem>
        <CodeSpan>
          <Image src={process.env.PUBLIC_URL + "/icons.png"} height={100} />
          <Image src={process.env.PUBLIC_URL + "/vector.png"} height={300} />
        </CodeSpan>
      </ListItem>
    </UnorderedList>
  </Slide>
);

export default Navigation;
