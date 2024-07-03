import React, { useState } from 'react';
import '../../App768.css';
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
            <div className='flex-row-ec'>
                <div className='screenshoter' />
                <div className='mobile-button' />
            </div>
            <div className='flex-row'>
                <div className='image'>
                    <div className='flex-column'>
                        <span className='together-screenshoter'>Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК, чтобы поделиться<br />с кем угодно</span>
                        <div className='rectangle'>
                            <ButtonSave className={'rectangle button-save'}><span className='download-free'>Скачать бесплатно</span></ButtonSave>
                        </div>
                        <div className='fi-rr-arrow-down'>
                            <div className='vector' />
                        </div>
                        <div className='meet-screenshots'>
                            <span className='meet-screenshots-record'>Встречайте — скриншоты<br />и запись экрана</span>
                            <span className='two-in-one'>2 в 1</span>
                        </div>
                        <div className='capture-record-click'>
                            <span className='capture-record-click-1'>Делайте снимки<br />и записывайте экран<br /></span>
                            <span className='one-click'>в 1 клик </span>
                        </div>
                        <div className='frame' />
                    </div>
                    <div className='rectangle-2'>
                        <span className='windows-program'>Бесплатная программа<br />для Windows</span>
                    </div>
                </div>
                <div className='no-more-searching'>
                    <span className='no-more-searching-3'>Больше не нужно искать две отдельные программы<br />для скриншотов и записи экрана.Screenshoter поможет сделать</span>
                    <span className='empty'> </span>
                    <span className='capture-record-share'>снимок экрана, записать видео<br />и поделиться</span>
                    <span className='empty-4'> </span>
                    <span className='no-more-searching-5'>им</span>
                    <span className='empty-6'> </span>
                    <span className='capture-record-share-7'>с кем угодно</span>
                    <span className='empty-8'>. </span>
                    <span className='no-more-searching-9'>Можно выделить весь экран, определенную область или активное окно<br /></span>
                </div>
            </div>
        </div>
        
    );
}

