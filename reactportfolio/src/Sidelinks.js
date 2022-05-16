import './socialIcons.css';
import './IconsForContactSection.css';
function Sidelinks (props) {
    return (
         <a href={props.url} class={props.anchorClass}><img src={props.image} class={props.socialMedia} aria-hidden="true"/></a>
    );
  }
  
  export default Sidelinks;
  