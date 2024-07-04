import * as React from 'react';
import '../App1920.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close'; 

export default function CarouselFAQ() {
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => (
      isExpanded ? [...prevExpanded, panel] : prevExpanded.filter(item => item !== panel)
    ));
  };

  const iconStyle1 = {
    width: '40px',
    height: '40px',
    position: 'relative',
    right: '40px',
    top: '13px'
  };

  const iconStyle2 = {
    width: '40px',
    height: '40px',
    position: 'relative',
    right: '30px',
    top: '43px'
  };

  const iconStyle3 = {
    width: '40px',
    height: '40px',
    position: 'relative',
    right: '30px',
    top: '43px'
  };

  const iconStyle4 = {
    width: '40px',
    height: '40px',
    position: 'relative',
    right: '30px',
    top: '43px'
  };

  const iconStyle5 = {
    width: '40px',
    height: '40px',
    position: 'relative',
    right: '30px',
    top: '43px'
  };

  const accordionStyle = {
    marginBottom: '40px'
  };

  return (
    <div>
        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded.includes('panel1')} 
          onChange={handleChange('panel1')} 
          className={`custom-accordion ${expanded.includes('panel1') ? 'open' : ''}`}
          sx={{ borderRadius: '8px' }} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded.includes('panel1') ? <CloseIcon style={iconStyle1} /> : <AddIcon style={iconStyle1}/>} 
              aria-controls="panel1-content" 
              id="panel1-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <div className='flex-row-c-d'>
                    <span className='text-22'>01.</span>
                    <span className='text-23'>Платная ли программа?</span>
                    {/* <div className='close' /> */}
                </div>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> {/* Apply rounded bottom corners */}
                <span className='text-24'>Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные</span>
            </AccordionDetails>
        </Accordion>
        </div>
        
        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded.includes('panel2')} 
          onChange={handleChange('panel2')}
          className={`custom-accordion ${expanded.includes('panel2') ? 'open' : ''}`}
          sx={{ borderRadius: '8px' }} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded.includes('panel2') ? <CloseIcon style={iconStyle2} /> : <AddIcon style={iconStyle2}/>} 
              aria-controls="panel2-content" 
              id="panel2-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <span className='text-25'>02.</span>
                <span className='text-26'>Для каких платформ доступен Screenshoter?</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> 
                <span className='text-21'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse malesuada lacus ex, sit amet blandit leo <br />lobortis eget. </span>
            </AccordionDetails>
        </Accordion>
        </div>
        
        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded.includes('panel3')} 
          onChange={handleChange('panel3')}
          className={`custom-accordion ${expanded.includes('panel3') ? 'open' : ''}`}
          sx={{ borderRadius: '8px' }} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded.includes('panel3') ? <CloseIcon style={iconStyle3} /> : <AddIcon style={iconStyle3}/>} 
              aria-controls="panel3-content" 
              id="panel3-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <span className='text-27'>Чем Screenshoter отличается от других программ<br />для создания скриншотов?</span>
                <span className='text-28'>03.</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> {/* Apply rounded bottom corners */}
            <span className='text-29'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse malesuada lacus ex, sit amet blandit leo <br />lobortis eget.</span>
            </AccordionDetails>
        </Accordion>
        </div>

        <div style={accordionStyle}>
            <Accordion 
          expanded={expanded.includes('panel4')} 
          onChange={handleChange('panel4')}
          className={`custom-accordion ${expanded.includes('panel4') ? 'open' : ''}`}
          sx={{ borderRadius: '8px' }} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded.includes('panel4') ? <CloseIcon style={iconStyle4} /> : <AddIcon style={iconStyle4}/>} 
              aria-controls="panel4-content" 
              id="panel4-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <span className='dot'>04.</span>
                <span className='where-save'>Куда сохраняются скриншоты и видео?</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> {/* Apply rounded bottom corners */}
                <span className='text-30'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse malesuada lacus ex, sit amet blandit leo <br />lobortis eget.</span>
            </AccordionDetails>
        </Accordion>
        </div>

        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded.includes('panel5')} 
          onChange={handleChange('panel5')}
          className={`custom-accordion ${expanded.includes('panel5') ? 'open' : ''}`}
          sx={{ borderRadius: '8px' }} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded.includes('panel5') ? <CloseIcon style={iconStyle5} /> : <AddIcon style={iconStyle5}/>} 
              aria-controls="panel5-content" 
              id="panel5-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <span className='dot-16'>05.</span>
                <span className='delete-files'>Можно ли удалить файлы с сервера в пару кликов?</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> {/* Apply rounded bottom corners */}
                <span className='text-31'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Suspendisse malesuada lacus ex, sit amet blandit leo <br />lobortis eget.</span>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
}
