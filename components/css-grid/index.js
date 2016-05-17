'use strict'

class CSSGrid extends HTMLElement {
    attachedCallback () {
        this.addedElements = [];
        this.maxRow = 1;
        this.el = this.createShadowRoot();
        this.render();


    }

    render () {
        this.el.innerHTML = this.getStyles() + this.renderString();
        this.addDragEvents();

        if(this.addedElements.length > 0) {
            this.renderComponents();
        }
    }

    renderString () {
        return `
            <div class="pageArea"></div>
            <div class="moreArea">
                <p>Add Components Here</p>
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

                .pageArea {
                    display: grid;
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

                row-adder {
                    position: relative;
                    display: block;
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
            this.addNewElement(e.dataTransfer.getData('text'));
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

    renderComponents () {

        for(var i = 0 ; i < this.addedElements.length; i++) {
            var container = document.createElement('row-adder');

            container.setAttribute('element', this.addedElements[i].name);
            container.classList.add('div-' + i);

            for(var prop in this.addedElements[i]) {
                container.style[prop] = this.addedElements[i][prop];
            }

            container.addEventListener('gridchanged', (e) => {
                this.updateGrid(e);
            }, false);

            this.el.querySelector('.pageArea').appendChild(container);
        }
    }

    addNewElement (newEl) {

        let maxRow = 0,
            maxCol = 0;
        for(let i = 0; i<this.addedElements.length; i++) {
            if(this.addedElements[i]['grid-row-start'] > maxRow) {
                maxRow = this.addedElements[i]['grid-row-start'];
            }

            if(this.addedElements[i]['grid-row-end'] > maxRow) {
                maxRow = this.addedElements[i]['grid-row-end'];
            }

            if(this.addedElements[i]['grid-column-end'] > maxRow) {
                maxCol = this.addedElements[i]['grid-column-end'];
            }

        }

        this.addedElements.push({
            name: newEl,
            'grid-column-start' : '1',
            'grid-column-end' : parseInt(maxCol),
            'grid-row-start' : parseInt(maxRow) + 1,
            'grid-row-end' : parseInt(maxRow) + 1
        });

        this.render();
    }

    updateGrid (e) {
        const divClass = e.detail.div[0],
            index = divClass.split('div-')[1],
            data = e.detail.data;

        for(var prop in data) {
            this.addedElements[index][prop] = data[prop];
            this.el.querySelector('.' + divClass).style[prop] = data[prop];
        }


    }
}

export default CSSGrid;