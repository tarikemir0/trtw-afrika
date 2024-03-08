// Import React and necessary components from Material-UI library
import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SearchBar from './SearchBar';
import PersistentDrawer from "./PersistentDrawer.tsx";

// Define pages and settings arrays
const pages = ['Products', 'Pricing', 'Blog'];

// Define Header component
function Header() {
    // State variables to handle anchor elements for navigation and Searchbar menu
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElSearchbar, setAnchorElSearchbar] = useState<null | HTMLElement>(null);

    // Function to handle opening navigation menu
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    // Function to handle closing navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // Function to handle closing Searchbar menu
    const handleCloseSearchbar = () => {
        setAnchorElSearchbar(null);
    };

    // Return JSX for Header component
    return (
        <div>
            <AppBar position="static" style={{backgroundColor: "black"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={'/images/logo.svg'} alt="Example"/>
                        </Typography>

                        {/* Navigation Menu for smaller screens */}


                        <PersistentDrawer/>


                        {/* Logo for smaller screens */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={'/images/logo.svg'} alt="Example"/>
                        </Typography>

                        {/* Navigation Buttons for larger screens */}
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Search bar */}
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Search">
                                <SearchBar/>
                            </Tooltip>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

// Export Header component
export default Header;
