import React from 'react';
import { Grid } from 'material-ui';
import { KeyboardCard, ChatCard, GraphCard } from './components/Cards';

export default () => (
   
    <Grid container  spacing={24}>
        <Grid item xs>
            <ChatCard/>
        </Grid>
        <Grid item xs>
            <KeyboardCard/>
        </Grid>
        <Grid item xs>
            <GraphCard/>
        </Grid>
    </Grid>
);