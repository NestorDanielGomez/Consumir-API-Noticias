import Noticia from "./Noticia";
import useNoticias from "../hooks/useNoticias";
import { Grid, Typography, Stack, Pagination } from "@mui/material";
const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);
  console.log(pagina);
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant={"h3"}
        component={"h2"}>
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.url} />
        ))}
      </Grid>
      <Stack
        sx={{ marginTop: "1rem" }}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Pagination
          count={totalPaginas}
          color={"primary"}
          onChange={handleChangePagina}
          page={Number(pagina)}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
