import React from 'react';
import { Grid, Card, CardContent, Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { Chart } from 'react-google-charts';
import InsightsIcon from '@mui/icons-material/Insights';

const CardReceitasDespesas = () => {
    const data = [
        ['Cabeleireiro', 'Quantidade'],
        ['João', 1000],
        ['Pedro', 1100],
        ['Thiago', 1200],
        ['Augusto', 1300],
        ['Calebre', 1400],
        ['Fábio', 1500],
        ['Manoel', 1600],
        ['Marcos', 1700],
    ];

    return (
        <Card
            sx={{
                boxShadow: 2,
                mb: 2,
                height: '480px',
                borderRadius: '20px',
                backgroundColor: '#E2EEFF',
            }}
        >
            <CardContent>
                <Box display="flex" alignItems="center">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '30%',
                            border: 0,
                            color: '#003049',
                            backgroundColor: '#EBF4FC',
                            marginRight: '16px',
                        }}
                    >
                        <InsightsIcon />
                    </Box>

                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'left',
                            fontWeight: 500,
                            marginTop: '10px',
                            fontSize: '24px',
                            fontFamily: 'Poppins',
                            color: '#003049',
                        }}
                    >
                        Top 5 Cabeleireiros no mês
                    </Typography>
                </Box>
            </CardContent>

            <TableContainer component={Paper} sx={{ maxHeight: '400px', overflowY: 'auto', mb: '20rem', borderRadius: '10px'}}>
                <Table>
                    <TableHead sx={{backgroundColor: '#D1EFFF', border: '2px solid #EBF4FC', borderRadius: '10px', border: 0, fontFamily: 'Poppins'}}>
                        <TableRow>
                            <TableCell>Cabeleireiro(a)</TableCell>
                            <TableCell>Quantidade</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{backgroundColor: '#EBF4FC', borderRadius: '20px', border: '2px solid #EBF4FC', fontFamily: 'Poppins'}}>
                        {data.slice(1).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell>{row[1]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default CardReceitasDespesas;
