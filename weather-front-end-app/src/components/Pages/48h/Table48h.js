import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import Pagination48h from './Pagination48h';
import TBody48h from './TBody48h';
import Th48h from './TBody48h'

class Table48h extends Component{

    constructor(){
        super();
        this.state = {
            numberPage:0,
            filteredHourly:[]
        }
        this.filterList = this.filterList.bind(this);
        this.reduceNumberPage = this.reduceNumberPage.bind(this);
        this.increaseNumberPage = this.increaseNumberPage.bind(this);
    }

    componentDidMount(){
        this.filterList(this.state.numberPage)
    }

    componentDidUpdate(){
        // console.log("Update!\n"+JSON.stringify(this.state.filteredHourly))
    }

    filterList(numberPage){
        const list = [];
        // console.log("Filter list!"+numberPage)
        for (let index = numberPage; index < numberPage+24; index++) {
            const h = this.props.hourly[index];
            // console.log(JSON.stringify(index))
            if(index%3==0){
                // console.log("Deljivo je sa tri: "+this.props.hourly.indexOf(h))
                list.push(h);
            }
        }
        this.props.updateDate(list[0].dt);
        this.setState({
            numberPage:numberPage,
            filteredHourly:list
        })
    }

    increaseNumberPage(){
        // console.log("increaseNumberPage: "+this.state.numberPage)
        if(this.state.numberPage == 0){
            // console.log("Prosao u if")
            this.filterList(this.state.numberPage+24);
        }
      }
    
    reduceNumberPage(){
        // console.log("reduceNumberPage: "+this.state.numberPage)
        if(this.state.numberPage==24){
            // console.log("Ulazim u if")
            this.filterList(this.state.numberPage-24);
        }
    }

    render(){
        const timeConverter = new TimeConverter();
        const ths = this.state.filteredHourly.map(h=>{
            this.state.pageNumber++;
            // console.log("Deljivo je sa tri: "+this.props.hourly.indexOf(h))
            return <th key={h.dt}>{timeConverter.convertTime(h.dt)}</th>
        })
        return(
            <div className="w-95 mt-3">
                <table className="table mb-1">
                    <thead className="text-light">
                        <tr>
                            <th></th>
                            {ths}
                        </tr>
                    </thead>
                    <TBody48h filteredHourly = {this.state.filteredHourly}/>
                </table>
                <Pagination48h reduceNumberPage={this.reduceNumberPage} increaseNumberPage={this.increaseNumberPage}/>
            </div>
        )
    }
}

export default Table48h