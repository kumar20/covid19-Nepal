import React, { Component } from 'react'
import axios from 'axios'
import './summary.css'
import { SpinnerExample } from './utils/loader'
class Summary extends Component {
    _isMount = false
    constructor(props) {
        super(props)
        this.state = {
            summary: [],
            isLoading: false,
            errMsg: [],
            inComingData: true

        }
    }

    componentDidMount() {

        this._isMount = true
        if (this.props.inComingData) {
            this.setState({
                Data: this.props.inComingData
            });
        } else {
            this.setState({
                isLoading: true
            });
            const headers = {
                'Content-Type': 'application/json'
            }
            axios({
                method: 'get',
                url: 'https://nepalcorona.info/api/v1/data/nepal',
                headers: headers
            })





                .then(response => {
                    console.log("response", response)
                    this.setState(this.state.summary[0] = response.data)
                    console.log('summary', this.state)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    this.setState({
                        isLoading: false
                    });
                })
        }
    }
    componentWillUnmount() {
        this._isMount = false
    }
    render() {

        
        let rowData = Object.values(this.state.summary).map((item) => (
            // console.log('data',item)
            <tr>
                <td>{item.tested_positive}</td>
                <td>{item.tested_negative}</td>
                <td>{item.tested_total}</td>
                <td>{item.in_isolation}</td>
                <td>{item.quarantined}</td>
                <td>{item.tested_rdt}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
            </tr>


        ))
        


        let content = this.state.isLoading
            ? <p className="loader"><SpinnerExample></SpinnerExample></p>
            :<div className="container">
            
            
                <h2 className="main-head">Nepal's Latest Summary</h2>
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>Positive Tested</th>
                            <th>Negative Tested</th>
                            <th>Total Tested</th>
                            <th>Total Isolated</th>
                            <th>Total Quarantined</th>
                            <th>Total RDT</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {rowData}
                    </tbody>
                </table >
            </div>
            
        return (
            content
        )
    }




}
export default Summary

