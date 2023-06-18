import { mastodon } from "masto";
export function createStatusWithContent(content: string): mastodon.v1.Status {
  return {
    id: "1",
    uri: "someURI",
    createdAt: "eventually",
    editedAt: "",
    account: account,
    content: content,
    visibility: "public",
    sensitive: false,
    spoilerText: "no spoiler detected",
    mediaAttachments: [mediaAttachment],
    application: application,
    mentions: [],
    tags: [],
    emojis: [],
    reblogsCount: 69,
    repliesCount: 420,
    favouritesCount: 1337,
  };
}
export const application: mastodon.v1.Application = { name: "fakestodon" };
export const mediaAttachment: mastodon.v1.MediaAttachment = {
  id: "1",
  type: "image",
  previewUrl: "someUrl",
};
export const account: mastodon.v1.Account = {
  id: "1",
  username: "someUser",
  url: "someUrl",
  acct: "someAcct",
  displayName: "someName",
  note: "no notes",
  avatar: "wikidAvatar.png",
  avatarStatic: "staticWikidAvatar.png",
  header: "header.png",
  headerStatic: "staticHeader.png",
  locked: false,
  emojis: [],
  discoverable: true,
  createdAt: "",
  statusesCount: 69,
  followersCount: 1337,
  followingCount: 420,
  lastStatusAt: "",
  roles: [],
};
export const statusContentMalarkeyLevel: mastodon.v1.Status[] = [
  createStatusWithContent("some content with MALARKEY LEVEL in it"),
  createStatusWithContent("some content with MaLARkEy leVeL in it"),
  createStatusWithContent("some content with malarkey level in it"),
];
export const statusContentNoMalarkeyLevel: mastodon.v1.Status[] = [
  createStatusWithContent("some content that doesn't have a dreaded malarKEYLevel in it"),
  createStatusWithContent("some content that doesn't have a dreaded malARey level in it"),
  createStatusWithContent("some content that doesn't have a dreaded MAR LAR KEY LEV EL in it"),
];

export const statusContentMagicGoolsball: mastodon.v1.Status[] = [
  createStatusWithContent("some content with MAGIC GOOLSBALL in it"),
  createStatusWithContent("some content with MaGIc GooLSbALl in it"),
  createStatusWithContent("some content with magic goolsball in it"),
];
export const statusContentNoMagicGoolsball: mastodon.v1.Status[] = [
  createStatusWithContent("some content that doesn't have a dreaded magicgoolsball in it"),
  createStatusWithContent("some content that doesn't have a dreaded magc goolsball in it"),
  createStatusWithContent("some content that doesn't have a dreaded MA GI CG OO LS BA LL in it"),
];
