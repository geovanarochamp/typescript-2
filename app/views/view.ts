export abstract class View<T> {

    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    public update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
}

/* 
 TypeScript parte 2: avançando na linguagem
 3. Visibilidade de método e Enumeration

*/