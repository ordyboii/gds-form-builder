import { authentication, createDirectus, rest } from "@directus/sdk";

export default function useDirectus() {
  return createDirectus("http://127.0.0.1:8055")
    .with(authentication("json"))
    .with(rest());
}
