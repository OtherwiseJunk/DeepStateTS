export class RandomizationUtilities{
    static sample<T>(array: T[]): T{
        return array[Math.floor(Math.random() * array.length)];
    }
    static percentChance(percent: number): boolean{
        return (Math.floor(Math.random()*100) + 1) <= percent;
    }
}
