import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SyncIcon from "@mui/icons-material/Sync";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import UndoIcon from "@mui/icons-material/Undo";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";

interface POSAppBarProps {
  storePhone?: string;
  invoices?: string[];
  activeTab?: number;
  onSearchProduct?: (query: string) => void;
  onTabChange?: (tabIndex: number) => void;
  onNewInvoice?: () => void;
  onUndo?: () => void;
  onSync?: () => void;
  onPrint?: () => void;
  onViewCart?: () => void;
  onCloseInvoice?: (i: number) => void;
}

export default function POSAppBar({
  storePhone = "",
  invoices = ["Hóa đơn 1"],
  activeTab = 0,
  onSearchProduct,
  onTabChange,
  onNewInvoice,
  onUndo,
  onSync,
  onPrint,
  onViewCart,
  onCloseInvoice,
}: POSAppBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    onSearchProduct?.(value);
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    if (newValue === invoices.length) {
      onNewInvoice?.();
    } else {
      onTabChange?.(newValue);
    }
  };

  const renderInvoiceTab = (label: string, idx: number) => (
    <Tab
      key={idx}
      disableRipple
      sx={{
        textTransform: "none",
        minHeight: 34,
        px: 2,
        borderRadius: "8px 8px 0 0",
        "&.Mui-selected": {
          color: "text.primary",
          bgcolor: "common.white",
          boxShadow: 1,
        },
      }}
      label={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SyncAltIcon
            sx={{
              fontSize: 16,
              opacity: idx === activeTab ? 1 : 0.7,
            }}
          />
          {label}
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onCloseInvoice?.(idx);
            }}
            sx={{
              ml: 0.5,
              p: 0,
              fontSize: 16,
              color: "inherit",
              opacity: idx === activeTab ? 0.8 : 0.6,
              transition: "opacity .15s",
              "&:hover": { opacity: 1 },
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>
      }
    />
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#2196f3",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        p: 1,
      }}
    >
      <Toolbar variant="dense" sx={{ gap: 1, minHeight: 48, px: 2 }}>
        <TextField
          size="small"
          placeholder="Tìm hàng hóa (F3)"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <SearchIcon
                fontSize="small"
                sx={{
                  mr: 1,
                  color: "action.active",
                  transition: "color 0.2s ease",
                }}
              />
            ),
          }}
          sx={{
            ml: -2,
            bgcolor: "white",
            width: 500,
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          sx={{
            ml: 2,
            "& .MuiTab-root": {
              minHeight: 36,
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "none",
              color: "rgba(255, 255, 255, 0.7)",
              borderRadius: "8px",
              margin: "0 4px",
              minWidth: 120,
              px: 2,
              transition: "all 0.2s ease",
              "&:hover": {
                color: "white",
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
              "&.Mui-selected": {
                color: "#333",
                bgcolor: "#e3f2fd",
                fontWeight: 600,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {invoices.map(renderInvoiceTab)}

          <Tab
            icon={<AddIcon fontSize="small" />}
            aria-label="Tạo hóa đơn mới"
            sx={{
              minWidth: 40,
              borderRadius: "8px",
              margin: "0 4px",
              color: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              },
            }}
          />
        </Tabs>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            color="inherit"
            onClick={onViewCart}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-2px) scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
              "&:active": {
                transform: "translateY(0) scale(0.95)",
              },
            }}
          >
            <ShoppingBagIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            onClick={onUndo}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-2px) scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
              "&:active": {
                transform: "translateY(0) scale(0.95)",
              },
            }}
          >
            <UndoIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            onClick={onSync}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-2px) scale(1.05) rotate(180deg)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
              "&:active": {
                transform: "translateY(0) scale(0.95) rotate(180deg)",
              },
            }}
          >
            <SyncIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            onClick={onPrint}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-2px) scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
              "&:active": {
                transform: "translateY(0) scale(0.95)",
              },
            }}
          >
            <PrintIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box
          sx={{
            ml: 2,
            fontWeight: 600,
            color: "white",
            fontSize: "0.875rem",
            bgcolor: "rgba(255, 255, 255, 0.15)",
            px: 2,
            py: 1,
            borderRadius: 3,
            minWidth: "fit-content",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.25)",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {storePhone || "Chưa cấu hình SĐT"}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
