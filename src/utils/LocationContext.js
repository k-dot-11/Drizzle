import React, { createContext, Component } from 'react';

export const LocationContext = createContext();

class LocationContextProvider extends Component {
	state = {
		city: 'Ajmer',
		refreshToggle: false
	};

	changeLocation = (location) => {
		this.setState({ city: location, refreshToggle: !this.state.refreshToggle });
	};

	render() {
		return (
			<LocationContext.Provider value={{ ...this.state, changeLocation: this.changeLocation }}>
				{this.props.children}
			</LocationContext.Provider>
		);
	}
}

export default LocationContextProvider;
