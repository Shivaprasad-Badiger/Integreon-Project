const initialState = {
	email: '',
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return { ...state, email: action.payload };
		default:
			return state;
	}
};

export default Reducer;
