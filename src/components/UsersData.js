import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import testData from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearch,
} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar';
import User from './User';


class UsersData  extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			query: ''
		}
	}

	componentDidMount() {
		this.setState({data: testData})
	}

	handleChange(e) {
		this.setState({query: e.target.value})
	}

	// onSubmit(e) {
	// 	e.preventDefault();
	// 	const query = this.state.query;
	// 	const searchResultsData = filterByName(query);

	// }


	render() {
		const {data, query} = this.state;
		return (
			<div>

				<form>
					<div className="flex">
						<input
							placeholder="Search by Name"
							onChange={(event) => this.handleChange(event)}
						/>
					</div>

				</form>

				<div className="flex">

					{data.filter((el) =>
						!query || el.user.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
					.map((item, key) => {
						return (
							<User
								key={key}
								id={item._id}
								userImg={item.picture}
								userLikes={item.likes}
								userComments={item.comments} 
								userInfo={item.user} 
							/>
						)
					})}
				</div>
			</div>
		)
	}
}


export default UsersData;