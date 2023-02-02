export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
/*
 TypeScript parte 2: avançando na linguagem
 3. Visibilidade de método e Enumeration

*/ 
