import { useContext ,useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import {Box,styled} from  '@mui/material'


import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Wrapper=styled(Box)`
   margin-left:auto;
   & > *{
     margin-left:2px;
     padding:8px;
     color:black;
   }
   & :first-Child{
     font-size:22px;
     margin-right:8px;
     margin-top:2px;
   }
`;

/*
const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

*/



const Header = () => {
    const [openDrawer,setOpenDrawer]=useState(false); 
    const { account } = useContext(AccountContext);  
    const toggleDrawer=()=>{
      setOpenDrawer(true);
   };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()} />
           <Wrapper>
             <ChatIcon/>
             <HeaderMenu setOpenDrawer={setOpenDrawer} />
           </Wrapper> 
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}  />
    </>
  )
}

export default Header