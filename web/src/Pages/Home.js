import React, { useState } from 'react';
import styled from 'styled-components'
import { isMobile } from 'react-device-detect';

import Typist from 'react-typist';
import './css/Typist.css'

import Layout from '../Components/Layout'

import {
Typography,
Grid
} from '@material-ui/core';

import SDButton from '../Components/SDButton';

const AnalysisText = styled.p`
	font-size:1.32rem;
	display: inline;
`

const Footer = styled.footer`
	margin-left:200px;
	margin-right:200px;
	opacity: 0.9;
	@media (max-width: 768px) {
		margin:5px;
		paddin-bottom:10px;
		font-size: 0.7rem;
  }

`

const FooterLink = styled.a`
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

const LandingText = styled(Typography)`
	font-weight: 400 !important;
`

const ButtonWrapper = styled.a`
    color: inherit;
    height:100%;
    text-decoration: none !important;
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

const TypistWrapper = styled.div`
	min-height: 50px;

`

const HoverAlertWrapper = styled.div`
	min-height: 50 px;
`

const HoverAlert = styled.p`
	font-size: 1.5rem;
	text-transform: none;
	opacity: 1;
	animation: fadeIn ease s;
	-webkit-animation: fadeIn ease 1s;


	@keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}

	@-moz-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}

	@-webkit-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}

	@-o-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}

	@-ms-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
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
	const [letsGo, setLetsGo] = useState(false)
	const [gitHub, setGitHub] = useState(false)
	const [donate, setDonate] = useState(false)

const letsGoHoverChange = () => {

	setLetsGo(!letsGo)
}

const gitHubHoverChange = () => {

	setGitHub(!gitHub)
}

const donateHoverChange = () => {

	setDonate(!donate)
}

return(
	<>
	<Layout>
	<Grid container
		direction="column"
		justify="center"
		alignItems="center"
		style={{width: '100%', height: isMobile ? '80vh' : '90vh'}}
	>
	<Grid item>
	  <LandingText variant="h2">Welcome to SpottyData</LandingText>
	      <br></br>
		  <TypistWrapper>
			<Typist
			avgTypingDelay={70}
        	startDelay={1000}
        	cursor={{blink:true,hideWhenDone: true,hideWhenDoneDelay: 1000,}}
			>
			<AnalysisText className="lead">Analyze your playlist:</AnalysisText>
				<Typist.Delay ms={500} />
					<AnalysisText>&nbsp;Tempo.</AnalysisText>
				<Typist.Delay ms={500} />
				<Typist.Backspace count={6} delay={200}/>
				<Typist.Delay ms={500} />
					<AnalysisText>&nbsp;Modality.</AnalysisText>
				<Typist.Delay ms={500} />
				<Typist.Backspace count={9} delay={200}/>
				<Typist.Delay ms={500} />
					<AnalysisText>&nbsp;Lyrics.</AnalysisText>
				<Typist.Delay ms={500} />
				<Typist.Backspace count={9} delay={200}/>
				<Typist.Delay ms={500} />
					<AnalysisText><em>&nbsp;For free.</em></AnalysisText>
			</Typist>
		  </TypistWrapper>
	        <ButtonWrapper onMouseEnter={() => {letsGoHoverChange()}} onMouseLeave={() => letsGoHoverChange()} href={authorize_url}>
              <SDButton variant="outlined">Lets Go</SDButton>
            </ButtonWrapper>
			<ButtonWrapper onMouseEnter={() => {gitHubHoverChange()}} onMouseLeave={() => gitHubHoverChange()} href="https://github.com/NLeRoy917/spottydata">
              <SDButton variant="outlined">GitHub</SDButton>
            </ButtonWrapper>
	        <ButtonWrapper onMouseEnter={() => {donateHoverChange()}} onMouseLeave={() => donateHoverChange()} href="https://paypal.me/nathanleroy?locale.x=en_US">
              <SDButton variant="outlined">Donate</SDButton>
            </ButtonWrapper>
			{isMobile ? '' : 
			<HoverAlertWrapper style={{minHeight: '75px'}}>
			<br></br>
			<div>
			{letsGo ? <HoverAlert>Analyze a playlist <span style={{fontSize: '1.3rem'}}> &nbsp;&nbsp;➡️</span></HoverAlert> : ''}
			{gitHub ? <HoverAlert>View source on GitHub <span style={{fontSize: '1.3rem'}}> &nbsp;&nbsp;&nbsp;🚀</span></HoverAlert> : ''}
			{donate ? <HoverAlert>$5 pays for one week of server time <span style={{fontSize: '1.5rem'}}>&nbsp;&nbsp;💻</span></HoverAlert> : ''}
			</div>
			</HoverAlertWrapper>
			}
	      <br></br>

		</Grid>
	</Grid>
	<Footer>
	  <Grid container
	  	direction="row"
		justify="space-between"
		alignItems="center"
		style={{width: '100%', textAlign: 'center'}}
		>
			<Grid item lg={4} xs={11} style={{width: '100%'}}>
				Created by <FooterLink href="https://twitter.com/NathanJLeRoy">Nathan LeRoy</FooterLink>
			</Grid>
			<Grid item lg={4} xs={11} style={{width: '100%'}}>
				© 2020
			</Grid>
			<Grid item lg={4} xs={11} style={{width: '100%'}}>
				<FooterLink href="https://github.com/NLeRoy917/spottydata/issues">Report an issue</FooterLink>
			</Grid>
		</Grid>
	</Footer>
	</Layout>
	</>
)
}


export default Home