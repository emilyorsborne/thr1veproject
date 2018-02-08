import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import {Glyphicon} from 'react-bootstrap'
import {Jumbotron} from 'react-bootstrap'


class Venues extends Component {

	render(){
		const venues = this.props.venues || []

		return (
			<div className="row">
				<div className="col-md-6 col-md-6">
					<ol>
						{ venues.map((venue, i) => {
								return (
									<li key={venue.id}>
										<div style={{padding:12, marginBottom:12,background:'#f9f9f9'}}>
											<h4 style={{marginBottom:0}}>{venue.name}</h4>
											<span>{venue.location.address}</span><br />
											<a href={venue.url}>{venue.url}</a>
										</div>
									</li>
								)
							})
						}
					</ol>

				</div>
                 <div className="col-md-6 col-md-6">
                     <div style={{background:'#fff'}}>
                         <Jumbotron>
                            <h1> <Glyphicon glyph="pushpin"/></h1>
                                </Jumbotron>
                        </div> 
                    </div>
			     </div>

		)
	}	
}

const stateToProps = (state) => {
	return {
		venues: state.venue.venues
	}
}

export default connect(stateToProps)(Venues)




