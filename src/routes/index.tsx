import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { FeatureProjects } from "~/components/FeatureProjects";

export default component$(() => {
  return (
    <div>
      {/* Hero Section */}
      <section class="py-10 space-y-4 text-center text-white bg-green-500">
        <h1>Hi, I am Marco Bejarano</h1>
        <img
          src="/images/profile_picture.jpg"
          alt="Profile Picture"
          class="w-40 h-40 mx-auto rounded-full object-cover"
        />
        <p>Full Stack Developer</p>
        <Link href="/projects" class="hover:text-zinc-500 active:text-zinc-700">
          View My Projects
        </Link>
      </section>

      {/* Featured Projects */}
      <section class="py-10 space-y-4 text-center text-white bg-amber-800">
        <h2 class="font-bold">Featured Projects</h2>
        <FeatureProjects />
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my portfolio",
  meta: [
    {
      name: "description",
      content: "Main portfolio page",
    },
  ],
};
