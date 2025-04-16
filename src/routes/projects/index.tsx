import { component$ } from "@builder.io/qwik";
import { ProjectCard } from "~/components/ProjectCard";

export default component$(() => {
  return (
    <div class="py-10 text-white bg-green-500">
      <h1 class="text-center text-lg font-bold">Projects</h1>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <ProjectCard
          title="Market Place API"
          image="/images/goku.jpg"
          description="A Ruby on Rails market place for selling and buying products"
          link="https://github.com/marcobejarano/async_market_place_api"
        />
        <ProjectCard
          title="Market Place API"
          image="/images/goku.jpg"
          description="A Ruby on Rails market place for selling and buying products"
          link="https://github.com/marcobejarano/async_market_place_api"
        />
        <ProjectCard
          title="Market Place API"
          image="/images/goku.jpg"
          description="A Ruby on Rails market place for selling and buying products"
          link="https://github.com/marcobejarano/async_market_place_api"
        />
        <ProjectCard
          title="Market Place API"
          image="/images/goku.jpg"
          description="A Ruby on Rails market place for selling and buying products"
          link="https://github.com/marcobejarano/async_market_place_api"
        />
        <ProjectCard
          title="Market Place API"
          image="/images/goku.jpg"
          description="A Ruby on Rails market place for selling and buying products"
          link="https://github.com/marcobejarano/async_market_place_api"
        />
        <ProjectCard
          title="Market Place API"
          image="/images/goku.jpg"
          description="A Ruby on Rails market place for selling and buying products"
          link="https://github.com/marcobejarano/async_market_place_api"
        />
      </section>
    </div>
  );
});
