import React ,{ useState } from 'react';
import './App.css';

function App() {
  //FormData => a variable
  //setFormData => a function
  // useState => an array of length 2
  // DRY Principle => Do not Repeat yourself
  const [allFormData, setAllFormData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    rating: "",
  });

  // event => object that repersent the event
  const handelChange = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
  }
  const handleDisabled = () => {
    if(!formData.name || !formData.department || !formData.rating){
      return true;
    }
    return false;
  }
  return (
    <div className="App">
      <h1>EMPLOYEE FEEDBACK FORM </h1>
      <form>
        <label>
          Name :
          <input type="text" name='name' onChange={handelChange}/>
        </label>
        <label>
          Department :
          <input type="text" name='department' onChange={handelChange}/>
        </label>
        <label>
          Rating :
          <input type="number" name='rating' onChange={handelChange}/>
        </label>   
        <button type='button' disabled={handleDisabled()} onClick={(e) => {
          e.preventDefault();
          const tempobj = [...allFormData];
          tempobj.push(formData);
          setAllFormData(tempobj);
          // line no. 38 & 39
          // setAllFormData([...allFormData, formData]);
          console.log(formData);
        }}>Submit</button>            
      </form>
      <div className="mainEle"> 
      {allFormData.map((value,index)=>{
        return <div className='returnEle' key={index}>
          Name: {value.name} | 
          Department: {value.department} | 
          Rating: {value.rating}
          </div>;
      })}
    </div>
    </div>
    
  );
}

export default App;
