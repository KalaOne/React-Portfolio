import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                <div style={{display: 'flex'}}>
                    <Cell col={3}>
                        {this.props.skill}
                    </Cell>
                    <Cell col={9}>
                        <ProgressBar style={{margin: 'auto'}}
                        progress={this.props.progress} />
                    </Cell>
                </div>    
                </Cell>
            </Grid>
        )
    }
}

export default Skills;