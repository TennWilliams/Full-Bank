function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Enter your ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
     }
     return true;
 }

     function handle(){
      const user = ctx.users.find((user) => user.email == email);
      if (!validate(email,    'email'))    
      return false;
      
      if (!user) {
        setStatus('Incorrect Email Address')  
        setTimeout(() => setStatus(''),3000);   
        setEmail('');
        return;      
      }
  
      setBalance(user.balance);
      console.log(user);      
      setShow(false);
    }

    function clearForm(){
      setBalance('');
      setEmail('');
      setShow(true);
      setStatus('');
    }

  return (
    <Card
      bgcolor="secondary"
      header="See Your Balance"
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

    <button type="submit" 
      className="create" 
      title="Check Balance"
      onClick={handle}>
        Check Balance
    </button>
    
    </>
    ):(
    <>

    <div className="flip-card" style={{width: "250px", height:"60px", 
                marginLeft:"17vw"}}>
              <div className="flip-card-inner">
              <div className="flip-card-front" style={{color: "purple",    
                  fontSize:"20px", backgroundColor:"palevioletred"}}>
                  <p>Click/Hover For Balance</p>
              </div>
              <div className="flip-card-back" style={{color: "white",   
                    backgroundColor:"palevioletred", fontSize:"20px"}}>
                    Your Account Balance is <br></br> ${balance}  
              </div>
              </div>
    </div><br></br>   
    
    <button type="submit" 
      className="create" 
      title="Check Balance Again"
      onClick={clearForm}>
      Check Balance Again
    </button>
    </>
            )}
  />
  )
}