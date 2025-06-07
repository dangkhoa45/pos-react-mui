import AvTimerIcon from "@mui/icons-material/AvTimer";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PhoneIcon from "@mui/icons-material/Phone";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface BottomBarProps {
  supportPhone?: string;
  defaultMode?: number;
  onModeChange?: (mode: number) => void;
  onSupportCall?: () => void;
  onNotificationClick?: () => void;
}

export default function BottomBar({
  supportPhone = "",
  defaultMode = 2,
  onModeChange,
  onSupportCall,
}: BottomBarProps) {
  const [mode, setMode] = useState(defaultMode);

  const handleModeChange = (_: React.SyntheticEvent, newValue: number) => {
    setMode(newValue);
    onModeChange?.(newValue);
  };

  const handleSupportCall = () => {
    onSupportCall?.();
  };

  return (
    <Paper
      elevation={0}
      sx={{
        position: "sticky",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        height: 70,
      }}
    >
      <BottomNavigation
        value={mode}
        onChange={handleModeChange}
        showLabels
        sx={{
          "& .MuiBottomNavigationAction-root": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            minWidth: "140px",
            padding: "8px 12px",
            borderRadius: "8px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "& .MuiSvgIcon-root": {
              fontSize: "1.25rem",
            },
            "&.Mui-selected": {
              color: "white",
              bgcolor: "primary.main",
              fontWeight: 600,
              transform: "translateY(-2px)",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            },
          },
        }}
      >
        <BottomNavigationAction
          label="Bán nhanh"
          icon={<FlashOnIcon fontSize="small" />}
        />
        <BottomNavigationAction
          label="Bán thường"
          icon={<AvTimerIcon fontSize="small" />}
        />
        <BottomNavigationAction
          label="Bán giao hàng"
          icon={<LocalShippingIcon fontSize="small" />}
        />
      </BottomNavigation>

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={2} sx={{pr: 3}}>
        <IconButton
          size="medium"
          onClick={handleSupportCall}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            width: 48,
            height: 48,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "translateY(-2px) scale(1.05)",
              boxShadow: "0 6px 20px rgba(25, 118, 210, 0.4)",
            },
            "&:active": {
              transform: "translateY(0) scale(0.95)",
            },
          }}
        >
          <PhoneIcon fontSize="small" />
        </IconButton>

        <Box
          onClick={handleSupportCall}
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ease",
            p: 1,
            borderRadius: 2,
            "&:hover": {
              bgcolor: "rgba(25, 118, 210, 0.08)",
              transform: "translateY(-1px)",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              fontSize: "1rem",
              letterSpacing: "0.5px",
            }}
          >
            {supportPhone || "Chưa cấu hình hotline"}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "block",
              fontSize: "0.7rem",
            }}
          >
            Hỗ trợ 24/7
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
