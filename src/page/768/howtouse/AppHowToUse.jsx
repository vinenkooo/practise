import React, { useState } from 'react';
import '../../App768.css';
import ButtonSave from '../../button/ButtonSave';

export default function AppHowToUse() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }
    return (
        <div className='main-container'>
            <div className='flex-row-ad'>
                <div className='color-purple-glossy' />
                <div className='holo-simulator'>
                    <div className='screenshoter-everyday-functions'>
                        <span className='screenshoter-26'>Screenshoter</span>
                        <span className='nbsp'> </span>
                        <span className='functions-everyday'>- это функции<br />на каждый день</span>
                    </div>
                    <div className='flex-row-f-27'>
                        <div className='super-toroid-iridescent' />
                        <span className='text-2b'>01.</span>
                        <span className='exchange-ideas'>Обмен<br />идеями</span>
                        <span className='exchange-ideas-28'>Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить<br />к нему комментарий.<br /><br />А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями</span>
                    </div>
                    <div className='flex-row-d'>
                        <div className='round-cube-black-matte' />
                        <span className='text-2e'>02.</span>
                        <span className='create-instructions'>Создание<br />инструкций</span>
                        <span className='create-instructions-29'>Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые инструкции, добавляя комментарии и визуальные отметки в необходимом месте скриншота.<br /><br />Поделиться снимком или видеозаписью можно с помощью ссылки, которая мгновенно появляется в буфере обмена<br /></span>
                    </div>
                    <div className='flex-row-fc'>
                        <div className='cone-white-glossy' />
                        <span className='text-31'>03.</span>
                        <span className='feedback'>Обратная<br />связь</span>
                        <span className='feedback-2a'>Если в процессе работы приложения, сайта или сервиса возникла ошибка, её можно моментально зафиксировать.<br /><br />Отправьте скриншот в техподдержку, где будет видно, в чем именно заключается проблема<br /></span>
                    </div>
                    <div className='how-to-use-screenshoter'>
                        <span className='how-to-use'>Как использовать </span>
                        <span className='screenshoter-2b'>Screenshoter </span>
                    </div>
                    <span className='step-1'>Шаг 1.</span>
                    <div className='rectangle-2c'>
                        <ButtonSave className='rectangle-2d'><span className='download-free-2e'>Скачать бесплатно</span></ButtonSave>
                        <div className='path' />
                    </div>
                    <div className='download-program'>
                        <span className='download-program-2f'>Скачайте программу </span>
                        <span className='on-pc-or-laptop'>на свой ПК или ноутбук</span>
                    </div>
                    <span className='step-2'>Шаг 2.</span>
                    <div className='screen'>
                        <span className='loading-program'>Кадр с загрузкой программы</span>
                    </div>
                    <div className='launch-screenshoter'>
                        <span className='launch-screenshoter-30'>Запустите Screenshoter:</span>
                        <span className='program-background-mode'>программа будет работать в фоновом режиме</span>
                    </div>
                    <span className='step-3'>Шаг 3.</span>
                    <div className='screen-31'>
                        <span className='kadry-s-zagruzkoy-programmy'>Кадр с загрузкой программы</span>
                    </div>
                    <div className='naslazhdaytes-udobstvom'>
                        <span className='naslazhdaytes-udobstvom-32'>Наслаждайтесь удобством</span>
                        <span className='i-bystrodeystviem'>и быстродействием</span>
                    </div>
                    <ButtonSave className='rectangle-33'><span className='skachat-besplatno'>Скачать бесплатно</span></ButtonSave>
                </div>
                <div className='color-white-glossy' />
                <div className='color-white-glossy-34' />
            </div>
            <div className='frame-35' />
            <div className='flex-row-ea'>
                <div className='screenshoter-polezen-vsem'>
                    <span className='screenshoter-36'>Screenshoter</span>
                    <span className='polezen-vsem-kto-rabotaet-v-internete'>полезен всем,<br />кто работает в интернете</span>
                </div>
                <span className='soglasovyvayte-rabochie-voprosy'>Согласовывайте рабочие вопросы, показывайте интересные вещи и обсуждайте любые темы. Делитесь комментариями с помощью бесплатного<br />инструмента 2 в 1<br /></span>
            </div>
            <div className='flex-row-dc'>
                <div className='bez-registracii' />
                <div className='besplatno' />
                <div className='neogranichennoe-kolichestvo' />
                <div className='fayly-hranyatsya' />
            </div>
        </div>        
    );
}

