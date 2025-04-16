import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { ProjectCardProps } from "~/types/ProjectCardProps";

export const ProjectCard = component$(
  ({ title, image, description, link }: ProjectCardProps) => {
    return (
      <div class="w-fit max-w-sm mx-auto flex flex-col justify-center items-center gap-y-2 px-6 py-8 border-2 rounded-lg bg-blue-700">
        <h2 class="text-zinc-200">{title}</h2>
        <img
          src={image}
          alt={title}
          class="w-40 h-40 mx-auto border object-cover"
        />
        <p class="text-center">{description}</p>
        <Link
          href={link}
          class=" text-zinc-800 hover:text-green-600 active:text-green-800"
          target="_blank"
        >
          Navigate to the project
        </Link>
      </div>
    );
  },
);
