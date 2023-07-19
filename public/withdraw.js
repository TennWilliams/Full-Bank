function Withdraw(){
  const [show, setShow]       = React.useState(true);
  const [status, setStatus]   = React.useState('');  
  const [email, setEmail]     = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const [balance, setBalance] = React.useState();
  const ctx = React.useContext(UserContext);  


  function validate(field, label){
    if (!field) {
      setStatus('Enter your ' + label);
      setTimeout(() => setStatus(''),3000);
      setWithdraw('');
      return false;
     }
     return true;
 }

 function handle(){
  console.log(email,withdraw);
  const user = ctx.users.find((user) => user.email == email);
  if (!validate(email,    'email'))    
      return false;
      
      if (!user) {
        setStatus('Incorrect Email Address')  
        setTimeout(() => setStatus(''),3000);    
        clearForm();
        return;      
      }
      if (withdraw <= 0) {
        setStatus('Amount must be greater than 0');
        setTimeout(() => setStatus(''),3000);
        setWithdraw('');
        return;
      }
    else{
    user.balance = user.balance - Number(withdraw);
    setBalance(user.balance);
    console.log(user);  
    ctx.users.push({email, withdraw, balance});
    setShow(false);
  }
}

function clearForm(){
  setWithdraw('');
  setEmail('');
  setShow(true);
}

  return (
    <Card
      bgcolor="danger"
      header="Make A Withdraw"
      status={status}
      body={show ? (  
    <>
    Email
      <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      title="Enter Your Email"
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>        
      
      <h4>How Much Would You Like To Withdraw?</h4><br></br>
      Amount
      <input type="number" 
      className="form-control" 
      placeholder="Enter Amount" 
      title="How Much?"
      value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>

      <button type="submit" 
              className="create" 
              title="Submit Withdraw"
              onClick={handle}>Withdraw
        </button>

      </>
     ):(
      <>
    <h5>You Have Successfully Made A Withdraw</h5>
    <h5>What Would You like To Do Next?</h5><br></br>
    <button type="submit" id="log"
      className="btn btn-info" 
      title="You Sure?"
      onClick={clearForm}>
        Another Withdraw
    </button>
    <a role="button" id="log" className="btn btn-success" 
    title="Make A Deposit" href="#/deposit/">Deposit</a>
  </>
  )}

  />
  )
}

