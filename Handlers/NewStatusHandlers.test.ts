import { describe, expect, test } from "@jest/globals";
import { NewStatusHandlers } from "./NewStatusHandlers.ts";
import {
  statusContentMagicGoolsball,
  statusContentMalarkeyLevel,
  statusContentNoMagicGoolsball,
  statusContentNoMalarkeyLevel,
} from "../Test/TestData/Mastodon.testdata.ts";

describe("New Status Handlers", () => {
  describe("Malarkey Level", () => {
    describe('status.content contains "malarkey level"', () => {
      test("StatusContainsMalarkeyLevelCommand Should return true", () => {
        statusContentMalarkeyLevel.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(status)).toBeTruthy();
        });
      });
    });
    describe('status.content does not contains "malarkey level"', () => {
      test("StatusContainsMalarkeyLevelCommand should return false", () => {
        statusContentNoMalarkeyLevel.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsMalarkeyLevelCommand(status)).toBeFalsy();
        });
      });
    });
  });
  describe("Magic Goolsball", () => {
    describe('status.content contains "magic goolsball"', () => {
      test("StatusContainsMalarkeyLevelCommand should return false", () => {
        statusContentMagicGoolsball.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsMagicGoolsballCommand(status)).toBeTruthy();
        });
      });
    });
    describe('status.content doesn\'t contain "magic goolsball"', () => {
      test("StatusContainsMalarkeyLevelCommand should return false", () => {
        statusContentNoMagicGoolsball.forEach((status) => {
          expect(NewStatusHandlers.StatusContainsMagicGoolsballCommand(status)).toBeFalsy();
        });
      });
    });
  });
});
