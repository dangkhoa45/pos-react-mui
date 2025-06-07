# POS System - Material-UI React Application

Một hệ thống Point of Sale (POS) hiện đại được xây dựng bằng React, TypeScript, và Material-UI, cung cấp giao diện trực quan và thân thiện cho việc quản lý bán hàng.

## ✨ Tính năng chính

### 🛍️ Quản lý bán hàng
- **Giao diện POS đầy đủ**: Tìm kiếm sản phẩm, quản lý giỏ hàng, thanh toán
- **Đa chế độ bán hàng**: Bán nhanh, bán thường, bán giao hàng
- **Quản lý hóa đơn**: Tạo, chỉnh sửa, và theo dõi nhiều hóa đơn cùng lúc
- **Tìm kiếm khách hàng**: Hỗ trợ tìm kiếm và thêm khách hàng mới

### 🎨 Giao diện người dùng
- **Material-UI Design System**: Giao diện hiện đại, responsive
- **Theme tùy chỉnh**: Màu sắc và typography được tối ưu hóa
- **Animations mượt mà**: Hiệu ứng hover, transitions đẹp mắt
- **Layout linh hoạt**: Sử dụng Grid system của MUI

### 🔧 Tính năng kỹ thuật
- **TypeScript**: Type safety và IntelliSense tốt
- **Component-based**: Kiến trúc module hóa, dễ bảo trì
- **Hot Module Replacement**: Phát triển nhanh với Vite
- **ESLint**: Code quality và consistency

## 🏗️ Kiến trúc dự án

```
src/
├── components/POS/          # Các component POS chuyên biệt
│   ├── POSAppBar.tsx       # Thanh điều hướng chính
│   ├── ProductGrid.tsx     # Lưới hiển thị sản phẩm
│   ├── OrderDetailsPanel.tsx # Panel chi tiết đơn hàng
│   ├── ProductCategoryPanel.tsx # Panel danh mục sản phẩm
│   ├── BottomBar.tsx       # Thanh chế độ bán hàng
│   └── ...
├── pages/
│   └── POSPage.tsx         # Trang POS chính
├── theme.ts                # Cấu hình Material-UI theme
└── App.tsx                 # Component gốc
```

## 🚀 Bắt đầu sử dụng

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Cài đặt và chạy

```bash
# Clone repository
git clone <repository-url>
cd my-mui-app

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

### Scripts có sẵn

- `npm run dev` - Khởi động development server
- `npm run build` - Build production
- `npm run lint` - Kiểm tra code với ESLint
- `npm run preview` - Preview production build

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool và dev server

### UI Framework  
- **Material-UI (MUI) v7** - Component library
- **@mui/icons-material** - Icon set
- **@emotion** - CSS-in-JS styling

### Routing & State
- **React Router DOM** - Client-side routing
- Component state với React hooks

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TS-specific linting
- **Vite HMR** - Hot reload

## 📱 Tính năng POS

### Giao diện chính
- **Thanh tìm kiếm sản phẩm** với shortcut (F3)
- **Tab quản lý hóa đơn** - Tạo, chuyển đổi, đóng hóa đơn
- **Nút thao tác nhanh** - Giỏ hàng, hoàn tác, đồng bộ, in

### Panel sản phẩm
- **Lưới sản phẩm** responsive với hover effects
- **Danh mục sản phẩm** dễ dàng điều hướng
- **Ghi chú đơn hàng** và tóm tắt thanh toán

### Panel đơn hàng
- **Thông tin khách hàng** với tìm kiếm (F4)
- **Chi tiết đơn hàng** realtime
- **Tùy chọn COD** (Thu hộ tiền)

### Chế độ bán hàng
- **Bán nhanh** ⚡ - Xử lý nhanh
- **Bán thường** ⏱️ - Quy trình tiêu chuẩn  
- **Bán giao hàng** 🚚 - Đơn hàng delivery

## 🎨 Tùy chỉnh Theme

Theme Material-UI được tùy chỉnh với:

```typescript
// src/theme.ts
const theme = createTheme({
  palette: {
    primary: { main: "#2196F3" },    // Blue
    secondary: { main: "#FFC107" },   // Amber
    background: { 
      default: "#f5f5f5",
      paper: "#ffffff" 
    }
  },
  components: {
    MuiButton: { /* Custom button styles */ },
    MuiCard: { /* Custom card styles */ },
    // ... more customizations
  }
});
```

## 🔧 Mở rộng ESLint

Để sử dụng trong production, bạn có thể cấu hình ESLint nâng cao:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## 📄 License

MIT License

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.
