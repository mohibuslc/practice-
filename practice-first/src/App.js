import logo from './logo.svg';
import './App.css';

function App() {
  const information = ['Kalam', 'Jamal', 'Tina']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1> Hallow Guyes !!! I m React Person</h1>
      <Info name ={information.[0]}  position =" Manager" Salary =" $12000 per Annam "  ></Info>
      <Info name ={information.[1]}  position ="Sales-Man" Salary =" $9800 per Annam "  ></Info>
      <Info name ={information.[2]}  position ="Clenar" Salary =" $ 8300per Annam " ></Info>        
      
      </header>
    </div>
  );
}
 function Info (props)  {

 const design = {

border:'2px solid gold',
margin: '10px',

width : '500px'

 }
 
 return(
   <div style = {design}>
   <h1> Name :{props.name} </h1>
   <p> Designation : {props.position}</p>
   <p style = {{color:'red'}}> Salary: {props.Salary}</p>
   </div>
 )

}



export default App;
