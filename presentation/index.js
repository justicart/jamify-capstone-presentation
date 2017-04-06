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
import createTheme from "../assets/themes/jamify/";

// Require CSS
require("normalize.css");
require("../assets/themes/jamify/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  markdown: require("../assets/markdown.png"),
  logo: require("../assets/logo-wh.svg"),
  bg: require("../assets/bg.png"),
  demo01: require("../assets/demo/demo-01.jpg"),
  demo02: require("../assets/demo/demo-02.jpg"),
  demo03: require("../assets/demo/demo-03.jpg"),
  demo04: require("../assets/demo/demo-04.jpg"),
  demo05: require("../assets/demo/demo-05.jpg"),
  demo06: require("../assets/demo/demo-06.jpg"),
  demo07: require("../assets/demo/demo-07.jpg"),
  group: require("../assets/group.png")
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.group} />
        </Slide>
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
          <Heading size={4} textColor="primary">
            Find common songs among friends and turn them into the perfect playlist.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Heading size={5} textColor="tertiary" caps>Who is Jamify for?</Heading>
          <Appear>
            <Heading size={6} textColor="secondary">You.</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">You.</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">You.</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">Anyone that listens to music with friends.</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.bg}>
          <Heading size={3} textColor="primary" caps>How does it work?</Heading>
          {/* <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading> */}
          <Appear>
            <Heading size={4} textColor="secondary">You got music.</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">Your friends got music.</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">Listen to what you all love.</Heading>
          </Appear>
          {/* <Text size={6} textColor="secondary">Any questions?</Text> */}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo01} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo02} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo03} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo04} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo05} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo06} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={images.bg}>
          <Image src={images.demo07} width="100%"></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.bg}>
          <Heading size={3} textColor="primary" caps>Jamify's Future</Heading>
          {/* <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading> */}
          <Appear>
            <div>
              <Heading size={5} textColor="secondary">Use other services</Heading>
              <Heading size={6} textColor="secondary">(Pandora, Apple Music)</Heading>
            </div>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">Discovery mode</Heading>
          </Appear>
          {/* <Text size={6} textColor="secondary">Any questions?</Text> */}
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" bgImage={images.bg}>
          <Image src={images.logo} />
          <Heading size={4} textColor="primary">"Any questions?"</Heading>
          <Heading size={7} textColor="tertiary">&#8212; David S. Pumpkins</Heading>
        </Slide>
      </Deck>
    );
  }
}
