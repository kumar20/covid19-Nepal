import React, { Component } from 'react'
import axios from 'axios'
import './world.css'
import {SpinnerExample} from './utils/loader'
import Summary from './summary'
class WorldPage extends Component {
    constructor(props) {
        super()
        this.state = {
            worldData: [],
            isLoading:false,
            errMsg: [],
            inComingData:true,
            

        }
    }
    componentDidMount() {
        if (this.props.inComingData) {
            this.setState({
                worldData: this.props.inComingData
            });
        }else {
            this.setState({
                isLoading: true
            });
        axios.get('https://nepalcorona.info/api/v1/data/world')

            .then(response => {
                console.log("response",response)
                this.setState({ worldData:response.data})
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
        // const numberofItem = this.state.showMore ? worldData.length : 10
        

        let rowData = this.state.worldData.map((item, i) => (
            <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.country}</td>
                <td>{item.totalCases}</td>
                <td>{item.totalDeaths}</td>
                <td>{item.newCases}</td>
                <td>{item.newDeaths}</td>
                <td>{item.totalRecovered}</td>
                <td>{item.activeCases}</td>
            </tr>
        ))


        let content = this.state.isLoading
        ? <p className="loader"><SpinnerExample></SpinnerExample></p>
        : < table className="table">
            <thead className='thead'>
                <tr>
                    <th>S.N</th>
                    <th>Country</th>
                    <th>TotalCases</th>
                    <th>TotalDeaths</th>
                    <th>NewCases</th>
                    <th>NewDeaths</th>
                    <th>TotalRecovered</th>
                    <th>ActiveCases</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {rowData}
            </tbody>
            </table >
               
             return (
                content
        )
    }




}
export default WorldPage