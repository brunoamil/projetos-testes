//Classe sempre começa com letra maiuscula - 
class Negociacao {
    constructor(data, quantidade, valor) {
        //atributos de uma classe
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    //metodo é uma especie de funcao dentro de uma classe
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}