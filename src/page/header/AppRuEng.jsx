import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState('RU');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language) => {
    setAnchorEl(null);
    if (language) {
      setSelectedLanguage(language);
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1000 }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: '#565656' }}
      >
        {selectedLanguage}
        {open ? (
          <ExpandLessIcon sx={{ marginLeft: 1 }} />
        ) : (
          <ExpandMoreIcon sx={{ marginLeft: 1 }} />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => handleClose('RU')}
          sx={{ color: selectedLanguage === 'RU' ? 'rgba(86, 86, 86, 0.5)' : '#565656' }}
        >
          RU
        </MenuItem>
        <MenuItem
          onClick={() => handleClose('ENG')}
          sx={{ color: selectedLanguage === 'ENG' ? 'rgba(86, 86, 86, 0.5)' : '#565656' }}
        >
          ENG
        </MenuItem>
      </Menu>
    </div>
  );
}
