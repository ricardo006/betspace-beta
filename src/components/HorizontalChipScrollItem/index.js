import * as React from 'react';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import MovingIcon from '@mui/icons-material/Moving';
import './HorizontalChipScrollItem.css';

const chipData = [
    { label: 'Wilker', value: '40%', iconColor: '#B2F7EF', icon: <MovingIcon style={{ color: '#003049' }} />, textColor: '#003049' },
    { label: 'Pedro', value: '32%', iconColor: '#00A6FB', icon: <MovingIcon style={{ color: '#003049' }} />, textColor: '#003049' },
    { label: 'Augusto', value: '20%', iconColor: '#FF90B3', icon: <MovingIcon style={{ color: '#003049' }} />, textColor: '#003049' },
    { label: 'João', value: '7%', iconColor: '#FFF6CC', icon: <MovingIcon style={{ color: '#003049' }} />, textColor: '#003049' },
    { label: 'Mário', value: '1%', iconColor: '#C8B6FF', icon: <MovingIcon style={{ color: '#003049' }} />, textColor: '#003049' },
    { label: 'Mário', value: '1%', iconColor: '#DD2D4A', icon: <MovingIcon style={{ color: '#ffff' }} />, textColor: '#ffff' },
];

const HorizontalChipScrollItem = () => {
    return (
        <div className="chip-scroll-container">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {chipData.map((chip, index) => (
                    <Chip
                        className="chip"
                        key={index}
                        label={`${chip.label} ${chip.value}`}
                        icon={chip.icon}
                        style={{
                            backgroundColor: chip.iconColor,
                            margin: 2,
                            height: '52px',
                            minWidth: '12rem',
                            color: chip.textColor,
                            fontWeight: 500,
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            borderRadius: '50px'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default HorizontalChipScrollItem;
