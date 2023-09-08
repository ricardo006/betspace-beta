import React from 'react';
import { Grid, Card, CardContent, Box, Typography, CardActions, Button, Paper, List } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import MovingIcon from '@mui/icons-material/Moving';

const data = [
    { profissional: "Profissional 1", cliente: "Cliente 1", quantidade: 3, profissionais: ["João", "Maria", "Carlos"] },
    { profissional: "Profissional 2", cliente: "Cliente 2", quantidade: 5, profissionais: ["Ana", "Pedro"] },
    { profissional: "Profissional 3", cliente: "Cliente 3", quantidade: 2, profissionais: ["Luiza", "Miguel"] },
    { profissional: "Profissional 4", cliente: "Cliente 4", quantidade: 4, profissionais: ["Laura", "Rafael"] },
    { profissional: "Profissional 5", cliente: "Cliente 5", quantidade: 1, profissionais: ["Sofia", "Gustavo"] },
];

const ClienteCard = ({ nome, cliente, quantidade, icon, profissionais }) => {
    return (
        <Card
            sx={{
                boxShadow: 2,
                mb: 2,
                height: '200px',
                width: '120px',
                borderRadius: '20px',
                backgroundColor: '#E2EEFF',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent sx={{ flex: '1 1 auto' }}>
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
                            p: 2
                        }}
                    >
                        {icon}
                    </Box>
                    <div>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Profissional: {nome}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Cliente: {cliente}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Quantidade de Cortes: {quantidade}
                        </Typography>
                    </div>
                </Box>
                <div
                    sx={{
                        maxHeight: '100px', // Altura máxima para exibição
                        overflowY: 'auto', // Habilitar rolagem vertical
                    }}>
                    {/* Mapeie os profissionais aqui */}
                    {profissionais.map((profissional, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{
                                fontWeight: 500,
                                whiteSpace: 'break-spaces', // Quebra de palavras
                                width: '100%',
                                marginBottom: '8px',
                            }}
                        >
                            {profissional}
                        </Typography>
                    ))}
                </div>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    Ver Detalhes
                </Button>
            </CardActions>
        </Card>
    );
};

const ClientesCabeleireiro = () => {
    return (
        <Grid spacing={2}>
            <Card
                sx={{
                    boxShadow: 2,
                    mb: 2,
                    height: '450px',
                    borderRadius: '20px',
                    backgroundColor: '#E2EEFF',
                    display: 'flex',
                    flexDirection: 'column',
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
                            Cabeleireiros x Clientes
                        </Typography>
                    </Box>
                </CardContent>

                <Paper elevation={3} style={{ flex: '1', overflowY: 'auto' }}>
                    <List>
                        {data.map((item, index) => (
                            <ClienteCard
                                key={index}
                                nome={item.profissional}
                                cliente={item.cliente}
                                quantidade={item.quantidade}
                                icon={<MovingIcon />}
                                profissionais={item.profissionais}
                            />
                        ))}
                    </List>
                </Paper>
            </Card>
        </Grid>
    );
};

export default ClientesCabeleireiro;
