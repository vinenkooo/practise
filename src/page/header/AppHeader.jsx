import React, { useState } from 'react';
import '../App1920.css';
import ButtonSave from '../button/ButtonSave';
import AppRuEng from './AppRuEng'; // Импорт компонента AppRuEng
import Link from '@mui/material/Link';
import AppFunctions from '../functions/AppFunctions';

export default function AppHeader() {
    const [content, setContent] = useState();

    function handleClick(type) {
        console.log('button clicked', type);
        setContent(type);
    }

    return (
        <div className='main-container header'>
            <div className='flex-row-20'>
                <div className='screenshoter-21'>
                    <div className='flex-column-bc'>
                        <div className='logo' />
                        <span className='share-screen'>
                            Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК, чтобы поделиться с кем угодно
                        </span>
                        <div className='rectangle-22'>
                            <ButtonSave className='rectangle-22 button-save' onClick={() => handleClick('saved')}>
                                <span className='download-free-23'>Скачать бесплатно</span>
                            </ButtonSave>
                        </div>
                        <div className='capture-screen'>
                            <span className='capture-screen-24'>Делайте снимки <br />и записывайте экран<br /></span>
                            <span className='one-click'>в 1 клик </span>
                        </div>
                        <div className='frame-25' />
                    </div>
                    <div className='flex-column-cd'>
                        <div className='frame-26'>
                            <Link href={AppFunctions} className='features-27' color="inherit">Функции</Link>
                            <Link href="#advantages" className='advantages-28' variant="body2">Преимущества</Link>
                            <Link href="#how-to-use" className='how-to-use-29' color="inherit">Как использовать</Link>
                            <Link href="#faq" className='faq-2a' variant="body2">Частые вопросы</Link>
                            {/* <div className='languages'> */}
                            <AppRuEng /> 
                            {/* </div> */}
                        </div>
                        {/* <AppRuEng />  куда-то ее вставить нужно */}
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
