import { createTheme } from '@mui/material/styles';

// Import các màu bạn muốn sử dụng

const theme = createTheme({
  palette: {
    primary: {
      main: '#feAFA2', // Mã màu chủ đạo mới
    },
    secondary: {
      main: "rgb(25, 118, 210)"
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    // Các tùy chỉnh kiểu chữ khác
  },
});

export default theme;
