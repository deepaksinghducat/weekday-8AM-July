import { createStore } from 'redux'

const NewsReducer = (state = { news: [] }, action) => {
	
	if (action.type === 'add-news') {

		const news = [
			...state.news,
			action.payload
		]

		return {
			news
		}
	}

	return state
}

const store = createStore(NewsReducer);

export default store;