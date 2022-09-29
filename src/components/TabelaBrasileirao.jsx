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

export function TabelaBrasileirao() {
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
    <Table sx={{ minWidth: "600px", borderBlock: 0 }}>
      <TableHead sx={{ borderTop: "solid 1px #DDDDDD" }}>
        <TableRow color="#DDDDDD">
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
          <TableRow key={time.nome} padding="">
            <TableCell sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                fontSize="17px"
                fontWeight="400"
                lineHeight="22px"
                color={getColor(colocacao)}
              >
                {colocacao++}&nbsp;
              </Typography>
              <Typography
                sx={{
                  color: "#333333",
                }}
              >
                {time.nome}
              </Typography>
            </TableCell>
            <TableCell align="center" bgcolor="#F5F5F5" width="30px">
              <Typography fontWeight="700" fontSize="14px" lineHeight="14px">
                {time.pontos}
              </Typography>
            </TableCell>
            <TableCell align="center" width="30px">
              {time.jogos}
            </TableCell>
            <TableCell align="center" bgcolor="#F5F5F5" width="30px">
              {time.vitorias}
            </TableCell>
            <TableCell align="center" width="30px">
              {time.empates}
            </TableCell>
            <TableCell align="center" bgcolor="#F5F5F5" width="30px">
              {time.derrotas}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
