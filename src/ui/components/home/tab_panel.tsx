import { Box } from "@mui/material";
import { ReactNode } from "react";
export interface ITabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
