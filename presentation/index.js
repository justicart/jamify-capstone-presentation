// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  markdown: require("../assets/markdown.png"),
  logo: require("../assets/logo-wh.svg"),
  bg: require("../assets/bg.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="secondary" bgImage={images.bg}>
          <Image src={images.logo} />
          {/* <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Welcome to Jamify
          </Heading> */}
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Music everyone will love
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.bg}>
          <Heading size={3} textColor="primary" caps>What about it?</Heading>
          {/* <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading> */}
          <Appear>
            <Heading size={4} textColor="secondary">You got music.</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">Your friend got music.</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">Listen to what you both love.</Heading>
          </Appear>
          {/* <Text size={6} textColor="secondary">Any questions?</Text> */}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Heading size={6} textColor="secondary" caps>How's it work?</Heading>
          <List>
            <Appear>
              <ListItem>Create a new Jamify Playlist</ListItem>
            </Appear>
            <Appear>
              <ListItem>Choose a Spotify playlist</ListItem>
            </Appear>
            <Appear>
              <ListItem>Invite your friend to contribute</ListItem>
            </Appear>
            <Appear>
              <ListItem><em>Jam</em></ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.bg}>
          <Image src={images.logo} />
          <Heading size={4} textColor="primary">"Any questions?"</Heading>
          <Heading size={7} textColor="tertiary">&#8212; David S. Pumpkins</Heading>
        </Slide>
      </Deck>
    );
  }
}
