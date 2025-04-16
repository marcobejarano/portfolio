import { component$, useVisibleTask$ } from "@builder.io/qwik";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectCard } from "./ProjectCard";

export const FeatureProjects = component$(() => {
  useVisibleTask$(
    async () => {
      if (typeof window !== "undefined") {
        const Swiper = (await import("swiper")).default;
        const { Navigation, Pagination, Autoplay } = await import(
          "swiper/modules"
        );

        new Swiper(".swiper", {
          modules: [Navigation, Pagination, Autoplay],

          direction: "horizontal",
          loop: true,

          pagination: {
            el: ".swiper-pagination",
          },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
      }
    },
    { strategy: "document-ready" },
  );

  return (
    <div>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ProjectCard
              title="Market Place API"
              image="/images/goku.jpg"
              description="A Ruby on Rails market place for selling and buying products"
              link="https://github.com/marcobejarano/async_market_place_api"
            />
          </div>
          <div class="swiper-slide">
            <ProjectCard
              title="Market Place API"
              image="/images/goku.jpg"
              description="A Ruby on Rails market place for selling and buying products"
              link="https://github.com/marcobejarano/async_market_place_api"
            />
          </div>
          <div class="swiper-slide">
            <ProjectCard
              title="Market Place API"
              image="/images/goku.jpg"
              description="A Ruby on Rails market place for selling and buying products"
              link="https://github.com/marcobejarano/async_market_place_api"
            />
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
});
