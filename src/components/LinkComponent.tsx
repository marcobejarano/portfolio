import { Link } from "@builder.io/qwik-city";
import type { LinkComponentProps } from "~/types/LinkComponentProps";

const capitalize = (word: string) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const capitalizeWords = (words: string) => {
  return words.split(" ").map(capitalize).join(" ");
};

export const LinkComponent = ({ linkText }: LinkComponentProps) => {
  return (
    <Link
      href={`/${linkText}`}
      class="hover:text-green-600 active:text-green-800"
    >
      {capitalizeWords(linkText)}
    </Link>
  );
};
