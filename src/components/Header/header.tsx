// Import React and necessary components from Material-UI library
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Tooltip from "@mui/material/Tooltip";
import SearchBar from "./SearchBar";
import PersistentDrawer from "./PersistentDrawer.tsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Define pages and settings arrays
const pages = ["Habari", "Biashara", "Michezo", "Maoni", "Maisha", "Video", "Uchambuzi"];

// Define Header component
function Header() {
    const { t, i18n } = useTranslation();

    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    // State variables to handle anchor elements for navigation and Searchbar menu
    const [, setAnchorElNav] = useState<null | HTMLElement>(null);

    // Function to handle closing navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // Return JSX for Header component
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "black" }}>
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
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <img src={"/images/logo.svg"} alt="Example" />
                        </Typography>

                        {/* Navigation Menu for smaller screens */}

                        <PersistentDrawer pages={pages} />

                        {/* Logo for smaller screens */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <img src={"/images/logo.svg"} alt="Example" />
                        </Typography>

                        {/* Navigation Buttons for larger screens */}
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Search bar */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Search">
                                <SearchBar />
                            </Tooltip>
                        </Box>
                        {/*<Dropdown>*/}
                        {/*    <MenuButton*/}
                        {/*        variant="plain"*/}
                        {/*        size="sm">*/}
                        {/*        Swahili*/}
                        {/*    </MenuButton>*/}
                        {/*    <Menu*/}
                        {/*        variant="soft"*/}
                        {/*        size="sm">*/}
                        {/*        <MenuItem>English</MenuItem>*/}
                        {/*        <MenuItem>Français</MenuItem>*/}
                        {/*        <MenuItem>Hausa</MenuItem>*/}
                        {/*    </Menu>*/}
                        {/*</Dropdown>*/}
                        <nav>
                            <button onClick={() => clickHandle("sw")}>Swahili</button>
                            <button onClick={() => clickHandle("en")}>English</button>
                        </nav>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

// Export Header component
export default Header;
