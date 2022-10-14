import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    var navigate =useNavigate()
    const loginUser = (evt) => {
        evt.preventDefault()
        const submitData = { username, password }
        console.log(submitData)
        axios.post('http://localhost:8000/loginuser', submitData)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("jwttoken",response.data.jwttoken)
                localStorage.setItem("username",response.data.username)
                localStorage.setItem("uniqueid",response.data.uniqueid)
                navigate("/folder")
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div >
            <form onSubmit={loginUser}>
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
                >login</button>
            </form>
            <p>{username}</p>
            <p>{password}</p>
        </div>

    );
}

export default Login;