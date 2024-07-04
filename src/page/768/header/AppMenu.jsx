import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import statsIcon from "../../../assets/images/images_768/stats.svg";


export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={statsIcon} alt="Статистика" style={{ width: '40px', height: '40px', position: 'relative', top: '-10px' }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Функции</MenuItem>
        <MenuItem onClick={handleClose}>Преимущества</MenuItem>
        <MenuItem onClick={handleClose}>Как использовать</MenuItem>
        <MenuItem onClick={handleClose}>Частые вопросы</MenuItem>
      </Menu>
    </div>
  );
}
