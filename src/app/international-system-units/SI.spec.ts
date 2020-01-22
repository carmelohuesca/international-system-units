import { SI, SII } from './SI';

describe('Unity', () => {

    let instance: SII;
    let metre: SII;
    // const unity = new Unity(3).k.m;

    beforeEach(() => {
        instance = new SI(3).kilo.metre;
        metre = new SI().metre;
    });

    it('instance exists', () => {
        expect(instance).toBeDefined();
        expect(metre).toBeDefined();
        expect(instance.value).toBeDefined();
        expect(instance.value).toBe(3000);
        expect(metre.value).toBe(0);
        console.log(metre);
        console.log(instance);
    });




});
