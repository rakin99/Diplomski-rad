import React, { Component } from 'react'
import Modal from 'react-awesome-modal';

class Notice extends Component{

    render(){
        return(
            <Modal
                visible={this.props.notice}
                width="15%"
                height="15%"
                effect="fadeInUp"
                onClickAway={()=>this.props.setNotice(this.props.mode,false,'')}
                    >
                <div className="mt-4 text-center">
                    <p className="text-dark">{this.props.message}</p>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={()=>this.props.setNotice(this.props.mode,false,'')}>Ok</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Notice