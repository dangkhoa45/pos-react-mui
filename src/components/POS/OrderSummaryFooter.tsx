import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
type Props = {
  total?: number;
  discount?: number;
  due?: number;
};

export default function OrderSummaryFooter({
  total = 0,
  discount = 0,
  due = 0,
}: Props) {
  return (
    <Box sx={{ px: 1, pb: 1 }}>
      <Grid container columnSpacing={2}>
        {/* Cột trái – Ghi chú */}
        <Grid
          size={{ xs: 5 }}
          sx={{ display: "flex", alignItems: "center", minHeight: 24 }}
        >
          <IconButton size="small" sx={{ mr: 0.5, p: 0.5 }}>
            <EditOutlinedIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="body2">Ghi chú đơn hàng</Typography>
        </Grid>

        {/* Cột phải – Bảng tiền */}
        <Grid size={{ xs: 7 }}>
          <Grid container>
            <Grid size={{ xs: 7 }}>
              <Typography variant="body2">Tổng tiền hàng</Typography>
            </Grid>
            <Grid size={{ xs: 5 }} textAlign="right">
              <Typography variant="body2">{total.toLocaleString()}</Typography>
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ my: 0.5 }}>
              {/* vạch phân cách ngắn bên phải giống ảnh */}
              <Divider sx={{ ml: "40%", width: "60%" }} />
            </Grid>

            <Grid size={{ xs: 7 }}>
              <Typography variant="body2">Giảm giá</Typography>
            </Grid>
            <Grid size={{ xs: 5 }} textAlign="right">
              <Typography variant="body2">
                {discount.toLocaleString()}
              </Typography>
            </Grid>

            <Grid size={{ xs: 7 }}>
              <Typography fontWeight={600}>Khách cần trả</Typography>
            </Grid>
            <Grid size={{ xs: 5 }} textAlign="right">
              <Typography color="primary" fontWeight={600}>
                {due.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
