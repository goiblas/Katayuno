import { FIZZ, BUZZ} from './constants';

class FizzBuzz {
    respondeA(value) {
        if( value === 0)
            return 0

        if(this._deberiaSerFizz(value) && this._deberiaSerBuzz(value)) 
            return FIZZ + BUZZ

        if( this._deberiaSerFizz( value)) 
            return  FIZZ

        if(this._deberiaSerBuzz(value)) 
            return  BUZZ

        return value
    }
    _deberiaSerFizz(value) {
        return this._contieneElNumero(value, 3) || value % 3 === 0
    }
    _deberiaSerBuzz(value) {
        return this._contieneElNumero(value, 5) || value % 5 === 0
    }
    _contieneElNumero(inicial, numero) {
        return String(inicial).includes(String(numero))
    }
    mostrarAll() {
        let result = [];
        for(let i = 0; i < 100; i++) {
            result.push(`${i}(${this.respondeA(i)})`);
        }
        return result.join(', ')
    }
}

export default FizzBuzz