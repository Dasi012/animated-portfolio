import { useEffect } from 'react';
import { useState } from 'react';
import './Cursor.scss';
import { motion } from 'framer-motion';

const Cursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const mouseMovie = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', mouseMovie);
		return () => {
			window.addEventListener('mousemove', mouseMovie);
		};
	});
	console.log(position);
	return (
		<motion.div
			className='cursor'
			animate={{ x: position.x + 10, y: position.y + 10 }}></motion.div>
	);
};

export default Cursor;
