import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ProductGrid from "./ProductGrid";

export default function ProductCategoryPanel() {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <ProductGrid />

      <Paper
        sx={{
          m: 1,
          border: 0.5,
          borderRadius: 4,
          borderColor: "grey.100",
          display: "flex",
          
        }}
        elevation={0}
      >
        {/* Notes Section */}
        <Box sx={{ p: 2, width: "60%" }}>
          <TextField
            placeholder="Ghi chú đơn hàng"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={2}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ alignSelf: "flex-start", mt: 0.5 }}
                >
                  <EditIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Order Summary */}
        <Box
          sx={{
            p: 2,
            width: "40%",
          }}
        >
          <Grid container spacing={1}>
            <Grid size={{ xs: 8 }}>
              <Typography variant="body2" color="text.secondary">
                Tổng tiền hàng
              </Typography>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ textAlign: "right" }}>
              <Typography variant="body2">0</Typography>
            </Grid>

            <Grid size={{ xs: 8 }}>
              <Typography variant="body2" color="text.secondary">
                Giảm giá
              </Typography>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ textAlign: "right" }}>
              <Typography variant="body2">0</Typography>
            </Grid>

            <Grid size={{ xs: 8 }}>
              <Typography variant="body2" fontWeight={600}>
                Khách cần trả
              </Typography>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ textAlign: "right" }}>
              <Typography variant="body2" fontWeight={600} color="primary">
                0
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
