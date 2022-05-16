import './IconTemplateStyle.css';
function IconTemplates (props) {
    return (
        <img id={props.iconId} src={props.iconImage} alt={props.iconDescription} class="Icon"/> 
    );
  }
  
  export default IconTemplates;
  