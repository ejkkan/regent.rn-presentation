import React from "react";

import {
  Heading,
  Slide,
  Stepper,
  Box,
  CodePane,
  indentNormalizer,
} from "spectacle";

const jsCodeBlock = indentNormalizer(`
class Title extends React.Component {
  render() {
    return (
      <View style={styles.alignCenter}>  
        <Text style={styles.h1}>{this.props.text}</Text>
      </View>
    )
  }
}

const Title = ({text}) => {
  return (
    <View style={styles.alignCenter}>
      <Text style={styles.h1}>{text}</Text>
    </View>
  )
}
`);

const BasicComponents = () => (
  <Slide transitionEffect="slide">
    <Heading>React Components</Heading>
    <Stepper
      defaultValue={[
        [1, 8],
        [11, 17],
      ]}
      values={[
        [1, 8],
        [11, 17],
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
    {/* <Text>- No major difference in the end </Text>
    <Text>- The two types work with and without eachother</Text> */}
  </Slide>
);

export default BasicComponents;
