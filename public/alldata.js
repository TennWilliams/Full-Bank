function AllData(){
  const ctx = React.useContext(UserContext);
  const dataArray = ctx.users;
  return (
    <Card
      bgcolor="light"
      header="All Data"

      body={<div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <br></br><br></br>
          <p>Click Or Hover To See All Accounts</p>
          
        </div>
        <div className="flip-card-back" >
        <h5>List Of All Accounts</h5>
        <table class="table table-bordered">
        <thead>
          <tr>
          <th scope="col">Account</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Deposited</th>
            <th scope="col">Withdraw</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
  
            {dataArray.map((item, key) => {
              return (
                
                <tr key={key}>
                  <th scope ="row">{key+1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>${item.amount}</td>
                  <td>${item.withdraw}</td>
                  <td>${item.balance}</td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      </div>
    </div>
      }
    />
  );
}
