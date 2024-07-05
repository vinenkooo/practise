import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import AppHeader1920 from './page/header/AppHeader';
import AppFunctions1920 from './page/functions/AppFunctions';
import AppHowToUse1920 from './page/howtouse/AppHowToUse';
import AppFAQ1920 from './page/faq/AppFAQ';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<AppHeader1920/>}/>
            <Route path='/functions1920' element={<AppFunctions1920/>}/>
            <Route path='/howtouse1920' element={<AppHowToUse1920/>}/>
            <Route path='/faq1920' element={<AppFAQ1920/>}/>
        </Routes>
    </Router>
)