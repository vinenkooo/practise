import * as React from 'react';
import '../App1920.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function CarouselFAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div className='rectangle-c'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary 
            expandIcon={<span className={`accordion-icon ${expanded === 'panel1' ? 'close-icon' : 'plus-icon'}`} />} 
            aria-controls="panel1-content" 
            id="panel1-header"
          >
            <div className='flex-row-c-d'>
              <span className='text-22'>01.</span>
              <span className='text-23'>Платная ли программа?</span>
              <div className='close' />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <span className='text-24'>Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные</span>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='rectangle-e'>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary 
            expandIcon={<span className={`accordion-icon ${expanded === 'panel2' ? 'close-icon' : 'plus-icon'}`} />} 
            aria-controls="panel2-content" 
            id="panel2-header"
          >
            <span className='text-25'>02.</span>
            <div className='plus' />
            <span className='text-26'>Для каких платформ доступен Screenshoter?</span>
          </AccordionSummary>
          <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse malesuada lacus ex, sit amet blandit leo <br />lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='rectangle-f'>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary 
            expandIcon={<span className={`accordion-icon ${expanded === 'panel3' ? 'close-icon' : 'plus-icon'}`} />} 
            aria-controls="panel3-content" 
            id="panel3-header"
          >
            <span className='text-27'>03.</span>
            <span className='text-28'>Чем Screenshoter отличается от других программ<br />для создания скриншотов?</span>
            <div className='plus-10' />
          </AccordionSummary>
          <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse malesuada lacus ex, sit amet blandit leo <br />lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
