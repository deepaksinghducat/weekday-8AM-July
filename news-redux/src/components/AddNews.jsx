import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'

function AddNews() {
	const [openAddNewsComponent, setOpenAddNewsComponent] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDesciption] = useState('');
	const [path, setPath] = useState('');

	const dispatch = useDispatch();

	const toggleAddNewsComponent = (event) => {
		event.preventDefault();

		setOpenAddNewsComponent(!openAddNewsComponent);
	}

	const addNewsHandler = (event) => {
		event.preventDefault();

		dispatch({ type: 'add-news', payload: {title, path, description}});
		setTitle('');
		setDesciption('');
		setPath('');

		setOpenAddNewsComponent(false)
	}

	return (
		<div>
			<button className="btn btn-primary" onClick={toggleAddNewsComponent}>Add</button>

			{openAddNewsComponent && (
				<form className="mt-4" onSubmit={addNewsHandler}>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							id="title"
							placeholder="Enter News Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="Path" className="form-label">
							Path
						</label>
						<input
							type="text"
							className="form-control"
							id="Path"
							placeholder="Enter News Image Path"
							value={path}
							onChange={(e) => setPath(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<textarea
							className="form-control"
							id="description"
							rows="3"
							value={description}
							onChange={(e) => setDesciption(e.target.value)}
						></textarea>
					</div>
					<button className="btn btn-primary">Add News</button>
				</form>
			)}
		</div>
	);
}

export default AddNews;
