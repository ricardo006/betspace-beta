import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function MenuOptions() {
    const menuOptions = ['dashboard', 'usuários', 'gestão financeira'];

    return (
        <Toolbar>
            {menuOptions.map((option) => (
                <Button key={option} color="inherit">
                    {capitalizeFirstLetter(option)}
                </Button>
            ))}
        </Toolbar>
    );
}

export default MenuOptions;
