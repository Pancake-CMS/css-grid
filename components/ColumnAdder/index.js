'use strict';

class ColumnAdder extends HTMLElement {
    attachedCallback () {
        this.elements = [];
        this.elements.push({
            name: this.getAttribute('element'),
            gridColumn: '1 / last-line',
            gridRow: '1 / 1'
        });
        this.render();
    }
    
    render () {
        this.innerHTML = this.renderStyles();
        this.renderElements();
    }
    
    renderElements () {
        for(i = 0 ; i < this.elements.length; i++) {
            const el = document.createElement(this.elements[i].name);
            this.appendChild(el);
        }
    }
    
    renderStyles () {
        var styles = '<style>\n';
        
        for(i = 0 ; i < this.elements.length; i++) {
            styles += '' + this.elements[i].name + ' {\n' +
                        '\tgrid-column: ' + this.elements[i].gridColumn + ';\n' +
                        '\tgrid-row: ' + this.elements[i].gridRow + ';\n' +
                        '}\n'; 
        }
        
        styles += '</style>';
        
        return styles;
    }
}

export default ColumnAdder;