
import ComponentRow from './ComponentRow';
import './FirstContainerStyle.css';

function FirstContainerMovies(props) {
    var movieRowData = props.MovieData;
    return (
 <div className="flex-container">
    <ComponentRow MovieData={[movieRowData[0],movieRowData[1],movieRowData[2],movieRowData[3]]}/>
     <hr/>
    <ComponentRow MovieData={[movieRowData[4],movieRowData[5],movieRowData[6],movieRowData[7]]}/> 
    <hr/>
    <ComponentRow MovieData={[movieRowData[8],movieRowData[9],movieRowData[10],movieRowData[11]]}/> 
    <hr/>
    <ComponentRow MovieData={[movieRowData[12],movieRowData[13],movieRowData[14],movieRowData[15]]}/> 
    <hr/>
    <ComponentRow MovieData={[movieRowData[16],movieRowData[17],movieRowData[18],movieRowData[19]]}/> 
  
 </div>

        );
  }
  
  export default FirstContainerMovies;