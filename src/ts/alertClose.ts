export class AlertClose {
    triggers: NodeList;
    constructor(trigger: string) {
        this.triggers = document.querySelectorAll(trigger);
    }

    private close(trigger: HTMLElement) {
        trigger.closest('.alert').remove();
    }
    public watch() {
        this.triggers.forEach((trigger: HTMLElement) => {
            trigger.addEventListener('click', () => {
                this.close(trigger);
                console.log('c')
            })
        });
    }
}