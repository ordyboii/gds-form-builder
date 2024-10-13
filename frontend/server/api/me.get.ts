import { readMe, withToken } from "@directus/sdk";

export default defineEventHandler((event) => {
  const cookie = getCookie(event, "directusToken");
  return useDirectus().request(withToken(cookie!, readMe()));
});
