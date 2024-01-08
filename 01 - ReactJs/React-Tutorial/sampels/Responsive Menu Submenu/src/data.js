import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
	{
		page: 'Products',
		links: [
			{ label: 'payment', icon: <FaCreditCard />, url: '/products' },
			{ label: 'terminal', icon: <FaCreditCard />, url: '/products' },
			{ label: 'connect', icon: <FaCreditCard />, url: '/products' },
		],
	},
	{
		page: 'Developers',
		links: [
			{ label: 'plugins', icon: <FaBook />, url: '/products' },
			{ label: 'libraries', icon: <FaBook />, url: '/products' },
			{ label: 'help', icon: <FaBook />, url: '/products' },
			{ label: 'billing', icon: <FaBook />, url: '/products' },
		],
	},
	{
		page: 'Company',
		links: [
			{ label: 'about', icon: <FaBriefcase />, url: '/products' },
			{ label: 'customers', icon: <FaBriefcase />, url: '/products' },
		],
	},
];

export default sublinks;