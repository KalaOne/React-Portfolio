import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img src={require('../assets/Mustache.jpg')} 
								alt='Avatar' style={{height: '200px', borderRadius: '30%'}}
							/>
						</div>
						<h2 style={{paddingTop: '2em'}}>Kaloyan Valchev</h2>
						<h4 style={{color: 'grey'}}>Developer (Student)</h4>
						<hr style={{borderTop: '3px solod #833fb2', width: '50%'}}/>
						<p>3rd year Comp Sci student at University of East Anglia (UEA) Norwich.
							My experience I varies, due to different tasks from university and personal experiments.
							I have been on 12 months placement at Aviva Norwich, where I've worked on front end projects,
							which introduced me to automated testing as well as React and C#.
						</p>
						<hr style={{borderTop: '3px solod #833fb2', width: '50%'}}/>
						<h5>Address</h5>
						<p>34 Templemere, NR3 4EF, Norwich, United Kingdom</p>
						<h5>Phone</h5>
						<p> (+44) 7731500821</p>
						<h5>Email</h5>
						<a href="mailto:kaloyan.vylchev@gmail.com" target="_top" >kaloyan.vylchev@gmail.com</a>
					</Cell>
					<Cell className='resume-right-col' col={8}>
						<h2>Education</h2>
						<Education
							startYear = { 2016 }
							endYear = { 'ongoing' }
							schoolName = 'University of East Anglia'
							schoolDescription = 'Computing science with year in industry. Degree focused on problem solving and software engineering.'
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Experience</h2>
						<Experience
							startYear = 'Sept 2019'
							endYear = 'Sept 2020'
							jobName = 'Software Engineer Intern | Aviva'
							jobDescription = 'A 12 month internship where I have worked with medium sized teams using SCRUM development. 
							I have worked mainly with Front-End development - HTML/CSS, JS, React, a little Back-End - C# and test automation.'
						/>
						<Experience
							startYear = 'Jul 2017'
							endYear = 'Aug 2019'
							jobName = 'Team Leader | UEA SU Kitchen'
							jobDescription = 'Part time job. Preparing food, managing small team'
						/>
						<Experience
							startYear = 'April 2016'
							endYear = 'Jan 2017'
							jobName = 'Device Engineer | Anovo UK'
							jobDescription = 'Repairing mobile devices. Strong focus problem solving and precision.'
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Skills</h2>
						<Skills
							skill = 'Java'
							progress = {70}
						/>
						<Skills
							skill = 'HTML/CSS'
							progress = {50}
						/>
						<Skills
							skill = 'React'
							progress = {30}
						/>
						<Skills
							skill = 'JavaScript'
							progress = {30}
						/>
						<Skills
							skill = 'C++'
							progress = {30}
						/>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;
