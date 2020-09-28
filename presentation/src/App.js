import React from "react";

import { Box, Deck, FlexBox, FullScreen, Progress } from "spectacle";

import Slides from "./Slides";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    {Slides.Cover()}
    {Slides.Presentation()}
    {Slides.Differences()}
    {/* {COMPONENT DIFFS} */}
    {Slides.ReactWebCover()}
    {Slides.BasicComponentsWeb()}
    {Slides.ReactNativeCover()}
    {Slides.BasicComponentsNative()}
    {/* {PLATFORM DIFFS} */}
    {Slides.PlatformDifferences()}
    {/* {LIBS} */}
    {Slides.Navigation()}
    {Slides.Icons()}
    {Slides.DesignLibaries()}
    {Slides.Maps()}
    {Slides.Lottie()}

    {Slides.ImplementationDesign()}
  </Deck>
);

export default Presentation;
