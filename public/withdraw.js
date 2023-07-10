function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>You Have Successfully Made A Withdraw</h5>
    <h5>What Would You like To Do Next?</h5><br></br>
    <button type="submit" id="log"
      className="btn btn-info" 
      onClick={() => props.setShow(true)}>
        Another Withdraw
    </button>
    <a role="button" id="log" className="btn btn-success" 
    title="Make A Deposit" href="#/deposit/">Deposit</a>
    <a role="button" id="log" className="btn btn-secondary" 
    title="Check Your Balance" href="#/balance/">Check Balance</a>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!')      
      return;      
    }

    user.balance = user.balance - Number(amount);
    console.log(user);
    props.setStatus('');      
    props.setShow(false);
  }


  return(<>
    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Email" 
      title="Enter Your Email"
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter Amount" 
      title="How Much?"
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="create" 
      title="Submit Withdraw"
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
