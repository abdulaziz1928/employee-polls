import { useState, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../..";
import { logoutAuthedUser } from "../../../state/modules/authedUser";
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface IUserMenuProps {}

const settings = ["logout"];

export default function UserMenu(props: IUserMenuProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();
  const user = useAppSelector(
    (state) => state.users.entities[state.authedUser.entities!]
  );

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (option?: string) => {
    setAnchorElUser(null);
    if (option && option === "logout") dispatch(logoutAuthedUser());
  };

  return (
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
                alignItems: "center",
                display: { xs: "none", md: "inherit" },
                gap: "0.25rem",
              }}
            >
              {user.name}
              {anchorElUser ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
          <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
