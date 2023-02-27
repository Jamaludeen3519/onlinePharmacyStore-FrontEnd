import React, { useEffect, useState } from 'react';

import UserService from '../Services/UserService';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

 export function UserComponent(){

    //useState for state of the component
    const[users,setUsers] = useState([]);

    //this method call service method to get all products
    const getUsers = () => {
         UserService.getUsers().then((response) => {
            setUsers(response.data);
            console.log(response.data);
        });
    };

    useEffect(() =>{
        getUsers()
    },[]);

    return(
        <div style={{marginTop:'4%'}}>
                   <div style={{width :"200%"}} className="">

<h1 style={{paddingTop:"5%",textAlign:'center'}}>User List</h1>
            <table class="table table-striped table-inverse">
                <thead class="thead-inverse">
                    <tr>
                        <th>User Id</th>
                        <th>UserFullName</th>
                        <th>UserName</th>
                        <th>UserAddress</th>
                        <th>MobileNumber</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                (user,i) =>
                                <tr key={i}>
                       
                            <td>{user.userId}</td>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>{user.address}</td>
                            <td>{user.mNumber}</td>
                        </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
        </div>
    )


}

