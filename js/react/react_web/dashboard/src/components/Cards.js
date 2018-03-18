import React, { Component } from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { Button, IconButton, Typography, TextField, Switch, FormControlLabel, FormControl, FormGroup, InputLabel, Select, Input, Dialog, DialogTitle, DialogContent, MenuItem, DialogActions, Grid } from 'material-ui';

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
            label: '',
            btn: ''
        };
        
    }  

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            open: false,
            btn_name: '',
            btn: ''
        });
    };

    handleState = name => event => {        
        this.setState({ [name]: event.target.checked });
    };

    handleChange = name => event => {         
        let btn = this.props.btns[event.target.value];

        this.setState({ btn });       
        this.setState({ [name]: btn.name });
    };

    handleEdit = name => event => {
        let update = this.state.btn;
        if(name === 'state'){
            update[name] = event.target.checked;
        }else {
            update[name] = event.target.value;
        }
        
        this.setState({ btn: update});
         
    };

    handleUpdate = () => {
        this.props.callback(this.state.btn);

        this.setState({
            open: false,
            btn_name: '',
            btn: ''
        })
    }

    editForm(btn) {
        return(
            <form style={styles.root}>
                <FormControl style={styles.formControl}>
                    <InputLabel>Rótulo</InputLabel>
                    <Input 
                        value={btn.name}
                        id="btn_name" 
                        onChange={this.handleEdit('name')}
                    />
                </FormControl>

                <FormControl style={styles.formControl}>
                    <InputLabel>Pino</InputLabel>
                    <Select
                        value={btn.pin}
                        onChange={this.handleEdit('pin')}
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
                            checked={btn.state}
                            onChange={this.handleEdit('state')}
                        />
                    }
                    label="Estado"
                    style={{margin: 10}}
                />
            </form>
        );      
    }

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
                                    value={this.state.label}
                                    onChange={this.handleChange('label')}
                                    input={<Input id="editar_btn" />}
                                >
                                    <MenuItem value=""> <em>None</em> </MenuItem>

                                    {this.props.btns.map( btn => {
                                        return(
                                            <MenuItem key={btn.key} value={btn.key}>{btn.name}</MenuItem>
                                        );
                                    })}

                                </Select>
                            </FormControl> 
                        </form>

                        {(this.state.btn !== '') && this.editForm(this.state.btn) }
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button onClick={this.handleUpdate} color="primary">
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
            show: this.props.view,
            btns: []
        }
    }

    insertBtn = btn => {
        let updateBtns = this.state.btns.slice();
        updateBtns.push({key: updateBtns.length, ...btn});

        this.setState({ btns: updateBtns });
    };

    updateBtn = btn => {
        let updateBtns = this.state.btns.slice();
        updateBtns[btn.key] = btn;

        this.setState({btns: updateBtns});
        
    };

    handleKeyboardSwitch = btn => {
        let updateBtns = this.state.btns.slice();
        updateBtns[btn.key] = {...btn, state: !btn.state};

        this.setState({ btns: updateBtns });
       
    };

    handleHide = card => {
        let update = !this.state.show;
        this.setState({ show: update }); 
        this.props.callback(card);
    };

    handleSave = (btns) => {
        console.log('Save keyboard: ', btns);
        
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
            <Grid item xs>
                <Card>
                    <CardHeader 
                        title="Keyboard"
                        action={
                            <IconButton>
                                <VisibilityOff  onClick={() => this.handleHide('keyboard')} />
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
                                                onChange={() => this.handleKeyboardSwitch(btn) }
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
                        <EditBtn btns={this.state.btns} callback={this.updateBtn}/>
                        <AddBtn callback={this.insertBtn}/>
                        <Button 
                            variant='raised' 
                            size="medium" 
                            color="primary" 
                            style={{margin: 5}} 
                            onClick={() => this.handleSave(this.state.btns)} 
                        >
                            Save
                        </Button>
                    </CardActions>

                </Card>
            </Grid>
        );
    }
}

class GraphCard extends Component {
    state = {
        show: this.props.view
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
            <Grid item xs>
                <Card>
                    <CardHeader 
                        title="Gráfico" 
                        action={
                            <IconButton>
                               <VisibilityOff  onClick={() => this.handleHide('graph')} />
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
            </Grid>
        );
    }
}

export { 
    KeyboardCard,
    ChatCard,
    GraphCard
};