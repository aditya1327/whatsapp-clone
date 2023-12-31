import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {styled} from '@mui/material';
import {useState} from "react";

const MenuOption=styled(MenuItem)`
  font-size:14px;
  padding:15px 60px 5px 24px;
  color:#4A4A4A;
`;

const HeaderMenu = ({setOpenDrawer}) => {
  const [open,setOpen]=useState(false); 
  const handleClose=()=>{
    setOpen(null);
  } 
  const handleClick=(e)=>{
    setOpen(e.currentTarget);
  }
  const toggleDrawer = () => {
    setOpenDrawer(true);
  }
  return (
    <>
    <MoreVertIcon onClick={handleClick} />
    <Menu
    anchorEl={open}
    keepMounted
    open={open}
    onClose={handleClose}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical:'bottom',
      horizontal:'center'
    }}
    transformOrigin={{
        vertical:'top',
        horizontal:'right'     
    }}
  >
    <MenuOption onClick={() => { handleClose(); toggleDrawer()}}>Profile</MenuOption>
    <MenuOption onClick={handleClose}>My account</MenuOption>
    <MenuOption onClick={handleClose}>Logout</MenuOption>
  </Menu>    
    </>
  )
}

export default HeaderMenu