import { FaUserFriends, FaFaceBook, FaHome, FaFolderOpen, FaCalendarAlt, FaWpforms } from 'react-icons/fa';

export const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: <FaHome />,  
    },
    {
      id: 2,
      url: '/team',
      text: 'team',
      icon: <FaUserFriends />,
    },
    {
      id: 3,
      url: '/projects',
      text: 'projects',
      icon: <FaCalendarAlt />,
    },
    {
      id: 4,
      url: '/calendar',
      text: 'calendar',
      icon: <FaSketch />,
    },
    {
      id: 5,
      url: '/documents',
      text: 'documents',
      icon: <FaWpforms />,  
    },
];

export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFaceBook />,   
    },
    { 
        id: 2,
        url: 'https://www.behance.com',
        icon: <FaBehance />,      
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,  
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,  
    },
]