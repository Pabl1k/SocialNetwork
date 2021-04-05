import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: { editMode: boolean, status: string }) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.props.status}
                               onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}