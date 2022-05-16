
import './GenreHeaderStyle.css';
function GenreHeader(props) {
    return (
      <div>
        <h1 id="headertextstyle">{props.genreName}</h1>
        <hr id="linestyle"/>
      </div>
  
    );
  }
  
  export default GenreHeader;