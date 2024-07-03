import React, { useState } from 'react';
import '../App1920.css';
import ButtonSave from '../button/ButtonSave';
import CarouselFAQ from './CarouselFAQ';

export default function AppFAQ() {
    const [content, setContent] = useState();
    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }
    return (
        <div className='main-container'>
            <div className='flex-row-ff'>
                <div className='holosimulator'>
                    <span className='faq'>FAQ</span>
                    <CarouselFAQ />
                    <div className='cone-purple-glossy' />
                    <div className='cylinder-iridescent' />
                    <div className='color-white-glossy-11' />
                    <div className='color-white-glossy-14' />
                </div>
                <div className='decorative-line-18' />
                <span className='join-users'>Присоединяйтесь к 50 000 + пользователей, которые ежедневно используют Screenshoter в работе<br />и личной переписке</span>
                <div className='color-white-glossy-19' />
                <div className='holo-simulator-1a'>
                    <div className='holo-simulator-1b' />
                </div>
                <div className='save' />
                <ButtonSave className='rectangle-1c' onClick={() => handleClick('saved')}><span className='download-now'>Загрузить сейчас</span></ButtonSave>
            </div>
            <div className='rectangle-1d'>
                <div className='flex-row-e'>
                    <div className='image' />
                    <span className='product'>Продукт</span>
                    <span className='feedback-1e'>Обратная связь</span>
                    <span className='privacy-policy'>Политика конфиденциальности</span>
                </div>
                <div className='frame'>
                    <span className='features'>Функции</span>
                    <span className='advantages'>Преимущества</span>
                    <span className='how-to-use-1f'>Как использовать</span>
                </div>
            </div>
        </div> 
    );
}
