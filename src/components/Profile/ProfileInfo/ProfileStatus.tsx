import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: ''
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status)
        this.setState({
            editMode: false
        });

    }
    onStatusChange = (newStatus: string) => {
        this.setState({
            status: newStatus
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusPropsType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '---'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={(e) => this.onStatusChange(e.currentTarget.value)}
                               autoFocus={true}
                               value={this.props.status}
                               onBlur={this.deactivateEditMode.bind(this)}
                               defaultValue={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}