import AvTimerIcon from "@mui/icons-material/AvTimer";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useState } from "react";

export default function SaleModeNav() {
  const [value, setValue] = useState(2); // “Bán giao hàng” mặc định

  return (
    <Paper elevation={3} sx={{ position: "sticky", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newVal) => setValue(newVal)}
      >
        <BottomNavigationAction label="Bán nhanh" icon={<FlashOnIcon />} />
        <BottomNavigationAction label="Bán thường" icon={<AvTimerIcon />} />
        <BottomNavigationAction
          label="Bán giao hàng"
          icon={<LocalShippingIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
