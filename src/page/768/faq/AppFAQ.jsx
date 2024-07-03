import React, { useState } from 'react';
import '../../App768.css';
import ButtonSave from '../../button/ButtonSave';

export default function AppFAQ() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }

    return (
      <div className='main-container'>
        <div className='flex-row-37'>
          <div className='holosimulator'>
            <span className='faq'>FAQ</span>
            <div className='rectangle-38'>
              <div className='flex-column-f'>
                <span className='platnaya-li-programma'>Платная ли программа?</span>
                <span className='net-screenshoter-absolyutno-besplatnyy'>Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные</span>
              </div>
              <div className='close' />
              <span className='text-49'>01.</span>
            </div>
            <div className='cylinder-iridescent' />
            <div className='rectangle-39'>
              <div className='plus' />
              <span className='dlya-kakih-platform-dostupen-screenshoter'>Для каких платформ доступен Screenshoter?</span>
              <span className='text-4b'>02.</span>
            </div>
            <div className='rectangle-3a'>
              <span className='chem-screenshoter-otlichaetsya-ot-drugih-programm-dlya-sozdaniya-skrinshotov'>Чем Screenshoter отличается от других<br />программ для создания скриншотов?</span>
              <div className='plus-3b' />
              <span className='text-4d'>03.</span>
            </div>
            <div className='rectangle-3c'>
              <span className='where-to-save'>Куда сохраняются скриншоты и видео?</span>
              <div className='plus-3d' />
              <span className='dot'>04.</span>
            </div>
            <div className='white-glossy'>
              <div className='plus-3e' />
            </div>
            <div className='rectangle-3f'>
              <span className='delete-files'>Можно ли удалить файлы с сервера<br />в пару кликов?</span>
              <span className='dot-40'>05.</span>
            </div>
          </div>
          <div className='purple-glossy-41' />
          <div className='white-glossy-42' />
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

