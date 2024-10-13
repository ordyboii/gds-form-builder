export default defineEventHandler(async (event) => {
  const result = await useDirectus().login("admin@example.com", "admin");

  setCookie(event, "directusToken", result.access_token!, {
    httpOnly: true,
    sameSite: "strict",
  });

  setCookie(event, "directusRefreshToken", result.refresh_token!, {
    httpOnly: true,
    sameSite: "strict",
  });
});
