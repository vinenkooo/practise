import React, { useState } from 'react';
import '../App1920.css';
import ButtonSave from '../button/ButtonSave';

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
                    <div className='rectangle-c'>
                        <div className='flex-row-c-d'>
                            <span className='text-22'>01.</span>
                            <span className='text-23'>Платная ли программа?</span>
                            <div className='close' />
                        </div>
                        <span className='text-24'>Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные</span>
                    </div>
                    <div className='cone-purple-glossy' />
                    <div className='cylinder-iridescent' />
                    <div className='rectangle-e'>
                        <span className='text-25'>02.</span>
                        <div className='plus' />
                        <span className='text-26'>Для каких платформ доступен Screenshoter?</span>
                    </div>
                    <div className='rectangle-f'>
                        <span className='text-27'>Чем Screenshoter отличается от других программ<br />для создания скриншотов?</span>
                        <span className='text-28'>03.</span>
                        <div className='plus-10' />
                    </div>
                    <div className='color-white-glossy-11' />
                    <div className='rectangle-12'>
                        <span className='dot'>04.</span>
                        <div className='plus-13' />
                        <span className='where-save'>Куда сохраняются скриншоты и видео?</span>
                    </div>
                    <div className='color-white-glossy-14' />
                    <div className='rectangle-15'>
                        <span className='dot-16'>05.</span>
                        <div className='plus-17' />
                        <span className='delete-files'>Можно ли удалить файлы с сервера в пару кликов?</span>
                    </div>
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
