import './navBar.css';

function Navbar() {
  return (
    <nav id="navbarmain" class="navbar navbar-expand-lg navbar-light bg-white ">
       
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        
      <div class="navbar-nav ml-auto">
       
        <a class="nav-item nav-link active navbar-style" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link navbar-style" href="#">About me</a>
        <a class="nav-item nav-link navbar-style" href="#">My Works</a>
        <a class="nav-item nav-link navbar-style" href="#">Contact</a>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
