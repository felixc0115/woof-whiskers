import styled from "@emotion/styled";
import { Box, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
})); //styled allows you to make reusable styled components
