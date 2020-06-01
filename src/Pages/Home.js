import React from 'react';
import './css/Home.css';

const querystring = require('querystring');
const base_url =  'https://accounts.spotify.com/authorize?'
const payload = {
	client_id: '0ca7dd0007fd4ff2a34c3aab07379970',
	response_type: 'code',
	scope: 'playlist-read-private playlist-read-collaborative user-top-read',
	redirect_uri: process.env.REACT_APP_REDIRECT_URI,
	show_dialog: true
}

const authorize_url = base_url + querystring.stringify(payload)

const Home = () => {

return(
	<header className="masthead home-background">
	  <div className="container h-100">
	    <div className="row h-100 align-items-center">
	      <div className="col-12 text-center">
	        <h1 className="font-weight-bold">Welcome to SpottyData</h1>
	        <br></br>
	        <p className="lead">This site will analyze the songs in your Spotify playlists and display the data to you</p>
	        <br></br>
	  		<a className="btn-lg btn-light" style={{marginRight: '5px', marginLeft: '5px'}}href={authorize_url}>Let's Go</a>
			<a className="btn-lg btn-light" style={{marginRight: '5px', marginLeft: '5px'}}href="https://paypal.me/nathanleroy?locale.x=en_US">Buy me a coffee ☕</a>
			<a className="btn-lg btn-light" style={{marginRight: '5px', marginLeft: '5px'}}href="https://github.com/NLeRoy917/spottydata">GitHub 🚀</a>
	      </div>
	    </div>
	  </div>
	</header>
)
}


export default Home