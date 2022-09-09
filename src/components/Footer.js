import React from 'react';
import {Box,Stack,Typography} from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#90e0ef">
      <Stack gap="5px" alignItems= "center" px="40px" pt="24px">
      <img src={Logo} alt="logo" width="50px" height="50px" / >
      <Typography variant="h4" pb="10px" mt="5px">
        Your Fitness Coach
      </Typography>
      <Typography variant="h6" pb="10px" mt="0px">
        Every Rep Counts
      </Typography>
      </Stack>
    </Box>
  )
}

export default Footer