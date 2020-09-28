import React from "react";

import {
  Heading,
  Slide,
  Stepper,
  Box,
  CodePane,
  indentNormalizer,
  Markdown,
} from "spectacle";
import Notes from "../Notes";

const jsCodeBlock = indentNormalizer(`
    import { useState } from 'react';

    function App() 
    const [recipes, ,] = useState(['Banana Split', 'Orange Juice']);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
    }
`);

const BasicComponents = () => (
  <Slide transitionEffect="slide">
    <Heading>Redux</Heading>
    <Stepper
      defaultValue={[
        [0, 1],
        [7, 9],
        [3, 4],
        [5, 11],
        [13, 13],
        [15, 19],
        [21, 24],
      ]}
      values={[
        [0, 1],
        [7, 9],
        [3, 4],
        [5, 10],
        [13, 13],
        [15, 19],
        [21, 24],
      ]}
    >
      {(value, step) => (
        <Box position="relative">
          <CodePane
            fontSize={25}
            highlightStart={value[0]}
            highlightEnd={value[1]}
            language="javascript"
            autoFillHeight={false}
          >
            {jsCodeBlock}
          </CodePane>
        </Box>
      )}
    </Stepper>
  </Slide>
);

export default BasicComponents;
