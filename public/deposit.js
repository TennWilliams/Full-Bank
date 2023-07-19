function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus]   = React.useState('');  
  const [email, setEmail]     = React.useState('');
  const [amount, setAmount]   = React.useState('');
  const [balance, setBalance] = React.useState();
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Enter your ' + label);
      setTimeout(() => setStatus(''),3000);
      setAmount('');
      return false;
     }
     return true;
 }
  
  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email == email);
    if (!validate(email,    'email'))    
      return false;
      
      if (!user) {
        setStatus('Incorrect Email Address')  
        setTimeout(() => setStatus(''),3000);    
        clearForm();
        return;      
      }
      if (amount <= 0) {
        setStatus('Amount must be greater than 0');
        setTimeout(() => setStatus(''),3000);
        setAmount('');
        return;
      }
    else{
    user.balance = user.balance + Number(amount);
    setBalance(user.balance);
    console.log(user);  
    ctx.users.push({email, amount, balance});
    setShow(false);
  }
}

  function clearForm(){
    setAmount('');
    setEmail('');
    setShow(true);
  }
  
  return (
    <Card
      bgcolor="success"
      header="Make A Deposit"
      status={status}
      body={show ? (   
    <>

      Email
      <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      title="Enter Your Email"
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>        
      
      <h4>How Much Would You Like To Deposit?</h4><br></br>
      Amount
      <input type="number" 
      className="form-control" 
      placeholder="Enter Amount" 
      title="How Much?"
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

      <button type="submit" 
              className="create" 
              title="Submit Deposit"
              onClick={handle}>Deposit
        </button>

      </>
              ):(
      <>

    <h5>You Have Successfully Made A Deposit</h5>
    <h5>Your Account Balance is ${balance}</h5>
    <h5>What Would You like To Do Next?</h5><br></br>
    <button type="submit" id="log"
      className="btn btn-info" title="Deposit"
      onClick={clearForm}>Another Deposit
    </button>
    <a role="button" id="log" className="btn btn-danger" title="You Sure?" href="#/withdraw/">Withdraw</a>
</>
              )}
      />
    )
  }

  
