import {
  createDirectus,
  authentication,
  realtime,
  rest,
  readItem,
  readItems,
} from "@directus/sdk";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const directus = createDirectus()
  // Fix to use environment variable
    .with(authentication("cookie", { credentials: "include" }))
    .with(rest({ credentials: "include" }))
    .with(realtime());

  return {
    provide: { directus, readItem, readItems },
  };
});
