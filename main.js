import { ToyReact } from './ToyReact.js';

class MyComponent {
    render() {
        return <div>
            <span>hello</span>
            <span> world</span>
        </div>;
    }
    setAttribute(name, value) {
        this[name] = value;
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent);
    }
}

let a = <MyComponent name="a" id="a"></MyComponent>

ToyReact.render(a, document.body);
