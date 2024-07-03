import React, { useState } from 'react';
import '../../App375.css';
import ButtonSave from '../../button/ButtonSave';

export default function AppFAQ() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }
    return (
      <div className='main-container'>
        <div className='flex-row-de'>
        <div className='holo-simulator-42'>
          <span className='faq'>FAQ</span>
          <div className='paid' />
          <div className='platforms' />
          <div className='cylinder-iridescent' />
          <div className='screenshoter-43' />
          <div className='save-location' />
          <div className='color-white-glossy-44' />
          <div className='can' />
        </div>
        <div className='cone-purple-glossy' />
        <div className='color-white-glossy-45' />
        <div className='decorative-line-46' />
        <div className='color-white-glossy-47' />
        <div className='holo-simulator-48'>
          <div className='holo-simulator-49' />
        </div>
        <div className='save' />
      </div>
      <span className='join-users'>
        Присоединяйтесь к 50 000 + пользователей, которые ежедневно используют
        Screenshoter в работе
        <br />и личной переписке
      </span>
      <div className='rectangle-4a'>
        <span className='download-free-4b'>Скачать бесплатно</span>
      </div>
      <div className='rectangle-4c'>
        <div className='logo' />
        <div className='flex-row-cf'>
          <span className='product'>Продукт</span>
          <span className='feedback-4d'>Обратная связь</span>
        </div>
        <div className='frame'>
          <span className='features'>Функции</span>
          <span className='advantages'>Преимущества</span>
          <span className='how-to-use-4e'>Как использовать</span>
        </div>
        <span className='privacy-policy'>
          Политика
          <br />
          конфиденциальности
        </span>
      </div>
  
      </div>        
    );
}

