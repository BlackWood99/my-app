import React, {useState, useEffect} from 'react'
import styles from './ProfilePerson.module.css'



const Status = (props) => {

    const [editMode, setEditMode]  = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={styles.status}>
                {
                    !editMode && 
                        <span onDoubleClick={() => activateEditMode()}>{status}</span>
                }
                {
                    editMode && 
                        <input autoFocus={true} onChange={onStatusChange} 
                            onBlur={() => deactivateEditMode()} value={status}/>
                }
            </div>
    )
}


// class Status extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status || 'NO STATUS'
//     }

//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }

//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }

//     componentDidUpdate(prevProps, prevState) {
        
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

//     render() {  
//         return (
//             <div className={styles.status}>
//                 {
//                     !this.state.editMode && 
//                         <span onDoubleClick={() => this.activateEditMode()}>{this.state.status}</span>
//                 }
//                 {
//                     this.state.editMode && 
//                         <input autoFocus={true} onChange={this.onStatusChange} onBlur={() => this.deactivateEditMode()} value={this.state.status}/>
//                 }
//             </div>
//         )
//     }
// }

export default Status