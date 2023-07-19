import {
  AppBar,
  Button,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, MouseEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../..";
import { logoutAuthedUser } from "../../state/modules/authedUser";
import PageRoutes from "../../state/types/page_routes";
export interface IHeaderProps {}

const pages = [
  { name: "Home", route: PageRoutes.Home },
  { name: "Leaderboard", route: PageRoutes.Leaderboard},
  { name: "New", route: PageRoutes.New },
];

const settings = ["logout"];
export default function Header(props: IHeaderProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigte = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => {
    return state.users.entities[state.authedUser.entities!];
  });
  const dispatch = useAppDispatch();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (route: string) => {
    setAnchorElNav(null);
    navigte(route);
  };

  const handleCloseUserMenu = (option?: string) => {
    setAnchorElUser(null);
    console.log(option);
    if (option && option === "logout") {
      dispatch(logoutAuthedUser());
    }
  };
  return (
    <AppBar position="sticky" color="primary" enableColorOnDark>
      <Toolbar variant="dense">
        {/* small devices */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => handleCloseNavMenu(page.route)}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/*  medium devices and up */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            gap: "0.5rem",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={() => handleCloseNavMenu(page.route)}
              sx={{
                color: "white",
                display: "block",
                bgcolor:
                  location.pathname === page.route ? "primary.300" : null,
                ":hover": { bgcolor: "primary.100", color: "black" },
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <Avatar
                  alt={user.name}
                  src={user.avatarURL ?? user.name}
                  sx={{ width: "2.25rem", height: "2.25rem" }}
                />
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    display: { xs: "none", md: "inherit" },
                    gap: "0.25rem",
                  }}
                >
                  {user.name}
                  <ExpandMoreIcon sx={{ alignSelf: "center" }} />
                </Typography>
              </Box>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "2.75rem" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={() => handleCloseUserMenu()}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleCloseUserMenu(setting)}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
