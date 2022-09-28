import {
    Box,
    TableHead,
    TableRow,
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Main() {
    const [times, setTimes] = useState([]);

    useEffect(() => {
        api.get("times")
            .then((response) => {
                setTimes(response.data);
            })
            .catch(() => {
                alert("deu ruim");
            });
    }, []);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    return (
        <Box sx={{ px: 2, pt: 6, pb: 10 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>CLASSIFICAÇÃO</StyledTableCell>
                            <StyledTableCell align="right">
                                PONTOS
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                JOGOS
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                VITÓRIAS
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                EMPATES
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                DERROTAS
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {times.map((time) => (
                            <StyledTableRow key={time.nome}>
                                <StyledTableCell component="th" scope="row">
                                    {time.classificacao}. {time.nome}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {time.pontos}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {time.jogos}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {time.vitorias}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {time.empates}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {time.derrotas}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
