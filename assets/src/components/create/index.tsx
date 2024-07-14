import ReactDOM from 'react-dom'
const create = (options, Component) => {
    const div = document.createElement('div');

    document.body.appendChild(div);

    function close() {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            setTimeout(() => {
                div.parentNode.removeChild(div);
            }, 300);
        }
    }

    ReactDOM.render(<Component {...options} close={close} />, div);
};
export default create;