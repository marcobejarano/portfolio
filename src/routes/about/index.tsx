import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <section class="py-10 space-y-4 text-center text-white bg-green-500">
        <h1 class="text-xl">About Me</h1>
        <img
          src="/images/profile_picture.jpg"
          alt="Profile Picture"
          class="w-40 h-40 mx-auto rounded-full object-cover"
        />
        <p class="max-w-sm mx-auto mb-6">
          I am Marco Bejarano, a full stack developer passionate about crafting
          elegant, performant web applications. I specialize in Qwik City and
          Ruby on Rails, and love building things that make life easier.
        </p>
      </section>

      <section class="py-10 space-y-4 text-center text-white bg-amber-800">
        <h2 class="text-lg">Main Tech Stack</h2>
        <p>
          "I specialize in the following stack and I use them in my daily
          tasks."
        </p>
        <ul>
          <li>Ruby on Rails</li>
          <li>Qwik City</li>
          <li>Tailwind</li>
          <li>PostgreSQL</li>
        </ul>
      </section>

      <section class="py-10 space-y-4 text-center text-white bg-blue-700">
        <h2 class="text-lg">Alternative Tech Stack</h2>
        <p>
          "I am an amateur in these frameworks but I enjoy use it by side
          projects only."
        </p>
        <ul>
          <li>Axum</li>
          <li>Go Fiber</li>
          <li>NestJS</li>
          <li>FastAPI</li>
          <li>Spring Boot WebFlux with Kotlin</li>
          <li>Solid Start</li>
          <li>SvelteKit</li>
          <li>Nextjs</li>
          <li>Nuxtjs</li>
          <li>Angular</li>
        </ul>
      </section>
    </div>
  );
});
