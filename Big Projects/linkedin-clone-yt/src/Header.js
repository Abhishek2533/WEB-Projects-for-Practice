import React from 'react';
import SvgIcon from './317750_linkedin_icon.svg';
import './Header.css';
import HeaderOptions from './HeaderOptions';
// import HomeIcon from './216242_home_icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <img src={SvgIcon} alt="" />

        <div className="header_search">
          {SearchIcon}
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} Title="Home" />
        <HeaderOptions Icon={GroupsIcon} Title="Network" />
        <HeaderOptions Icon='' Title="Join" />
        <HeaderOptions Icon='' Title="Message" />
        <HeaderOptions Icon='' Title="Notification" />
      </div>

    </div>
  );
}

export default Header;