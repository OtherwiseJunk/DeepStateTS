import { describe, expect, jest, test } from '@jest/globals';
import { RandomizationUtilities } from './RandomizationUtilities.ts';

jest.retryTimes(3);
describe('Randomization Utilities',() =>{
    describe('sample function',() =>{
        test('should receive each element no more than 2600 times after running 10,000 rounds for an array of 4 elements', () =>{
            let arrayToSample: string[] = ['one','two','three','four'];
            let rolls: string[] = runSampleMultipleTimes(10000, arrayToSample);

            let elementOneCount = rolls.filter(value => { return value === arrayToSample[0] }).length;
            let elementTwoCount = rolls.filter(value => { return value === arrayToSample[1] }).length;
            let elementThreeCount = rolls.filter(value => { return value === arrayToSample[2] }).length;
            let elementFourCount = rolls.filter(value => { return value === arrayToSample[3] }).length;

            expect(elementOneCount).toBeLessThanOrEqual(2600);
            expect(elementTwoCount).toBeLessThanOrEqual(2600);
            expect(elementThreeCount).toBeLessThanOrEqual(2600);
            expect(elementFourCount).toBeLessThanOrEqual(2600);
        });
        test('should receive each element no less than 2400 times after running 10,000 rounds for an array of 4 elements', () =>{
            let arrayToSample: string[] = ['one','two','three','four'];
            let rolls: string[] = runSampleMultipleTimes(10000, arrayToSample);

            let elementOneCount = rolls.filter(value => { return value === arrayToSample[0] }).length;
            let elementTwoCount = rolls.filter(value => { return value === arrayToSample[1] }).length;
            let elementThreeCount = rolls.filter(value => { return value === arrayToSample[2] }).length;
            let elementFourCount = rolls.filter(value => { return value === arrayToSample[3] }).length;

            expect(elementOneCount).toBeGreaterThanOrEqual(2400);
            expect(elementTwoCount).toBeGreaterThanOrEqual(2400);
            expect(elementThreeCount).toBeGreaterThanOrEqual(2400);
            expect(elementFourCount).toBeGreaterThanOrEqual(2400);
        });
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
function runSampleMultipleTimes<T>(times: number, arrayToSample: T[]):T[] {
    let rolls: T[] = [];
    for(let i = 0; i < times; i++){
        rolls.push(RandomizationUtilities.sample<T>(arrayToSample));
    }
    return rolls;
}
