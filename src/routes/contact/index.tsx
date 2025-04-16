import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="py-10 space-y-4 text-center text-white bg-green-500">
      <h1>Get in Touch!</h1>
      <img
        src="/images/south-park.jpg"
        alt="South Park"
        class="w-120 mx-auto border object-cover"
      />
      <p>
        Have a project in mind or just want to chat? Feel free to drop me a
        message!
      </p>
      <div class="flex flex-col justify-center items-center gap-y-2">
        <Link
          href="mailto:m_uno_p@hotmail.com?subject=Hello&body=Hi Marco, I found your portfolio..."
          target="_blank"
          class="text-zinc-800 hover:text-green-600 active:text-green-800"
        >
          📧 Email
        </Link>
        <Link
          href="https://www.linkedin.com/in/marco-bejarano/"
          target="_blank"
          class="text-zinc-800 hover:text-green-600 active:text-green-800"
        >
          🌐 LinkedIn
        </Link>
        <Link
          href="https://github.com/marcobejarano"
          target="_blank"
          class="text-zinc-800 hover:text-green-600 active:text-green-800"
        >
          💻 GitHub
        </Link>
      </div>
    </section>
  );
});
