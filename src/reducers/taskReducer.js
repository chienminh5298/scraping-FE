let initialState = [];

const myReducer = (state = initialState, action) => {
	let temp;
	switch (action.type) {
		case 'ADD_TASK':
			temp = [...state];
			temp.push(action.payload);
			return [...temp];
		case 'UPDATE_TASK':
			temp = [...state];
			let newTask = action.payload;
			for (let i = 0; i < temp.length; i++) {
				if (temp[i].platform === newTask.platform && temp[i].value === newTask.value) {
					if (newTask.status === 'prepair') temp[i] = { ...newTask };
					else {
						temp[i]['items'] += newTask.items;
					}
					break;
				}
			}
			return [...temp];
		default:
			return [...state];
	}
};

export default myReducer;
