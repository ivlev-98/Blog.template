export class ImgPreview {
    private input: HTMLInputElement;
    private container: HTMLElement;
    constructor(input: string, container: string) {
        this.input = document.querySelector(input);
        this.container = document.querySelector(container);
    }
    watch(closeTrigger: string) {
        this.input.addEventListener("change", () => {
            this.loadPreview();
        });
        document.querySelector(closeTrigger).addEventListener("click", event => {
            event.preventDefault();
            this.closeImage();
        });
    }
    private loadPreview() {
        let reader = new FileReader();
        let img = this.input.files[0];
        if (img) {
            if ( /\.(jpe?g|png|gif|webp)$/i.test(img.name)) {
                reader.readAsDataURL(img);
            }
        }
        reader.addEventListener("load", () => {
            this.container.innerHTML = '';
            this.container.appendChild(this.createImage(reader.result));
        });
    }
    private createImage(data: string | ArrayBuffer) {
        let img = document.createElement("img");
        img.setAttribute("alt", "preview");
        img.setAttribute("loading", "lazy");
        img.setAttribute("src", "data:"+ data);
        return img;
    }
    private closeImage() {
        this.container.innerHTML = '';
        this.input.value = null;
    }
}