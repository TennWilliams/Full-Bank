function Home(){
  
  function show (){
    
  
    logoutBtn.style.visibility="hidden";
    navBtn.style.visibility="hidden";
    navBtn2.style.visibility="hidden";
    navBtn3.style.visibility="hidden";
    navBtn4.style.visibility="hidden";
  }

  return (
    <Card
      bgcolor="info"
      header="SVR Trust Credit Union"
      title="Welcome to SVR Trust Credit Union Website"
      text="Please make a selection from the navigation bar. Have A Wonderful Day!"
      body={(<img src="dove.png" className="img-fluid" style={{borderRadius:"20px"}} alt="Responsive image" onLoad={show}/>)}
      
    />
  );  
}
