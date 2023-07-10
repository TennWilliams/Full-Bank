function AllData(){
  const ctx = React.useContext(UserContext);
  const dataArray = ctx.users;
  return (
    <Card
      bgcolor="light"
      header="All Transactions"
      body={<div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <br></br><br></br>
          <p>Click Or Hover To See All Transactions</p>
          
        </div>
        <div className="flip-card-back" >
        <ul>
            {dataArray.map((item, key) => {
              return (
                <div key={key}>
                  <ul>
                   Name: {item.name}, Email: {item.email}, Deposited: ${item.deposit}, Withdrew: ${item.withdraw} Balance {item.balance}
                  
                  </ul>
                </div>
              );
            })}
          </ul>
        
        </div>
      </div>
    </div>
      }
    />
  );
}
