import { mastodon } from "masto";
import { RandomizationUtilities as Random, RandomizationUtilities } from "../Utilities/RandomizationUtilities.ts";
import { MastodonUtilities } from "../Utilities/Mastodon.Utilities.ts";
import { SecretMalarkeyLevel, MalarkeyLevels } from "../Constants/MalarkeyLevel.constants.ts";
import fs from "node:fs";
import { stateFacts } from "../Constants/StateFacts.constants.ts";

export class NewStatusHandlers {
  static malarkeyLevelCommands = ["malarkey level"];
  static magicGoolsballCommands = ["magic goolsball"];
  static stateFactsCommands = ["state facts", 'state "facts"', "state fact", 'state "fact"'];

  static async MalarkeyLevel(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsCommandTrigger(status, this.malarkeyLevelCommands)) {
      console.log("Sending them a malarkey level image...");
      let malarkeyLevel = (Random.percentChance(5) ? SecretMalarkeyLevel : Random.sample<string>(MalarkeyLevels)).split(":");

      let attachment = await mastodonUtilities.createNewMediaAttachmentFromPath(malarkeyLevel[1], malarkeyLevel[2]);
      mastodonUtilities.createNewStatus(malarkeyLevel[0], [attachment.id], status.id);
    }
  }
  static async MagicGoolsball(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsCommandTrigger(status, this.magicGoolsballCommands)) {
      console.log("Sending them a magic goolsball image...");
      let pathToGoolsball = "./Media/MagicGoolsball/";
      let selectedGoolsballPath = `${pathToGoolsball}${RandomizationUtilities.sample(fs.readdirSync(pathToGoolsball))}`;

      let attachment = await mastodonUtilities.createNewMediaAttachmentFromPath(selectedGoolsballPath, "Oh that Austan Goolsbee, what a rascal");
      mastodonUtilities.createNewStatus("You shake the Magic Goolsball(tm) and...", [attachment.id], status.id);
    }
  }
  static async StateFacts(status: mastodon.v1.Status, mastodonUtilities: MastodonUtilities) {
    if (this.StatusContainsCommandTrigger(status, this.stateFactsCommands)) {
      console.log("Sending them a sick state fact...");
      mastodonUtilities.createNewStatus(RandomizationUtilities.sample(stateFacts), [], status.id);
    }
  }
  static StatusContainsCommandTrigger(status: mastodon.v1.Status, commandTrigger: string[]) {
    let containsCommand = false;
    for (let i = 0; i < commandTrigger.length; i++) {
      console.log(`Verifying if ${status.content.toLocaleLowerCase()} contains ${commandTrigger[i]}`);
      if (status.content.toLowerCase().includes(commandTrigger[i])) {
        containsCommand = true;
      }
    }
    return containsCommand;
  }
}
