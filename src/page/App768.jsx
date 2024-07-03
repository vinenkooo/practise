import React from 'react';
import './App768.css';
import AppHeader from './768/header/AppHeader'
import AppFunctions from './768/functions/AppFunctions'
import AppHowToUse from './768/howtouse/AppHowToUse'
import AppFAQ from './768/faq/AppFAQ'

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


