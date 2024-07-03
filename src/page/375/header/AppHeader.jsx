import React, { useState } from 'react';
import '../../App375.css';
import ButtonSave from '../../button/ButtonSave';
import { Rectangle } from '@mui/icons-material';

export default function AppHeader() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }

    return (
        <div className='main-container'>
            <div className='flex-row-aeb'>
                <div className='image' />
                <div className='image-1' />
            </div>
            <div className='flex-row'>
        <div className='rectangle'>
          <div className='rectangle-2'>
            <span className='free-windows-program'>
              Бесплатная программа
              <br />
              для Windows
            </span>
          </div>
        </div>
        <div className='decorative-line'>
          <div className='example' />
          <div className='capture-screen'>
            <span className='capture-screen-3'>
              Делайте снимки
              <br />и записывайте экран
              <br />
            </span>
            <span className='in-one-click'>в 1 клик </span>
          </div>
          <div className='image-4' />
        </div>
      </div>
      <span className='share-screenshot'>
        Вместе со Screenshoter можно в один клик сделать снимок или записать
        происходящее на экране ПК, чтобы поделиться
        <br />с кем угодно
      </span>
      <div className='rectangle-5'>
        <span className='download-free'>Скачать бесплатно</span>
      </div>
        </div>
        
    );
}

