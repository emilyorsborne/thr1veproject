import React, { Component } from 'react'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../actions'

class Nav extends Component {

	constructor(){
		super()
		this.state = {
			zipCode: '',
			filter: 'food'
		}
	}

	searchVenues(event){
		event.preventDefault()

		console.log('searchVenues: '+this.state.zipCode)
		const url = 'https://api.foursquare.com/v2/venues/search'

		const params = {
			v: '20140806',
			near: this.state.zipCode, // zip code, new york, chicago,
			client_id: 'AMQLG0KMTLNB1H02SYVGG4UMQFKN4E3TO5CACKBXWCYNFVS5',
			client_secret: '5H3OLGHVCI5HBNAG2E2L0NVKCZUSKSIEKRRRXCFMD0MO02HE',
			query: this.state.filter
		}

		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
			const venues = response.body.response.venues
			this.props.venuesReceived(venues)

		})
	}

	changeFilter(event){
		console.log('changeFilter: '+event.target.value)
		this.setState({
			filter: event.target.value
		})


	}

	updateZipcode(event){
//		console.log('updateZipcode: '+event.target.value)
		// this.state['zipCode'] = event.target.value // WRONG!

		// RIGHT!
		this.setState({
			zipCode: event.target.value
		})
	}

	render(){
		return (
			<nav className="navbar navbar-default">
			    <div className="container-fluid">
				    <div className="navbar-header">
						<form className="navbar-form navbar-left" role="search">
							<div className="form-group">
								<input onChange={this.updateZipcode.bind(this)} className="form-control" type="text" placeholder="Zip Code" />
								<select id="filter" onChange={this.changeFilter.bind(this)} style={{marginLeft:12}} className="form-control">
									<option value="Nutritionist">Nutritionist</option>
									<option value="Health Food Store">Health Food Store</option>
									<option value="Supplement Shop">Supplement Shop</option>
									<option value="Community Center">Community Center</option>
                                    <option value="Spiritual Center">Spiritual Center</option>
                                    <option value="College & University">College & University</option>
                                    <option value="Professional & Other Places">Professional & Other Places</option>
									<option value="fitness">Fitness</option>
                                    <option value="Yoga Studio">Yoga Studio</option>
                                    <option value="Athletics & Sports">Athletics & Sports</option>
                                    <option value="Weight Loss Center">Weight Loss Center</option>
								</select>
							</div>
							<button style={{marginLeft:12}} onClick={this.searchVenues.bind(this)} className="btn btn-default">Search</button>
						</form>
				    </div>
			    </div>
			</nav>

		)
	}
}

const stateToProps = (state) => {
	return {
		venues: state.venue
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
	}
}


export default connect(stateToProps, dispatchToProps)(Nav)





