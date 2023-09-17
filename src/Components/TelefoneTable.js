import React, { useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";


const tableStyle = {
    minWidth: 800,
    margin: "auto",
    marginTop: "24px",
    backgroundColor: "#DEDEDE",
    border: "2px solid #3C3C3C"
};

const headerCellStyle = {
    backgroundColor: "#818181",
    border: "1px solid #3C3C3C",
    fontWeight: "bold"
};

function TelefoneTable({ telefone, handleDeleteTelefone, setShowForm }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [telefoneToDelete, setTelefoneToDelete] = useState(null);
    
    const handleConfirmDelete = () => {
        if (telefoneToDelete) {
            handleDeleteTelefone(telefoneToDelete.id);
            setTelefoneToDelete(null);
        }
        setOpenDialog(false);
    };

    const handleOpenDialog = (telefone) => {
        setTelefoneToDelete(telefone);
        setOpenDialog(true);
    };

    return (
        <div>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">TeleLista</Typography>
                <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => setShowForm(true)}
                >
                Adicionar Contato
                </Button>
            </Box>
        
            
            <TableContainer component={Paper} style={tableStyle}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={headerCellStyle} align="center">
                        Nome
                    </TableCell>
                    <TableCell style={headerCellStyle} align="center">
                        Telefone
                    </TableCell>
                    <TableCell style={headerCellStyle} align="center">
                        E-mail
                    </TableCell>
                    <TableCell style={headerCellStyle} align="center">
                        Ações
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {telefone.length === 0 ? ( 
                    <TableRow>
                        <TableCell colSpan={3} align="center">
                        <Typography variant="subtitle1">
                            Não há contatos disponíveis.
                        </Typography>
                        </TableCell>
                    </TableRow>
                    ) : (
                    
                    telefone.map((telefone) => (
                        <TableRow key={telefone.id}>
                        <TableCell align="center">{telefone.name}</TableCell>
                        <TableCell align="center">{telefone.number}</TableCell>
                        <TableCell align="center">{telefone.email}</TableCell>
                        <TableCell align="center">
                            
                            <Button
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleOpenDialog(telefone)}
                            >
                            Excluir
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))
                    )}
                </TableBody>
                </Table>
            </TableContainer>
        
            
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                Tem certeza de que deseja excluir o contato "{telefoneToDelete?.title}"?
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpenDialog(false)} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleConfirmDelete} color="error">
                    Confirmar
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
}

export default TelefoneTable;
