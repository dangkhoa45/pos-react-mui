import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ProductCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.shadows[4],
  },
  height: 120,
  display: "flex",
  flexDirection: "column",
}));

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  products?: Product[];
  onProductClick?: (product: Product) => void;
}

export default function ProductGrid({ products = [], onProductClick }: Props) {
  const handleProductClick = (product: Product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  if (products.length === 0) {
    return (
      <Box 
        sx={{ 
          flex: 1, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: "text.secondary"
        }}
      >
        <Typography variant="body2">Chưa có sản phẩm nào</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1, overflow: "auto", p: 1 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductCard onClick={() => handleProductClick(product)}>
              <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                <Typography variant="body2" fontWeight={500} noWrap>
                  {product.name}
                </Typography>
                <Typography variant="caption" color="primary" fontWeight={600} sx={{ mt: 1 }}>
                  {product.price.toLocaleString()} ₫
                </Typography>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
