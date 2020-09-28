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
    class App extends React.Component {
        const recipes = ['Banana Split', 'Orange Juice']
        render() {
            <Recipes recipes={recipes} />
        }
    }

    class Recipes extends React.Component {
        render() {
            <Recipe recipe={this.props.recipes[0]} />
        }
    }

    class Recipe extends React.Component {
        render() {
            return <h1>Hello, {this.props.recipe}</h1>;
        }
    }
`);
// import { connect } from "react-redux";
// export default connect(
// { recipes },
// null
// )(Recipes)
const BasicComponents = () => (
  <Slide transitionEffect="slide">
    <Heading>Passing Props</Heading>
    <Stepper
      defaultValue={[
        [0, 6],
        [8, 12],
        [14, 18],
      ]}
      values={[
        [0, 6],
        [8, 12],
        [14, 18],
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
