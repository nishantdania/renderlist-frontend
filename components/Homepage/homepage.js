import React, { Component } from 'react';
import styles from './homepage.css';
import cx from 'classnames';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';

import {INIT, LOADING, SUCCESS, ERROR, isLoading, isSuccess} from '../../utils/asyncStatusHelper';
import ButtonPrimary from '../ButtonPrimary/buttonPrimary';
import ShowreelGrid from '../ShowreelGrid/showreelGrid';
import FeaturedShowreelsGrid from '../FeaturedShowreelsGrid/featuredShowreelsGrid';
import SortFilter from '../SortFilter/sortFilter';

import { getVerifiedShowreelsAction } from '../../actions/showreelListActions.js';

class Homepage extends Component {
	constructor (props) {
		super(props);
		props.getVerifiedShowreels();
	}

	componentDidMount () {
		document.title = 'RenderList - Finest showreels from around the world';
	}

	renderSubtitle () {
		return <div>
			<div className={cx('row')}>
				<div className={cx('col-12')}>
					<div className={cx(styles['subtitle'])}>
						<div className={cx(styles['subtitle-text'])}>
							Finest showreels from around the globe. Got one yourself ?
						</div>
						<div className={cx(styles['subtitle-button'])}>
							<Link to='/addStudio'><ButtonPrimary className={cx(styles['button-custom-st'])} title='Add showreel'/></Link>
						</div>
					</div>
				</div>	
			</div>
		</div>
	}

	renderCommunityBanner () {
		return <div>
			<div className={cx('row', styles['banner-main'])}>
				<div className={cx(styles['banner-l1'])}><span>1800 seconds</span> rendered</div>
				<div className={cx(styles['banner-l2'])}>Be a part of the RenderList Community</div>
				<div className={cx(styles['banner-button'])}>
					<Link to='/addStudio'><ButtonPrimary title='Add showreel'/></Link>
				</div>
			</div>
		</div>
	}	
	
	renderShowreelGridTitle () {
		return <div className={cx(styles['sgTitle-outer'])}>
			<div className={cx(styles['sgTitle-inner'])}>
				<span><strong>All Curated Showreels</strong></span>
			</div>
		</div>
	}

	render () {
		const {showreelList} = this.props;
		return <div className={cx(styles['main'])}>
			{this.renderSubtitle()}	
			<FeaturedShowreelsGrid/>
			<SortFilter page='home'/>
			{this.renderShowreelGridTitle()}
			<div className={cx('data-container')}>
				{isLoading(showreelList) ? <div className={cx('loading')}></div> : null}
				<ShowreelGrid showreelList={showreelList}/>
			</div>
			{this.renderCommunityBanner()}
		</div>
	}
}

function mapStateToProps (state) {
	return {
		userState : state.userState,
		showreelList : state.showreelList
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		getVerifiedShowreels : getVerifiedShowreelsAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
