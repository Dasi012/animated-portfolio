import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import './Portfolio.scss';
import { useRef } from 'react';
const items = [
	{
		id: 1,
		title: 'React Commerce',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjo4sHhlzKrtOj_is9G6otI3TTge2f6fCWuvt7oUt-hFA9udGGuEL12Hcmge1KX030kQs&usqp=CAU',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores ab id ad nesciuntquo aut corporis modi?'
	},
	{
		id: 2,
		title: 'Next.js Blog',
		img: 'https://images.unsplash.com/photo-1648249962660-c2c5eabc385d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxQTzdvMVBwZV9zUXx8ZW58MHx8fHx8&w=1000&q=80',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores ab id ad nesciuntquo aut corporis modi?'
	},
	{
		id: 3,
		title: 'Vanilla Js App',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3c0dhUaUaABsK5GyEE7-KXpXxRwFNkm71D8RNWnWFuOtUy3_EJH4dFlZ2V9zADJVX0CM&usqp=CAU',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores ab id ad nesciuntquo aut corporis modi?'
	},
	{
		id: 4,
		title: 'Music App',
		img: 'https://rajueditor.com/wp-content/uploads/2023/09/fotos-de-perfil-para-whatsapp-de-ninas-920x1024.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores ab id ad nesciuntquo aut corporis modi?'
	}
];

const Single = ({ item }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref
		// offset: ['start start	', 'end start']
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className='container'>
				<div className='wrapper'>
					<div className='imageContainer' ref={ref}>
						<img src={item.img} alt='dog' />
					</div>
					<motion.div className='textContainer' style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>See Demo</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start']
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	});
	return (
		<div className='portfolio' ref={ref}>
			<div className='progress'>
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className='progressBar'></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
