import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "swh3zclv",
  dataset: "production",
  apiVersion: "2022-09-20",
  useCdn: "true",
  token:
    "skz7Q0jiG0TNVxUcNM4jnyPk7XoVb6FrlMfom2oc60pLdVGB74dSDks4Vqwrcy8JxBeAvx3OPVrKSr6k3sCpfLejlgWNPP4Hiuwob6RgQrUhBYBBBU6q6TWHqqRiGDBOXtA5A6JjT8cwzd1JaiAN5F5sZyq14ryGxkVrz5sdhSd6K2WCgo8k",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
