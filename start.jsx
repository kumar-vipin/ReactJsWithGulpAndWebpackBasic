import React from "react";
import {render} from "react-dom";
// import '../app/theme/test.scss';

class App extends React.Component {

	render () {
		return (
			<div className="mainContainer">
				<h1>Hello!! Test</h1>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));