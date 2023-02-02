export const add_task = (data) => {
	return {
		type: 'ADD_TASK',
		payload: data,
	};
};

export const update_task = (data) => {
	return {
		type: 'UPDATE_TASK',
		payload: data,
	};
};
