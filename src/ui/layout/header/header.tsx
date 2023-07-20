import { AppBar, Toolbar } from "@mui/material";
import NavMenu from "./nav_menu";
import UserMenu from "./user_menu";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <AppBar position="sticky" color="primary" enableColorOnDark>
      <Toolbar variant="dense">
        <NavMenu />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
