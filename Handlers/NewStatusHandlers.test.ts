import { describe, expect, test } from "@jest/globals";
import { NewStatusHandlers } from "./NewStatusHandlers.ts";
import {
  statusContentMalarkeyLevels,
  statusContentNoMalarkeyLevel,
} from "../Test/TestData/Mastodon.testdata.ts";


describe("New Status Handlers", () => {
  describe("Malarkey Level", () => {
    describe('status.content contains "malarkey level"', () => {
      test("StatusContainsMalarkeyLevelCommand Should return true", async () => {
        expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(statusContentMalarkeyLevels[0])).toBeTruthy();
        expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(statusContentMalarkeyLevels[1])).toBeTruthy();
        expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(statusContentMalarkeyLevels[2])).toBeTruthy();
      });
    });
    describe('status.content does not contains "malarkey level"', () => {
      test("StatusContainsMalarkeyLevelCommand should return false", async () => {
        expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(statusContentNoMalarkeyLevel[0])).toBeFalsy();
        expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(statusContentNoMalarkeyLevel[1])).toBeFalsy();
        expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(statusContentNoMalarkeyLevel[2])).toBeFalsy();
      });
    });
  });
});
