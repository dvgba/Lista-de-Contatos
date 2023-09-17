import React, { useState, useEffect } from "react";
import axios from "axios";
import TelefoneForm from "./Components/TelefoneForm";
import TelefoneTable from "./Components/TelefoneTable";
import { CssBaseline, Container, Typography, AppBar, Toolbar } from "@mui/material";
import API_URL from "./config";


const appBarStyle = {
    marginBottom: "16px"
    };

    const pageTitleStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "20px"
        };

function App() {
  // Estados locais para armazenar a lista de jogos e controlar a exibição do formulário
    const [telefone, setTelefone] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchTelefone();
        }, []);

    const fetchTelefone = async () => {
    try {
        const response = await axios.get(`${API_URL}/telefone`);
        setTelefone(response.data);
        } catch (error) {
        console.error("Erro ao buscar o número telefônico:", error);
        }
    };

    const handleAddTelefone = async (newTelefone) => {
    try {
        await axios.post(`${API_URL}/telefone`, newTelefone);
        fetchTelefone(); 
        setShowForm(false); 
        } catch (error) {
        console.error("Erro ao adicionar o número telefônico:", error);
        }
    };

    const handleDeleteTelefone = async (telefoneId) => {
        try {
            await axios.delete(`${API_URL}/telefone/${telefoneId}`);
            fetchTelefone(); 
        } catch (error) {
            console.error("Erro ao excluir o número telefônico:", error);
        }
    };


    return (
        <div>
            <CssBaseline />
            <AppBar position="static" style={appBarStyle}>
                <Toolbar>
                <Typography variant="h6">TeleLista</Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" style={pageTitleStyle}>
                TeleLista
                </Typography>
                
                {showForm ? (
                <TelefoneForm handleAddTelefone={handleAddTelefone} setShowForm={setShowForm} />
                ) : (
                <TelefoneTable
                    telefone = {telefone}
                    handleDeleteTelefone={handleDeleteTelefone}
                    setShowForm={setShowForm}
                />
                )}
            </Container>
            </div>
        );
}

export default App;