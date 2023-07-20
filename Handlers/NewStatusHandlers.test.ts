import { describe, expect, test } from "@jest/globals";
import { NewStatusHandlers } from "./NewStatusHandlers.ts";
import {
  statusContentMagicGoolsball,
  statusContentMalarkeyLevel,
  statusContentNoMagicGoolsball,
  statusContentNoMalarkeyLevel,
  statusContentNoStateFacts,
  statusContentStateFacts,
} from "../Test/TestData/Mastodon.testdata.ts";

describe("New Status Handlers", () => {
  describe("Malarkey Level", () => {
    describe('status.content contains "malarkey level"', () => {
      test("StatusContainsCommandTrigger Should return true", () => {
        statusContentMalarkeyLevel.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsCommandTrigger(status, NewStatusHandlers.malarkeyLevelCommands)).toBeTruthy();
        });
      });
    });
    describe('status.content does not contains "malarkey level"', () => {
      test("StatusContainsCommandTrigger should return false", () => {
        statusContentNoMalarkeyLevel.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsCommandTrigger(status, NewStatusHandlers.malarkeyLevelCommands)).toBeFalsy();
        });
      });
    });
  });
  describe("Magic Goolsball", () => {
    describe('status.content contains "magic goolsball"', () => {
      test("StatusContainsCommandTrigger should return false", () => {
        statusContentMagicGoolsball.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsCommandTrigger(status, NewStatusHandlers.magicGoolsballCommands)).toBeTruthy();
        });
      });
    });
    describe('status.content doesn\'t contain "magic goolsball"', () => {
      test("StatusContainsCommandTrigger should return false", () => {
        statusContentNoMagicGoolsball.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsCommandTrigger(status, NewStatusHandlers.magicGoolsballCommands)).toBeFalsy();
        });
      });
    });
  });
  describe("Magic Goolsball", () => {
    describe('status.content contains "state facts" or "state "facts""', () => {
      test("StatusContainsCommandTrigger should return false", () => {
        statusContentStateFacts.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsCommandTrigger(status, NewStatusHandlers.stateFactsCommands)).toBeTruthy();
        });
      });
    });
    describe('status.content doesn\'t contain "state facts" or "state "facts""', () => {
      test("StatusContainsCommandTrigger should return false", () => {
        statusContentNoStateFacts.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsCommandTrigger(status, NewStatusHandlers.stateFactsCommands)).toBeFalsy();
        });
      });
    });
  });
});
