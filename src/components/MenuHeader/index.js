import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FiGrid, FiActivity, FiFileText, FiDollarSign, FiSettings, FiLogOut} from "feather-icons";

const pages = ['Dashboard', 'Usuários', 'Gestão Financeira'];
const SidebarData = [
    {
        title: "Dashboard",
        icon:  <FiGrid size={24} color="#33ffc2"/>,
        link: "/home",
        action: 'handleDashboard'
    },
    {
        title: "Relatórios",
        icon:   <FiActivity size={24} color="#33ffc2"/>,
        link:   "/home",
        action: "handleRelatorios"
    },
    {
        title: "Bilhetes",
        icon:  <FiFileText size={24} color="#33ffc2"/>,
        link: "/home",
        action: "handleBilhetes"
    },
    {
        title: "Caixa",
        icon:  <FiDollarSign size={24} color="#33ffc2"/>,
        link: "/home",
        action: "handleCaixa"
    },
    {
        title: "Ajustes",
        icon: <FiSettings size={24} color="#33ffc2" />,
        link: "/home",
        action: "handleAjustes"
    },
    {
        title: "Sair",
        icon: <FiLogOut size={24} color="#33ffc2"/>,
        link: "/home",
        action: "handleSair"
    },
];

const settings = ['Perfil', 'Conta', 'Sair'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar spacing="2" position="static" sx={{backgroundColor: '#fff', color: '#003049', fontFamily: 'Poppins'}}>
            <Toolbar disableGutters sx={{ px: 4, fontFamily: 'Poppins' }}>
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color: '#003049'}} /> */}
                {/* <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        letterSpacing: '.2rem',
                        color: '#003049',
                        textDecoration: 'none',
                    }}
                >
                    SANTA BARBEARIA
                </Typography> */}

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' }
                        }}
                    >
                        {SidebarData.map((page, key) => (
                            <MenuItem key={key} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page.title}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    color="#003049"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    SANTA BARBEARIA
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {SidebarData.map((page, key) => (
                        <Button
                            key={key}
                            onClick={handleCloseNavMenu}
                            sx={{ 
                                my: 2, 
                                color: '#003049', 
                                display: 'block', 
                                textTransform: 'capitalize', 
                                fontFamily: 'Poppins', 
                                color: '#003049', 
                                fontWeight: 500 
                            }}
                        >
                            {page.title}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography 
                                    textAlign="center" 
                                    sx={{
                                        fontFamily: 'Poppins',
                                        textTransform: 'capitalize', 
                                        fontWeight: 500 
                                    }}>
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
