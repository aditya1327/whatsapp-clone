import React from 'react'
import { useContext,useEffect,useState} from 'react';

import {styled, Box, Typography } from "@mui/material";
import { AccountContext } from '../../../context/AccountProvider';
import { formatDate } from '../../../utils/common-utils';
import { setConversation,getConversation} from '../../../service/api';

const Component = styled(Box)`
    height: 30px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;


    
const Image = styled('img') ({
    width: 30,
    height: 30,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});




const Conversation = ({ user }) => {

  const { setPerson, account,newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});
  

  useEffect(() => {
    const getConversationDetails = async() => {
        const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
        setMessage({ text: data?.message, timestamp: data?.updatedAt });
    }
    getConversationDetails();
  }, [newMessageFlag])

  const getUser= async ()=>{
     setPerson(user);
     await setConversation({ senderId: account.sub, receiverId: user.sub });
  }
  
  return (
    <Component onClick={()=>getUser()} >
    <Box>
        <Image src={user.picture} alt="display picture" />
    </Box>
    <Box style={{width:'100%'}}>
       <Box>
           <Typography>{user.name}</Typography>
           { 
             message?.text && 
               <Typography>{formatDate(message?.timestamp)}</Typography>        
           }
       </Box>
       <Box>
          <Typography>{message?.text?.includes('localhost') ? 'media' : message.text}</Typography>
       </Box>
    </Box>
   </Component>
  )
}

export default Conversation