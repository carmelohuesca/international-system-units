export class Scale {
    symbol: string;
    value: number;
    constructor(symbol: string, value: number) {
        this.symbol = symbol;
        this.value = value;
    }
}

export class Unity {
    symbol: string;
    name: string;
    type: string;
    constructor(name: string, type: string, symbol: string) {
        this.name = name;
        this.type = type;
        this.symbol = symbol;
    }
}

export class SI {

    value: number;
    prefix: Prefix = new Prefix();
    unity: Unity;
    scale: Scale;

    get yotta() {
        this.scale = new Prefix().yotta;
        return this.calculate();
    }
    get zetta() {
        this.scale = new Prefix().zetta;
        return this.calculate();
    }
    get exa() {
        this.scale = new Prefix().exa;
        return this.calculate();
    }
    get peta() {
        this.scale = new Prefix().peta;
        return this.calculate();
    }
    get tera() {
        this.scale = new Prefix().tera;
        return this.calculate();
    }
    get giga() {
        this.scale = new Prefix().giga;
        return this.calculate();
    }
    get mega() {
        this.scale = new Prefix().mega;
        return this.calculate();
    }
    get kilo() {
        this.scale = new Prefix().kilo;
        return this.calculate();
    }
    get hecto() {
        this.scale = new Prefix().hecto;
        return this.calculate();
    }
    get deca() {
        this.scale = new Prefix().deca;
        return this.calculate();
    }
    get deci() {
        this.scale = new Prefix().deci;
        return this.calculate();
    }
    get centi() {
        this.scale = new Prefix().centi;
        return this.calculate();
    }
    get milli() {
        this.scale = new Prefix().milli;
        return this.calculate();
    }
    get micro() {
        this.scale = new Prefix().micro;
        return this.calculate();
    }
    get nano() {
        this.scale = new Prefix().nano;
        return this.calculate();
    }
    get pico() {
        this.scale = new Prefix().pico;
        return this.calculate();
    }
    get femto() {
        this.scale = new Prefix().femto;
        return this.calculate();
    }
    get atto() {
        this.scale = new Prefix().atto;
        return this.calculate();
    }
    get zepto() {
        this.scale = new Prefix().zepto;
        return this.calculate();
    }
    get yocto() {
        this.scale = new Prefix().yocto;
        return this.calculate();
    }
    get second() {
        this.unity = new Unity('second', 'time', 's');
        return this.setUnity();
    }
    get metre() {
        this.unity = new Unity('metre', 'length', 'm');
        return this.setUnity();
    }
    get kilogram() {
        this.unity = new Unity('kilogram', 'mass', 'kg');
        return this.setUnity();
    }
    get ampere() {
        this.unity = new Unity('ampere', 'electric current', 'A');
        return this.setUnity();
    }
    get kelvin() {
        this.unity = new Unity('kelvin', 'temperature', 'K');
        return this.setUnity();
    }
    get mole() {
        this.unity = new Unity('mole', 'amount of substancem', 'ol');
        return this.setUnity();
    }

    get candela() {
        this.unity = new Unity('candela', 'luminous intensity', 'cd');
        return this.setUnity();
    }

    get radian() {
        this.unity = new Unity('radian', 'rad', 'plane');
        return this.setUnity();
    }
    get steradian() {
        this.unity = new Unity('steradian', 'sr', 'solid angle');
        return this.setUnity();
    }
    get hertz() {
        this.unity = new Unity('hertz', 'Hz', 'frequency ');
        return this.setUnity();
    }
    get newton() {
        this.unity = new Unity('newton', 'N', 'force');
        return this.setUnity();
    }
    get pascal() {
        this.unity = new Unity('pascal', 'Pa', 'pressure');
        return this.setUnity();
    }
    get joule() {
        this.unity = new Unity('joule', 'J', 'energy');
        return this.setUnity();
    }
    get watt() {
        this.unity = new Unity('watt', 'W', 'power');
        return this.setUnity();
    }
    get coulomb() {
        this.unity = new Unity('coulomb', 'C', 'electric charge');
        return this.setUnity();
    }
    get volt() {
        this.unity = new Unity('volt', 'V', 'voltage');
        return this.setUnity();
    }
    get farad() {
        this.unity = new Unity('farad', 'F', 'capacitance');
        return this.setUnity();
    }
    get ohm() {
        this.unity = new Unity('ohm', 'Ω', 'resistance');
        return this.setUnity();
    }
    get siemens() {
        this.unity = new Unity('siemens', 'S', 'electrical conductance ');
        return this.setUnity();
    }
    get weber() {
        this.unity = new Unity('weber', 'Wb', 'magnetic flux');
        return this.setUnity();
    }
    get tesla() {
        this.unity = new Unity('tesla', 'T', 'magnetic flux density ');
        return this.setUnity();
    }
    get henry() {
        this.unity = new Unity('henry', 'H', 'inductance ');
        return this.setUnity();
    }
    get degree() {
        this.unity = new Unity('degree', '°C', 'temperature relative to 273.15 K');
        return this.setUnity();
    }
    get lumen() {
        this.unity = new Unity('lumen', 'lm', 'luminous flux  ');
        return this.setUnity();
    }
    get lux() {
        this.unity = new Unity('lux', 'lx', 'illuminance');
        return this.setUnity();
    }
    get becquerel() {
        this.unity = new Unity('becquerel', 'Bq', 'radioactivity');
        return this.setUnity();
    }
    get gray() {
        this.unity = new Unity('gray', 'Gy', 'absorbed dose');
        return this.setUnity();
    }
    get sievert() {
        this.unity = new Unity('sievert', 'Sv', 'equivalent dose');
        return this.setUnity();
    }
    get katal() {
        this.unity = new Unity('katal', 'kat', 'catalytic activity');
        return this.setUnity();
    }

    constructor(value?: number) {
        this.value = value || 1;
        this.scale = new Prefix().unity;
    }

    private calculate() {
        this.value = this.value * this.scale.value;
        return this;
    }

    private setUnity(): SII {
        const unity = this.unity;
        const value = this.value;
        const scale = this.scale;
        const format = [value / this.scale.value, scale.symbol, unity.symbol].join('');
        return { value, format, unity, scale };
    }

}

export interface SII {
    value: number;
    unity: Unity;
    scale: Scale;
    format: string;
}


export class Prefix {
    yotta = new Scale('Y', 1000000000000000000000000);
    zetta = new Scale('Z', 1000000000000000000000);
    exa = new Scale('E', 1000000000000000000);
    peta = new Scale('P', 1000000000000000);
    tera = new Scale('T', 1000000000000);
    giga = new Scale('G', 1000000000);
    mega = new Scale('M', 1000000);
    kilo = new Scale('k', 1000);
    hecto = new Scale('h', 100);
    deca = new Scale('da', 10);
    deci = new Scale('d', 0.1);
    unity = new Scale('', 1);
    centi = new Scale('c', 0.01);
    milli = new Scale('m', 0.001);
    micro = new Scale('μ', 0.000001);
    nano = new Scale('n', 0.000000001);
    pico = new Scale('p', 0.000000000001);
    femto = new Scale('f', 0.000000000000001);
    atto = new Scale('a', 0.000000000000000001);
    zepto = new Scale('z', 0.000000000000000000001);
    yocto = new Scale('y', 0.000000000000000000000001);
}

