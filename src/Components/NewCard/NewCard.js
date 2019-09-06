import React, { Component } from 'react';
import generate from 'shortid';
import { fetchAddNote } from '../../Api/fetch/fetchAddNote';
import { fetchEditNote } from '../../Api/fetch/fetchEditNote';
import { fetchNote } from '../../Api/fetch/fetchNote';
import { Link } from 'react-router-dom';

export class NewCard extends Component {
	state = { title: '', listItem: '', notes: [] };

	componentDidMount () {
		this.grabInfo(this.props._id);
	}

	grabInfo = async id => {
		if (id) {
			const response = await fetchNote(id);
			const { title, notes } = response;
			this.setState({
				title,
				notes: notes
			});
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleComplete = event => {
		const { notes } = this.state;

		const togglecomplete = notes.find(note => note._id === event);
		togglecomplete.completed = !togglecomplete.completed;

		this.setState({ notes });
	};

	handleKeyPress = () => {
		const { listItem, notes } = this.state;
		const newNote = {
			message: listItem,
			completed: false
		};

		this.setState({
			notes: [ ...notes, newNote ],
			listItem: ''
		});
	};

	handleSaveNote = id => {
		const { title, notes } = this.state;
		if (id) {
			const note = { _id: id, title, notes };
			const updated = { title, notes };
			fetchEditNote(note, updated);
		} else {
			fetchAddNote(title, notes);
		}
	};

	deleteListItem = noteId => {
		const notes = this.state.notes.filter(note => note._id !== noteId);
		this.setState({ notes });
	};

	editListItem = (noteId, e) => {
		const { notes } = this.state;
		const note = notes.find(n => n._id === noteId);
		note.message = e.target.value;
		this.setState({ notes });
	};

	render () {
		const { notes } = this.state;
		let todos = notes.filter(note => !note.completed).map(incomplete => {
			return (
				<section key={generate()} className="note-item-component">
					<div className="unchecked" id={incomplete._id} onClick={() => this.handleComplete(incomplete._id)} />
					<input
						className="todo"
						data-test="todo"
						value={incomplete.message}
						onChange={e => this.editListItem(incomplete._id, e)}
					/>
					<i
						className="material-icons delete"
						data-test="delete-button-incomplete"
						onClick={() => this.deleteListItem(incomplete._id)}>
						delete_forever
					</i>
				</section>
			);
		});

		let complete = notes.filter(note => note.completed).map(complete => {
			return (
				<section key={complete.id} className="note-item-component">
					<div className="checked" id={complete._id} onClick={() => this.handleComplete(complete._id)} />
					<input
						className="completed todo"
						data-test="completed"
						value={complete.message}
						onChange={e => this.editListItem(complete._id, e)}
					/>
					<i
						className="material-icons"
						data-test="delete-button-complete"
						onClick={() => this.deleteListItem(complete._id)}>
						delete_forever
					</i>
				</section>
			);
		});

		return (
			<div className="new-card-component">
				<form className="new-card-form">
					<input
						id="title"
						type="text"
						name="title"
						className="note-title"
						value={this.state.title}
						placeholder="Title"
						onChange={e => this.handleChange(e)}
					/>
					<section className="add-new-note">
						<div className="plus" />
						<input
							type="text"
							name="listItem"
							className="list-item"
							value={this.state.listItem}
							placeholder="List Item"
							data-test="enter-item"
							onChange={e => this.handleChange(e)}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									this.handleKeyPress();
								}
							}}
						/>
					</section>
				</form>
				{todos}
				{complete}
				{this.state.notes.length ? (
					<section className="new-note-btns">
						<button className="save-note" data-test="save-note" onClick={() => this.handleSaveNote(this.props._id)}>
							Save note
						</button>
						<Link to={'/'}>
							<button className="save-note" data-test="return-to-notes">
								Return to all notes
							</button>
						</Link>
					</section>
				) : null}
			</div>
		);
	}
}

export default NewCard;
