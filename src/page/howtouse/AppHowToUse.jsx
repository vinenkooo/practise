import React, { useState } from 'react';
import '../App1920.css';
import ButtonSave from '../button/ButtonSave';
import ButtonBezReg from '../button/ButtonBezReg';
import ButtonBespl from '../button/ButtonBespl';
import ButtonNeogr from '../button/ButtonNeogr';
import ButtonFayli from '../button/ButtonFayli';

export default function AppHowToUse() {
    const [content, setContent] = useState();
    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }

    return (
        <div className='main-container third'>
            <div className='flex-row'>
                <div className='purple-glossy' />
                <div className='holo-simulator'>
                    <div className='daily-functions'>
                        <span className='screenshoter'>Screenshoter</span>
                        <span className='empty'> </span>
                        <span className='daily-functions-1'>- это функции<br />на каждый день</span>
                    </div>
                    <div className='flex-row-ca'>
                        <div className='super-toroid-iridescent' />
                        <div className='cone-white-glossy' />
                        <div className='round-cube-black-matte' />
                    </div>
                    <div className='flex-row-ee'>
                        <span className='dot-01'>01.</span>
                        <span className='exchange-ideas'>Обмен<br />идеями</span>
                        <span className='dot-02'>02.</span>
                        <span className='create-instructions'>Создание<br />инструкций</span>
                        <span className='dot-03'>03.</span>
                        <span className='feedback'>Обратная<br />связь</span>
                    </div>
                    <div className='flex-row-efb'>
                        <span className='demonstrate-clearly'>Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий.<br /><br />А если ситуация требует более детального объяснения — окей,не проблема. Screenshoter поможет записать видео экрана вместе<br />с вашими голосовыми комментариями</span>
                        <span className='step-by-step-instructions'>Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые инструкции, добавляя комментарии<br />и визуальные отметки в необходимом месте скриншота.<br /><br />Поделиться снимком или видеозаписью можно с помощью ссылки,которая мгновенно появляется в буфере обмена<br /></span>
                        <span className='error-reporting'>Если в процессе работы приложения, сайта или сервиса возникла ошибка, её можно моментально зафиксировать.<br /><br />Отправьте скриншот в техподдержку, где будет видно, в чем именно заключается проблема<br /></span>
                    </div>
                    <div className='how-to-use-screenshoter'>
                        <span className='how-to-use'>Как использовать </span>
                        <span className='screenshoter-2'>Screenshoter </span>
                    </div>
                    <div className='flex-row-f'>
                        <span className='step-1'>Шаг 1.</span>
                        <span className='step-2'>Шаг 2.</span>
                        <span className='step-3'>Шаг 3.</span>
                    </div>
                    <div className='flex-row-c'>
                        <div className='download-program'>
                            <span className='download-program-3'>Скачайте программу<br /></span>
                            <span className='on-your-pc-or-laptop'>на свой ПК или ноутбук</span>
                        </div>
                        <div className='launch-screenshoter'>
                            <span className='launch-screenshoter-4'>Запустите Screenshoter:<br /></span>
                            <span className='background-mode'>программа будет работать в фоновом режиме</span>
                        </div>
                        <div className='enjoy-convenience'>
                            <span className='enjoy-convenience-5'>Наслаждайтесь удобством<br /></span>
                            <span className='text-18'>и быстродействием</span>
                        </div>
                    </div>
                    <ButtonSave className='rectangle-6' onClick={() => handleClick('saved')}><span className='download-free-7'>Скачать бесплатно</span></ButtonSave> 
                </div>
                <div className='white-glossy' />
                <div className='color-white-glossy' />
                <div className='decorative-line'>
                    <div className='rectangle-8'>
                        <span className='text-1a'>Кадр с ярлыком программы</span>
                    </div>
                    <div className='screen'>
                        <span className='text-1b'>Кадр с загрузкой программы</span>
                    </div>
                    <div className='rectangle-9'>
                        <ButtonSave className='rectangle-a' onClick={() => handleClick('saved')}><span className='text-1c'>Скачать бесплатно</span></ButtonSave> 
                        <div className='path' />
                    </div>
                </div>
            </div>
            <div className='flex-row-aee'>
                <div className='roundcube-purple-glossy' />
                <div className='union' />
                <span className='text-1d'>Бесплатная программа<br />для Windows</span>
            </div>
            <div className='flex-row-ef'>
                <div className='group-9'>
                    <span className='screenshoter-b'>Screenshoter</span>
                    <span className='text-1f'> полезен всем,<br />кто работает в интернете</span>
                </div>
                <span className='text-20'>Согласовывайте рабочие вопросы, показывайте интересные вещи и обсуждайте любые темы. Делитесь комментариями с помощью бесплатного инструмента 2 в 1<br /></span>
            </div>
            <div className='flex-row-bd'>
                <ButtonBezReg className='img-6' />
                <ButtonBespl className='pic-8' />
                <ButtonNeogr className='pic-9' />
                <ButtonFayli className='img-7' />
            </div>
        </div>
    
    );
}
