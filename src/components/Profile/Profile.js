import React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CustomTimeline from '../Timeline/Timeline';
import resumeData from '../../utilities/resumeData';
import { CardContent } from '@mui/material';

const Profile = () => {
    return (
        <Box sx={{p:4}} style={{backgroundColor: 'white', borderRadius: '10px'}}>
            <CardContent>
                <Typography style={{fontWeight:600, fontSize: '24px'}}>{resumeData.name}</Typography>
                <Typography>{resumeData.title}</Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
           
                <CustomTimeline/>
            
            <Button variant="contained">Download CV</Button>
        </Box>
    );
};

export default Profile;