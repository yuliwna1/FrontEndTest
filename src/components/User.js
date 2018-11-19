import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTimes,
	faThumbsUp,
	faComment,
} from '@fortawesome/free-solid-svg-icons';
import { NodeGroup, Animate } from 'react-move';
import { easeQuadOut } from 'd3-ease';


export default class User extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
		};
	}

	showModal(val) {
		const state = {};
		state.showModal = val;
		this.setState(state);
	}

	render() {
		return (
			<div className="box" key={this.props.id}>
				<div onClick={() => this.showModal(true)}>
					<img src={this.props.userImg} alt="user image" />
				</div>

				{this.state.showModal && (
					<div>
						<div
							className="modal-wrapper"
							onClick={() => this.showModal(false)}
						/>
						<Animate
							start={() => ({
								opacity: [0],
								scale: [0],
							})}
							enter={() => ({
								opacity: [1],
								scale: [1],
								timing: {
									duration: 300,
									delay: 200,
									ease: easeQuadOut,
								},
							})}
							update={() => ({
								opacity: [1],
							})}
							leave={() => ({
								opacity: [0],
								scale: [0],
								timing: { duration: 300, ease: easeQuadOut },
							})}
						>
							{({ opacity, scale }) => {
								return (
									<div
										className="modal-content"
										style={{
											transform: ` translate(-50%, -50%) scale(${scale})`,
											opacity,
										}}
									>
										<div className="modal-body flex">
											<FontAwesomeIcon
												icon={faTimes}
												className="close"
												onClick={() =>
													this.showModal(false)
												}
											/>
											<div className="side left">
												<img
													src={this.props.userImg}
													alt="user image"
												/>
											</div>

											<div className="side right">
												<div className="bold">
													Name:{' '}
													<span className="light">
														{
															this.props.userInfo
																.name
														}
													</span>
												</div>
												<div className="bold">
													Gender:{' '}
													<span className="light">
														{
															this.props.userInfo
																.gender
														}
													</span>
												</div>
												<div className="bold">
													Age:{' '}
													<span className="light">
														{
															this.props.userInfo
																.age
														}
													</span>
												</div>
												<div className="bold">
													Phone:{' '}
													<span className="light">
														{
															this.props.userInfo
																.phone
														}
													</span>
												</div>
												<div className="bold">
													Address:{' '}
													<span className="light">
														{
															this.props.userInfo
																.address
														}
													</span>
												</div>
												<div className="bold">
													Registered:{' '}
													<span className="light">
														{
															this.props.userInfo
																.registered
														}
													</span>
												</div>
												<div className="flex">
													<div className="bold">
														<FontAwesomeIcon
															icon={faThumbsUp}
														/>{' '}
														<span className="light">
															{
																this.props
																	.userLikes
															}
														</span>
													</div>
													<div className="bold">
														<FontAwesomeIcon
															icon={faComment}
														/>{' '}
														<span className="light">
															{
																this.props
																	.userComments
															}
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							}}
						</Animate>
					</div>
				)}
			</div>
		);
	}
}

User.propTypes = {
	id: PropTypes.string,
	userImg: PropTypes.string,
	userLikes: PropTypes.number,
	userComments: PropTypes.number,
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		gender: PropTypes.string,
		age: PropTypes.number,
		email: PropTypes.string,
		phone: PropTypes.string,
		address: PropTypes.string,
		registered: PropTypes.string,
	}),
	userTags: PropTypes.array,
};
