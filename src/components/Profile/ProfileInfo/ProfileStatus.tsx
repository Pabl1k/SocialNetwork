import React from "react";

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEditMode (){
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode.bind(this)}/>
                    </div>
                }
            </div>
        )
    }
}
