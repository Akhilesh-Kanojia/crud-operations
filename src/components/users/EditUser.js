import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {

    let history = useHistory();

    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async (e) => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input
                            value={name}
                            onChange={e => onInputChange(e)}
                            type="text"
                            name="name"
                            class="form-control"
                            id="name"
                            aria-describedby="name"
                            placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label for="username">Enter username</label>
                        <input
                            value={username}
                            onChange={e => onInputChange(e)}
                            type="text"
                            name="username"
                            class="form-control"
                            id="username"
                            aria-describedby="username"
                            placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            value={email}
                            onChange={e => onInputChange(e)}
                            type="email"
                            name="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone No.</label>
                        <input
                            value={phone}
                            onChange={e => onInputChange(e)}
                            type="tell"
                            name="phone"
                            class="form-control"
                            id="phone"
                            aria-describedby="phone"
                            placeholder="Enter Phone" />
                    </div>
                    <div class="form-group">
                        <label for="website">Enter Website Name</label>
                        <input
                            value={website}
                            onChange={e => onInputChange(e)}
                            type="text"
                            name="website"
                            class="form-control"
                            id="website"
                            aria-describedby="website"
                            placeholder="Enter Website URL" />
                    </div>
                    <button type="submit" onClick={onSubmit} class="btn btn-warning">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;