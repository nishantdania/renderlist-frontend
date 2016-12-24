import React, { Component } from 'react';
import styles from './searchPage.css';
import cx from 'classnames';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';

import ShowreelGrid from '../ShowreelGrid/showreelGrid';
import SortFilter from '../SortFilter/sortFilter';

import { searchShowreelsAction } from '../../actions/showreelListActions.js';

class SearchPage extends Component {
	constructor (props) {
		super(props);
		this.props.searchShowreels(props.location.query.query);
	}

	componentWillReceiveProps (nextProps) {
		if(this.props.location.query.query != nextProps.location.query.query)
			this.props.searchShowreels(nextProps.location.query.query);
	}
	
	renderShowreelGridTitle () {
		return <div className={cx(styles['sgTitle-outer'])}>
			<div className={cx(styles['sgTitle-inner'])}>
				<span><strong>All Curated Showreels</strong></span>
			</div>
		</div>
	}

	render () {
		const {searchResults} = this.props;
		return <div className={cx(styles['main'])}>
			<SortFilter query={this.props.location.query.query} page='search'/>
			{this.renderShowreelGridTitle()}
			<ShowreelGrid showreelList={searchResults}/>
		</div>
	}
}

function mapStateToProps (state) {
	return {
		searchResults : state.searchResults
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		searchShowreels : searchShowreelsAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
