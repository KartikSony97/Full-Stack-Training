import React from "react";
import {Grid, Paper, Avatar, TextField, FormControlLabel, Button, Typography, Link} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';



const SignUp=()=>{
    const paperStyle= {padding: '20px 20px', height:'120vh', width:400,margin:"20px auto" }
    const avatarStyle={color:"Blue", width: 100, height: 60}
    const Mrgn = {margin:'10px 0'}

    


        
    return(
        <Grid>
            <Paper elevation={18} style={paperStyle}>
              <Grid align='center'>
                <Avatar style={avatarStyle} src="\Agilite.jpg" variant="square"/>
              <h2>Sign Up</h2>  
              <Typography variant='caption'>Fill the details to create an account !</Typography>
              </Grid>
              <Grid align='left'>
              <TextField label='Username' placeholder='Enter Username' style={Mrgn} fullWidth/>
              <TextField label='Email' placeholder='Enter Email' style={Mrgn} fullWidth/>
              <TextField label='Contact' placeholder='Contact no.' style={Mrgn} fullWidth/>

              <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" defaultValue="other" name="radio-buttons-group" style={{display:'initial'}}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              </FormControl>
              <TextField label='Password' placeholder='Enter Password' type='password' style={Mrgn} fullWidth/>
              <TextField label='Confirm Password' placeholder='Enter Again' type='password' style={Mrgn} fullWidth/>
              
              <FormControlLabel control={ <Checkbox name="checkboxB" color="primary"/> }
                    label="Remember me"
              />
              <Button type='submit' color='primary' variant='contained' style={Mrgn} fullWidth>Sign Up</Button>
              </Grid>
              <Typography> Already have an account ?
                  <Link href="/">Log In</Link>
              </Typography>
            </Paper>
            
        </Grid>
    )
}

export default SignUp