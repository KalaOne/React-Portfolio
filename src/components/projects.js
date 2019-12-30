import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super( props );
		this.state = {
			activeTab: 0 };
	}

	toggleCategories = () => {
		if( this.state.activeTab === 0 ) {
			return (
				<div className='projects-grid'>
					<Card shadow={4} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color:'#000000', height: '175px', background: 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'}}>React Project #1</CardTitle>
						<CardText>
							Dummy text ftw, Gerry is da best! It's her birthday soon! Wooohooo!
						</CardText>
						<CardActions border>
							<Button colored>Link</Button>
							<Button colored>Link</Button>
							<Button colored>Link</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}></CardMenu>
					</Card>

					<Card shadow={4} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color:'#000000', height: '175px', background: 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'}}>React Project #2</CardTitle>
						<CardText>
							I love her! It's her birthday soon! Wooohooo!
						</CardText>
						<CardActions border>
							<Button colored>Link</Button>
							<Button colored>Link</Button>
							<Button colored>Link</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}></CardMenu>
					</Card>

					<Card shadow={4} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color:'#000000', height: '175px', background: 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'}}>React Project #3</CardTitle>
						<CardText>
							It's her birthday soon! Wooohooo!
						</CardText>
						<CardActions border>
							<Button colored>Link</Button>
							<Button colored>Link</Button>
							<Button colored>Link</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}></CardMenu>
					</Card>
				</div>
			)
		}
		else if ( this.state.activeTab === 1 ) {
			return (
				<div><h1>Second tab</h1></div>
			)
		}
		else if ( this.state.activeTab === 2 ) {
			return (
				<div><h1>Third tab</h1></div>
			)
		}
	}
	render() {
		return(
			<div  className='category-tabs'>
				<Tabs activeTab = { this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>React</Tab>
					<Tab>React</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className='content'>{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			 </div>
		)
	}
}

export default Projects;
