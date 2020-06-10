class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title : props.title,
            description : props.description
        }
    }

    render() {
        return <header>
            <div className="logo">
                <img src="../images/logo.jpg"/>
                <span>{this.state.title}</span>
            </div>
            <p>{this.state.description}</p>
        </header>
    }
}