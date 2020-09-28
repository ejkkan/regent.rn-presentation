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
    import { RecoilRoot } from 'recoil';

    function App() {
        return (
            <RecoilRoot>
                <Recipes />
            </RecoilRoot>
        );
    }
    
    import { atom } from 'recoil';

    const recipeStore = atom({
        key: 'recipes', 
        default: ['Banana Split', 'Orange Juice'], 
    });

    function Recipe() {
        const [recipes] = useRecoilState(recipeStore);
        const recipe = recipes[0]

        return <h1>{recipe}</h1>;
    }
`);

const Recoil = () => (
  <Slide transitionEffect="slide">
    <Heading>Recoil</Heading>
    <Stepper
      defaultValue={[
        [0, 1],
        [5, 7],
        [11, 16],
        [18, 23],
      ]}
      values={[
        [0, 1],
        [5, 7],
        [11, 16],
        [18, 23],
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

export default Recoil;
