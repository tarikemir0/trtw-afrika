// Import React and necessary components from Material-UI library
import {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';


// Styled component for the header of the drawer
// eslint-disable-next-line no-empty-pattern
const DrawerHeader = styled('div')(({}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black'
}));

// Define PersistentDrawer component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function PersistentDrawer({pages}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>

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
                    display: {xs: 'block', md: 'none'},

                }}

            >
                {/* Drawer header with IconButton to close the drawer */}
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon style={{fill: 'white'}}/>
                    </IconButton>
                </DrawerHeader>

                {/* List items for the drawer */}
                <List sx={  {flexGrow: 1,backgroundColor: "black", width:350 }}>
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
