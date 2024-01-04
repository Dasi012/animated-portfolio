import Sidebar from '../sideBar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

function NavBar() {
	return (
		<>
			<div className='navbar'>
				<Sidebar />
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='wrapper'>
					<span>Lama Dev</span>
					<div className='social'>
						<a href='#'>
							<img src='/facebook.png' alt='facebook' />
						</a>
						<a href='#'>
							<img src='/instagram.png' alt='instagram' />
						</a>
						<a href='#'>
							<img src='/youtube.png' alt='youtube' />
						</a>
						<a href='#'>
							<img src='/dribble.png' alt='dribble' />
						</a>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default NavBar;
