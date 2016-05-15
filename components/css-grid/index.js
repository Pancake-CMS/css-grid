'use strict'

class CSSGrid extends HTMLElement {
    attachedCallback () {
        this.addedElements = [];
        this.el = this.createShadowRoot();
        this.render();
        this.addDragEvents();
    }
    
    render () {
        this.el.innerHTML = this.getStyles() + this.renderString();
    }
    
    renderString () {
        return `
            <div class="moreArea">
                <span>Add Components Here</span>
            </div>
        `;
    }
    
    getStyles () {
        return `
            <style>
                :host {
                    background: transparent;
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                .moreArea {
                    width: calc( 100% - 4px );
                    border: 2px dashed gray;
                    height: 100px;
                    display: block;
                    text-align: center;
                    color: gray;
                }
                
                .showDropArea {
                    width: calc( 100% - 10px );
                    border: 5px dashed green;
                }
                
                section {
                    min-width: 20px;
                    min-height: 20px;
                    background: red;
                }
                h1 {
                    min-width: 20px;
                    min-height: 20px;
                    background: blue;
                }
            </style>
        `;
    }
    
    addDragEvents () {
        const dragEl = this.el.querySelector('.moreArea');
        
        dragEl.addEventListener('dragend', (e) => {
        });
        
        dragEl.addEventListener('drop', (e) => {
            dragEl.classList.remove('showDropArea');
            this.addNewElement(e.dataTransfer.getData('text'), e.target);
        });
        
        dragEl.addEventListener('dragenter', (e) => {
            dragEl.classList.add('showDropArea');
            e.preventDefault();
        });
        
        dragEl.addEventListener('dragleave', (e) => {
            dragEl.classList.remove('showDropArea');
        });
        
        dragEl.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
    }
    
    addNewElement (newEl, target) {
        var container = document.createElement('row-adder');
        
        container.setAttribute('element', newEl);
        target.parentNode.insertBefore(container, target);
    }
}

export default CSSGrid;