import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

export default props => 
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                Title
            </Typography>
            
        </Toolbar>
    </AppBar>