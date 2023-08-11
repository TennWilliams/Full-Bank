function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus]   = React.useState('');  
  const [email, setEmail]     = React.useState('');
  const [amount, setAmount]   = React.useState('');
  const [balance, setBalance] = React.useState();
  const ctx = React.useContext(UserContext);  

  fetch("https://Tennille-WilliamsFullStackBankingApplication/userData", {
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
    console.log(amount);
  //  const user = ctx.users.find((user) => user.email == email);
     
      if (amount <= 0) {
        setStatus('Amount must be greater than 0');
        setTimeout(() => setStatus(''),3000);
        setAmount('');
        return;
      }
    else{

    const total = balance + Number(amount);
    setBalance(total);
    
   // window.localStorage.setItem("balance", JSON.stringify(total));
    console.log(total);  
   //ctx.users.push({email, balance});
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

  
