import './PaperPlaneStyle.css';
function PaperPlane(props) {
    return (
        <img id="PaperPlane" class="PaperPlane box bounce-1" src={props.image} alt="pattern"/>
      

    );
  }
  
  export default PaperPlane;
  