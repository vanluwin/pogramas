import React, { Component } from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { Button, IconButton, TextField, Grid } from 'material-ui';

import { VisibilityOff, Send } from 'material-ui-icons';

import { sendMsg } from '../../api'

export default class ChatCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: this.props.view,
            msg: ''
        }
    }

    handleMsg = name => event => {
        this.setState({ [name]: event.target.value });      
    };

    handleSend = () => {
        if(this.state.msg.length > 0){
            console.log(this.state.msg);

            //Evia ao socket
            sendMsg(this.state.msg);

            this.setState({msg: ''})
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
                    
                    <CardActions>
                        <Button variant='raised' size="medium" color="primary">
                            Action
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}