import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Title from './Title';
import Sidelinks from './Sidelinks';
import github from './images/GithubFooter.png';
import linkedin from './images/LinkedinFooter.png';

import ImageOfPlane from './images/PaperPlane.png';
import bgImageAboutMe from './images/Profile.png';
import AboutMePic from './AboutMePicture';

import JavaScriptIcon from './images/JavaScriptIcon.png';
import HtmlIcon from './images/HtmlIcon.png';
import CssIcon from './images/CssIcon.png';
import BootstrapIcon from './images/BootstrapIcon.png';
import ReactIcon from './images/ReactIcon.png';

import imageOfMe from './images/Tani.jpg';
import AboutMeShadow from './AboutMeShadow';
import ParagraphTitleAboutme from './ParagraphTitleAboutme';
import ParagraphTextAboutMe from './ParagraphTextAboutMe';
import ResumeButton from './ResumeButton';
import MySkillsTitle from './MySkillsTitle';
import MyProjects from './MyProjects';
import ProjectDescriptions from './ProjectTemplates';

import IconTemplates from './IconTemplates';
import ContactMeTitle from './ContactMeTitle';
import PaperPlane from './PaperPlane';
import Email from './Email';
import Buttonthemainpage from './Buttonthemainpage';
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('navbar')
);

ReactDOM.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
  document.getElementById('title')
);

ReactDOM.render(
  <React.StrictMode>
    <Sidelinks url="https://www.facebook.com" image={github} socialMedia="fa fa-github " ml-auto anchorClass="socialHyperlink"/>
  </React.StrictMode>,
  document.getElementById('socialMedia')
);

ReactDOM.render(
  <React.StrictMode>
    <Sidelinks url="https://www.facebook.com" image={linkedin} socialMedia="fa fa-linkedin-square " anchorClass="socialHyperlink"/>
  </React.StrictMode>,
  document.getElementById('Linkedin')
);

ReactDOM.render(
  <React.StrictMode>
    <AboutMePic photoOfMe={imageOfMe} />
  </React.StrictMode>,
  document.getElementById('aboutMe')
);

ReactDOM.render(
  <React.StrictMode>
    <AboutMeShadow/>
  </React.StrictMode>,
  document.getElementById('aboutMeShadow')
);

ReactDOM.render(
  <React.StrictMode>
    <ParagraphTitleAboutme/>
  </React.StrictMode>,
  document.getElementById('aboutMeTitle')
);

ReactDOM.render(
  <React.StrictMode>
    <ParagraphTextAboutMe/>
  </React.StrictMode>,
  document.getElementById('aboutMeParagraph')
);

ReactDOM.render(
  <React.StrictMode>
    <ResumeButton/>
  </React.StrictMode>,
  document.getElementById('resumeButton')
);

ReactDOM.render (
  <React.StrictMode>
    <MySkillsTitle/>
  </React.StrictMode>,
  document.getElementById('MySkills')
);

ReactDOM.render (
  <React.StrictMode>
    <MyProjects/>
  </React.StrictMode>,
  document.getElementById('MyProjects')
);

ReactDOM.render(
  <React.StrictMode>
    <IconTemplates iconId="JavaScriptIcon" iconImage={JavaScriptIcon} iconDescription="This is an icon of Javascript." />
  </React.StrictMode>,
  document.getElementById('JSIcon')
);
ReactDOM.render(
  <React.StrictMode>
    <IconTemplates iconId="Html" iconImage={HtmlIcon} iconDescription="This is an icon of Html." />
  </React.StrictMode>,
  document.getElementById('HtmlIcon')
);
ReactDOM.render(
  <React.StrictMode>
    <IconTemplates iconId="Css" iconImage={CssIcon} iconDescription="This is an icon of Css." />
  </React.StrictMode>,
  document.getElementById('CssIcon')
);

ReactDOM.render(
  <React.StrictMode>
    <IconTemplates iconId="Bootstrap" iconImage={BootstrapIcon} iconDescription="This is an icon of Bootstrap." />
  </React.StrictMode>,
  document.getElementById('BootstrapIcon')
);
ReactDOM.render(
  <React.StrictMode>
    <IconTemplates iconId="React.js" iconImage={ReactIcon} iconDescription="This is an icon of React." />
  </React.StrictMode>,
  document.getElementById('ReactIcon')
);

ReactDOM.render (
  <React.StrictMode>
    <ContactMeTitle/>
  </React.StrictMode>,
  document.getElementById('ContactMeTitle')
);



ReactDOM.render(
  <React.StrictMode>
    <PaperPlane iconId="React.js" image={ImageOfPlane} iconDescription="This is an icon of a paper plane." />
  </React.StrictMode>,
  document.getElementById('PaperPlane')
);

ReactDOM.render (
  <React.StrictMode>
    <Email/>
  </React.StrictMode>,
  document.getElementById('Email')
);

ReactDOM.render (
  <React.StrictMode>
    <Buttonthemainpage/>
  </React.StrictMode>,
  document.getElementById('Buttonthemainpage')
);
