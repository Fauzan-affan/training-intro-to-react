import React from "react"

class NameProps extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name} and {this.props.name2}!
            </div>
        )
    }
}

export default NameProps