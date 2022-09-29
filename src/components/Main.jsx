import { Box, Typography } from "@mui/material";
import { TabelaBrasileirao } from "./TabelaBrasileirao";
import { TabelaDesafio } from "./TabelaDesafio";
import { TabelaDesafioResolvido } from "./TabelaDesafioResolvido";

export function Main() {
  return (
    <Box
      sx={{
        px: 2,
        paddingBlock: 15,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          fontWeight={700}
          fontSize="26px"
          lineHeight="46px"
          style={{ marginBottom: "15px" }}
        >
          TABELA
        </Typography>
        {/* <TabelaBrasileirao /> */}
        <TabelaDesafioResolvido />
        <TabelaDesafio />
      </Box>
    </Box>
  );
}
