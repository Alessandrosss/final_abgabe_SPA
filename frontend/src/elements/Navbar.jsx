import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Drawer,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

import SideBar from "./Sidebar";
import paths from "../utils/paths";

const drawerWidth = 250;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box color="white" sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit" /* display: { xs: "none", sm: "block" } */,
            }}
          >
            VITY
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {Object.values(paths).map((path) => (
              <Button
                onClick={() => navigate(path.path)}
                key={path.title}
                sx={{ color: "#fff" }}
              >
                {path.title}
              </Button>
            ))}
          </Box>
          <Button
            sx={{ display: { xs: "none", sm: "block" }, ml: 3 }}
            color="inherit"
            variant="outlined"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
