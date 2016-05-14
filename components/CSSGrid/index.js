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
        var element = document.createElement(newEl);
        target.parentNode.insertBefore(element, target);
    }
}

export default CSSGrid;