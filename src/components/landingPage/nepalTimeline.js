import React, { Component } from 'react'
import axios from 'axios'
import './world.css'
import { SpinnerExample } from './utils/loader'
class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            worldData: [],
            isLoading: false,
            errMsg: [],
            inComingData: true

        }
    }
    componentDidMount() {
        if (this.props.inComingData) {
            this.setState({
                Data: this.props.inComingData
            });
        } else {
            this.setState({
                isLoading: true
            });
            axios.get('https://data.nepalcorona.info/api/v1/covid/timeline')

                .then(response => {
                    console.log("response", response)
                    this.setState({ worldData: response.data })
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
    render() {


        let rowData = this.state.worldData.map((item, i) => (
            <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.date}</td>
                <td>{item.totalCases}</td>
                <td>{item.newCases}</td>
                <td>{item.totalRecoveries}</td>
                <td>{item.newRecoveries}</td>
                <td>{item.totalDeaths}</td>
                <td>{item.newDeaths}</td>
            </tr>
        ))


        let content = this.state.isLoading
            ? <p className="loader"><SpinnerExample></SpinnerExample></p>
            :<div>
            <h2>Timeline of nepal cases, death, recoveries by date.</h2>
                < table className="table">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Date</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Recovered</th>
                        <th>New Recoveries</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
            </table >
            </div> 
             return (
            content
        )
    }




}
export default Timeline

