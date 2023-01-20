import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  const { title, urlToImage, publishedAt, content, description, url, source } =
    noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component={"img"}
            alt={`imagen ${title}`}
            image={urlToImage}
            height={250}
          />
        )}
        <CardContent>
          <Typography variant={"body1"} color={"error"}>
            {source.name}
          </Typography>
          <Typography variant={"h5"} component={"div"}>
            {title}
          </Typography>
          <Typography variant={"body2"}>{description}</Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target={"_blank"}
            variant={"button"}
            width={"100%"}
            textAlign={"center"}
            sx={{ textDecoration: "none" }}>
            Leer Noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
