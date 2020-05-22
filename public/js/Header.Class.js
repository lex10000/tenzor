import {Component} from "./Component.js";

export class Header extends Component
{
    render(params)
    {
        return `<div class="logo">
            <img src="images/logo.jpg" alt="logo">
            <span>${params.title}</span>
          </div>
            <p>${params.description}</p>`;
    }
}