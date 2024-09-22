import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

const directus = createDirectus(process.env.DIRECTUS_API!).with(rest());

export default defineNuxtPlugin(() => {
  return {
    provide: { directus, readItem, readItems },
  };
});
