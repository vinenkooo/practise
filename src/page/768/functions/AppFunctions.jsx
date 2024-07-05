import React, { useState } from 'react';
import '../../App768.css';
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
            <div className='flex-row-d-4e'>
                <ButtonMini className='capture-and-record-in-one-click' />
                <ButtonUdobniy className='convenient-editor' />
                <ButtonBesplatno className='free-and-no-registration' />
                <div className='decorative-line-4f'>
                    <div className='white-glossy-50' />
                </div>
                <div className='rectangle-51'>
                    <span className='gif-52'>gif.</span>
                </div>
                <div className='rectangle-53'>
                    <span className='gif-54'>gif.</span>
                </div>
            </div>
            <ButtonMoment className='instant-link-55' />
            <div className='flex-row-a'>
                <span className='screen-record'>Запись экрана</span>
                <div className='not-enough-screenshots'>
                    <span className='highlight-area'>Недостаточно снимков? Запишите происходящее на экране<br />со своим голосом</span>
                    <span className='empty-b'> </span>
                    <span className='highlight-area-c'>или звуком системы. <br /><br /></span>
                    <span className='press-two-mouse-buttons'>Достаточно нажать две кнопки мыши,</span>
                    <span className='empty-d'> </span>
                    <span className='highlight-area-e'>выделить необходимую<br /> область и начнется запись видео с экрана.Быстро<br />и без сложных настроек</span>
                </div>  
            </div>            
            <div className='flex-row-f'>
                
                <div className='ellipse' />
                <div className='rectangle-10'>
                    <span className='gif'>gif.</span>
                    <span className='gif-11'>gif.</span>
                </div>
            </div>            
            <div className='flex-row-e'>
                <span className='one-click-12'>В один клик</span>
                <div className='remember-shortcuts'>
                    <span className='remember-shortcuts-13'>Не нужно запоминать комбинации клавиш</span>
                    <span className='remember-shortcuts-14'>на клавиатуре, чтобы сделать скриншот или начать записывать видео с экрана.<br /><br />Просто нажмите две кнопки мыши или настройте горячую кнопку на любую удобную клавишу</span>
                </div>
            </div>            
            <div className='flex-row-eba'>
        
                <div className='ellipse-15'>
                    <div className='rectangle-16'>
                        <span className='gif-17'>gif.</span>
                        <span className='gif-18'>gif.</span>
                    </div>
                </div>
                <div className='rectangle-19'>
                    <div className='store-files'>
                        <span className='store-files-1a'>Файлы хранятся в течение 1 года</span>
                        <span className='store-files-1b'>с момента<br />создания. Можно их удалять самостоятельно.<br />В истории программы доступны<br />последние 5 скриншотов</span>
                    </div>
                </div>
            </div>
            <div className='instant-link'>
                <span className='instant-link-1c'>Мгновенная<br />ссылка</span>
                <span className='instant-link-1d'>Мгновенное получение ссылки на снимок или видео. Вы только нажали Enter, а ссылка уже в буфере обмена.<br />Перейдя по ссылке, можно будет посмотреть ваш снимок<br />или записанное видео</span>
            </div>
            <div className='flex-row-ede'>
                <div className='purple-glossy-1e' />
                <div className='rectangle-1f' />
                <div className='rectangle-20'>
                    <span className='gif-21'>gif.</span>
                    <span className='gif-22'>gif.</span>
                </div>
                <div className='decorative-line'>
                    <div className='edit-tools'>
                        <span className='edit-tools-23'>Более 5 инструментов для редактирования</span>
                        <span className='edit-tools-24'>. Выделяете область и редактируете.<br /><br />Если неверно выбрали область — не беда, можно без проблем её передвинуть и/или изменить размер, не удаляя то,<br />что уже нарисовано!</span>
                    </div>
                    <span className='image-editor'>И редактор<br />снимков</span>
                </div>
                <div className='editor-info'>
                    <ButtonVibirayte className='vibirayte_white' />
                    <ButtonIspolzuite className='ispolzuite_white' />
                    <ButtonOstavlyate className='ostavlyate_white' />
                    <ButtonRazmivayte className='razmivayte_white' />
                    <ButtonSave className='download-free-25'><span >Скачать бесплатно</span></ButtonSave>
                
                </div>
            </div>

        </div> 
    );
}

