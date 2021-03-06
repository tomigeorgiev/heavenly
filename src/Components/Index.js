import React, { Component } from 'react';
import './css/indexStyle.css';
import './css/album.css';
import axios from 'axios';

import './css/balloons.css';
import './balloons';
import './css/particles.css';
import './particles';

import freshwhipmint from './images/menta.jpg';
import freshwhipstraw from './images/strawberry.png';
import malkam from './images/malkam.png';
import sifon from './images/sifon.png';
import infusionmax from './images/InfusionMax.png';
import moca from './images/moca.png';
import exotic from './images/exotic.png';

import capsule from './images/capsule.png';


export class Index extends Component {
    addMint() {
        let selected = document.getElementById('mint').value;
        if (selected !== 'none') {
            localStorage.setItem("Mint", selected);
            alert("Добавено в количката");
        }
    }
    addStraw() {
        let selected = document.getElementById('strawberry').value;
        if (selected !== 'none') {
            localStorage.setItem("Strawberry", selected);
            alert("Добавено в количката");
        }
    }
    addMlMash() {
        let selected = document.getElementById('malkamash').value;
        if (selected !== 'none') {
            localStorage.setItem("Malkamash", selected);
            alert("Добавено в количката");
        }
    }
    addSifon() {
        let selected = document.getElementById('sifon').value;
        if (selected !== 'none') {
            localStorage.setItem("Sifon", selected);
            alert("Добавено в количката");
        }
    }
    addFlakon() {
        let selected = document.getElementById('flakon').value;
        if (selected !== 'none') {
            localStorage.setItem("Flakon", selected);
            alert("Добавено в количката");
        }
    }
    addMoca() {
        let selected = document.getElementById('moca').value;
        if (selected !== 'none') {
            localStorage.setItem("Moca", selected);
            alert("Добавено в количката");
        }
    }
    addExotic() {
        let selected = document.getElementById('exotic').value;
        if (selected !== 'none') {
            localStorage.setItem("Exotic", selected);
            alert("Добавено в количката");
        }
    }

    render() {
        return (
            <div className=''>

                <nav class="navbar navbar-expand-lg justify-content-center navbar-light bg-dark border-bottom sticky-top">
                    <div class="wrapper">
                        <a className='btn btn4 text-light fontcom mt-1 mx-5 p-3' href="#footer">Информация</a>
                        <a class="navbar-brand text-white title2 mx-5" href="/">Heavenly</a>
                        <a className='btn btn4 btnunder text-light fontcom mt-1 mx-5 p-3' href="#footer">Контакти</a>
                        
                    </div>
                    <a href='/cart' className='nav-link h4 text-light float-right'>
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                </nav>
                <br />
                <div class="alert bg-dark text-light  mx-5 text-center" role="alert">
                    За поръчки на по-големи количества се свържете на тел. +359 877423121.
                </div>
                <div class="container">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={freshwhipmint} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>FreshWhip Мента</h2>
                                    <p className='fontcom card-text'>
                                        24бр. капсули / кутия <br />
                                    </p>
                                    <select class="form-control my-2" id="mint">
                                        <option value="none">Изберте количество</option>
                                        <option value="1 кутия - FW Мента">1 кутия - 24бр. / 20лв</option>
                                        <option value="4 кутии - FW Мента">4 кутии- 96бр. / 70лв</option>
                                        <option value="8 кутии - FW Мента">8 кутии- 192бр. / 140лв</option>
                                        <option value="12 кутии - FW Мента">12 кутии- 288бр. / 200лв</option>
                                        <option value="25 кутии - FW Мента">25 кутии- 600бр. / 360лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addMint} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={freshwhipstraw} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>FreshWhip Ягода</h2>
                                    <p className='fontcom card-text'>
                                        24бр. капсули / кутия <br />
                                    </p>
                                    <select class="form-control my-2" id="strawberry">
                                        <option value="none">Изберте количество</option>
                                        <option value="1 кутия - FW Ягода">1 кутия - 24бр. / 20лв</option>
                                        <option value="4 кутии - FW Ягода">4 кутии- 96бр. / 70лв</option>
                                        <option value="8 кутии - FW Ягода">8 кутии- 192бр. / 140лв</option>
                                        <option value="12 кутии - FW Ягода">12 кутии- 288бр. / 200лв</option>
                                        <option value="25 кутии - FW Ягода">25 кутии- 600бр. / 360лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addStraw} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={malkam} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>Малка машинка</h2>
                                    <p className='fontcom card-text'>
                                        Кракер за патрони райски газ <br />
                                    </p>
                                    <select class="form-control my-2" id="malkamash">
                                        <option value="none">Изберте количество</option>
                                        <option value="1бр малка машинка">1бр. / 10лв</option>
                                        <option value="2бр малка машинка">2бр. / 20лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addMlMash} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={sifon} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>Сифон</h2>
                                    <p className='fontcom card-text'>
                                        Сифон за райски газ <br />
                                    </p>
                                    <select class="form-control my-2" id="sifon">
                                        <option value="none">Изберте количество</option>
                                        <option value="1бр Сифон">1бр. / 70лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addSifon} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={infusionmax} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>Infusion флакон</h2>
                                    <p className='fontcom card-text'>
                                        Флакон с райски газ Infusion  <br />
                                    </p>
                                    <select class="form-control my-2" id="flakon">
                                        <option value="none">Изберте количество</option>
                                        <option value="1 флакон Infusion">1 флакон / 55лв</option>
                                        <option value="3 флакона Infusion">3 флакона / 150лв</option>
                                        <option value="6 флакона Infusion">6 флакона / 280лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addFlakon} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={moca} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>Kапсули Moca</h2>
                                    <p className='fontcom card-text'>
                                        24бр. капсули / кутия <br />
                                    </p>
                                    <select class="form-control my-2" id="moca">
                                        <option value="none">Изберте количество</option>
                                        <option value="1 кутия - Moca">1 кутия - 24бр. / 20лв</option>
                                        <option value="4 кутии - Moca">4 кутии- 96бр. / 70лв</option>
                                        <option value="8 кутии - Moca">8 кутии- 192бр. / 140лв</option>
                                        <option value="12 кутии - Moca">12 кутии- 288бр. / 200лв</option>
                                        <option value="25 кутии - Moca">25 кутии- 600бр. / 360лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addMoca} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={exotic} alt='' height="300" />
                                <form class="card-body">
                                    <h2 className='fontlob'>ExoticWhip флакон</h2>
                                    <p className='fontcom card-text'>
                                        Флакон с райски газ Infusion  <br />
                                    </p>
                                    <select class="form-control my-2" id="exotic">
                                        <option value="none">Изберте количество</option>
                                        <option value="1 флакон ExoticWhip">1 флакон / 65лв</option>
                                        <option value="3 флакона ExoticWhip">3 флакона / 180лв</option>
                                        <option value="6 флакона ExoticWhip">6 флакона / 310лв</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={this.addExotic} class="btn btn-info">Добави в количката</button>
                                    </div>
                                    <small class="text-muted">За по-големи количества се свържете с нас</small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' bg-dark px-5'>
                    <footer class="container p-5" id='footer'>
                        <div class="row ">
                            <div class="col-md">
                                <h3 className='fontlob text-light'>Heavenly</h3>
                                <p class="d-block mb-3 text-light">Copyright &copy; 2022</p>
                            </div>

                            <div class=" col-md">
                                <h5 className='text-light'>Социални мрежи</h5>
                                <ul class="list-unstyled text-small">
                                    <li><a class="text-light" href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                                    <li><a class="text-light" href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                                </ul>
                            </div>
                            <div class=" col-md">
                                <h5 className='text-light'>Контакти</h5>
                                <ul class="list-unstyled text-small">
                                    <li><a class="text-light" href="">gasheavenly@gmail.com</a></li>
                                    <li><a class="text-light">+359 877423121</a></li>
                                    <li><a class="text-light">+359 877707819</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Index;