import './app.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';

const App = () => {
	return (
		<div>
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
			<section>Portfolio1</section>
			<section>Portfolio2</section>
			<section>Portfolio3</section>
			<section id='Contact'>Contact</section>
		</div>
	);
};

export default App;
