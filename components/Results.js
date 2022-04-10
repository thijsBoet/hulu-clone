import Thumbnail from './Thumbnail';

const Results = ({ results }) => {

	return (
		<div className='flex-wrap justify-center my-10 x-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex'>
			{results.results.map(result => (
				<Thumbnail key={result.id} result={result} />
			))}
		</div>
	);
};

export default Results;