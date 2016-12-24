import React, { Component } from 'react'
import cx from 'classnames';
import styles from './sortFilter.css';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getVerifiedShowreelsAction, searchShowreelsAction } from '../../actions/showreelListActions.js';


class SortFilter extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selected : 0
		}
		this.changeSelected = this.changeSelected.bind(this);
	}

	componentWillReceiveProps (nextProps) {
		if(this.props.query != nextProps.query){
			this.setState({selected : 0});
		}
	}

	changeSelected (id) {
		if (id == this.state.selected) return;
		this.setState({
			selected : id
		});
		switch(this.props.page) {
			case 'home':
				this.props.getVerifiedShowreels(id);
				break;
			case 'search':
				this.props.searchShowreels(this.props.query, id);
				break;
			default :
				break;
		}
	}

	render () {
		return <div className={cx(styles['main'])}>
			<div className={cx(styles['inner'])}>
				<div className={cx(styles['sort-container'])}>
					<ul>
						<li onClick={this.changeSelected.bind(this, 0)} className={cx({[styles['selected']] : this.state.selected == 0})}>Recent</li>
						<li onClick={this.changeSelected.bind(this, 1)} className={cx({[styles['selected']] : this.state.selected == 1})}>Popular</li>
					</ul>
				</div>
			</div>
		</div>
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		getVerifiedShowreels : getVerifiedShowreelsAction,
		searchShowreels : searchShowreelsAction
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(SortFilter);
