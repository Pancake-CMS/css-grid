'use strict';

class RowAdder extends HTMLElement {
    attachedCallback () {
        this.render();
        this.addEvents();
    }

    addEvents() {
        this.querySelector('.settings').addEventListener('click', () => {
            this.handleClick();
        });

        this.querySelector('form').addEventListener('submit', (e) => {
            this.handleSubmit(e);
        })
    }

    render () {
        this.innerHTML = this.getStyles() + this.renderHtml();
        this.el = this.querySelector('.element').createShadowRoot();
        this.renderElements();
    }

    renderElements () {
        const el = document.createElement(this.getAttribute('element'));
        this.el.appendChild(el);
    }

    renderHtml () {
        return `
            <span class="settings"></span>
            <div class="controls">
                <form onSubmit="return false;">
                    <span class="horizontal-contols">Grid Column Start - End : </span>
                    <input type="text" name="grid-column-start" value="1" />
                    <input type="text" name="grid-column-end" value="1" />
                    <span class="vertical-contols">Grid Row Start - End : </span>
                    <input type="text" name="grid-row-start" value="1" />
                    <input type="text" name="grid-row-end" value="1" />
                    <button type="submit">X</button>
                <form>
            </div>
            <div class="element"></div>
        `;
    }

    handleSubmit (e) {


        const input = this.querySelectorAll('input');
        let newData = {};
        for(let i = 0; i < input.length; i++) {
            newData[input[i].getAttribute('name')] = input[i].value;
        }

        this.querySelector('.controls').classList.remove('show-controls');
        this.handleChange(newData);
    }

    getStyles () {
        return `
            <style>
                .settings {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: 20px;
                    height: 20px;
                    background: green;
                }

                form {
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                .controls {
                    display: none;
                }

                .show-controls {
                    display: block;
                }

                input {
                    width: 20px;
                }

                /* For Testing
                .element /deep/ section {
                    min-width: 20px;
                    min-height: 20px;
                    background: red;
                }
                .element /deep/ h1 {
                    min-width: 20px;
                    min-height: 20px;
                    background: blue;
                }
                */
            </style>
        `;
    }

    handleClick () {
        this.querySelector('.controls').classList.add('show-controls');
    }

    handleChange (newData) {

        var event = new CustomEvent(
            "gridchanged",
        	{
        		detail: {
        			div : this.classList,
        			data : newData
            	},
            	bubbles: true,
        		cancelable: true
        	}
        );
        this.dispatchEvent(event);
    }
}

export default RowAdder;