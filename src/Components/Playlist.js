import React from 'react';
import './css/Playlist.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import styled, {ThemeProvider} from 'styled-components';
import grey from '@material-ui/core/colors/grey';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const card_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e6fafc', contrastText: "#fff"
    }
  },
  h6: {

  }
});

const querystring = require('querystring');
const REDIRECT_BASE = process.env.REACT_APP_BASE_URL + '/analysis?'

class Playlist extends React.Component{
	constructor(props) {
    		super(props);
    		//console.log(props.accessToken)
    		this.state = {
      		name: props.name,
      		img_link: props.img_link,
      		access_token: props.token,
      		id: props.id,
          desc: props.desc
    		};

  		}

  	generateURL(access_token,playlist_id,name) {
  			let payload = {
  				access_token: access_token,
  				id: playlist_id,
          name: name
  			}

  			let url_query = querystring.stringify(payload)

  			return REDIRECT_BASE + url_query


  		}

  	render() {

  			return (
          <a href={this.generateURL(this.state.access_token,this.state.id,this.state.name)}>
            <ThemeProvider theme={card_theme}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style = {{ height: "300", width: "max", paddingTop: '100%'}}
                        image={this.state.img_link}
                        title="Image title"
                      />
                      <CardContent className='playlist-card' style={{height: '100%'}}>
                        <Typography className='playlist-card'
                          theme={card_theme}
                          variant="h6"
                        >
                          {this.state.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
            </ThemeProvider>
          </a>
  				);
  		}
}

export default Playlist
