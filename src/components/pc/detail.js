import React ,{Component} from 'react'
import '../../scss/pcStyle/addModules.scss'
class detail extends Component {
    constructor(props){
        super(props)
        console.log(props)
    };
    render () {
        return (
            <div className="add-module-wrapper">
                fdsgdfg
                {this.props.match.params.id}
            </div>
        )
    } 
}

export default detail;