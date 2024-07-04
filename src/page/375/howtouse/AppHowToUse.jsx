import React, { useState } from 'react';
import '../../App375.css';
import ButtonSave from '../../button/ButtonSave';

export default function AppHowToUse() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }
    return (
        <div className='main-container third'>
            <div className='flex-row-a'>
            <div className='purple-glossy-2e' />
            <div className='holo-simulator'>
                <div className='daily-features'>
                    <span className='screenshoter'>Screenshoter</span>
                    <span className='daily-features-2f'> </span>
                    <span className='text-32'>- это функции<br />на каждый день</span>
                </div>
                <div className='super-toroid-iridescent' />
                <div className='flex-row-be'>
                    <span className='dot'>01.</span>
                    <span className='exchange-ideas'>Обмен идеями</span>
                </div>
                <span className='detailed-explanation'>Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий.<br /><br />А если ситуация требует более детального объяснения<br />— окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями</span>
                <div className='flex-row-ff'>
                    <div className='round-cube-black-matte' />
                    <div className='color-white-glossy' />
                </div>
                <div className='flex-row-df'>
                    <span className='dot-30'>02.</span>
                    <span className='create-instructions'>Создание инструкций</span>
                </div>
                <span className='step-by-step'>Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые инструкции, добавляя комментарии<br />и визуальные отметки в необходимом месте скриншота.<br /><br />Поделиться снимком или видеозаписью можно с помощью ссылки, которая мгновенно появляется в буфере обмена</span>
                <div className='cone-white-glossy' />
                <div className='flex-row-b'>
                    <span className='dot-31'>03.</span>
                    <span className='feedback'>Обратная связь</span>
                </div>
                <span className='error-reporting'>Если в процессе работы приложения, сайта или сервиса возникла ошибка, её можно моментально зафиксировать.<br /><br />Отправьте скриншот в техподдержку, где будет видно,<br />в чем именно заключается проблема<br /></span>
                <div className='how-to-use-screenshoter'>
                    <span className='how-to-use'>Как использовать<br /></span>
                    <span className='screenshoter-32'>Screenshoter </span>
                </div>
                <span className='step-1'>Шаг 1.</span>
                <div className='rectangle-33'>
                    <div className='rectangle-34'>
                        <span className='download-free-35'>Скачать бесплатно</span>
                    </div>
                    <div className='path' />
                </div>
                <div className='download-program'>
                    <span className='download-program-36'>Скачайте программу </span>
                    <span className='on-pc-or-laptop'>на свой ПК или ноутбук</span>
                </div>
                <span className='step-2'>Шаг 2.</span>
                <div className='screen'>
                    <span className='program-loading-frame'>Кадр с загрузкой программы</span>
                </div>
                <div className='launch-screenshoter'>
                    <span className='launch-screenshoter-37'>Запустите Screenshoter:</span>
                    <span className='background-mode'>программа будет работать<br />в фоновом режиме</span>
                </div>
                <span className='step-2-38'>Шаг 2.</span>
                <div className='screen-39'>
                    <span className='program-loading-frame-3a'>Кадр с загрузкой программы</span>
                </div>
                <div className='enjoy-convenience'>
                    <span className='enjoy-convenience-3b'>Наслаждайтесь удобством</span>
                    <span className='and-speed'>и быстродействием</span>
                </div>
                <div className='rectangle-3c'>
                    <span className='download-free-3d'>Скачать бесплатно</span>
                </div>
            </div>
            <div className='color-white-glossy-3e' />
            </div>
        <div className='flex-row-3f'>
            <div className='roundcube-purple-glossy' />
            <div className='union' />
            <span className='free-windows-program-40'>Бесплатная программа<br />для Windows</span>
        </div>
        <div className='screenshoter-useful-internet'>
            <span className='screenshoter-41'>Screenshoter</span>
            <span className='useful-internet'> полезен всем,<br />кто работает в интернете</span>
        </div>
        <span className='work-discussions'>Согласовывайте рабочие вопросы, показывайте интересные вещи и обсуждайте любые темы. Делитесь комментариями с помощью бесплатного<br />инструмента 2 в 1<br /></span>
        <div className='no-registration' />
        <div className='flex-row-ae'>
            <div className='free' />
            <div className='unlimited-quantity' />
            <div className='file-storage-68' />
        </div>
            
    </div>        
    );
}

