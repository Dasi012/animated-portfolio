import './app.scss';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';

const App = () => {
	return (
		<div>
			<Cursor />
			<section id='Homepage'>
				<NavBar />
				<Hero />
			</section>
			<section id='Services'>
				<Parallax type='services' />
			</section>
			<section id='Services'>
				<Services />
			</section>
			<section id='Portfolio'>
				<Parallax type='portfolio' />
			</section>
			<Portfolio />
			<section id='Contact'>
				<Contact />
			</section>
			{/* <div className='Containerloader'>
				<div className='loader' />
			</div> */}
		</div>
	);
};

export default App;
