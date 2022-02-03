import React, { Component } from 'react'
import axios from 'axios'
import './css/students.css'

export class Students extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let userId = localStorage.getItem('userId');
        axios.get(`http://localhost:3001/api/Authentications/${userId}`).then(response => {
            localStorage.setItem("userName", response.data.name)
            localStorage.setItem("userRole", response.data.role)
            localStorage.setItem("userEmail", response.data.email)
            console.log(response)
        })

        this.getAccounts();
    }

    getAccounts() {
        let url = "http://localhost:3001/api/Authentications?access_token="
        //добави accessToken след време
        axios.get(url).then(response => {
            this.setState({ users: response.data })
            console.log(response.data)
        })
    }

    logOut() {
        let accessToken = localStorage.getItem('userAccessToken')
        axios.post(`http://localhost:3001/api/Users/logout?access_token=${accessToken}`).then(response => {
            localStorage.clear()
        })
        window.location.replace('http://localhost:3000/')
    }

    render() {
        const userName = localStorage.getItem('userName')
        const userRole = localStorage.getItem('userRole')

        function stats() {
            if (userRole === 'Учител') {
                return (
                    <>
                        <li class="nav-item my-1" >
                            <a href="/statistics" class="nav-link itemm text-white">
                                <i class="fas fa-chart-area mx-1"></i> Статистики
                            </a>
                        </li >
                        <li className="nav-item my-1">
                            <a href="/students" className="nav-link itemm bg-warning text-white">
                                <i className="fas fa-users mx-1"></i> Ученици
                            </a>
                        </li>
                    </>
                )
            }
        }

        const students = this.state.users.map((user, i) => {
            if (user.role === "Ученик") {
                return (
                    <li className="list-group-item d-flex border">
                        <h6 className="mt-1 mr-1">№{user.numInKlas}. {user.name} - {user.klas} </h6>
                    </li>
                )
            }
            // else{
            //     return (
            //         <div className="d-flex mt-1" key={a++}><h6 className="mt-1 mr-1">{user.name} | Учител</h6></div>
            //     )
            // }
        });

        return (
            <div>
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark asd" >
                    <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-4">Ел. Портфолио</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item my-1">
                            <a href="/home" className="nav-link itemm text-white" aria-current="page">
                                <i className="fas fa-home mx-1"></i> Начало
                            </a>
                        </li>
                        {stats()}
                        <li className="nav-item my-1">
                            <a href="/forum" className="nav-link itemm text-white">
                                <i className="fas fa-envelope-open-text mx-1"></i> Съобщения
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <center>All Rights Reserved &copy;</center>
                </div>
                <div className="navbar navbar-dark bg-dark">
                    <li />
                    <div className="dropdown mx-4">
                        <button className="btn btn-dark dropdown-toggle px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {userName}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className="text-center">{userRole}</p>
                            <hr />
                            <a className="dropdown-item" href="#">Профил</a>
                            <a className="dropdown-item" href="#">Настройки</a>
                            <button onClick={this.logOut} className="dropdown-item" href="#">Изход</button>
                        </div>
                    </div>
                </div>
                <ul className=" move">
                    <div className="list-group-item bg-warning text-light">
                        <h5 className="mt-1 mr-1">Ученици</h5>
                    </div>
                    {students}
                </ul>
            </div >
        )
    }
}

export default Students
