import React from 'react';
import { Typography } from '@material-ui/core';
import { Wrapper } from './style/WelcomeInfoStyle';
import { AVSource } from '../av/AVSource';
import { ContactInfo } from './ContactInfo';

export const WelcomeInfo = () => (
  <Wrapper>
    <Typography gutterBottom variant={'h1'} component={'h4'} align={'center'}>
      Our Latest Service
    </Typography>

    <AVSource />

    <Typography gutterBottom variant={'h1'} component={'h2'} align={'center'}>
      A Little About Us
    </Typography>

    <ContactInfo />
  </Wrapper>
);
