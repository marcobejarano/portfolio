import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="flex justify-center items-center gap-8 p-4 text-white bg-zinc-700">
      <p>Crafted with ♥ by Marco Bejarano &copy; {new Date().getFullYear()}</p>
    </footer>
  );
});
