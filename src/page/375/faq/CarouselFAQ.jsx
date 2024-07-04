import * as React from 'react';
import '../../App375.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close'; 

export default function CarouselFAQ() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const iconStyle = {
    width: '30px',
    height: '30px',
    position: 'relative',
    right: '-2px',
    top: '5px'
  };

  const iconStyle2 = {
    width: '30px',
    height: '30px',
    position: 'relative',
    right: '-2px',
    top: '-15px',
  };

  const iconStyle3 = {
    width: '30px',
    height: '30px',
    position: 'relative',
    right: '-2px',
    top: '-45px',
  };

  const iconStyle4 = {
    width: '30px',
    height: '30px',
    position: 'relative',
    right: '-2px',
    top: '-10px',
  };

  const iconStyle5 = {
    width: '30px',
    height: '30px',
    position: 'relative',
    right: '-2px',
    top: '-30px',
  };

  const accordionStyle = {
    marginBottom: '40px'
  };

  return (
    <div>
        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded === 'panel1'} 
          onChange={handleChange('panel1')} 
          className={`custom-accordion ${expanded === 'panel1' ? 'open' : ''}`}
          sx={{ borderRadius: '8px', background: '#C4C4C41A'}} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded === 'panel1' ? <CloseIcon style={iconStyle} /> : <AddIcon style={iconStyle}/>} 
              aria-controls="panel1-content" 
              id="panel1-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <div className='flex-column-f'>
                <span className='text-1'>01.</span>
                    <span className='text-2'>Платная ли программа?</span>
                    {/* <div className='close' /> */}
                </div>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> {/* Apply rounded bottom corners */}
                <div className='flex-column-f'>
                <span className='loren'>Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные</span></div>
            </AccordionDetails>
        </Accordion>
        </div>
        
        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded === 'panel2'} 
          onChange={handleChange('panel2')}
          className={`custom-accordion ${expanded === 'panel2' ? 'open' : ''}`}
          sx={{ borderRadius: '8px', background: '#C4C4C41A' }} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded === 'panel2' ? <CloseIcon style={iconStyle2} /> : <AddIcon style={iconStyle2}/>} 
              aria-controls="panel2-content" 
              id="panel2-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
               
                    <span className='text-3'>Для каких платформ доступен Screenshoter?</span>
                    <span className='text-4'>02.</span>
               
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> 
                <span className='loren'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. </span>
            </AccordionDetails>
        </Accordion>
        </div> 
        
        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded === 'panel3'} 
          onChange={handleChange('panel3')}
          className={`custom-accordion3 ${expanded === 'panel3' ? 'open' : ''}`}
          sx={{ borderRadius: '8px', background: '#C4C4C41A'}} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded === 'panel3' ? <CloseIcon style={iconStyle3} /> : <AddIcon style={iconStyle3}/>} 
              aria-controls="panel3-content" 
              id="panel3-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                 <span className='text-5'>Чем Screenshoter отличается от других<br />программ для создания скриншотов?</span>
        
              <span className='text-6'>03.</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> 
            <span className='loren'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
            </AccordionDetails>
        </Accordion>
        </div> 

        <div style={accordionStyle}>
            <Accordion 
          expanded={expanded === 'panel4'} 
          onChange={handleChange('panel4')}
          className={`custom-accordion ${expanded === 'panel4' ? 'open' : ''}`}
          sx={{ borderRadius: '8px', background: '#C4C4C41A'}} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded === 'panel4' ? <CloseIcon style={iconStyle4} /> : <AddIcon style={iconStyle4}/>} 
              aria-controls="panel4-content" 
              id="panel4-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <span className='text-3'>Куда сохраняются скриншоты и видео?</span>
            
                <span className='text-8'>04.</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> 
                <span className='loren'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
            </AccordionDetails>
        </Accordion>
        </div>

        <div style={accordionStyle}>
        <Accordion 
          expanded={expanded === 'panel5'} 
          onChange={handleChange('panel5')}
          className={`custom-accordion5 ${expanded === 'panel5' ? 'open' : ''}`}
          sx={{ borderRadius: '8px', background: '#C4C4C41A'}} // Apply borderRadius directly
        >
            <AccordionSummary 
              expandIcon={expanded === 'panel5' ? <CloseIcon style={iconStyle5} /> : <AddIcon style={iconStyle5}/>} 
              aria-controls="panel5-content" 
              id="panel5-header"
              sx={{ borderRadius: '8px 8px 0 0' }} // Apply rounded top corners
            >
                <span className='text-5'>Можно ли удалить файлы с сервера в пару <br />кликов?</span>
                <span className='text-9'>05.</span>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: '0 0 8px 8px' }}> 
                <span className='loren'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
}
