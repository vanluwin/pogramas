import React, { Component } from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { Button, IconButton, Typography, TextField, Switch, FormControlLabel, FormControl, FormGroup, InputLabel, Select, Input, Dialog, DialogTitle, DialogContent, MenuItem, DialogActions } from 'material-ui';

import { VisibilityOff, Send } from 'material-ui-icons';

const styles = ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: 15,
        minWidth: 120,
        padding: 5
    }
});
  
class ChatCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: ''
        }
    }

    handleMsg = name => event => {
        this.setState({ [name]: event.target.value });      
    };

    handleSend = () => {
        if(this.state.msg.length > 0){
            console.log(this.state.msg);
            this.setState({msg: ''})
        }
    };

    handleHide = event => {
      console.log(event.target);      
    };

    render() {
        return(
            <Card>
                <CardHeader 
                    title="Chat" 
                    action={
                        <IconButton>
                            <VisibilityOff onClick={this.handleHide} />
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
        );
    }
}

class AddBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            btn_pin: '',
            btn_name: '',
            btn_state: false
        };
        
    }    

    handleChange = name => event => {    
        this.setState({ [name]: event.target.value });
    };

    handleState = name => event => {        
        this.setState({ [name]: event.target.checked });
    };

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
        this.setState({ open: false });
    };

    createBtn = () => {

        this.props.callback({
            name: this.state.btn_name,
            pin: this.state.btn_pin,
            state: this.state.btn_state
        });
        
        this.setState({
            open: false,  
            btn_pin: '',
            btn_name: '',
            btn_state: false
            
        });
    }
  
    render() {  
      return (
        <div>
            <Button variant='raised' size="medium" color="primary" onClick={this.handleClickOpen}>
                Add Button
            </Button>

            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={this.state.open}
                onClose={this.handleClose}
            >
                <DialogTitle>Criar botão</DialogTitle>

                <DialogContent>
                    <form style={styles.root}>
                        <FormControl style={styles.formControl}>
                            <InputLabel>Rótulo</InputLabel>
                            <Input 
                                id="btn_name" 
                                onChange={this.handleChange('btn_name')}
                            />
                        </FormControl>

                        <FormControl style={styles.formControl}>
                            <InputLabel>Pino</InputLabel>
                            <Select
                                value={this.state.btn_pin}
                                onChange={this.handleChange('btn_pin')}
                                input={<Input id="btn_pin" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControlLabel
                            control={
                                <Switch
                                    value="btn_state"
                                    color="secondary"
                                    checked={this.state.btn_state}
                                    onChange={this.handleState('btn_state')}
                                />
                            }
                            label="Estado"
                            style={{margin: 10}}
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>

                    <Button onClick={this.createBtn} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
    }
}

class EditBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            btn: ''
        };
        
    }  

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleState = name => event => {        
        this.setState({ [name]: event.target.checked });
    };

    handleChange = name => event => {   
        let btn = this.props.btns[event.target.value];
        this.setState({ [name]: btn.name }, _ => console.log(this.state));

        
    };

    render() {
        return(
            <div>
                <Button variant='raised' size="medium" color="primary" style={{margin: 5}} onClick={this.handleClickOpen}>
                    Edit
                </Button>

                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Editar botão</DialogTitle>

                    <DialogContent>
                        <form style={styles.root}>
                            <FormControl style={styles.formControl}>
                                <InputLabel>Botão</InputLabel>
                                <Select
                                    value={this.state.btn}
                                    onChange={this.handleChange('btn')}
                                    input={<Input id="editar_btn" />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.btns.map( btn => {
                                        return(
                                            <MenuItem key={btn.key} value={btn.key}>{btn.name}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl> 
                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button onClick={this.handleClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
  
class KeyboardCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btns: []
        }
    }

    insertBtn = btn => {
        let updateBtns = this.state.btns.slice();
        updateBtns.push({key: updateBtns.length, ...btn});

        this.setState({ btns: updateBtns });
    };

    handleKetboardSwitch = btn => {
        let updateBtns = this.state.btns.slice();
        updateBtns[btn.key] = {...btn, state: !btn.state};

        this.setState({ btns: updateBtns });
       
    };

    render() {
        return(
            <Card>
                <CardHeader 
                    title="Keyboard"
                    action={
                        <IconButton>
                            <VisibilityOff />
                        </IconButton>
                    }
                />
                
                <CardContent>
                    <FormControl component="fieldset">
                        <FormGroup>
                            {this.state.btns.map( btn => {
                                return(
                                    <FormControlLabel
                                        key={btn.key}
                                        control={
                                        <Switch
                                            checked={btn.state}
                                            pin={btn.pin}
                                            onChange={() => this.handleKetboardSwitch(btn) }
                                        />
                                        }
                                        label={btn.name}
                                        />
                                );
                            })}
                        </FormGroup>
                    </FormControl>
                </CardContent>

                <CardActions>
                    <EditBtn btns={this.state.btns}/>
                    <AddBtn callback={this.insertBtn}/>
                </CardActions>

            </Card>
        );
    }
}

class GraphCard extends Component {
    render() {
        return(
            <Card>
                <CardHeader 
                    title="Gráfico" 
                    action={
                        <IconButton>
                            <VisibilityOff />
                        </IconButton>
                    }
                />

                <CardContent>
                    <Typography component="p">
                        Placeholder
                    </Typography>
                </CardContent>
                
                <CardActions>
                    <Button variant='raised' size="medium" color="primary">
                        Action
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export { 
    KeyboardCard,
    ChatCard,
    GraphCard
};