import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardHeader, Avatar } from '@mui/material';
import HorizontalChipScrollItem from '../HorizontalChipScrollItem';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HorizontalChipScroll = () => {
    return (
        <Box p={4}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8}>
                    <Typography variant="h6" style={{ color: '#003049', textAlign: 'left', fontWeight: 500, fontFamily: 'Poppins' }}>
                        Melhores médias/diária
                    </Typography>
                    <HorizontalChipScrollItem />
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{
                        borderRadius: '20px',
                        backgroundColor: '#B2F7EF',
                        height: '140px',
                        width: 1,
                        boxShadow: 2,
                        mb: 2,
                        border: 0,
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ backgroundColor: '#2EC4B6'}}>
                                    <ArrowUpwardIcon style={{ color: '#B2F7EF', verticalAlign: 'middle', mt: '50%', height: '100%' }} />
                                </Avatar>
                            }
                            title={
                                <Grid container>
                                    <Grid item xs={12} style={{ textAlign: 'left', fontSize: '14px', fontWeight: 500, fontFamily: 'Poppins' }}>
                                        Profissional com maior média no mês
                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: 'left'}}>
                                        <Typography sx={{textAlign: 'left', fontSize: '24px', fontWeight: 800, fontFamily: 'Poppins', color: '#2EC4B6'}}>40% de Wilker</Typography>
                                    </Grid>

                                    <Grid item xs={8} style={{ textAlign: 'left'}}>
                                        <Typography sx={{color: '#2EC4B6', fontSize: '14px', fontFamily: 'Poppins' }}>R$2.000,00 pagos</Typography>
                                    </Grid>
                                </Grid>
                            }
                            titleTypographyProps={{ variant: 'h6', sx: { textAlign: 'center' } }}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{
                        borderRadius: '20px',
                        backgroundColor: '#DD2D4A',
                        height: '140px',
                        width: 1,
                        boxShadow: 2,
                        mb: 2,
                        border: 0,
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ backgroundColor: '#FFD1E0' }}>
                                    <ArrowDownwardIcon style={{ color: '#DD2D4A', verticalAlign: 'middle', mt: '50%', height: '100%' }} />
                                </Avatar>
                            }
                            title={
                                <Grid container>
                                    <Grid item xs={12} style={{ textAlign: 'left', fontSize: '14px', fontWeight: 500, fontFamily: 'Poppins' }}>
                                        Profissional com menor média no mês
                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: 'left'}}>
                                        <Typography sx={{textAlign: 'left', fontSize: '24px', fontWeight: 800, fontFamily: 'Poppins', color: '#FFD1E0'}}>10% de Mário</Typography>
                                    </Grid>

                                    <Grid item xs={8} style={{ textAlign: 'left'}}>
                                        <Typography sx={{color: '#FFD1E0', fontSize: '14px', fontFamily: 'Poppins' }}>R$200,00 pagos</Typography>
                                    </Grid>
                                </Grid>
                            }
                            titleTypographyProps={{ variant: 'h6', sx: { textAlign: 'center' } }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HorizontalChipScroll;
