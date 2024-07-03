import React, { useState } from 'react';
import '../App1920.css';
import ButtonSave from '../button/ButtonSave';

export default function AppHeader() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }

    return (
        <div className='main-container header'>
            <div className='flex-row-20'>
                <div className='screenshoter-21'>
                    <div className='flex-column-bc'>
                        <div className='logo' />
                        <span className='share-screen'>Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК, чтобы поделиться с кем угодно
                        </span>
                        <div className='rectangle-22'>                            
                            <ButtonSave className='rectangle-22 button-save' onClick={() => handleClick('saved')}><span className='download-free-23'>Скачать бесплатно</span></ButtonSave>
                        </div>
                        <div className='capture-screen'>
                            <span className='capture-screen-24'>Делайте снимки <br />и записывайте экран<br /></span>
                            <span className='one-click'>в 1 клик </span>
                        </div>
                        <div className='frame-25' />
                    </div>
                    <div className='flex-column-cd'>
                        <div className='frame-26'>
                            <span className='features-27'>Функции</span>
                            <span className='advantages-28'>Преимущества</span>
                            <span className='how-to-use-29'>Как использовать</span>
                            <span className='faq-2a'>Частые вопросы</span>
                            <div className='languages'>
                                <span className='ru'>RU</span>
                                <div className='vector' />
                            </div>
                        </div>
                        <div className='rectangle-2d'>
                            <span className='span-windows'>
                                Бесплатная программа
                                <br />
                                для Windows
                            </span>
                        </div>
                    </div>
                </div>
                <div className='color-white-glossy-2e' />
                <div className='image-2f'>
                    <div className='arrow-down'>
                        <div className='vector-30' />
                    </div>
                </div>   
            </div> 
        </div> 
    );
}
