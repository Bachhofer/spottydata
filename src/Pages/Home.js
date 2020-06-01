import React from 'react';
import './css/Home.css';
import styled from 'styled-components'

import {
Typography,
Button,
} from '@material-ui/core';

const LandingText = styled(Typography)`
	font-weight: 400 !important;
`

const ButtonWrapper = styled.a`
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
    color: inherit;
    height:100%;
    text-decoration: none;
    &:focus {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
	}
	&:hover {
        text-decoration: none;
    }
`

const NewButton = styled(Button)`
  && {
	margin: 10px;
	color: inherit;
	width: 150px;
	height: 50px;
	border-radius: 0px;
	border: solid 1px white;
	box-shadow: 4px 4px;
	&:hover {
		color: white;
		transform: translate(1px,1px);
		opacity: 0.7;
		text-decoration: none;
		box-shadow: 2px 2px;
    }
  }
`

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
	        <LandingText variant="h2">Welcome to SpottyData</LandingText>
	        <br></br>
	        <p className="lead">This site will analyze the songs in your Spotify playlists and display the data to you</p>
	        <br></br>
			<ButtonWrapper href={authorize_url}>
              <NewButton variant="outlined">Lets Go</NewButton>
            </ButtonWrapper>
			<ButtonWrapper href="https://paypal.me/nathanleroy?locale.x=en_US">
              <NewButton variant="outlined">Buy me a coffee ☕</NewButton>
            </ButtonWrapper>
			<ButtonWrapper href="https://github.com/NLeRoy917/spottydata">
              <NewButton variant="outlined">GitHub  🚀</NewButton>
            </ButtonWrapper>
	  		{/* <a className="btn-lg btn-light" style={{marginRight: '5px', marginLeft: '5px'}}href={authorize_url}>Let's Go</a>
			<a className="btn-lg btn-light" style={{marginRight: '5px', marginLeft: '5px'}}href="https://paypal.me/nathanleroy?locale.x=en_US">Buy me a coffee ☕</a>
			<a className="btn-lg btn-light" style={{marginRight: '5px', marginLeft: '5px'}}href="https://github.com/NLeRoy917/spottydata">GitHub 🚀</a> */}
	      </div>
	    </div>
	  </div>
	</header>
)
}


export default Home