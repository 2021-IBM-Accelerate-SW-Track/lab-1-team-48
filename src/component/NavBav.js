import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'

//Neha- you can use this example to help you build the UI
//this component displays a NavBar wuth a message "To Do App IBM"

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit">
                        To Do App IBM
                    </Typography>
                
                </ToolBar>

            
            </AppBar>

        </div>
    )


}