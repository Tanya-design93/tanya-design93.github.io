import React from 'react';
import ReactDOM from 'react-dom';
import PlantSite from './images/pngcellpic.png';
import WeatherApp from './images/WeatherAppPhone.png';
import FlashCards from './images/Phoneproject.png';
import Pomodoro from './images/PomodoroPhone.png';
// import './ProjectTemplate.css';
import './ResumeButtonStyle.css';

  
  class ProjectDescriptions extends React.Component {
    constructor(props) {
      super(props);
  
      // This binding is necessary to make `this` work in the callback
     this.clickToProject = this.clickToProject.bind(this);
     this.clickToSourceCode = this.clickToSourceCode.bind(this);
    }
  
    clickToProject() {
        window.location.href = this.props.projectUrl;
      
    }
    clickToSourceCode() {
        window.location.href = this.props.sourceCodeUrl;
      
    }
  
    render() {
      return (
       <div>
           <div class="col-12 pt-5" >
                <img id={this.props.projectName} class="projectImage img-fluid" src={this.props.projectPhoto} alt="queen" />
           </div>
           <div class="col-12 pb-3" >
               <p>{this.props.descriptionText}</p>
               <a href={this.props.projectUrl}>{this.props.projectName}</a>
               <p>{this.props.languages}</p>
               <p>{this.props.descriptionProject}</p>
               <button class="projectButtonsStyle projectButton" onClick={this.clickToProject}>
                    See Live
                </button>
                <button class="projectButtonsStyle projectButton" onClick={this.clickToSourceCode}>
                    Source Code
                </button>
           
           </div>  
       </div>  

      );
    }
  }
  
  ReactDOM.render(
    <React.StrictMode>
    <ProjectDescriptions projectPhoto={Pomodoro} projectName="PomodoroTimer" projectUrl = "https://tanya-design93.github.io/Timer/index.html" languages="JS/CSS/HTML/BOOTSTRAP" descriptionProject="This is one of the first projects that I made. Main idea was to practice JS timing."   sourceCodeUrl="https://github.com/Tanya-design93/tanya-design93.github.io/tree/main/Timer"/>
    </React.StrictMode>,
    document.getElementById('projectOne')
  );

  ReactDOM.render (
    <React.StrictMode>
      <ProjectDescriptions projectPhoto={FlashCards}  projectName="Flashcards"projectUrl = "https://tanya-design93.github.io/Flashcards/Homepage.html" languages="JS/CSS/HTML/BOOTSTRAP" descriptionProject="Flashcard idea is creating new cards with any info. For this was used.."   sourceCodeUrl="https://github.com/Tanya-design93/tanya-design93.github.io/tree/main/Flashcards" />
    </React.StrictMode>,
    document.getElementById('projectTwo')
  );
  
  ReactDOM.render (
    <React.StrictMode>
      <ProjectDescriptions projectPhoto={WeatherApp}  projectName="Weather App"projectUrl = "https://tanya-design93.github.io/Weather%20App/index.html" languages="JS/CSS/HTML/BOOTSTRAP" descriptionProject="It is my first API project"   sourceCodeUrl="https://github.com/Tanya-design93/tanya-design93.github.io/tree/main/Weather%20App" />
    </React.StrictMode>,
    document.getElementById('projectThree')
  );
  
  ReactDOM.render (
    <React.StrictMode>
      <ProjectDescriptions projectPhoto={PlantSite}  projectName="Plant site" projectUrl = "https://tanya-design93.github.io/PlantApp/" languages="JS/CSS/HTML/BOOTSTRAP" descriptionProject="It is plant app with information how to take care of different types of plants"   sourceCodeUrl="https://github.com/Tanya-design93/tanya-design93.github.io/tree/main/PlantApp"/>
    </React.StrictMode>,
    document.getElementById('projectFour')
  );