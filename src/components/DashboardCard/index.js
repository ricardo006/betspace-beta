import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

const DashboardCard = ({ icon, title, content, iconColor, iconBackgroundColor, cardColor, textColor, valueColor, value }) => (
    <Card sx={{
        width: 1,
        boxShadow: 2,
        mb: 2,
        border: 'none',
        height: '220px',
        borderRadius: '20px',
        background: cardColor === 'linear' ? 'linear-gradient(228deg, #2EC4B6 4%, #342A7F 98.45%)' : cardColor
    }}>
        <CardContent>
            <Box display="flex" alignItems="center">
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        border: 'none',
                        color: iconColor || '#003049',
                        backgroundColor: iconBackgroundColor || '#fafafa',
                        marginRight: '16px'
                    }}
                >
                    {icon}
                </Box>
            </Box>

            <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 'bold', marginTop: '10px', fontSize: '24px', fontFamily: 'Poppins', color: valueColor || '#003049' }}>
                {value}
            </Typography>

            <Typography variant="h6" sx={{ textAlign: 'left', fontWeight: 500, fontSize: '18px', fontFamily: 'Poppins', color: '#003049' }}>
                {title}
            </Typography>
            
            <Typography variant="body1" sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Poppins', color: textColor || '#003049' }}>
                {content}
            </Typography>
        </CardContent>
    </Card>
);

export default DashboardCard;
