import { login, mastodon } from "masto";
import { NewStatusHandlers } from "./Handlers/NewStatusHandlers.ts";
import { MastodonUtilities } from "./Utilities/Mastodon.Utilities.ts";

console.info("Starting Deep State Mastodon Bot...");
console.debug(
  `${process.env["INSTANCE"]} instance. ${process.env["TOKEN"]} access token.`
);

const mastodonUtilities = new MastodonUtilities(
  await login({
    url: process.env["INSTANCE"] as string,
    accessToken: process.env["TOKEN"] as string,
  })
);

const stream = await mastodonUtilities.getLocalTimelineStream();

stream.on("update", (status: mastodon.v1.Status) => {
  NewStatusHandlers.MalarkeyLevel(status, mastodonUtilities);
});
