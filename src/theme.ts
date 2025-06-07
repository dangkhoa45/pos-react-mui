import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
        contained: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width: "500px",
          bgcolor: "transparent",
          height: "auto",
          "& .MuiBottomNavigationAction-root": {
            color: "text.secondary",
            fontWeight: 500,
            minWidth: 140,
            padding: "8px 12px",
            borderRadius: 8,
            margin: "0 4px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            display: "flex !important",
            flexDirection: "row !important",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            minHeight: "48px",
            maxWidth: "none",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0.05) 100%)",
              opacity: 0,
              transition: "opacity 0.3s ease",
              borderRadius: "inherit",
              zIndex: 0,
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1.25rem",
              zIndex: 1,
            },
            "&:hover": {
              color: "primary.main",
              transform: "translateY(-2px) scale(1.02)",
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",

              "&::before": {
                opacity: 1,
              },
            },
            "&.Mui-selected": {
              color: "white",
              bgcolor: "primary.main",
              fontWeight: 600,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
              "&::before": {
                opacity: 0,
              },
              "&:hover": {
                bgcolor: "primary.dark",
                color: "white",
              },
            },
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "0.75rem !important",
            fontWeight: "inherit",
            opacity: "1 !important",
            margin: "0 !important",

            zIndex: 1,
            position: "relative",
            whiteSpace: "nowrap",

            "&.Mui-selected": {
              fontSize: "0.75rem !important",
              opacity: "1 !important",
            },
          },
        },
      },
    },
  },
});

export default theme;
