import React from 'react';
import DashboardCard from '../DashboardCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../../../src/index.css';

import Grid from '@mui/material/Grid';

const Dashboard = () => (
    <Grid container spacing={2} sx={{marginTop: '2rem', padding: '2rem'}}> {/* Adicionando um espaçamento entre os cards */}
        <Grid item xs={12} sm={12} md={4}> {/* Cada card ocupa 4 colunas para md (desktop) */}
            <DashboardCard 
                icon={<DashboardIcon />}
                iconBackgroundColor="#2EC4B6"
                iconColor="#fff"
                cardColor="linear"
                textColor="#fff"
                valueColor="#fff"
                title="Saldo atual R$20.000,00"
                value="Bem vindo, Ricardo Oliveira!"
                content="28 de agosto de 2023"
            />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
            <DashboardCard
                icon={<MovingIcon />}
                iconBackgroundColor="#2EC4B6"
                iconColor="#fff"
                cardColor="#B2F7EF"
                textColor="#2EC4B6"
                title="Receitas"
                value="20.000,00"
                content="Mensais"
            />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
            <DashboardCard
                icon={<TrendingDownIcon />}
                iconBackgroundColor="#A4133C"
                iconColor="#fff"
                cardColor="#FF90B3"
                textColor="#A4133C"
                title="Despesas"
                value="2.000,00"
                content="Mensais"
            />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
            <DashboardCard
                icon={<AccountCircleIcon />}
                iconBackgroundColor="#E8AE64"
                iconColor="#fff"
                cardColor="#FFF6CC"
                textColor="#E8AE64"
                title="Rendimento do"
                value="4.000,00"
                content="colaborador mais lucrativo no mês"
            />
        </Grid>
        
        <Grid item xs={12} sm={6} md={2}>
            <DashboardCard
                icon={<CalendarMonthIcon/>}
                iconBackgroundColor="#9381FF"
                iconColor="#fff"
                cardColor="#D6BFFE"
                textColor="#9381FF"
                title="Lançamentos"
                value="1.200,00"
                content="Diário"
            />
        </Grid>
    </Grid>
);

export default Dashboard;
