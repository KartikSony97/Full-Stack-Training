import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {format} from 'date-fns';
import {logout} from "../features/userSlice";
import { useDispatch } from 'react-redux';

export default function DashBoard() {
   // const user = useSelector(selectUser);


    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(
            logout()
        )
    };
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" backgroundColor="Yellow">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Agilite 
          </Typography>
          {format (new Date(), 'do MMMM Y')}
          <Button variant="contained" color="error" onClick={(e) => handleLogout(e)}>
             Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Typography align='center' textsize='40'>Welcome To Agilite Dashboard</Typography>
    </Box>
    
  );
}

