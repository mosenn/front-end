import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const links = [
	{
		id: 1,
		url: '/',
		text: 'Home',
	},
	{
		id: 2,
		url: '/about',
		text: 'About',
	},
	{
		id: 3,
		url: '/projects',
		text: 'Projects',
	},
	{
		id: 4,
		url: '/contact',
		text: 'Contact',
	},
	{
		id: 5,
		url: '/profile',
		text: 'Profile',
	},
];

export const social = [
	{
		id: 1,
		url: 'https://www.facebook.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.linkdin.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
];
