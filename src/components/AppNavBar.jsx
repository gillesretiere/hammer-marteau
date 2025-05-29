import React, { useState } from 'react';
import LightDarkToggle from './LightDarkToggle';
import { NavbarData } from './NavbarData';
import { ListItem } from '@mui/material';
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

const AppNavBar = ({ toggleLightDarkMode }) => {
    //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
    const [open, setState] = useState(false);
    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open
        setState(open);
    };
    return (
        <>
            <AppBar position="static" sx={{ bgcolor: '#fff' }} className="border-gray-200 dark:bg-gray-900">
                <Container maxWidth="xl" disableGutters="true">
                    <Toolbar>
                        {/* LOGO */}
                        <div className='mr-5'>
                            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="https://hammer-marteau.com/assets/hmrt_logo_red.png" className="h-8" alt="Hammer & Marteau Logo" />
                                <span className="self-center text-xl font-normal whitespace-nowrap text-black dark:text-white">Hammer &amp; Marteau</span>
                            </a>
                        </div>
                        <div>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(true)}
                                sx={{
                                    mr: 2,
                                    display: {
                                        xs: "block",
                                        /* md: "none", hidden if device >= md */
                                    }
                                }}
                                className='sm:hidden'
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        {/* Menu Options */}
                        <div class="hidden w-full md:block md:w-auto mr-5" id="navbar-default">
                            <ul class="font-articulat_cf font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {NavbarData.map((link, index) => {
                                    return (
                                        <li key={index} className={link.cname}>
                                            <Link
                                                className="hover:text-sky-500"
                                                to={link.href}
                                                target="_blank"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* The outside of the drawer */}
                        <Drawer
                        className="dark:bg-gray-900"
                            //from which side the drawer slides in
                            anchor="right"
                            //if open is true --> drawer is shown
                            open={open}
                            //function that is called when the drawer should close
                            onClose={toggleDrawer(false)}
                        //function that is called when the drawer should open
                        // onOpen={toggleDrawer(true)}
                        >
                            {/* The inside of the drawer */}
                            <Box
                                className="dark:bg-gray-900"
                                sx={{
                                    p: 2,
                                    height: 1,
                                }}
                            >
                                {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                                <IconButton sx={{ mb: 2 }}>
                                    <CloseIcon onClick={toggleDrawer(false)} />
                                </IconButton>

                                <Divider sx={{ mb: 2 }} />
                                <Box sx={{ mb: 2 }}>
                                    {NavbarData && NavbarData.map(
                                        (item, index) => (
                                            <>
                                                {/* on teste si href interne (#) : composant "a" sinon "Link" */}
                                                <ListItemButton key={index} component={item.href.startsWith('#') ? "a" : Link} href={`${item.href}`} to={`${item.href}`}  >
                                                    <ListItemIcon>
                                                        <DescriptionIcon sx={{ color: "primary.contrastText" }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${item.title}`} />
                                                    {/* <Chip label={item.enabled ? "disponible" :"prochainement"} size="small"></Chip> */}
                                                </ListItemButton>
                                            </>
                                        ))}
                                </Box>

                            </Box>
                        </Drawer>
                        <LightDarkToggle toggleLightDarkMode={toggleLightDarkMode} />

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default AppNavBar