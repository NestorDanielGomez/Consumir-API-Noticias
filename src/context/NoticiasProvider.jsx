import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultaAPI = async () => {
      const keyAPI = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${keyAPI}`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    };
    consultaAPI();
  }, [categoria]);

  useEffect(() => {
    const consultaAPI = async () => {
      const keyAPI = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${keyAPI}`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    };
    consultaAPI();
  }, [pagina]);

  const handleChangeCategoria = (e) => setCategoria(e.target.value);
  const handleChangePagina = (e, valor) => setPagina(e.target.textContent);

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
      }}>
      {children}
    </NoticiasContext.Provider>
  );
};
export { NoticiasProvider };

export default NoticiasContext;
