function NavBar(){
  const ctx = React.useContext(UserContext);
  const [data, setData]       = React.useState('');
  //data = JSON.stringify(window.localStorage.getItem("token"))
  //setData(data.data);
  
   fetch("https://Tennille-WilliamsFullStackBankingApplication.onrender.com/userData", {
    method: "POST",
    mode: "cors",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Orgin": "*",
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      setData(data.data);

    });
  

  function logOut(){
      logoutBtn.style.visibility="hidden";
      navBtn.style.visibility="hidden";
      navBtn2.style.visibility="hidden";
      navBtn3.style.visibility="hidden";
      navBtn4.style.visibility="hidden";
      setData('');
      window.localStorage.clear();
      window.location.href="#";
      alert('You Have Successfully Logged Out.\nHave A Wonderful Day!');
      
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

    <div className="dropdown" id="logoutBtn">
    <button className="navbar-brand dropdown-toggle" style={{color:"blanchedalmond", fontWeight:"unset"}} id="dropdownMenuButton" data-toggle="dropdown" title="User Menu"aria-haspopup="true" aria-expanded="false" > User Info
    </button>
    
    <div className="dropdown-menu"  aria-labelledby="dropdownMenuButton" style={{backgroundColor:"palevioletred", minWidth:"fitContent"}}>
    <p className="dropdown-item" id="userName" style={{color: "purple", marginBottom:"0px", fontWeight:"bold"}}>User Name: {data.name}</p>
    <p className="dropdown-item" id="user" style={{color: "purple", marginBottom:"0px", fontWeight:"bold"}}>User Email: {data.email}
    </p>
    
    <div className="dropdown-divider"></div>
      <a role="button" className="btn btn-primary" style={{display:"flex" ,justifyContent:"center"}} title="Logout" onClick={logOut}>Logout</a>
  </div>
</div>  
    

    </nav>
  
  )
}

