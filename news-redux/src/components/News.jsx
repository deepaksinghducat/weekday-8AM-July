import React from 'react'
import CardUi from './CardUi'

import { useSelector } from 'react-redux'

function News() {

	const news = useSelector(state => state.news)

	return (
		<div className="row">
			{
				news.length > 0 && news.map((item,index) => (
					<div className="col-xs-12 col-md-4 mt-2" key={index}>
						<CardUi item={item}/>
					</div>
				)) 
			}
			
		</div>
	)
}

export default News