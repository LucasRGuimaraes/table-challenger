import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Main() {
    let colocacao = 1;
    const [times, setTimes] = useState([]);

    useEffect(() => {
        api.get("times?_sort=pontos,vitorias&_order=desc,desc")
            .then((response) => {
                setTimes(response.data);
            })
            .catch(() => {
                alert("deu ruim");
            });
    }, []);

    function getColor(colocacao) {
        if (colocacao <= 4) {
            return "#0000FF";
        } else if (colocacao <= 6) {
            return "#00FFFF";
        } else if (colocacao <= 12) {
            return "#008000";
        } else if (colocacao <= 16) {
            return "#999999";
        } else {
            return "#FE2F00";
        }
    }

    return (
        <Box sx={{ px: 2, paddingBlock: 15 }}>
            <Table sx={{ minWidth: 700, borderBlock: 0 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>CLASSIFICAÇÃO</TableCell>
                        <TableCell align="center">PONTOS</TableCell>
                        <TableCell align="center">JOGOS</TableCell>
                        <TableCell align="center">VITÓRIAS</TableCell>
                        <TableCell align="center">EMPATES</TableCell>
                        <TableCell align="center">DERROTAS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {times.map((time) => {
                        return (
                            <TableRow key={time.nome} padding="">
                                <TableCell sx={{ display: "flex" }}>
                                    <Typography
                                        fontSize="20px"
                                        fontWeight="600"
                                        color={getColor(colocacao)}
                                    >
                                        {colocacao++}&nbsp;
                                    </Typography>
                                    <Typography>{time.nome}</Typography>
                                </TableCell>
                                <TableCell align="center" bgcolor="#F5F5F5">
                                    <Typography fontWeight="700">
                                        {time.pontos}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    {time.jogos}
                                </TableCell>
                                <TableCell align="center" bgcolor="#F5F5F5">
                                    {time.vitorias}
                                </TableCell>
                                <TableCell align="center">
                                    {time.empates}
                                </TableCell>
                                <TableCell align="center" bgcolor="#F5F5F5">
                                    {time.derrotas}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Box>
    );
}
