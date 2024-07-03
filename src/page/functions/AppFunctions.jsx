import React, { useState } from 'react';
import '../App1920.css';
import ButtonSave from '../button/ButtonSave';
import ButtonMini from '../button/ButtonMini'
import Cursor from '../../assets/images/images_1920/Cursor.png';


export default function AppHeader() {
    const [content, setContent] = useState();
    function handleClick(type){
        console.log('button clicked', type);
        setContent(type);
    }
    return (
        <div className='main-container second'>
          <div className='flex-row-20'>
            <div className='arrow-down'></div>
            <div className='flex-row-31'>
              <div className='span-screenshots'>
                <span className='span-screenshots-32'>Встречайте — скриншоты<br />и запись экрана</span>
                <span className='span-2-in-1'> 2 в 1</span>
              </div>
              <div className='span-screenshoter'>
                <span className='span-screenshoter-33'>Больше не нужно искать две отдельные программы<br />для скриншотов и записи экрана.</span>
                <span className='span-screenshoter-34'>Screenshoter поможет сделать</span>
                <span className='span-space'> </span>
                <span className='span-share'>снимок экрана, записать видео и поделиться</span>
                <span className='span-space-35'> </span>
                <span className='span-screenshoter-36'>им</span>
                <span className='span-space-37'> </span>
                <span className='span-share-38'>с кем угодно</span>
                <span className='span-space-39'>. </span>
                <span className='span-screenshoter-3a'>Можно выделить весь экран, определенную область или активное окно<br /></span>
              </div>
            </div>
            <ButtonMini className='image-3b'><img src={Cursor} className='image-cursor' /><h4 className='text-cursor'>Снимок и запись <br /> экрана в 1 клик</h4></ButtonMini>
            <div className='span-instant' />
            <div className='span-convenient' />
            <div className='span-free' />
          </div>
          <div className='flex-row-a'>
            <div className='decorative-line-3d'>
              <div className='super-toroid-white-glossy' />
              <span className='span-screen-recording'>Запись экрана</span>
            </div>
            <div className='rectangle-3e' />
            <div className='rectangle-3f'>
              <span className='span-gif'>gif.</span>
              <span className='span-gif-40'>gif.</span>
            </div>
            <div className='span-screen-recording-41'>
              <span className='span-screen-recording-42'>Недостаточно снимков? Запишите происходящее на экране со своим голосом</span>
              <span className='span-space-43'> </span>
              <span className='span-screen-recording-44'>или звуком системы. <br /><br /></span>
              <span className='span-mouse-clicks'>Достаточно нажать две кнопки мыши,</span>
              <span className='text-54'> </span>
              <span className='span-screen-recording-45'>выделить необходимую область и начнется запись видео<br />с экрана. Быстро и без сложных настроек</span>
            </div>
          </div>
          <div className='box-7'>
            <div className='img-17'>
              <div className='img-18' />
            </div>
            <div className='section-f'>
              <span className='text-56'>gif.</span>
              <span className='text-57'>gif.</span>
            </div>
            <span className='text-58'>В один клик</span>
            <div className='group-11'>
              <span className='text-59'>Не нужно запоминать комбинации клавиш<br /></span>
              <span className='text-5a'>на клавиатуре, чтобы сделать скриншот или начать записывать видео с экрана.<br /><br />               Просто нажмите две кнопки мыши<br />или настройте горячую кнопку на любую удобную клавишу</span>
            </div>
          </div>
          <div className='section-10'>
            <div className='pic-1c' />
            <div className='img-19'>
              <div className='section-11'>
                <span className='text-5b'>gif.</span>
                <span className='text-5c'>gif.</span>
              </div>
              <div className='box-8'>
                <div className='wrapper-b'>
                  <span className='text-5d'>Файлы хранятся в течение 1 года</span>
                  <span className='text-5e'>с момента<br />создания. Можно их удалять самостоятельно.<br />В истории программы доступны<br />последние 5 скриншотов</span>
                </div>
              </div>
            </div>
            <span className='text-5f'>Мгновенная ссылка</span>
            <span className='text-60'>Мгновенное получение ссылки на снимок<br />или видео. Вы только нажали Enter, а ссылка уже                 <br />в буфере обмена. Перейдя по ссылке, можно будет посмотреть ваш снимок или записанное видео</span>
            <div className='pic-1d' />
            <div className='img-1a'>
              <div className='section-12'>
                <span className='text-61'>gif.</span>
                <span className='text-62'>gif.</span>
              </div>
              <div className='box-9'>
                <span className='text-63'>И редактор снимков</span>
                <div className='wrapper-c'>
                  <span className='text-64'>Более 5 инструментов</span>
                  <span className='text-65'>для редактирования. Выделяете область и редактируете.<br /><br />Если неверно выбрали область — не беда, можно без проблем её передвинуть</span>
                  <span className='text-66'> </span>
                  <span className='text-67'>и/или изменить размер,<br />не удаляя то,</span>
                  <span className='text-68'> </span>
                  <span className='text-69'>что уже нарисовано!</span>
                </div>
              </div>
            </div>
            <div className='pic-1e' />
            <div className='img-1b' />
            <div className='pic-1f'></div>
            <div className='pic-21' />
            <div className='img-1c' />
          </div>
          <ButtonSave className='rectangle' onClick={() => handleClick('saved')}><span className='download-free'>Скачать бесплатно</span></ButtonSave>   
        </div>    

                        
                        
    );
}
