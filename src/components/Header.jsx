import {
  AppBar,
  Box,
  Grid,
  IconButton,
  ImageListItem,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FiMenu, FiShield } from "react-icons/fi";
import { LogoGe } from "./LogoGe";

export function Header() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  const [settingsMenu, setSettingsMenu] = useState(null);

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
            <Menu
              MenuListProps={{
                sx: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)" },
              }}
              sx={{
                mt: "45px",

                width: "100%",
              }}
              PaperProps={{ sx: { width: "300px" } }}
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
              {itemData.map((item) => (
                <MenuItem sx={{ width: "10px" }}>
                  <Link
                    width={10}
                    to={item.url}
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    <img
                      width={10}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </Link>
                </MenuItem>
              ))}
            </Menu>
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
