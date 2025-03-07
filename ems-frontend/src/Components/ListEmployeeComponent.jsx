import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmloyees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() =>{
        listEmloyees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error('Error retrieving employees', error);
        });
    },[])

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee(id).then(() => {
            setEmployees(employees.filter(employee => employee.id!== id))
        }).catch((error) => {
            console.error('Error deleting employee', error);
        });
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead >
                <tr className='text-center'>
                    <th>Employee ID</th>    
                    <th>Employee First Name</th>    
                    <th>Employee Last Name</th>    
                    <th>Employee Email ID </th>    
                    <th>Actions</th>
                </tr>    
            </thead>    
            <tbody>
                {
                    employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info px-2' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger px-2' onClick={() => removeEmployee(employee.id)} 
                                    style={{marginLeft:10}}
                                    >Delete</button>
                            </td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent