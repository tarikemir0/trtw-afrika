import React from "react";
import Menu from "@mui/joy/Menu";
import Button from '@mui/material/Button';
import MenuItem from "@mui/joy/MenuItem";
import {useTranslation} from "react-i18next";



function HoverSubMenu() {

    const {t, i18n} = useTranslation();

    const clickHandle = async (lang: string) => {
        await i18n.changeLanguage(lang);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event ) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseEnter={handleClick}
            >
                Swahili
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onMouseLeave={handleClose}
            >
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Francais</MenuItem>
                <MenuItem onClick={handleClose}>Hausa</MenuItem>
            </Menu>
        </div>
    );
}

export default HoverSubMenu;
