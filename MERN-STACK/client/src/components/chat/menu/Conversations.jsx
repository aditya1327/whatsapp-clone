import React from 'react'
import {useState,useEffect,useContext} from 'react';
import { AccountContext } from '../../../context/AccountProvider';

import Conversation from './Conversation';
import { getUsers } from '../../../service/api';

import { Box, styled,Divider   } from '@mui/material';


const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = ({text}) => {
  const [users, setUsers] = useState([]);

  const { account,socket,setActiveUsers } = useContext(AccountContext);


  useEffect(() => {
    const fetchData = async () => {
        let response = await getUsers();
        let filteredData = response.filter((user) => response.filter(user => user.name.includes(text)));
        setUsers(filteredData);
    }
    fetchData();
}, [text]);

  useEffect(() => {
    socket.current.emit('addUsers', account);
    socket.current.on("getUsers", users => {
      setActiveUsers(users);
    })
  }, [account]);

  return (
    <Component>
       {
          users.map(user => (
            user.sub !== account.sub && 
            <>
               <Conversation user={user} />
               <StyledDivider/>
            </>
          ))
       } 
    </Component>
  )
}

export default Conversations