const fetchTaskData = async (): Promise<any> => {
	try {
		// const response = await fetch('https://dnvr-zero-be.vercel.app/task');
        const response = await fetch('http://localhost:8000/task');
		if (!response.ok) {
			throw new Error('Something went wrong. Please try again!');
		}
		const json = await response.json();
		return json;
	} catch (error) {
		console.log('ERROR!!!', error);
	}
};

export default fetchTaskData;
