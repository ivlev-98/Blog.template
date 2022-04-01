export class navToggler {
    triggers: Array<HTMLElement> = [];
    toggleItems: Array<HTMLElement> = [];
    activeClass: string = '';
    constructor(options: {triggers: string[], toggleItems: string[], activeClass: string}) {
        options.triggers.forEach(item => this.triggers.push(document.querySelector(item)));
        options.toggleItems.forEach(item => this.toggleItems.push(document.querySelector(item)));
        this.activeClass = options.activeClass;
    }
    watch() {
        this.triggers.forEach(trigger => trigger.addEventListener('click', () => {
            this.toggleItems.forEach(item => item.classList.toggle(this.activeClass));
        }));
    }
}