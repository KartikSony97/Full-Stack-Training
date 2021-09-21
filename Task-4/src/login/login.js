import React, {useState} from "react";
import {Grid, Paper, Avatar, TextField, FormControlLabel, Button, Typography, Link} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";

const Login=()=>{
    const paperStyle= {padding: 20, height:'70vh', width:400,margin:"80px auto"}
    const avatarStyle={color:"Blue", width: 100, height: 60}
    const Mrgn = {margin:'10px 0'}


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                password: password,
                loggedIn: true,
            })
        )
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} yellowPaper onSubmit={(e)=> handleSubmit(e)}>
              <Grid align='center'>
              <Avatar style={avatarStyle} src="\Agilite.jpg" variant="square"/>
              <h2>Log in</h2>  
              </Grid>
              <Box align='left' component='form'>
              <TextField 
                label='Name' 
                placeholder='Enter Username' 
                value={name}
                style={Mrgn} 
                fullWidth
                required
                autoFocus
                onChange={(e) => setName(e.target.value)}/> 
              <TextField 
                label='Password' 
                placeholder='Enter Password'
                value={password} 
                type='password' 
                fullWidth
                required
                onChange={(e) => setPassword(e.target.value)}/>
              <FormControlLabel control={
                    <Checkbox name="checkboxB"
                        color="primary"/>
              }
              label="Remember me"
              />
              <Button 
                type='submit' 
                color='primary' 
                variant='contained' 
                style={Mrgn}
                onClick={(e)=> handleSubmit(e)}
                fullWidth>Sign In</Button>
              </Box>
              <Typography>
                  <Link href="#">Forgot Password</Link>
              </Typography>
              <Typography> Don't you have an account ?
                  <Link href="/Signup">Sign up</Link>

              </Typography>
            </Paper>
            
        </Grid>
    )
}

export default Login