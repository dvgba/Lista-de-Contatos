import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const formStyle = {
    padding: "12px",
    maxWidth: "800px",
    margin: "auto"
};


const buttonStyle = {
    marginRight: "8px"
};

function TelefoneForm({ handleAddTelefone, setShowForm }) {
    const [newTelefone, setNewTelefone] = useState({ name: "", number: "", age: "" });   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTelefone({ ...newTelefone, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleAddTelefone(newTelefone); 
        setNewTelefone({ name: "", number: "", email: "" }); 
    };

    return (
        <Paper elevation={4} style={formStyle}>
            <Typography variant="h7" gutterBottom>
                Adicionar Contato
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                <Grid item xs={8}>
                    <TextField
                    fullWidth
                    label="Nome"
                    name="name"
                    value={newTelefone.name}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                    fullWidth
                    label="Numero"
                    name="number"
                    value={newTelefone.number}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                    fullWidth
                    label="E-mail"
                    name="email"
                    value={newTelefone.email}
                    onChange={handleInputChange}
                    />
                </Grid>
                </Grid>
                <div style={{ marginTop: "8px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={buttonStyle}
                >
                    Adicionar
                </Button>
                <Button onClick={() => setShowForm(false)} style={buttonStyle}>
                    Cancelar
                </Button>
                </div>
            </form>
            </Paper>
        );
}


export default TelefoneForm;
