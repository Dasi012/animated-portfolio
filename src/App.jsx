import './app.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';

const App = () => {
	return (
		<div>
			<section id='Homepage'>
				<NavBar />
				<Hero />
			</section>
			<section id='Portfolio'>Portfolio</section>
			<section>Services</section>
			<section id='Parallax'>
				<Parallax />
			</section>
			<section>Portfolio1</section>
			<section>Portfolio2</section>
			<section>Portfolio3</section>
			<section id='Contact'>Contact</section>
		</div>
	);
};

export default App;
