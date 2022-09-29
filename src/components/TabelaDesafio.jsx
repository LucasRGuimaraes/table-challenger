import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function TabelaDesafio() {
  const [times, setTimes] = useState([]);

  /* 
    UseEffect é um hook do React, ja explicado em algumas apresentações nas ultimas semanas.
    A função dele neste caso é assim que a página for renderizada, realizar uma requisição para a api, pegando o Array de times e salvando em uma variavel useState, outro hook do React utilizado para armazenar dados e vigiar essa informação. 
  */
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

  // Return é parte do componente para inserimos o HTML que queremos renderizar na tela.
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Time</TableCell>
          <TableCell>Pontos</TableCell>
          <TableCell>Vitórias</TableCell>
          <TableCell>Empates</TableCell>
          <TableCell>Derrotas</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {times.map((time, index) => (
          <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{time.nome}</TableCell>
            <TableCell>{time.pontos}</TableCell>
            <TableCell>{time.vitorias}</TableCell>
            <TableCell>{time.empates}</TableCell>
            <TableCell>{time.derrotas}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
