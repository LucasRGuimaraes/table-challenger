import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
  Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { FiMenu, FiShield } from "react-icons/fi";
import { LogoGe } from "./LogoGe";

export function Header() {
  const [settingsMenu, setSettingsMenu] = useState(null);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenSettingsMenu = (event) => {
    setSettingsMenu(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setSettingsMenu(null);
  };

  return (
    <AppBar bgcolor="primary">
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <IconButton color="white">
              <FiMenu fontSize="30px" />
            </IconButton>
            <Typography
              fontSize="15px"
              fontWeight="700"
              color="white.main"
              mr={2.5}
            >
              MENU
            </Typography>
            <Link
              href="https://ge.globo.com"
              target="_blank"
              sx={{
                borderRight: "2px dotted RGB(255,255,255, 0.5)",
                paddingRight: 2,
                mr: 1,
              }}
            >
              <LogoGe />
            </Link>
            <IconButton color="white" onClick={handleOpenSettingsMenu}>
              <FiShield fontSize="30px" />
            </IconButton>
            <TabContext value={value}>
              <Menu
                sx={{
                  mt: "45px",
                  width: "100%",
                }}
                PaperProps={{ sx: { maxWidth: "px", padding: "5px" } }}
                id="menu-appbar"
                anchorEl={settingsMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(settingsMenu)}
                onClose={handleCloseSettingsMenu}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange}>
                    <Tab label="SÉRIE A" value="1" />
                    <Tab label="SÉRIE B" value="2" />
                    <Tab label="EUROPA" value="3" />
                  </TabList>
                </Box>
                <TabPanel
                  value="1"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                  }}
                >
                  {serieA.map((item) => (
                    <MenuItem>
                      <Link
                        href={item.link}
                        target="_blank"
                        sx={{
                          width: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          height="35px"
                          src={item.img}
                          srcSet={item.img}
                          alt={item.name}
                          loading="lazy"
                        />
                      </Link>
                    </MenuItem>
                  ))}
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </Menu>
            </TabContext>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign="center"
            variant="h4"
            fontSize="35px"
            fontWeight="300"
          >
            BRASILEIRÃO SÉRIE A
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </AppBar>
  );
}

const serieA = [
  {
    name: "América-MG",
    img: "https://s.sde.globo.com/media/organizations/2019/02/28/America-MG-VERDE-fev2019-01.svg",
    link: "https://ge.globo.com/futebol/times/america-mg/",
  },
  {
    name: "Athletico-PR",
    img: "https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg",
    link: "https://ge.globo.com/pr/futebol/times/athletico-pr/",
  },
  {
    name: "Atlético-GO",
    img: "https://s.sde.globo.com/media/organizations/2020/07/02/atletico-go-2020.svg",
    link: "https://ge.globo.com/go/futebol/times/atletico-go/",
  },
  {
    name: "Atlético-MG",
    img: "https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg",
    link: "https://ge.globo.com/futebol/times/atletico-mg/",
  },
  {
    name: "Avaí",
    img: "https://s.sde.globo.com/media/organizations/2018/09/04/avai-futebol-clube.svg",
    link: "https://ge.globo.com/sc/futebol/times/avai/",
  },
  {
    name: "Botafogo",
    img: "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg",
    link: "https://ge.globo.com/futebol/times/botafogo/",
  },
  {
    name: "Bragantino",
    img: "https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg",
    link: "https://ge.globo.com/sp/vale-do-paraiba-regiao/futebol/times/bragantino/",
  },
  {
    name: "Ceará",
    img: "	https://s.sde.globo.com/media/organizations/2019/10/10/ceara.svg",
    link: "https://ge.globo.com/ce/futebol/times/ceara/",
  },
  {
    name: "Corinthians",
    img: "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg",
    link: "https://ge.globo.com/futebol/times/corinthians/",
  },
  {
    name: "Coritiba",
    img: "https://s.sde.globo.com/media/organizations/2018/03/11/coritiba.svg",
    link: "https://ge.globo.com/pr/futebol/times/coritiba/",
  },
  {
    name: "Cuiabá",
    img: "https://s.sde.globo.com/media/organizations/2018/12/26/Cuiaba_EC.svg",
    link: "https://ge.globo.com/mt/futebol/times/cuiaba/",
  },
  {
    name: "Flamengo",
    img: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg",
    link: "https://ge.globo.com/futebol/times/flamengo/",
  },
  {
    name: "Fluminense",
    img: "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg",
    link: "https://ge.globo.com/futebol/times/fluminense/",
  },
  {
    name: "Fortaleza",
    img: "https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg",
    link: "https://ge.globo.com/ce/futebol/times/fortaleza/",
  },
  {
    name: "Goiás",
    img: "	https://s.sde.globo.com/media/organizations/2021/03/01/GOIAS-2021.svg",
    link: "https://ge.globo.com/go/futebol/times/goias/",
  },
  {
    name: "Internacional",
    img: "https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg",
    link: "https://ge.globo.com/rs/futebol/times/internacional/",
  },
  {
    name: "Juventude",
    img: "https://s.sde.globo.com/media/organizations/2021/04/29/Juventude-2021-01.svg",
    link: "https://ge.globo.com/rs/futebol/times/juventude/",
  },
  {
    name: "Palmeiras",
    img: "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg",
    link: "https://ge.globo.com/futebol/times/palmeiras/",
  },
  {
    name: "Santos",
    img: "https://s.sde.globo.com/media/organizations/2018/03/12/santos.svg",
    link: "https://ge.globo.com/sp/santos-e-regiao/futebol/times/santos/",
  },
  {
    name: "São Paulo",
    img: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
    link: "https://ge.globo.com/futebol/times/sao-paulo/",
  },
];
