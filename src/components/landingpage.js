import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Grid className='landing-grid'>
					<Cell col={12}>
						<img src={require('../assets/StrobelightCV.jpg')} alt='avatar' className='avatar-img'/>
						<div className='main-content-text'>
							<h1>Kaloyan Valchev</h1>

							<hr/>
							<p>HTML/CSS | JavaScript | React | Java | C++ | Python | MySQL</p>

							<div className='social-links'>
								{/* LinkedIn */}
								<a href='https://www.linkedin.com/in/k-val/' rel='noopener noreferrer' target='_blank'>
									<i className='fa fa-linkedin-square' aria-hidden='true' />
								</a>
								{/* GithHub */}
								<a href='https://github.com/KalaOne' rel='noopener noreferrer' target='_blank'>
									<i className='fa fa-github-square' aria-hidden='true' />
								</a>
								{/* Random
								<a href='http://google.co.uk' target='_blank'>
									<i className='fa fa-linkedin-square' aria-hidden='true' />
								</a> */}
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;
