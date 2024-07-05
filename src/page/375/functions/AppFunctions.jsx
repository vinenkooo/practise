import React, { useState } from 'react';
import '../../App375.css';
import ButtonSave from '../../button/ButtonSave';
import ButtonMini from '../../button/ButtonMini';
import ButtonMoment from '../../button/ButtonMoment'
import ButtonUdobniy from '../../button/ButtonUdobniy'
import ButtonBesplatno from '../../button/ButtonBesplatno'
import ButtonVibirayte from '../../button/ButtonVibirayte'
import ButtonIspolzuite from '../../button/ButtonIspolzuite'
import ButtonOstavlyate from '../../button/ButtonOstavlyate'
import ButtonRazmivayte from '../../button/ButtonRazmivayte'


export default function AppFunctions() {
    const [content, setContent] = useState();

    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }

    return (
        <div className='main-container second'>
            <div className='screenshots-and-screen-recording'>
        <span className='screenshots-and-screen-recording-6'>
          Встречайте — скриншоты
          <br />и запись экрана
        </span>
        <span className='text-7'> 2 в 1</span>
      </div>
      <div className='flex-row-c'>
        <div className='no-more-searching'>
          <span className='no-more-searching-7'>
            Больше не нужно искать две отдельные программы
            <br />
            для скриншотов и записи экрана. Screenshoter поможет сделать
          </span>
          <span className='capture-screen-record-video-share'> </span>
          <span className='capture-screen-record-video-share-8'>
            снимок экрана, записать видео
            <br />и поделиться
          </span>
          <span className='capture-screen-record-video-share-9'> </span>
          <span className='no-more-searching-a'>им</span>
          <span className='capture-screen-record-video-share-b'> </span>
          <span className='capture-screen-record-video-share-c'>
            с кем угодно
          </span>
          <span className='capture-screen-record-video-share-d'>. </span>
          <span className='no-more-searching-e'>
            Можно выделить весь экран, определенную область или активное окно
            <br />
          </span>
        </div>
        <div className='no-more-searching-f'>
          <span className='no-more-searching-10'>
            Больше не нужно искать две отдельные программы
            <br />
            для скриншотов и записи экрана. Screenshoter поможет сделать
          </span>
          <span className='capture-screen-record-video-share-11'> </span>
          <span className='capture-screen-record-video-share-12'>
            снимок экрана, записать видео
            <br />и поделиться
          </span>
          <span className='capture-screen-record-video-share-13'> </span>
          <span className='no-more-searching-14'>им</span>
          <span className='capture-screen-record-video-share-15'> </span>
          <span className='capture-screen-record-video-share-16'>
            с кем угодно
          </span>
          <span className='capture-screen-record-video-share-17'>. </span>
          <span className='no-more-searching-18'>
            Можно выделить весь экран, определенную область или активное окно
            <br />
          </span>
        </div>
        <div className='flex-row-daf'>
        <ButtonMini className='snapshot-record'>
        </ButtonMini>
        <ButtonMoment className='instant-link-50'>
        </ButtonMoment>
        <ButtonUdobniy className='convenient-editor'>
        </ButtonUdobniy>
      </div>
        
      </div>
      <div className='flex-row-ee'>
        <ButtonBesplatno className='free-registration'>
          </ButtonBesplatno>
        <div className='decorative-line-5d'>
          <div className='super-toroid-white-glossy' />
        </div>
        <div className='rectangle-5e'>
          <span className='gif-5f'>gif.</span>
        </div>
        <div className='rectangle-60'>
          <span className='gif-61'>gif.</span>
        </div>
      </div>
      <span className='screen-recording'>Запись экрана</span>
      <div className='record-screen-with-audio'>
        <span className='insufficient-screenshots'>
          Недостаточно снимков? Запишите происходящее на экране
        </span>
        <span className='empty'> </span>
        <span className='insufficient-screenshots-19'>
          со своим голосом или звуком системы. <br />
          <br />
        </span>
        <span className='mouse-click'>Достаточно нажать две кнопки мыши,</span>
        <span className='empty-1a'> </span>
        <span className='insufficient-screenshots-1b'>
          выделить необходимую область и начнется запись видео с экрана. Быстро
        </span>
        <span className='empty-1c'> </span>
        <span className='insufficient-screenshots-1d'>
          и без сложных настроек
        </span>
      </div>
      <div className='flex-row-ec'>
        {/* <div className='purple-glossy' /> */}
        <div className='ellipse' />
        <div className='rectangle-1e'>
          <span className='gif'>gif.</span>
          <span className='gif-1f'>gif.</span>
        </div>
      </div>
      <span className='one-click'>В один клик</span>
      <div className='no-keyboard-shortcuts'>
        <span className='no-keyboard-shortcuts-20'>
          Не нужно запоминать комбинации клавиш
        </span>
        <span className='empty-21'>
          
          на клавиатуре, чтобы сделать скриншот или начать записывать видео
          <br />с экрана.
          <br />
          <br />
          Просто нажмите две кнопки мыши или настройте горячую кнопку на любую
          удобную клавишу
        </span>
      </div>
      <div className='flex-row-c-62'>
      <div className='more-editing-tools'>
            <span className='more-editing-tools-64'>
              Более 5 инструментов для редактирования
            </span>
            <span className='more-editing-tools-65'>
              . Выделяете область и редактируете.
              <br />
              <br />
              Если неверно выбрали область — не беда, можно
              <br />
              без проблем её передвинуть и/или изменить размер,
              <br />
              не удаляя то, что уже нарисовано!
            </span>
          </div>
          <span className='image-editor'>И редактор снимков</span>

        <div className='decorative-line-63'>

        </div>
        <ButtonVibirayte className='choose' />
      </div>
      <div className='flex-row-f'>
        {/* <div className='white-glossy' /> */}
        <div className='ellipse-22' />
        <div className='rectangle-23'>
          <span className='gif-24'>gif.</span>
          <span className='gif-25'>gif.</span>
        </div>
        <div className='rectangle-26'>
          <div className='file-storage'>
            <span className='file-storage-27'>
              Файлы хранятся в течение 1 года
            </span>
            <span className='recent-screenshots'>
              
              с момента
              <br />
              создания. Можно их удалять самостоятельно.
              <br />В истории программы доступны
              <br />
              последние 5 скриншотов
            </span>
          </div>
        </div>
      </div>
      <span className='instant-link'>Мгновенная ссылка</span>
      <span className='instant-link-28'>
        Мгновенное получение ссылки на снимок или видео.
        <br />
        Вы только нажали Enter, а ссылка уже в буфере обмена.
        <br />
        Перейдя по ссылке, можно будет посмотреть ваш снимок
        <br />
        или записанное видео
      </span>
      <div className='flex-row-ffc'>
        <div className='purple-glossy-29' />
        <div className='rectangle-2a' />
        <div className='rectangle-2b'>
          <span className='gif-2c'>gif.</span>
          <span className='gif-2d'>gif.</span>
        </div>
        
        
      </div>
      <ButtonIspolzuite className='use' />
      <div className='flex-row-fa'>
        <ButtonOstavlyate className='leave' />
        <ButtonRazmivayte className='blur' />
        <div className='rectangle-66'>
          <span className='download-free-67'>Скачать бесплатно</span>
        </div>
      </div>
      
            

        </div> 
    );
}

