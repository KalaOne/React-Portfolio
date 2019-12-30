import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
	render() {
		return(
			<div className = 'contact-body'>
				<Grid className='contact-grid'>
					<Cell col={6}> 
						<h2>Kaloyan Valchev</h2>
						<img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
						alt='Avatar'
						style={{height: '250px'}}/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>There are many variations of passages of Lorem Ipsum available,
						but the majority have suffered alteration in some form, by injected humour, 
						or randomised words which don't look even slightly believable. 
						If you are going to use a passage of Lorem Ipsum, 
						you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
					</Cell>
					<Cell col={6}> 
						<h2>Contact me</h2>
						<hr/>
						<div className='contact-list'>
							<List>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
										<i className='fa fa-phone-square' aria-hidden='true'/>
										(+44) 7731500821
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
										<i className='fa fa-envelope' aria-hidden='true'/>
										<a href="mailto:kaloyan.vylchev@gmail.com" target="_top" >kaloyan.vylchev@gmail.com</a>
									</ListItemContent>
								</ListItem>

							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;
