import { component$ } from "@builder.io/qwik";
import { LinkComponent } from "./LinkComponent";

export const Nav = component$(() => {
  return (
    <nav class="flex justify-center items-center gap-8 p-4 text-white bg-blue-400">
      <LinkComponent linkText="home" />
      <LinkComponent linkText="about" />
      <LinkComponent linkText="projects" />
      <LinkComponent linkText="contact" />
    </nav>
  );
});
