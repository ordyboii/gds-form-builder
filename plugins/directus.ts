import {
  createDirectus,
  authentication,
  realtime,
  rest,
  readItem,
  readItems,
  readMe,
  createItem,
} from "@directus/sdk";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const directus = createDirectus(config.public.directusApi)
    .with(authentication("cookie", { credentials: "include" }))
    .with(rest({ credentials: "include" }))
    .with(realtime());

  return {
    provide: { directus, readItem, readItems, readMe, createItem },
  };
});
