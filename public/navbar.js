function NavBar(){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]       = React.useState('');

  function logOut(){
      logoutBtn.style.visibility="hidden";
      navBtn.style.visibility="hidden";
      navBtn2.style.visibility="hidden";
      navBtn3.style.visibility="hidden";
      navBtn4.style.visibility="hidden";
      window.location.href="#";
      localStorage.clear();
      alert('You Have Successfully Logged Out.\nHave A Wonderful Day!')
  }

  return(

    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" title="Home Page" style={{color:"blanchedalmond"}} href="#"> <img src="favicon.png" alt="" width="30" height="30" className="d-inline-block align-text-top"></img>SVR Trust</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" title="View Nav Bar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" title="Create an Account" style={{color:"blanchedalmond"}} href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Login to your Account" style={{color:"blanchedalmond"}} href="#/login/">Login</a>
          </li>
            
          <li className="nav-item" id="navBtn">
            <a className="nav-link" title="Make a Deposit" style={{color:"blanchedalmond"}} href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item" id="navBtn2">
            <a className="nav-link" title="Make a Withdrawal" style={{color:"blanchedalmond"}} href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item" id="navBtn3">
            <a className="nav-link"  title="See your Balance" style={{color:"blanchedalmond"}} href="#/balance/">Balance</a>
          </li>
          <li className="nav-item" id="navBtn4">
            <a className="nav-link"  title="See all Transactions" style={{color:"blanchedalmond"}} href="#/alldata/">All Data</a>
          </li>      
        </ul> 
      </div>

    <div class="dropdown" id="logoutBtn">
    <button class="navbar-brand dropdown-toggle" style={{color:"blanchedalmond"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" title="User Menu"aria-haspopup="true" aria-expanded="false">
      User Info
    </button>
    
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="userinfo" title="User" value={email}>Name: </a>
    <div class="dropdown-divider"></div>
      <a role="button" class="btn btn-primary" title="Logout" onClick={logOut}>Logout</a>
  </div>
</div>
        
      

    </nav>
    

  );
}