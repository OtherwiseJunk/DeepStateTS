import { mastodon } from "masto";
import { RandomizationUtilities as Random } from "../Utilities/RandomizationUtilities.ts";
import { MastodonUtilities } from "../Utilities/Mastodon.Utilities.ts";
import { SecretMalarkeyLevel, MalarkeyLevels } from "../Constants/MalarkeyLevel.constants.ts";

export class NewStatusHandlers {
  static async MalarkeyLevel(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsMalarkeyLevelCommand(status)) {
      let malarkeyLevel = (Random.percentChance(5) ? SecretMalarkeyLevel : Random.sample<string>(MalarkeyLevels)).split(":");

      let attachment = await mastodonUtilities.createNewMediaAttachmentFromPath(malarkeyLevel[1], malarkeyLevel[2]);
      mastodonUtilities.createNewStatus(malarkeyLevel[0], [attachment.id], status.id);
    }
  }
  static StatusContainsMalarkeyLevelCommand(status: mastodon.v1.Status) {
    return status.content.toLowerCase().includes("malarkey level");
  }
  static StatusContainsMagicGoolsballCommand(status: mastodon.v1.Status) {
    return status.content.toLowerCase().includes("magic goolsball");
  }
}
