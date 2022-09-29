import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function TabelaDesafioResolvido() {
  let colocacao = 1;
  const [times, setTimes] = useState([]);

  useEffect(() => {
    api
      .get("times?_sort=pontos,vitorias&_order=desc,desc")
      .then((response) => {
        setTimes(response.data);
      })
      .catch(() => {
        alert("deu ruim");
      });
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="start">CLASSIFICAÇÃO</TableCell>
          <TableCell align="center">P</TableCell>
          <TableCell align="center">J</TableCell>
          <TableCell align="center">V</TableCell>
          <TableCell align="center">E</TableCell>
          <TableCell align="center">D</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {times.map((time) => (
          <TableRow key={time.nome}>
            <TableCell sx={{ display: "flex" }}>
              <Typography>{colocacao++}</Typography>
              <Typography>{time.nome}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{time.pontos}</Typography>
            </TableCell>
            <TableCell>{time.jogos}</TableCell>
            <TableCell>{time.vitorias}</TableCell>
            <TableCell>{time.empates}</TableCell>
            <TableCell>{time.derrotas}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
