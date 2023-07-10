function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>You Have Successfully Logged in</h5><br></br>
    <h5>What Would You like To Do Next?</h5><br></br>
    <button type="submit" id="log"
      className="btn btn-primary" title="Authenticate"
      onClick={() => props.setShow(true)}>
        Authenticate Again
    </button>
    <a role="button" id="log" className="btn btn-success" 
      title="Make A   Deposit" href="#/deposit/">Deposit</a>
    <a role="button" id="log" className="btn btn-danger" 
      title="Make A Withdraw" href="#/withdraw/">Withdraw</a>
    <a role="button" id="log" className="btn btn-secondary" 
      title="Check Your Balance" href="#/balance/">Check Balance</a>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  const ctx = React.useContext(UserContext);  

  function handle(){
    const user = ctx.users.find((user) => user.email == email);
    console.log(user);
    console.log(email, password);
    if (!user) {
      console.log('one')      
      props.setStatus('fail!')      
      return;      
    }
    if (user.password == password) {
      console.log('two')            
      props.setStatus('');
      props.setShow(false);
      return;      
    }
    console.log('three')          
    props.setStatus('fail!');        
  }


  return (<>

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
   
  </>);
}