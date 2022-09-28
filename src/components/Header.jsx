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
import { LogoGe } from "./utils/LogoGe";
import { serieA, serieB, europa } from "./utils/TimesList";

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
                    padding: 0,
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
                <TabPanel
                  value="2"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    padding: 0,
                  }}
                >
                  {serieB.map((item) => (
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
                <TabPanel
                  value="3"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    padding: 0,
                  }}
                >
                  {europa.map((item) => (
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
