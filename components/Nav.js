import requests from '../utils/requests';

const Nav = () => {
	return (
		<nav>
			<div className=''>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2>{title}</h2>
				))}
			</div>
		</nav>
	);
};

export default Nav;
