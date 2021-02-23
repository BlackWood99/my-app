import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import styles from './ProfilePerson.module.css'


class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status || 'NO STATUS'
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: this.state.status = e.currentTarget.value
        })
    }

    render() {  
        return (
            <div className={styles.status}>
                {
                    !this.state.editMode && 
                        <span onDoubleClick={() => this.activateEditMode()}>{this.state.status}</span>
                }
                {
                    this.state.editMode && 
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={() => this.deactivateEditMode()} value={this.state.status}/>
                }
            </div>
        )
    }
}

export default Status