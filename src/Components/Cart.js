import React, { Component } from 'react';
import './css/cart.css';

export class Cart extends Component {
    componentDidMount() {
        let a = document.getElementById('dlt');
        a.addEventListener('click', () => {
            localStorage.clear();
            window.location.replace('/cart');
        })


    }

    alerter(){
        alert("Съжаляваме, за момента приемаме поръчки само чрез телефонно обаждане")
    }

    render() {
        const a = localStorage.getItem('Mint');
        const b = localStorage.getItem('Strawberry');
        const c = localStorage.getItem('Malkamash');
        const d = localStorage.getItem('Sifon');
        const e = localStorage.getItem('Flakon');
        const f = localStorage.getItem('Moca');
        const g = localStorage.getItem('Exotic');

        function getItems(e) {
            if (e) {
                return (
                    <li className='list-group-item'>
                        <div className='fontcom float-left pt-2'><i class="fas fa-bookmark mr-2"></i>  {e}</div>
                    </li>
                )
            }
        }

        function price() {
            let price = 0;

            if (a === '1 кутия - FW Мента') {
                price += 20;
            } else if (a === '4 кутии - FW Мента') {
                price += 70;
            } else if (a === '8 кутии - FW Мента') {
                price += 140;
            } else if (a === '12 кутии - FW Мента') {
                price += 200;
            } else if (a === '25 кутии - FW Мента') {
                price += 360;
            }

            if (b === '1 кутия - FW Ягода') {
                price += 20;
            } else if (b === '4 кутии - FW Ягода') {
                price += 70;
            } else if (b === '8 кутии - FW Ягода') {
                price += 140;
            } else if (b === '12 кутии - FW Ягода') {
                price += 200;
            } else if (b === '25 кутии - FW Ягода') {
                price += 360;
            }

            if (c === '1бр малка машинка') {
                price += 10;
            } else if (c === '2бр малка машинка') {
                price += 20;
            }

            if (d === '1бр Сифон') {
                price += 70;
            }

            if (e === '1 флакон Infusion') {
                price += 55;
            } else if (e === '3 флакона Infusion') {
                price += 150;
            } else if (e === '6 флакона Infusion') {
                price += 280;
            }

            if (f === '1 кутия - Moca') {
                price += 20;
            } else if (f === '4 кутии - Moca') {
                price += 70;
            } else if (f === '8 кутии - Moca') {
                price += 140;
            } else if (f === '12 кутии - Moca') {
                price += 200;
            } else if (f === '25 кутии - Moca') {
                price += 360;
            }

            if (getItems === '1 флакон ExoticWhip') {
                price += 65;
            } else if (g === '3 флакона ExoticWhip') {
                price += 180;
            } else if (g === '6 флакона ExoticWhip') {
                price += 310;
            }

            return (
                <>{price}</>
            )
        }

        return (
            <div>
                 <nav class="navbar navbar-expand-lg justify-content-center navbar-light bg-dark border-bottom sticky-top">
                    <div class="wrapper">
                        <a className='btn btn4 text-light fontcom mt-1 mx-5 p-3' href="#footer">Информация</a>
                        <a class="navbar-brand text-white title2 mx-5" href="/">Heavenly</a>
                        <a className='btn btn4 btnunder text-light fontcom mt-1 mx-5 p-3' href="#footer">Контакти</a>
                        
                    </div>
                </nav>

                <div className='container mt-5'>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item bg-dark text-light">
                            <div className='float-left fontlob h4 pt-1'>Продукти</div>
                            <a href="/" className='btn btn-light float-right fontcom'>Обратно</a>
                            <button id="dlt" className='btn btn-danger mx-1 float-right'><i class="fas fa-trash"></i></button>
                        </li>
                        {getItems(a)}
                        {getItems(b)}
                        {getItems(c)}
                        {getItems(d)}
                        {getItems(e)}
                        {getItems(f)}
                        {getItems(g)}

                    </ul>
                    <br />
                    <ul class="list-group" >
                        <li class="list-group-item ">
                            <div className='float-left fontcom h4 pt-2'>Общо:  {price()}лв.</div>
                        </li>
                    </ul>
                    <hr/>
                    <div className='container my-4'>
                        <div className='row'>
                            <div class="col-md">
                                <h3 className='fontcom'>За момента, приемаме поръчки само чрез телефонно обаждане! </h3>
                                {/* <form className='fontcom' >
                                    <label for="email">Въведете Вашите данни:</label>
                                    <hr/>
                                    <input type="email" name='email' placeholder='Имейл' className='form-control my-2' />
                                    <input type="text" name='name' placeholder='Име' className='form-control my-2' />
                                    <input type="text" name='city' placeholder='Град' className='form-control my-2' />
                                    <input type="text" name='adress' placeholder='Адрес' className='form-control my-2' />
                                    <input type="text" name='phone' placeholder='Тел. номер' className='form-control my-2' />
                                    <br/>
                                    <button type='submit' className='btn btn-info w-100 '>Поръчай</button>
                                    <hr/>
                                </form> */}
                            </div>
                            
                            <div class="col-md">
                                <h3 className='fontlob'>Поръчайте </h3>
                                <p className='h5 font-weight-normal fontcom'>
                                    Можете да направите поръчка като ни се обадите на тел. <b>0877423121</b><br/>
                                    или  на тел. <b>0877707819</b>, също можете да ни пишете на:<br/>
                                    <a className='btn btn-light my-2 fontcom' href="mailto:gasheavenly@gmail.com">gasheavenly@gmail.com</a>
                                </p>
                                <hr/>
                            </div>
                            <div class="col-md">
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/>
                <div className=' bg-light px-5'>
                    <footer class="container p-5" id='footer'>
                        <div class="row">
                            <div class=" col-lg">
                                <h3 className='fontlob'>Heavenly</h3>
                                <p class="d-block mb-3 text-muted">Copyright &copy; 2022</p>
                            </div>
                            
                            <div class=" col-lg">
                                <h5>Социални мрежи</h5>
                                <ul class="list-unstyled text-small">
                                    <li><a class="text-muted" href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                                    <li><a class="text-muted" href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                                </ul>
                            </div>
                            <div class="col-lg">
                                <h5>Контакти</h5>
                                <ul class="list-unstyled text-small">
                                    <li><a class="text-muted" href="/">gasheavenly@gmail.com</a></li>
                                    <li><a class="text-muted" href="/">0877423121</a></li>
                                    <li><a class="text-muted" href="/">0877707819</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Cart;