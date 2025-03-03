import React from "react";
import dynamic from 'next/dynamic';
import { GetStaticPropsContext } from 'next';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Use framer-motion
import { motion } from "framer-motion";
// Use the react-intersection-observer to trigger animations when stuff is in view
import { useInView } from "react-intersection-observer";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinksLeft from "components/Header/HeaderLinks-left.js";
import HeaderLinksRight from "components/Header/HeaderLinks-right.js";
import Parallax from "components/Parallax/Parallax.js";
import Features from "components/Features/Features.js";

// Need to dynamic load the Shaka Player since it imports a standard Javascript library
// See the documentation here - https://github.com/amit08255/shaka-player-react-with-ui-config/tree/master/nextjs-shaka-player
const ShakaPlayer = dynamic(import("components/ShakaPlayer/ShakaPlayerClass.js"), { ssr: false });

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import FreeSection from "pages-sections/LandingPage-Sections/FreeSection.js";
import IndustrySection from "pages-sections/LandingPage-Sections/SectionIndustry.js";
import GetStartedSection from "pages-sections/LandingPage-Sections/SectionGetStarted.js";
import SectionArea from "../../components/SectionArea/SectionArea";
import SectionCustomers from "pages-sections/LandingPage-Sections/SectionCustomers.js";
// import SectionBlog from "pages-sections/LandingPage-Sections/SectionBlog.js";

// Translations
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

const dashboardRoutes = [];

const STREAMS = [
  {
    name: 'Azure Media Services Promo',
    src:
      'https://amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest(format=m3u8-cmaf)'
  }
];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgIndustry
  );
  const router = useRouter();

  const { ...rest } = props;

  const ref = React.useRef();
  const [src, setSrc] = React.useState(STREAMS[0].src);

  const { playerRef, inView, entry } = useInView({ threshold: 0 });

  React.useEffect(() => {
    //window.getShakaInst = () => playerRef.current;
    console.log("use effect hook, InView = ", inView);
  }, [inView]);

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={i18next.t('landing.title')}
        leftLinks={<HeaderLinksLeft />}
        rightLinks={<HeaderLinksRight />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax responsive image="/img/Mainheader_image-2.png">
        <GridContainer className={classes.container}>
          <GridItem>
            <div className={classes.spacer}></div>
            <div className={classes.titleSection}>
              <span className={classes.title}>{i18next.t('landing.tagline1')}</span><br />
              <span className={classes.title2}>{i18next.t('landing.tagline2')} </span><br />
              <span className={classes.subtitle}>{i18next.t('landing.valueProp')}</span>
            </div>
            <br />


            <Button
              color="danger"
              size="lg"
              href="https://azure.microsoft.com/free/"
              target="_blank"
              rel="noreferrer"
            >
              {i18next.t('landing.ctaButton')}
            </Button>
            <Button
              color="transparent"
              border="1px solid"
              size="lg"
              href="https://docs.microsoft.com/azure/media-services/"
              target="_blank"
              rel="noreferrer"
            >
              {i18next.t('landing.readDocs')}
            </Button>

            {/*<PrimaryButton
              target="_blank"
              className={[classes.callToAction, classes.callToActionPrimary]}
              href="https://azure.microsoft.com/free/">
              {i18next.t('landing.ctaButton')}
            </PrimaryButton>
            <DefaultButton
              target="_blank"
              className={[classes.callToAction, classes.callToActionSecondary]}
              href="https://docs.microsoft.com/azure/media-services/"
             >
              {i18next.t('landing.readDocs')}
            </DefaultButton>
            */}
          </GridItem>
        </GridContainer>

      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
    
         {/*  <ShakaPlayer src={src} /> */}
      
          <IndustrySection />
          <div className={classes.sectionBreak}></div>
  
          <SectionArea
            align="right"
            title={i18next.t('landing.section.1.title')}
            description={i18next.t('landing.section.1.description')}
            imgSrc="/img/Landing/Solution.png"
            imgAlt={i18next.t('landing.section.1.imageAlt')}
            actionText={i18next.t('landing.section.1.callToAction')}
            actionLink="https://docs.microsoft.com/azure/media-services/latest/live-event-obs-quickstart"
          />
          <SectionArea
            align="left"
            title={i18next.t('landing.section.2.title')}
            description={i18next.t('landing.section.2.description')}
            imgSrc="/img/Landing/Accessibility.png"
            imgAlt={i18next.t('landing.section.2.imageAlt')}
            actionText={i18next.t('landing.section.2.callToAction')}
            actionLink="https://docs.microsoft.com/azure/media-services/latest/live-event-live-transcription-how-to"
          />
          <SectionArea
            align="right"
            title={i18next.t('landing.section.3.title')}
            description={i18next.t('landing.section.3.description')}
            imgSrc="/img/Landing/Security.png"
            imgAlt={i18next.t('landing.section.3.imageAlt')}
            actionText={i18next.t('landing.section.3.callToAction')}
            actionLink="#"
          />
          <SectionArea
            align="left"
            title={i18next.t('landing.section.4.title')}
            description={i18next.t('landing.section.4.description')}
            imgSrc="/img/Landing/Lowlatency.png"
            imgAlt={i18next.t('landing.section.4.imageAlt')}
            actionText={i18next.t('landing.section.4.callToAction')}
            actionLink="/live"
          />
          <div className={classes.sectionBreak}></div>

        </div>
      </div>
      <GetStartedSection />
      <Features />
      <SectionCustomers />
      <div className={classNames(classes.mainBlue, classes.mainRaised)}>
        <div className={classes.containerBlue}>
          <FreeSection />
        </div>
      </div>

      <Footer whiteFont logoColor="gray" />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}