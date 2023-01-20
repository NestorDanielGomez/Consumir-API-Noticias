import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const keyAPI = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${keyAPI}`;
      const { data } = await axios(url);
      setNoticias(data.articles);
    };
    consultaAPI();
  }, [categoria]);

  const handleChangeCategoria = (e) => setCategoria(e.target.value);

  return (
    <NoticiasContext.Provider
      value={{ categoria, handleChangeCategoria, noticias }}>
      {children}
    </NoticiasContext.Provider>
  );
};
export { NoticiasProvider };

export default NoticiasContext;
