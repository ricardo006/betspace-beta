import React from 'react';
import { Grid, Card, CardContent, Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import MenuHeader from './components/MenuHeader';
import Dashboard from './components/Dashboard';
import HorizontalChipScroll from './components/HorizontalChipScroll';
import CardReceitasDespesas from './components/CardReceitasDespesas';
import CardTopFive from './components/CardTopFive';
import '../src/index.css'; // Importe seu arquivo CSS global
import ClientesCabelereiro from './components/ClientesCabeleireiro';

function App() {
  return (
    <div>
      <MenuHeader />
      <Dashboard />
      <HorizontalChipScroll />

      <Grid container spacing={2} sx={{p: '2rem'}}>
        <Grid item xs={12} sm={12} md={8}>
          <CardReceitasDespesas />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardTopFive />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{p: '2rem'}}>
        <Grid item xs={12} sm={12} md={4}>
          <ClientesCabelereiro />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardTopFive />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardTopFive />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;