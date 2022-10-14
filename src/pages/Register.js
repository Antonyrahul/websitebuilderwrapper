import { useState } from "react";
import axios from "axios";



function Register() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const loginUser = (evt) => {
        evt.preventDefault()
        const submitData = { name, username, password }
        console.log(submitData)
        axios.post('http://localhost:8000/registeruser', submitData)
            .then(function (response) {
                console.log(response);
               
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div >
            <form onSubmit={loginUser}>
                <label>Name</label>
                <input type="text"
                    value={name}
                    onChange={(evt) => { setName(evt.target.value) }}
                ></input>

                <label>username</label>
                <input type="email"
                    value={username}
                    onChange={(evt) => { setUserName(evt.target.value) }}
                ></input>
                <label>password</label>
                <input type="password"
                    value={password}
                    onChange={(evt) => { setPassword(evt.target.value) }}
                ></input>

                <button
                    type="submit"
                >Signup</button>
            </form>
            <p>{username}</p>
            <p>{password}</p>
            <p>{name}</p>
        </div>

    );
}

export default Register;
