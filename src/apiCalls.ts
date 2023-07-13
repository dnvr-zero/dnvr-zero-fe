export const fetchTaskData = async (): Promise<any> => {
	try {
		const response = await fetch('http://localhost:8000/tasks');
		// const response = await fetch('https://dnvr-zero-be.vercel.app/tasks');

		if (!response.ok) {
			throw new Error('Something went wrong. Please try again!');
		}
		const json = await response.json();

		return json;
	} catch (error) {
		console.log('ERROR!!!', error);
	}
};

// export const fetchPlayersData = async (): Promise<any> => {
// 	try {
// 		const response = await fetch('https://dnvr-zero-be.vercel.app/players');
// 		if (!response.ok) {
// 			throw new Error('Something went wrong. Please try again!');
// 		}
// 		const json = await response.json();
// 		return json;
// 	} catch (error) {
// 		console.log('ERROR!!!', error);
// 	}
// };
