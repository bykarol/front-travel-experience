import PostsList from "../components/PostsList";
import Categories from "../components/homepage/Categories";
import { useAllPlaces } from "../hooks";

const HomePage = () => {
  const info = useAllPlaces();
  if (!info) return <div>Cargando...</div>;
  if (info.status !== "ok")
    return <div>No se encontró ninguna experiencia</div>;
  return (
    <main>
      <section className="homepage-categories">
        <h2>Busca tu experiencia por categoría</h2>

        <Categories />
      </section>
      <section className="list-all-places">
        <h2>Reseñas más recientes</h2>
        <h3>Descubre los siguientes lugares</h3>
        {info && <PostsList posts={info} />}
      </section>
    </main>
  )
}

export default HomePage;