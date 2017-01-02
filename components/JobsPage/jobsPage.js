import React, {Component} from 'react'
import styles from './jobsPage.css';
import cx from 'classnames';
import {Link} from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchJobsAction } from '../../actions/jobsActions.js';
import { isCompleted } from '../../utils/asyncStatusHelper';
import HeroTitle from '../HeroTitle/heroTitle';

class JobsPage extends Component {

	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.fetchJobs();
		document.title = 'Jobs - Renderlist';
	}
	
	render () {
		const jobs = this.props.jobs;
		return <div className={cx(styles[''])}>
			<HeroTitle title='Jobs'/>
			{isCompleted(jobs) ? <div className={cx(styles['content'])}>
				{ jobs.data.map((job) =>
					<div>
						<a href={job.url}>
						<span>{job.company}</span>
						<span>{job.city}</span>
						<span>{job.position}</span>
						</a>
					</div>
				) }	
			</div>	
			: null }
		</div>
	}
}

function mapStateToProps (state) {
	return {
		jobs : state.jobs
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchJobs : fetchJobsAction 
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
