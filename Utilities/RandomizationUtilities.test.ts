import { describe, expect, test } from '@jest/globals';
import { RandomizationUtilities } from './RandomizationUtilities.ts';

describe('Randomization Utilities',() =>{
    describe('sample function',() =>{

    });
    describe('percentChance function',() =>{
        test('should receive no more than 600 "true" responses after 10,000 rounds of a 5 percent chance checks', () =>{
            let rolls: Boolean[] = runPercentChanceMultipleTimes(10000,5);
            let trueCount = rolls.filter(Boolean).length;
            expect(trueCount).toBeLessThanOrEqual(600);
        });
        test('should receive no less than 400 "true" responses after 10,000 rounds of a 5 percent chance checks', () =>{
            let rolls: Boolean[] = runPercentChanceMultipleTimes(10000,5);
            let trueCount = rolls.filter(Boolean).length;
            expect(trueCount).toBeGreaterThanOrEqual(400);
        });
    });
});

function runPercentChanceMultipleTimes(times: number, percentChance: number): Boolean[]{
    let rolls: Boolean[] = [];
    for(let i = 0; i < times; i++){
        rolls.push(RandomizationUtilities.percentChance(percentChance));
    }
    return rolls;
}
