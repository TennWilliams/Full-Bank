function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="light"
      txtcolor="danger"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5 style={{color: "royalblue"}}>You Have Successfully Created An Account</h5><br></br>
    <h5 style={{color: "royalblue"}}>What Would You like To Do Next?</h5><br></br>
    <button type="submit" 
      className="btn btn-outline-primary" 
      id="log" 
      title="Another Account Needed"
      onClick={() => props.setShow(true)}>Add Another Account</button>
      <a role="button" id="log" className="btn btn-outline-success" title="Make A Deposit" href="#/deposit/">Deposit</a>
      <a role="button" id="log" className="btn btn-outline-danger" title="Make A Withdraw" href="#/withdraw/">Withdraw</a>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function handle(){
    console.log(name,email,password);
    ctx.users.push({name,email,password});
    props.setShow(false);
  }    

  return (<>

    <p style={{color: "royalblue", marginBottom:"0px"}}>Name</p>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Name" 
      title="Enter Your Name"
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    <p style={{color: "royalblue", marginBottom:"0px"}}>Email Address</p>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      title="Enter Your Email"
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <p style={{color: "royalblue", marginBottom:"0px"}}>Password</p>
    <input type="password" 
      className="form-control" 
      placeholder="Enter Password" 
      title="Enter Your Password"
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/>

    <p style={{color: "royalblue",    
        textAlign:"left", fontSize:"13px"}}>(Must be 8 or more characters long)</p>
    <br/>

    <button type="submit" 
      className="create" 
      title="Create Account"
      onClick={handle}>Create Account</button>

  </>);
}