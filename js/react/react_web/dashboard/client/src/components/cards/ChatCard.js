import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Button, IconButton, TextField, Grid, Typography, Chip } from 'material-ui';

import { ChatFeed, Message } from 'react-chat-ui';

import { VisibilityOff, Send, ExpandMore, Delete, Face, DeviceHub } from 'material-ui-icons';

import { sendMsg } from '../../api'

export default class ChatCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: this.props.view,
            msg: '',
            log: []
        }
    }

    handleMsg = name => event => {
        this.setState({ [name]: event.target.value });      
    };

    handleSend = () => {
        let msg = this.state.msg;
        if(msg.length > 0){
            console.log(msg);

            //Evia ao socket
            sendMsg(msg);

            //Deixa a mensagem salva no log 
            let log = this.state.log.slice();
            log.push({author: 'You', txt: msg})
            this.setState({ log })

            this.setState({ msg: '' });
        }
    };

    handleHide = card => {
        let update = !this.state.show;
        this.setState({ show: update }); 
        this.props.callback(card);
    };

    componentWillReceiveProps(update) {  
        let show = update.show;             
        this.setState({ show });      
    }

    render() {
        if(!this.state.show){
            return null;
        }
        return(
            <Grid item xs={4}>
                <Card>
                    <CardHeader 
                        title="Chat" 
                        action={
                            <IconButton>
                                <VisibilityOff onClick={() => this.handleHide('chat')} />
                            </IconButton>
                        }
                    /> 

                    <CardContent>
                        <form>
                            <TextField
                                id="msg"
                                label="Insira uma mensagem"
                                value={this.state.msg}
                                onChange={this.handleMsg('msg')}
                            />
                            <Button onClick={this.handleSend} variant="raised" size="small" color="secondary" style={{marginLeft: 10}}>
                                Send
                                <Send/>
                            </Button>
                        </form>
                    </CardContent>

                    <CardContent>
                        <ExpansionPanel>

                            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                <Typography>Chat log</Typography>
                            </ExpansionPanelSummary>

                            <ExpansionPanelDetails>
                                <List>
                                    {this.state.log.map( entry => {
                                        return(
                                            <ListItem key={ this.state.log.indexOf(entry) } dense>
                                                <ListItemIcon>
                                                    {entry.author === 'You' ? <Face/> : <DeviceHub/>}
                                                </ListItemIcon>
                                                <ListItemText primary={<Chip label={entry.txt}/>}/>
                                                <IconButton aria-label="Delete">
                                                    <Delete/>
                                                </IconButton>
                                            </ListItem>                                            
                                        );
                                    })}
                                </List>
                            </ExpansionPanelDetails>

                        </ExpansionPanel>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}