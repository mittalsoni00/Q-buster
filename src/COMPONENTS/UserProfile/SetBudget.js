import React, {useState}from "react";
import './SetBudget.css'
import logo from '../../ASSETS/budget.png'
import Switch from "../../COMPONENTS/UserProfile/Switch";


const SetBudget = () => {
  const[isToggled, setIsToggled]=useState(false);
  return (
    <div className='setbudget'>
      <h1 className='mainhead1'>Set Your Budget</h1>
      <p>Stay on top of your spending! Set a daily or monthly budget to help you manage your finances better.
                </p>
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
      <label htmlFor='name'>Monthly   </label>
      
      

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Enter Amount   </label>
          <input type='text' name='name' id='name' />
        </div>

        

        {/* <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input type='text' name='phone' id='phone'

          />
        </div> */}
        {/* <div className='f1'> */}
          <img src={logo} alt='budget' className='budget' />


        

      
      </div>

      <button className='mainbutton1'
        
        >Save Changes</button>
    </div>
  )
}

export default SetBudget