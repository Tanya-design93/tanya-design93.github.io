function BoxMovieComponent(props) {
  return (
    <div className={props.className}>
        <img src={props.src } alt={props.alt}></img>
        <p className="moviedetails">{props.title}</p>
        <p className="moviedetails">{props.year}</p>
    </div>

  );
}

export default BoxMovieComponent;