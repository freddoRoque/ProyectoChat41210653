class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Gerardo Alfredo Aguilar Roque,
                                   Feliciano Badillo Gonzales,
                                   Juan Miguel Flores Mateos,
                                   Jonathan Adolfo Pérez, `;
    }
}
customElements.define("mi-footer", MiFooter);