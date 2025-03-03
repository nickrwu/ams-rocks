import { BorderColor } from "@material-ui/icons";
import { container, title, mainBlue,darkBlue } from "styles/jss/nextjs-material-kit.js";

const landingPageStyle = (theme) => ({
  container: {
    zIndex: "4",
    width:"100vw",
    color: "#FFFFFF",
    textAlign:"center",
    ...container,
  },
  containerBlack: {
    zIndex: "4",
    color: "#FFFFFF",
    backgroundColor: "#000000",
    ...container,
  },
  containerBlue: {
    zIndex: "4",
    color: "#FFFFFF",
    backgroundColor: mainBlue,
    ...container,
  },
  containerDarkBlue: {
    zIndex: "4",
    color: "#FFFFFF",
    backgroundColor: darkBlue,
    ...container,
  },
  sectionBreak :{
    minHeight: "50px",
    color: "#FFFFFF"
  },
  titleSection : {
    position:"relative",
    [theme.breakpoints.down("xs")]: {

    },
    [theme.breakpoints.down("lg")]: {
      //paddingTop: "10vh",
    },
    [theme.breakpoints.down("md")]: {
      //paddingTop: "10vh",
    },
    [theme.breakpoints.down("xl")]: {
      //paddingTop: "10vh",
    },
  },
  title: {
    ...title,
    width:"100vw",
    font: "Segoe UI !important",
    fontStyle: "normal !important",
    fontSize:"50px",
    fontWeight: "600",
    lineHeight:"54px",
    color: "#FFFFFF",
    //background: "linear-gradient(89.28deg, #FBCED8 31.84%, #EBD7E4 38.83%, #B7F0FE 51.56%, #3ADBE5 66.26%)",
    textDecoration: "none !important",
    textDecorationStyle:"none !important",
    backgroundClip: "text",
    //textFillColor: "transparent",
    "-webkit-background-clip": "text",
    //"-webkit-text-fill-color": "transparent",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center !important"
  },

  title2 : {
    ...title,
    width:"100vw",
    font: "Segoe UI !important",
    fontStyle: "normal !important",
    fontSize:"50px",
    fontWeight: "600",
    lineHeight:"54px",
    color: "#FFFFFF",
    textDecoration: "none !important",
    textDecorationStyle:"none !important",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center !important"
  },
  subtitle: {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "24px",
    font: "Segoe UI",
    letterSpacing: "-0.015em",
    paddingTop: "20px",
    maxWidth: "35vw",
    align: "center",
    display:"inline-block",
    textAlign:"center !important",
    color:"#EDEBE9"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainBlack: {
    background: "#000000",
    position: "relative",
    zIndex: "3",
  },
  mainBlue: {
    background: mainBlue,
    position: "relative",
    zIndex: "3",
  },
  mainDarkBlue: {
    background: darkBlue,
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px 0px 0px",
    //borderRadius: "6px",
    //boxShadow:
    //  "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  callToAction: {
    padding:"22px",
    margin: "2px",
  },
  callToActionPrimary: {
  },
  callToActionSecondary: {
  }
});

export default landingPageStyle;
