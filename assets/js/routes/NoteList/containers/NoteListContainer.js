import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NoteListView from '../components/NoteListView'
export default class NoteListContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<NoteListView />
		)
	}
}