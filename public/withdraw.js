function Withdraw(){
  const [show, setShow]       = React.useState(true);
  const [status, setStatus]   = React.useState('');  
  const [email, setEmail]     = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const [balance, setBalance] = React.useState();
  const ctx = React.useContext(UserContext);  

  fetch("http://localhost:3000/userData", {
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
    setBalance(data.data.balance);
    });


 function handle(){
  console.log(email,withdraw);
  //const user = ctx.users.find((user) => user.email == email);
  
      if (withdraw <= 0) {
        setStatus('Amount must be greater than 0');
        setTimeout(() => setStatus(''),3000);
        setWithdraw('');
        return;
      }
      if (balance < withdraw){
        setStatus(`You do not have enough money to withdraw $${withdraw}. Your Account Balance is $${balance} Try a different amount.`);
        setTimeout(() => setStatus(''),4000);
        clearForm();
        return;
      }
    else{
    const total = balance - Number(withdraw);
    setBalance(total);
    
    console.log(total);  
    //ctx.users.push({email, withdraw, balance});
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

