import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Box,styled} from '@mui/material';
import { InputBase } from '@mui/material';


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const Wrapper = styled(Box)`
    position: relative;
    border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
`;

const Icon = styled(Box)`
    color: #919191;
    padding: 8px;
    height: 100%;
    width:10%;
    position: absolute; 
`;
      
const InputField = styled(InputBase) `
width: 90%;
padding: 16px;
padding-left: 65px;
padding-top: 20px;
font-size: 14px;
height: 15px;
width: 100%;
`;



const Search = ({ setText }) => {
  return (
    <Component>
       <Wrapper>
          <Icon>
              <SearchIcon
                fontSize="small"
              />
          </Icon>
        </Wrapper> 
        <InputField
           placeholder='search or start new chat'
           onChange={(e) => setText(e.target.value)}
        />
    </Component>
  )
}

export default Search


