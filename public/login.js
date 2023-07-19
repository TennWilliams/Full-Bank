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

  function handle(){
    const user = ctx.users.find((user) => user.email == email);
    console.log(user);
    console.log(email, password);
      
    if (!validate(email,    'email'))    
      return false;
      
    if (!validate(password, 'password')) 
    return false;

    if (!user) {
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
      return;      
    }
    console.log('three')          
    setStatus('Incorrect Password');      
    setTimeout(() => setStatus(''),3000);  
    setPassword('');
  }

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