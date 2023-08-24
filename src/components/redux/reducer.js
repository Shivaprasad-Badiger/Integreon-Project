const initialState = {
	emailValRed: '',
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_EMAIL':
			return { ...state, emailValRed: action.payload };
		default:
			return state;
	}
};

export default Reducer;
