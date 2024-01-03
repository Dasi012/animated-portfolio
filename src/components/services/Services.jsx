import { useRef } from 'react';
import './Services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1
		}
	}
};

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-100px' });

	return (
		<motion.div
			className='services'
			variants={variants}
			initial='initial'
			//  animate='animate'
			// whileInView='animate'
			ref={ref}
			animate={isInView && 'animate'}>
			<motion.div className='textContainer' variants={variants}>
				<p>
					I focus on helping your brand grow <br /> and move forward
				</p>
				<hr />
			</motion.div>
			<div className='flowFox'>
				<motion.div className='titleContainer'>
					<div className='title'>
						<img src='/people.webp' alt='people' />
						<h1>
							<motion.b whileHover={{ color: 'orange' }}> Unique</motion.b>
							Ideas
						</h1>
					</div>
					<div className='title'>
						<h1>
							<motion.b whileHover={{ color: 'orange' }}> For Your</motion.b>
							Business
						</h1>
						<button>WHAT WE DO?</button>
					</div>
				</motion.div>
				<motion.div className='listContainer'>
					<motion.div
						className='box'
						whileHover={{ background: 'lightgray', color: 'black' }}>
						<h2>Branding</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
							odit maxime saepe, eligendi esse tenetur iusto? Omnis doloremque
							adipisci aliquam ipsa dolores, doloribus ducimus consequuntur
							maiores eum delectus sapiente quae!
						</p>
						<button>Go</button>
					</motion.div>
					<motion.div
						className='box'
						whileHover={{ background: 'lightgray', color: 'black' }}>
						<h2>Branding</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
							odit maxime saepe, eligendi esse tenetur iusto? Omnis doloremque
							adipisci aliquam ipsa dolores, doloribus ducimus consequuntur
							maiores eum delectus sapiente quae!
						</p>
						<button>Go</button>
					</motion.div>
					<motion.div
						className='box'
						whileHover={{ background: 'lightgray', color: 'black' }}>
						<h2>Branding</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
							odit maxime saepe, eligendi esse tenetur iusto? Omnis doloremque
							adipisci aliquam ipsa dolores, doloribus ducimus consequuntur
							maiores eum delectus sapiente quae!
						</p>
						<button>Go</button>
					</motion.div>
					<motion.div
						className='box'
						whileHover={{ background: 'lightgray', color: 'black' }}>
						<h2>Branding</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
							odit maxime saepe, eligendi esse tenetur iusto? Omnis doloremque
							adipisci aliquam ipsa dolores, doloribus ducimus consequuntur
							maiores eum delectus sapiente quae!
						</p>
						<button>Go</button>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Services;
