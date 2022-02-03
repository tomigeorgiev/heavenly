import React, { Component } from 'react';
import axios from 'axios';
import './css/indexStyle.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/Users/login', this.state)
            .then(response => {
                this.token = response.data.id;
                this.userId = response.data.userId;
                this.userData = JSON.parse(response.config.data);

                localStorage.setItem('userAccessToken', this.token);
                localStorage.setItem('userId', this.userId);

                console.log(response)
                window.location.replace('http://localhost:3000/home')
            }).catch(err => {
                alert(err)
            })
    }

    render() {
        const { email, password } = this.state;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                window.location.replace('http://localhost:3000/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        return (
            <div>
                <header className='bg-info text-center p-5'>
                    <h3 className="text-light"> </h3>
                </header>
                <div className="container">
                    <form onSubmit={signInWithEmailAndPassword} className="text-center p-5">
                        <h3>Администратор</h3>
                        <hr />
                        <label className="my-1">
                            <input type="email" ref="name" name="email" value={email} className="form-control" placeholder="Имейл" onChange={this.changeHandler} required />
                        </label><br />
                        <label className="my-1">
                            <input type="password" ref="password" name="password" value={password} className="form-control" placeholder="Парола" onChange={this.changeHandler} required />
                        </label ><br />
                        <button type="submit" className="btn btn-info px-5 my-1 text-light">Вход</button><br />
                        <hr />
                    </form>
                </div>
                <footer className=' bg-info text-center p-5'>
                    <h3 className="text-light"> </h3>
                </footer>
                <div className='text-center p-5'>
                    <h1 className='text-info title2'>
                        Heavenly
                    </h1>
                    <hr />
                    <p className='text-dark fontlob h4'>
                        Райски газ
                    </p>
                </div>

            </div>
        )
    }
}

export default Login;
