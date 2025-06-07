import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BottomBar from "../components/POS/BottomBar";
import OrderDetailsPanel from "../components/POS/OrderDetailsPanel";
import POSAppBar from "../components/POS/POSAppBar";
import ProductCategoryPanel from "../components/POS/ProductCategoryPanel";
import ProductGrid from "../components/POS/ProductGrid";

export default function POSPage() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <POSAppBar />

      <Grid container sx={{ flex: 1, overflow: "hidden" }}>
        {/* Left Panel - Product Categories */}
        <Grid size={{ xs: 5 }}>
          <ProductCategoryPanel />
        </Grid>

        {/* Middle Panel - Order Details */}
        <Grid size={{ xs: 3 }} sx={{ p: 1 }}>
          <OrderDetailsPanel />
        </Grid>

        {/* Right Panel - Product Grid */}
        <Grid size={{ xs: 4 }} sx={{ p: 1 }}>
          <Paper
            sx={{
              p: 1.5,
              border: 0.5,
              borderRadius: 4,
              borderColor: "grey.100",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            elevation={0}
          >
            <ProductGrid />

            {/* Payment Button */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ py: 1.5, fontSize: "1.1rem", fontWeight: 600 }}
            >
              THANH TOÁN
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <BottomBar />
    </Box>
  );
}
