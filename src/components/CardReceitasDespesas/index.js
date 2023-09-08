import React from 'react';
import { Grid, Card, CardContent, Box, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';
import InsightsIcon from '@mui/icons-material/Insights';

const CardReceitasDespesas = () => {
    const data = [
        ['Mês', 'Receitas', 'Despesas'],
        ['Outubro', 1500, 1000],
        ['Novembro', 1800, 1100],
        ['Dezembro', 2000, 1200],
        ['Janeiro', 2200, 1300],
        ['Fevereiro', 2400, 1400],
        ['Março', 2500, 1500],
        ['Abril', 2600, 1600],
        ['Maio', 2800, 1700],
    ];

    const options = {
        title: 'Despesas x Receitas',
        hAxis: { title: 'Valor' },
        vAxis: { title: 'Mês' },
        seriesType: 'bars',
        // chartArea: {
        //     backgroundColor: '#263238', // Altere a cor de fundo do gráfico aqui
        // },
    };

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
                        Despesas x Receitas
                    </Typography>
                </Box>
            </CardContent>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </Card>
    );
};

export default CardReceitasDespesas;
