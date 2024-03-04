import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MonsterCard from "../components/MonsterCard/MonsterCard";
import { Monster, Monsters, fetchAllMonsters } from "../services/monstersFetch";
import "./Home.css";
const INITIAL_STATE = {
  docs: [],
  totalDocs: 0,
  limit: 0,
  totalPages: 0,
  page: 0,
  pagingCounter: 0,
  hasPrevPage: false,
  hasNextPage: true,
  prevPage: null,
  nextPage: 1,
};
function Home() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<Monsters>(INITIAL_STATE);
  const [results, setResult] = useState<Monster[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllMonsters(page)
      .then((datos) => {
        setData(datos);
        console.log(datos.nextPage);
        setResult((prev) => prev.concat(datos.docs));
      })
      .catch((error) => console.log(error));
  }, [page]);

  const handleNext = (nextPage: number) => {
    setPage(nextPage);
  };
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="container">
        <InfiniteScroll
          className="card-container"
          dataLength={results.length}
          next={() => handleNext(data.nextPage)}
          hasMore={data.hasNextPage}
          loader={<h4>Cargando ....</h4>}
          endMessage={<h4>No hay mas resultados</h4>}
        >
          {results.map((monster) => (
            <MonsterCard key={monster._id} monster={monster} />
          ))}
        </InfiniteScroll>
      </main>
      <Footer />
    </>
  );
}
export default Home;
