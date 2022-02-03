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
            }else if (e === '6 флакона Infusion') {
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
            }else if (g === '6 флакона ExoticWhip') {
                price += 310;
            }

            return (
                <>{price}</>
            )
        }

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-info pl-5 ">
                    <a class="navbar-brand text-white title2" href="/">Heavenly</a>
                </nav>

                <div className='container mt-5'>
                    <ul class="list-group" id='list'>
                        <li class="list-group-item bg-info text-light">
                            <div className='float-left fontlob h4 pt-1'>Продукти</div>
                            <a href="/" className='btn btn-light float-right fontcom'>Продължете пазаруването</a>
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
                </div>
            </div>
        );
    }
}

export default Cart;