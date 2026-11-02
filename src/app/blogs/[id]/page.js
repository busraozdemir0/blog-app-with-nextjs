import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default async function Page({ params }) {

  const { id } = await params; // klasör isminden dinamik olarak blog id'sini alma (klasörleme mantığı ile routing için)
  const response = await fetch("http://localhost:3000/api/blogs/" + id, { cache: "no-store" });
  const blog = await response.json();

  return (
    <Grid container>
      <Card sx={{ display: "flex" }}>
        <CardMedia component="img" sx={{ width: "45%", height: "200px" }} image={`/img/${blog.img}`} alt=""></CardMedia>
        <Box>
          <CardContent>
            <Typography component="div" variant="h6">
              {blog.name}
            </Typography>
            <Typography component="div" variant="subtitle1">
              {blog.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
