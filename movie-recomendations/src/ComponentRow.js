
import './FirstContainerStyle.css';
import BoxMovieComponent from './BoxMovieComponent'

function ComponentRow(props) {
  var movieRowData = props.MovieData;
  return (

<div className="flex-container MovieRow">
    <BoxMovieComponent className="MovieTile"src={`https://image.tmdb.org/t/p/w500//${movieRowData[0].poster_path}`}  alt="test" title={`${movieRowData[0].original_title}`}   year={`${movieRowData[0].release_date}`}/>
    <BoxMovieComponent className="MovieTile" src={`https://image.tmdb.org/t/p/w500//${movieRowData[1].poster_path}`} alt="test" title={`${movieRowData[1].original_title}`}   year={`${movieRowData[1].release_date}`}/>
    <BoxMovieComponent className="MovieTile" src={`https://image.tmdb.org/t/p/w500//${movieRowData[2].poster_path}`} alt="test" title={`${movieRowData[2].original_title}`}   year={`${movieRowData[2].release_date}`}/>
    <BoxMovieComponent className="MovieTile" src={`https://image.tmdb.org/t/p/w500//${movieRowData[3].poster_path}`} alt="test" title={`${movieRowData[3].original_title}`}   year={`${movieRowData[3].release_date}`}/> 

 </div>


  );
}

export default ComponentRow;