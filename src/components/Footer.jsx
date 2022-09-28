import { Box, Link, Typography } from "@mui/material";
import { LogoGe } from "./LogoGe";

export function Footer() {
    const riscoStyle = {
        borderLeft: "2px solid RGB(255,255,255, 0.3)",
        paddingLeft: "5px",
        ml: "5px",
    };

    return (
        <Box
            component="footer"
            sx={{
                m: "0px",
                p: "10px",
                backgroundColor: "primary.main",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1600px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2.5,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LogoGe />
                    <Link
                        href="https://ge.globo.com/futebol/times"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="white.main"
                        fontFamily="Open sans"
                        ml="10px"
                    >
                        times
                    </Link>
                    <Link
                        href="https://ge.globo.com/futebol/copa-do-mundo/selecoes.html"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="white.main"
                        fontFamily="Open sans"
                        sx={riscoStyle}
                    >
                        seleções
                    </Link>
                    <Link
                        href="https://ge.globo.com/todos-os-esportes.html"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="white.main"
                        fontFamily="Open sans"
                        sx={riscoStyle}
                    >
                        esportes
                    </Link>
                </Box>
                <Typography color="white.main">globo</Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: "1600px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography color="subtitle.main" fontSize="13px">
                    &copy; Copyright 2000-2022 Globo Comunicação e Participações
                    S.A.
                </Typography>
                <Box sx={{ fontSize: "13px" }}>
                    <Link
                        href="https://g1.globo.com/principios-editoriais-do-grupo-globo.html"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="subtitle.main"
                        fontFamily="Open sans"
                    >
                        princípios editoriais
                    </Link>
                    <Link
                        href="https://globo.com/privacidade.html"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="subtitle.main"
                        fontFamily="Open sans"
                        sx={riscoStyle}
                    >
                        política de privacidade
                    </Link>
                    <Link
                        href="https://minhaconta.globo.com"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="subtitle.main"
                        fontFamily="Open sans"
                        sx={riscoStyle}
                    >
                        minha conta
                    </Link>
                    <Link
                        href="https://globo.com/Portal/anuncie/glb_anuncie_panfleto"
                        underline="none"
                        target="_blank"
                        rel="noreferrer"
                        color="subtitle.main"
                        fontFamily="Open sans"
                        sx={riscoStyle}
                    >
                        anuncie conosco
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
