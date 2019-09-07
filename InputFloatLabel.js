

class InputFloatLabel extends HTMLElement {  
  constructor() {
	  super();
    let label = this.attributes['label'].value;
    let id = this.attributes['id'].value;
    let type = this.attributes['type'].value || 'text';
    let icon = this.attributes['card-icon'] && this.attributes['card-icon'].value;
     const template = document.createElement('template');
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`
          :root {
  --cor-primaria: mediumpurple;
  --cor-primaria-escura: purple;
}
    `);
     sheet.insertRule(`
.field,
          .field.control {
            position: relative;
            display: block;
          }
  `);
    
     sheet.insertRule(`

      input {
            padding: 10px;
            margin: 15px 5px 10px;
            border: 1px solid var(--cor-primaria);
            position: relative;
            display: block;
            width: 250px;
            outline-color: var(--cor-primaria) !important;
            transition: all 300ms;
          }
  `);
    sheet.insertRule(`
input:focus {  
  box-shadow: 0px 8px 8px rgba(0,0,0,.2)
            border: 1px solid var(--cor-primaria-escura);
            outline-color: var(--cor-primaria-escura) !important;
}`);
    
    sheet.insertRule(`  input + label {
            position: absolute;
            pointer-events: none;
            left: 15px;
            margin-top: -40px;
            z-index: 8;
            transition: all 300ms;
          }`);
    sheet.insertRule(`input::placeholder {
            color: white !important;
          }`);
    sheet.insertRule(`input:focus::placeholder {
            color: var(--cor-primaria-escura) !important;
          }`);
    sheet.insertRule(` input:focus + label,
          input:not(:placeholder-shown) + label {
            font-size: 12px;
            margin-top: -55px;
            background: white;
            padding: 0px 5px;
          }`);
    
    template.innerHTML = `
  <div class"field">
        <div class="control">
          <input
            class="input"
            type="${type}"
            name=" ${id}"
            id=" ${id}"
            placeholder=' ${label}'
          />
          <label class="label" for="usuario">
             ${label}
          </label>
    </div>
  `;

    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.adoptedStyleSheets = [sheet];
    this.shadow.appendChild(template.content);
  };
}
// Register the Custom Element:
window.customElements.define('input-float-label', InputFloatLabel);
