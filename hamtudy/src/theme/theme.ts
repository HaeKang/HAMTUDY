//https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow

const palette = {
    light_blue: "#F9FCFE",
    light_purple: "#F4F5FF",
    blue: "#0052e5",
    purple: "#9297FE",
    light_gray: "#F8F9FA",
    dark_gray: "#343348",
    light_tengerine: "#FFCA90",
    white: "#ffffff",
  }
  
  export const theme = {
    colors: {
      background: palette.white,
      shadow:palette.light_purple,
      primary:palette.blue,
      point_color:palette.light_tengerine,
      gray:palette.light_purple,
      black:palette.dark_gray,
    },
    fontColor:{
      black:palette.dark_gray,
      gray:"#666",
      light_gray:"#999"
    },
    spacing: {
      xs:0.25,//4
      s: 0.5, //8
      m: 1, //16
      l: 1.5, //32
      xl: 2.5, //40
      xxl:20,//200
    },
    fontSize:{
      xs:9,
      s:13,
      m:19,
      l:22,
    },
    buttonSize: {
      large: {
        height: '1.5rem',
        padding:"0.4rem 1.3rem",
        fontSize: "13px"
      },
      medium: {
        height: '1rem',
        padding:"0.4rem 0.9rem",
        fontSize: "13px"
      },
      small: {
        height: '1rem',
        padding:"0.25rem 0.65rem",
        fontSize: "9px"
      }
    },
    borderRadius:4,
    textVariants: {
      header: {
        fontFamily: 'Raleway',
        fontSize: 36,
        fontWeight: 'bold',
      },
      body: {
        fontFamily: 'Merriweather',
        fontSize: 16,
      },
    }
  };
  
  