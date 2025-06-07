import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Props {
  items?: OrderItem[];
  customerName?: string;
  orderDate?: string;
  total?: number;
  discount?: number;
  due?: number;
}

export default function OrderDetailsPanel({
  orderDate = "07/06/2025  22:26",
}: Props) {
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
        border: 0.5,
        borderRadius: 4,
        borderColor: "grey.100",
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Đăng Khoa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {orderDate}
        </Typography>
      </Box>

      <TextField
        placeholder="Tìm khách hàng (F4)"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "auto",
        }}
      >
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Thu hộ tiền (COD)"
          sx={{ mb: 0 }}
        />
        <Typography variant="h4" fontWeight="bold">
          0
        </Typography>
      </Box>
    </Paper>
  );
}
