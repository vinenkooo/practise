import React, { useState } from 'react';
import '../../App768.css';
import ButtonSave from '../../button/ButtonSave';
import CarouselFAQ from './CarouselFAQ';

export default function AppFAQ() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }

    return (
      <div className='main-container fourth'>
        <div className='flex-row-37'>
          <div className='holosimulator'>
            <span className='faq'>FAQ</span>
            <CarouselFAQ />
            
            <div className='cylinder-iridescent' />        
           
            <div className='white-glossy' />
            <div className='purple-glossy-41' />              
            <div className='white-glossy-42' />           
          </div>


          <div className='decorative-line-43' />
          <div className='white-glossy-44' />
          <div className='holo-simulator-45'>
            <div className='holo-simulator-46' />
          </div>
          <div className='save' />
        </div>
        <span className='join-users'>Присоединяйтесь к 50 000 + пользователей, которые ежедневно используют Screenshoter в работе<br />и личной переписке</span>
        <ButtonSave className='rectangle-47'><span className='download-free-48'>Скачать бесплатно</span></ButtonSave>
        <div className='rectangle-49'>
          <div className='logo' />
          <div className='flex-row-4a'>
            <span className='product'>Продукт</span>
            <span className='feedback-4b'>Обратная связь</span>
            <span className='privacy-policy'>Политика<br />конфиденциальности</span>
          </div>
          <div className='frame-4c'>
            <span className='features'>Функции</span>
            <span className='advantages'>Преимущества</span>
            <span className='how-to-use-4d'>Как использовать</span>
          </div>
        </div>              
      </div>        
    );
}

