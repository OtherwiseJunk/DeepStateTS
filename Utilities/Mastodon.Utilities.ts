import { mastodon } from "masto";
import fs from "node:fs";
import path from "node:path";

export class MastodonUtilities {
  constructor(private masto: mastodon.Client) {}

  async getLocalTimelineStream() {
    return this.masto.v1.stream.streamCommunityTimeline();
  }

  async createNewMediaAttachmentFromPath(
    path: string,
    descrition: string | undefined
  ) {
    return this.masto.v2.mediaAttachments.create({
      file: new Blob([fs.readFileSync(path)]),
      description: descrition,
    });
  }

  async createNewStatus(
    content: string,
    mediaIds: string[],
    inReplyToId: string | undefined
  ) {
    return this.masto.v1.statuses.create({
      inReplyToId: inReplyToId,
      status: content,
      mediaIds: mediaIds,
    });
  }
}
