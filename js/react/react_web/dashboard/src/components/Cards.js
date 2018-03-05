import React, { Component } from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { Button, IconButton, Typography, TextField, Switch, FormControlLabel, FormControl, InputLabel, Select, Input, Dialog, DialogTitle, DialogContent, MenuItem, DialogActions } from 'material-ui';

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
    render() {
        return(
            <Card>
                <CardHeader 
                    title="Chat" 
                    action={
                        <IconButton>
                            <VisibilityOff />
                        </IconButton>
                    }
                />
                <CardContent>
                    <form>
                        <TextField
                            id="msg"
                            label="Insira uma mensagem"
                        />
                        <Button variant="raised" size="small" color="secondary" style={{marginLeft: 10}}>
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

class AddBtn extends React.Component {
    state = {
      open: false,
      pin: '',
    };
  
    handleChange = name => event => {
      this.setState({ [name]: Number(event.target.value) });
    };
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
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
                            <Input id="btn_name" />
                        </FormControl>

                        <FormControl style={styles.formControl}>
                            <InputLabel>Pino</InputLabel>
                            <Select
                                value={this.state.pin}
                                onChange={this.handleChange('pin')}
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
                                    value="state"
                                    color="secondary"
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
                    
                </CardContent>

                <CardActions>
                    <Button variant='raised' size="medium" color="primary">
                        Edit
                    </Button>
                    <AddBtn />
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