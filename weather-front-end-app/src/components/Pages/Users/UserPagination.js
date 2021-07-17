import React from "react"

function UserPagination(props){
    const numberButtons = getNumberPagination(props.numberPages).map(num=>{
        return <li 
                key={num}
                className={`d-inline-block mr-1 ${props.numberPage==num-1?"active-page":""}`}
                >
                    <button 
                        className={`page-link btn-sm ${props.numberPage==num-1?"active-page":"btn-pagination text-light"}`} 
                        onClick={()=>{props.setNumberPage(num)}}>{num}
                    </button>
                </li>
    })
    return(
        <nav className="d-inline-block text-center w-100">
            <ul className="pagination d-inline-block">
                <li className="d-inline-block">
                    <button className="page-link mr-1 text-light btn-pagination btn-sm" onClick={()=>{props.reduceNumberPage()}}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                <div className="d-inline-block">
                    {numberButtons}
                </div>
                <li className="d-inline-block">
                    <button className="page-link text-light btn-pagination btn-sm" onClick={()=>{props.increaseNumberPage()}}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

function getNumberPagination(numberPages){
    const list = [];
    for (let index = 0; index < numberPages; index++) {
        list.push(index+1);
    }
    return list;
}

export default UserPagination