import React, { Component } from 'react';
import axios from 'axios';
import './css/register.css'

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            cnfpassword: '',
            phonenum: '',
            adress: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        let teacher = document.getElementById('teacher');
        let student = document.getElementById('student');
        let studinfo = document.getElementsByClassName('studinfo')
        let accessCode = document.getElementById('accessCode')

        teacher.addEventListener('click', () => {
            if (teacher.checked === true) {
                accessCode.style.display = "block"
                Array.from(studinfo).forEach(element => {
                    element.style.display = "none"
                });
            } else {
                accessCode.style.display = "none"
            }
        })
        student.addEventListener('click', () => {
            if (student.checked === true) {
                accessCode.style.display = "none"
                Array.from(studinfo).forEach(element => {
                    element.style.display = "block"
                });
            } else {
            }
        })
    }

    register = (e) => {
        e.preventDefault();

        if (this.state.password === this.state.cnfpassword) {
            let teacher = document.getElementById('teacher');
            let student = document.getElementById('student');
            let accessCode = document.getElementById('accessCode')

            if (teacher.checked === true) {

                if (accessCode.value === 'tch1123') {
                    this.state.role = 'Учител'
                    axios.post('http://localhost:3001/api/Authentications', this.state).then(response => { });
                    axios.post('http://localhost:3001/api/Users', this.state).then(response => {
                        this.props.history.push('/login');
                    }).catch(err => {
                        alert(err)
                    })
                }
            } else if(student.checked === true) {
                //Създаване на ученически профил

                this.state.role = 'Ученик'
                axios.post('http://localhost:3001/api/Authentications', this.state).then(response => { });
                axios.post('http://localhost:3001/api/Users', this.state).then(response => {
                    this.props.history.push('/login');
                }).catch(err => {
                    alert(err)
                })
            }else {
                alert('Изберете ученически или учителски профил')
            }
        }
    }

    render() {
        const {
            name,
            email,
            password,
            cnfpassword,
            phonenum,
            parentphonenum,
            adress,
            role,
            klas,
            numInKlas,
            mainTeacher,
            profession
        } = this.state;

        return (
            <div>
                <header className='bg-warning text-center p-5'>
                    <h3 className="text-light">
                        Електронно Ученическо Портфолио
                    </h3>
                </header>
                <div className="container">
                    <form className="text-center p-5" onSubmit={this.register}>
                        <h2>Регистрация</h2>
                        <hr />
                        <div className="">
                            <div className="m-1 d-flex">
                                <input type="text" name="name" value={name} className="form-control mx-1" placeholder="Име *" onChange={this.changeHandler} required />
                                <input type="email" name="email" value={email} className="form-control mx-1" placeholder="Имейл *" onChange={this.changeHandler} required />
                                <input type="text" name="phonenum" value={phonenum} className="form-control mx-1" placeholder="Тел. номер *" onChange={this.changeHandler} required />
                                <input type="text" name="parentphonenum" value={parentphonenum} className="form-control mx-1" placeholder="Тел. номер на родител" onChange={this.changeHandler}  />
                            </div>
                            <div className="m-1 d-flex">
                                <input type="text" name="adress" value={adress} className="form-control mx-1" placeholder="Адрес" onChange={this.changeHandler} required />
                            </div>
                            <div className="m-1 d-flex">
                                <input type="password" name="password" value={password} className="form-control mx-1 " placeholder="Парола *" onChange={this.changeHandler} required />
                                <input type="password" name="cnfpassword" value={cnfpassword} className="form-control mx-1 " placeholder="Потвърди паролата *" onChange={this.changeHandler} required />
                            </div >
                            <div className=" p-2">
                                {/* Teacher Checkbox */}
                                <input type="radio" id="teacher" name="block" className="m-2" />
                                <label for="teacher" id="teachertag" className="mx-1">Учителски профил</label>

                                {/* Student Checkbox */}
                                <input type="radio" id="student" name="block" className="m-2 ml-5" />
                                <label for="student" id="studenttag" className="mx-1">Ученически профил</label>

                                {/* Inputs */}
                                <input type="password" id="accessCode" placeholder="Код за достъп" className="form-control mx-1" />
                            </div>
                            <div className="m-1 d-flex">
                                <input type="text" name="klas" value={klas} className="form-control mx-1 studinfo" placeholder="Клас" onChange={this.changeHandler}  />
                                <input type="number" name="numInKlas" value={numInKlas} className="form-control mx-1 studinfo" min='1' max='30' placeholder="Номер в класа" onChange={this.changeHandler}  />
                                <input type="text" name="mainTeacher" value={mainTeacher} className="form-control mx-1 studinfo" placeholder="Класен Ръководител" onChange={this.changeHandler}  />
                                <input type="text" name="profession" value={profession} className="form-control mx-1 studinfo" placeholder="Специалност" onChange={this.changeHandler}  />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning px-5 my-2 text-light">Регистрация</button><br />
                        <p>
                            Вече имаш акаунт? <a href="/login">Вход</a>
                        </p>
                        <hr />
                        <center>All Rights Reserved &copy;</center>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
