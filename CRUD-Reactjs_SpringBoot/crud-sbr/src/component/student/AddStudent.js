import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

const AddStudent = () => {
  let navigate = useNavigate();

  const[student, setStudent]=useState({
    firstName:'',
    lastName:'',
    email:'',
    department:''
  })
  const{firstName,lastName,email,department}=student;

  const handleInputChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
  }

  const saveStudent = async() => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students",student);
    navigate("/view-students");
  }

  return (
    <div className='col-sm-8 py-2 px-5'>
      <form onSubmit={(e)=> saveStudent(e)}>
        <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='firstName'>First Name</label>
            <input type='text' className='form-control col-sm-6' name='firstName' id='firstName' required value={firstName} onChange={(e)=>handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='lastName'>Last Name</label>
            <input type='text' className='form-control col-sm-6' name='lastName' id='lastName' required value={lastName} onChange={(e)=>handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='emaail'>Email</label>
            <input type='email' className='form-control col-sm-6' name='email' id='email' required value={email} onChange={(e)=>handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='department'>Department</label>
            <input type='text' className='form-control col-sm-6' name='department' id='department' required value={department} onChange={(e)=>handleInputChange(e)}/>
        </div>
        <div className='row mb-5'>
          <div className='col-sm-2'>
            <button type='submit' className='btn btn-outline-success btn-lg'>
              Save
            </button>
          </div> 
        <div className='col-sm-2'>   
            <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-lg'>
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddStudent