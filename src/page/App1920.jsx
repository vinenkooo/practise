import React, { useRef } from 'react';
import './App1920.css';
<<<<<<< HEAD
import AppHeader from './header/AppHeader';
import AppFunctions from './functions/AppFunctions';
import AppHowToUse from './howtouse/AppHowToUse';
import AppFAQ from './faq/AppFAQ';
=======
import AppHeader from './header/AppHeader'
import AppFunctions from './functions/AppFunctions'
import AppHowToUse from './howtouse/AppHowToUse'
import AppFAQ from './faq/AppFAQ'
>>>>>>> c27fc1371ad691781a66e0ab54c5122e20696c2c

export default function Main() {
  const holoSimulatorRef = useRef(null);
  const functionsRef = useRef(null);
  const howToUseRef = useRef(null);
  const FAQRef = useRef(null);

  const scrollToHoloSimulator = () => {
    if (holoSimulatorRef.current) {
      holoSimulatorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFunctions = () => { // Добавьте функцию для прокрутки к новой секции
    if (functionsRef.current) {
      functionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowToUse = () => { // Добавьте функцию для прокрутки к новой секции
    if (howToUseRef.current) {
      howToUseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  const scrollToFAQ = () => { // Добавьте функцию для прокрутки к новой секции
    if (FAQRef.current) {
      FAQRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };    

  return (
    <div>
      <AppHeader onAdvantagesClick={scrollToHoloSimulator} onFunctionsClick={scrollToFunctions} onHowToUseClick={scrollToHowToUse} onFAQClick={scrollToFAQ} />
      <AppFunctions functionsRef={functionsRef} />
      <AppHowToUse holoSimulatorRef={holoSimulatorRef} howToUseRef={howToUseRef}/>
      <AppFAQ FAQRef={FAQRef} />
    </div>
  );
}
