function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>You Have Successfully Made A Deposit</h5>
    
    <h5>What Would You like To Do Next?</h5><br></br>
    <button type="submit" id="log"
      className="btn btn-info" title="Deposit"
      onClick={() => props.setShow(true)}>
        Another Deposit
    </button>
    <a role="button" id="log" className="btn btn-danger" title="You Sure?" href="#/withdraw/">Withdraw</a>
    <a role="button" id="log" className="btn btn-secondary" 
    title="Check Your Balance" href="#/balance/">Check Balance</a>

  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!');
      return;      
    }

    user.balance = user.balance + Number(amount);
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
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter Amount" 
      title="How Much?"
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="create" 
      title="Submit Deposit"
      onClick={handle}>Deposit</button>

  </>);
}