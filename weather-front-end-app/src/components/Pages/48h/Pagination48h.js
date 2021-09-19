import React from "react"

function Pagination48h(props){

    return(
        <div className="row">
            <div className="col-sm-6">
                <button className="page-link text-light btn-pagination btn-sm" onClick={()=>props.reduceNumberPage()}>
                    <span aria-hidden="true">&laquo; </span>
                    <span className="sr-only">Previous</span>
                </button>
            </div>
            <div className="col-sm-6">
                <div className=" float-right">
                    <button className="page-link text-light btn-pagination btn-sm" onClick={()=>props.increaseNumberPage()}>
                        <span aria-hidden="true"> &raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
      </div>
    )
}

export default Pagination48h