export class Component
{
    'use strict';

    constructor(options)
    {
        this.options = options;
        this.component = undefined;
    }

    /*
        @return {String} render data
    */
    render(){}

    /*
        add component to DOM
        @param {DOMElement} component DOM target
        @param {string} position of insertAdjacentElement() function
        @param {string} className - name of class for component
     */
    mount(container, position, className = undefined)
    {
        this.beforeMount();

        const newComponent = document.createElement('div');
        if(className) newComponent.setAttribute('class', className);
        newComponent.innerHTML = this.render(this.options);
        this.component = newComponent;
        container.insertAdjacentElement(position || 'beforeEnd', newComponent);

        this.afterMount();
    }

    /*
    remove node component from DOM
     */
    unmount()
    {
        if(this.component) {
            this.component.remove();
            this.component = undefined;
        }
    }


    /*
        abstract prehook method which is calling after this.mount()
     */
    afterMount(){}

    /*
        abstract prehook method which is calling before this.mount()
     */
    beforeMount(){}
}

export class ComponentFactory
{
    create(component, options)
    {
        return new component(options || {})
    }
}
