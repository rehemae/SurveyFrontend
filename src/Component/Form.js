import React from 'react'

export default function Form() {
  return (
    <div className='container justify-center bg-yellow-500'>
      <div className="grid">
      <form>


      <label for="username">Username:</label>
        <input type="text" className="" id="username" name="username"/>

        <label for="gender">Gender:</label>
        <select name="gender" id="cars">
  <option value="F">Female</option>
  <option value="M">Male</option>
  <option value="O">Others</option>
</select>

{/* 
age
phone number
*/}
        <label for="age">Age:</label>
        <input type="number" className="" id="age" name="age"/>

        <label for="phoneNumber">Phone Number:</label>
        <input type="text" className="" id="phoneNumber" name=""/>

        <label for="services">Are you satisfied with the services received?</label>
        <input type="radio" id="yes" name="choice" value="choice"/>

        <label for="html">HTML</label>
        <input type="radio" id="no" name="feedback" value="feedback"/>

{/*  */}
<label for="html">Give us your feedback on service delivery</label>

        <textarea id="w3review" name="w3review" rows="4" cols="50">
Enter your feedback here
</textarea>
        <input type="submit" value="Submit" />
        </form>
      </div>
     
  
    </div>
  )
}

