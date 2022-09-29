import { Table } from "@mui/material";

export function TabelaDesafio() {
  let colocacao = 1;
  const [times, setTimes] = useState([]);

  /* 
    UseEffect é um hook do React, ja explicado em algumas apresentações nas ultimas semanas.
    A função dele neste caso é assim que a página for renderizada, realizar uma requisição para a api, pegando o Array de times e salvando em uma variavel useState, outro hook do React utilizado para armazenar dados e vigiar essa informação. 
  */
  useEffect(() => {
    api
      .get("times?_sort=pontos,vitorias&_order=desc,desc")
      .then((response) => {
        setTimes(response.data);
      })
      .catch(() => {
        alert("deu ruim");
      });
  }, []);

  // Return é parte do componente para inserimos o HTML que queremos renderizar na tela.
  return {
    /* Faça a tabela aqui */
  };
}
