import React, { Component } from 'react'
import axios from 'axios'
import './world.css'
import { SpinnerExample } from './utils/loader'
class Municipality extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: [],
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
            axios.get('https://data.nepalcorona.info/api/v1/covid')

                .then(response => {
                    console.log("response", response)
                    this.setState({ Data: response.data })
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


        let rowData = this.state.Data.map((item, i) => (
            <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.province}</td>
                <td>{item.district}</td>
                <td>{item.municipality}</td>
                <td>{item.ward}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.reportedOn}</td>
                <td>{item.recoveredOn}</td>
                <td>{item.deathOn}</td>
            </tr>
        ))


        let content = this.state.isLoading
            ? <p className="loader"><SpinnerExample></SpinnerExample></p>
            : < table className="table">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Province</th>
                        <th>District</th>
                        <th>Municipality</th>
                        <th>Ward</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Reported On</th>
                        <th>Recovered On</th>
                        <th>Death On</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
            </table >

        return (
            content
        )
    }




}
export default Municipality
