import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import paths from "../utils/paths";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          VITY
        </Typography>
        <Divider />
        <List>
          {Object.values(paths).map((path) => (
            <ListItem key={path.title} disablePadding>
              <ListItemButton
                onClick={() => navigate(path.path)}
                sx={{ textAlign: "left" }}
              >
                <ListItemText primary={path.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button color="inherit" variant="outlined">
          Login
        </Button>
      </Box>
    </>
  );
};

export default SideBar;
