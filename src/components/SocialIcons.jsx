import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
// You can import more icons here later
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';

export default function SocialIcons() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/barberxandy/', // replace with your Instagram URL
    },
    // Add more social links here if needed
    // {
    //   name: 'Twitter',
    //   icon: <TwitterIcon />,
    //   url: 'https://twitter.com/yourusername',
    // },
  ];

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      {socialLinks.map((social) => (
        <IconButton
          key={social.name}
          component="a"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          color="inherit"
        >
          {social.icon}
        </IconButton>
      ))}
    </Stack>
  );
}
