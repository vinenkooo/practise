import React from 'react';
import './App1920.css';
import AppHeader from './header/AppHeader'
import AppFunctions from './functions/AppFunctions'
import AppHowToUse from './howtouse/AppHowToUse'
import AppFAQ from './faq/AppFAQ'


export default function Main() {
  return (
    <div>
      <AppHeader />  
      <AppFunctions />  
      <AppHowToUse /> 
      <AppFAQ />
    </div> 

  );
}


