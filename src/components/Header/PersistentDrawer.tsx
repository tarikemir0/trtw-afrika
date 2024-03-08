// Import React and necessary components from Material-UI library
import React, {useState} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';

// Define the width of the drawer
const drawerWidth = 240;

// Styled component for the header of the drawer
const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black'
}));

// Define PersistentDrawer component
function PersistentDrawer({pages}) {
    const theme = useTheme();
    const [open, setOpen] = useState(false); // State variable to manage drawer open/close
    // Function to handle opening the drawer
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // Function to handle closing the drawer
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Return JSX for PersistentDrawer component
    return (
        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>

            {/* IconButton to open the drawer */}
            <IconButton
                size="large"
                aria-label="account of current Searchbar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>

            {/* Drawer component */}
            <Drawer
                id="menu-appbar"
                anchorEl={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(open)}
                onClose={handleDrawerClose}
                sx={{
                    display: {xs: 'block', md: 'none',},
                }}
            >
                {/* Drawer header with IconButton to close the drawer */}
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon style={{fill: 'white'}}/>
                    </IconButton>
                </DrawerHeader>

                {/* List items for the drawer */}
                <List sx={{backgroundColor: "black"}}>
                    {/* Map over 'pages' prop to render list items */}
                    {pages.map((page) => (
                        <ListItemButton key={page} onClick={handleDrawerClose}>
                            <ListItemText primary={page} sx={{color: "white"}}/>
                        </ListItemButton>
                    ))}
                </List>

                {/* Divider */}
            </Drawer>
        </Box>
    );
}

// Export PersistentDrawer component
export default PersistentDrawer;
