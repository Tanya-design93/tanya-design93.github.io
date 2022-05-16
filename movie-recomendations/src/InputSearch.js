
import './InputSearchStyle.css';
import * as MovieSearchEngine from './MovieSearchEngine.js';
function InputSearch() {
    return (
        <input id="inputstyle"type="text" name="search" placeholder="Search.."onInput={() => MovieSearchEngine.GetMovieType(document.getElementById("inputstyle").value)}/>
        );
  }
  
  export default InputSearch;