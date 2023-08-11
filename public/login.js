function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  const ctx = React.useContext(UserContext); 

  function validate(field, label){
    if (!field) {
      setStatus('Enter your ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
     }
     if (label==="password" && password.length < 8) {
       setStatus(label + ' must be 8 or more characters long');
       setTimeout(() => setStatus(''),3000);
       setPassword('');
       return false;
     }
     return true;
  }

  function handle(e){
   //const user = ctx.users.find((user) => user.email == email);
   //console.log(user);
   e.preventDefault();
    console.log(email, password);
      
    if (!validate(email,    'email'))    
      return false;
      
    if (!validate(password, 'password')) 
    return false;

    //fetch("http://localhost:3000/login"
    fetch("https://Tennille-WilliamsFullStackBankingApplication.onrender.com/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data, "userRegister");
        if (data.error) {
          console.log(data.error);
          setStatus('Error: ' + data.error);
          setTimeout(() => setStatus(''),3000);
          clearForm();
        }
        
        
        else  {
          //let user = JSON.stringify(data);
      
          //ctx.email = user.email;
          //ctx.password = user.password;
          //ctx.balance = user.balance;
          JSON.stringify(window.localStorage.getItem("token"))
          
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("email", JSON.stringify(data.email));
          window.localStorage.setItem("balance", data.data.balance);
          window.localStorage.setItem("name", data.data.name);
          setStatus('');
          setShow(false);
          logoutBtn.style.visibility="visible";
          navBtn.style.visibility="visible";
          navBtn2.style.visibility="visible";
          navBtn3.style.visibility="visible";
          navBtn4.style.visibility="visible";
          console.log(data.balance);
          }
        //refreshData(); 
        
      });
      
    }
    

  /*  if (!user) {
      console.log('one')      
      setStatus('Incorrect Email or Password')      
      setTimeout(() => setStatus(''),3000);
      clearForm();
      return;      
    }
    if (user.password == password) {
      console.log('two')            
      setStatus('');
      setShow(false);
      logoutBtn.style.visibility="visible";
      navBtn.style.visibility="visible";
      navBtn2.style.visibility="visible";
      navBtn3.style.visibility="visible";
      navBtn4.style.visibility="visible";
      userinfo.value=email;
      return;      
    }
    console.log('three')          
    setStatus('Incorrect Password');      
    setTimeout(() => setStatus(''),3000);  
    setPassword('');*/
  

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Login To Your Account" 
      status={status}
      body={show ? (
        
    <>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      title="Enter Your Email"
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter Password" 
      title="Enter Your Password"
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="create"
    title="Login to Account"
    onClick={handle}>Login</button>
   
  </>
):(
  <>
  
  <h5>You Have Successfully Logged In As User: {email}</h5><br></br>
    <h5>What Would You like To Do Next?</h5><br></br>
    <button type="submit" id="log"
      className="btn btn-primary" title="Authenticate"
      onClick={clearForm}>
        Authenticate Again
    </button>
    <a role="button" id="log" className="btn btn-success" 
      title="Make A Deposit" href="#/deposit/">Deposit</a>
    <a role="button" id="log" className="btn btn-danger" 
      title="Make A Withdraw" href="#/withdraw/">Withdraw</a>
    <a role="button" id="log" className="btn btn-secondary" 
      title="Check Your Balance" href="#/balance/">Check Balance</a>


  </>
)}
/>
)

}

