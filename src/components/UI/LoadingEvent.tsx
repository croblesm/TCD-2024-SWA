import { Box, Skeleton } from "@mui/material";

export const LoadingEvent = () => {
  return (
    <Box sx={{ width: 345, mt: 4, mx: { md: 4 } }}>
      <Skeleton
        variant="rectangular"
        width="full"
        height={195}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ mt: 3 }}
        height={25}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ mt: 2 }}
        height={25}
      />
      <Skeleton animation="wave" sx={{ mt: 3 }} />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
};
