import React from "react";

import { Notes } from "spectacle";
const Note = () => (
  <Notes>
    <p>
      DOM (without the browser) On its own, React works by processing one or
      more components to create a representation of a desired view state. This
      representation is an object that is referred to as the “Virtual DOM”. The
      Virtual DOM acts as an interchange format that can be given to a renderer
      to paint something to the screen. Note: DOM in this context is not
      necessarily the same as a DOM in a browser.
    </p>
    <p>
      When using React on the web, the renderer is the DOM and the interchange
      format is converted to HTML elements. React Native differs by converting
      the contents of the Virtual DOM description into native UI elements. This
      offers the advantage of being able to use the native features and
      components available on the platform(s).
    </p>
  </Notes>
);

export default Note;
