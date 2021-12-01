import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import resumeData from '../../utilities/resumeData';


const CustomTimeline = () => {
    return (
       <Box  >
           <Typography>Name: {resumeData.name}  </Typography>
           <Typography>Birthday: {resumeData.birthday} </Typography>
           <Typography>Email: {resumeData.email}</Typography>
           <Typography>Job: {resumeData.job} </Typography>
           <Typography>Whatsapp: {resumeData.phone}</Typography>
       </Box>


    );
};


export default CustomTimeline;