import { mastodon } from "masto";
import { RandomizationUtilities as Random, RandomizationUtilities } from "../Utilities/RandomizationUtilities.ts";
import { MastodonUtilities } from "../Utilities/Mastodon.Utilities.ts";
import { SecretMalarkeyLevel, MalarkeyLevels } from "../Constants/MalarkeyLevel.constants.ts";
import fs from "node:fs";
import { stateFacts } from "../Constants/StateFacts.constants.ts";

export class NewStatusHandlers {
  static malarkeyLevelCommand = "malarkey level";
  static magicGoolsballCommand = "magic goolsball";
  static stateFactsCommand = "state facts";
  static stateFactsAlias = 'state "facts"';

  static async MalarkeyLevel(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsCommandTrigger(status, [this.malarkeyLevelCommand])) {
      let malarkeyLevel = (Random.percentChance(5) ? SecretMalarkeyLevel : Random.sample<string>(MalarkeyLevels)).split(":");

      let attachment = await mastodonUtilities.createNewMediaAttachmentFromPath(malarkeyLevel[1], malarkeyLevel[2]);
      mastodonUtilities.createNewStatus(malarkeyLevel[0], [attachment.id], status.id);
    }
  }
  static async MagicGoolsball(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsCommandTrigger(status, [this.magicGoolsballCommand])) {
      let pathToGoolsball = "./Media/MagicGoolsball/";
      let selectedGoolsballPath = `${pathToGoolsball}${RandomizationUtilities.sample(fs.readdirSync(pathToGoolsball))}`;

      let attachment = await mastodonUtilities.createNewMediaAttachmentFromPath(selectedGoolsballPath, "Oh that Austan Goolsbee, what a rascal");
      mastodonUtilities.createNewStatus("You shake the Magic Goolsball(tm) and...", [attachment.id], status.id);
    }
  }
  static async statusContentMagicGoolsball(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsCommandTrigger(status, [this.stateFactsCommand, this.stateFactsAlias])) {
      mastodonUtilities.createNewStatus(RandomizationUtilities.sample(stateFacts), [], status.id);
    }
  }
  static StatusContainsCommandTrigger(status: mastodon.v1.Status, commandTrigger: string[]) {
    let containsCommand = false;
    for (let i = 0; i < commandTrigger.length; i++) {
      if (status.content.toLowerCase().includes(commandTrigger[i])) {
        containsCommand = true;
      }
    }
    return containsCommand;
  }
}
