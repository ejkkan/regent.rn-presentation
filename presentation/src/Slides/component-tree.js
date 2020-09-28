import React from "react";

import { Slide, Stepper, FlexBox, Grid, Heading, Text } from "spectacle";

const Comp = ({ connected, text }) => {
  switch (connected) {
    case "prop":
      return (
        <FlexBox
          size={100}
          alignItems="center"
          justifyContent="center"
          borderRadius={50}
          border="2px solid green"
          alignContent="center"
        >
          <FlexBox size={90} borderRadius={50} border="2px solid white">
            {text && <Text fontSize={15}>{text}</Text>}
          </FlexBox>
        </FlexBox>
      );

    case "redux":
      return (
        <FlexBox
          size={100}
          alignItems="center"
          justifyContent="center"
          borderRadius={50}
          border="2px solid red"
          alignContent="center"
        >
          <FlexBox size={90} borderRadius={50} border="2px solid green">
            <FlexBox size={80} borderRadius={50} border="2px solid white">
              {text && <Text fontSize={15}>{text}</Text>}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      );

    default:
      return (
        <FlexBox size={100} borderRadius={50} border="2px solid white">
          {text && <Text fontSize={15}>{text}</Text>}
        </FlexBox>
      );
  }
};

const Gridder = ({ row1, row2, row3 }) => (
  <>
    <Grid
      gridTemplateColumns="1fr"
      alignItems="center"
      justifyContent="center"
      gridRowGap={1}
      flexWrap="wrap"
    >
      <FlexBox paddingTop={0} key={`regent-top-comp1`} flex={1}>
        <Comp
          connected={row1[0] && row1[0].connected}
          text={row1[0] && row1[0].text}
        />
      </FlexBox>
    </Grid>
    <Grid
      gridTemplateColumns="1fr 1fr"
      alignItems="center"
      justifyContent="center"
      gridRowGap={1}
      flexWrap="wrap"
    >
      {Array(2)
        .fill("")
        .map((_, index) => (
          <FlexBox paddingTop={0} key={`regent-comp2-${index}`} flex={1}>
            <Comp
              connected={row2[index] && row2[index].connected}
              text={row2[index] && row2[index].text}
            />
          </FlexBox>
        ))}
    </Grid>
    <Grid
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {Array(4)
        .fill("")
        .map((_, index) => (
          <FlexBox paddingTop={0} key={`regent-comp3-${index}`} flex={1}>
            <Comp
              connected={row3[index] && row3[index].connected}
              text={row3[index] && row3[index].text}
            />
          </FlexBox>
        ))}
    </Grid>
  </>
);

const getCompConf = (text, connected) => ({ text, connected });

const ComponentTree = () => (
  <Slide>
    <Heading>Component Tree</Heading>
    <Stepper
      defaultValue={[
        [
          [getCompConf("app", "")],
          [getCompConf("container", "")],
          [getCompConf("text", "")],
        ],
        [
          [getCompConf("app", "prop")],
          [getCompConf("container", "")],
          [getCompConf("text", "")],
        ],
        [
          [getCompConf("app", "")],
          [getCompConf("container", "")],
          [getCompConf("text", "")],
        ],
      ]}
      values={[
        [
          [getCompConf("App", "prop")],
          [getCompConf("Recipes", "")],
          [getCompConf("Recipe", "")],
        ],
        [
          [getCompConf("App", "prop")],
          [getCompConf("Recipes", "prop")],
          [getCompConf("Recipe", "")],
        ],
        [
          [getCompConf("App", "prop")],
          [getCompConf("Recipes", "prop")],
          [getCompConf("Recipe", "prop")],
        ],
        [
          [getCompConf("App", "prop")],
          [getCompConf("Recipes", "prop"), getCompConf("Account", "prop")],
          [getCompConf("Recipe", "prop")],
        ],
        [
          [getCompConf("App", "prop")],
          [getCompConf("Recipes", "prop"), getCompConf("Account", "prop")],
          [
            getCompConf("Recipe", "prop"),
            null,
            null,
            getCompConf("User name", "prop"),
          ],
        ],
        [
          [getCompConf("App", "redux")],
          [getCompConf("Recipes", "prop"), getCompConf("Account", "prop")],
          [
            getCompConf("Recipe", "redux"),
            null,
            null,
            getCompConf("User name", "redux"),
          ],
        ],
      ]}
    >
      {(value, step) => (
        <>
          <Gridder row1={value[0]} row2={value[1]} row3={value[2]} />
        </>
      )}
    </Stepper>
  </Slide>
);

export default ComponentTree;
