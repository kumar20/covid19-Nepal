import React, { Component } from 'react'
import axios from 'axios'
// import './world.css'
import {SpinnerExample} from './utils/loader'
// import Summary from './summary'
class WorldStatus extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            worldData: [],
            isLoading:false,
            errMsg: [],
            inComingData:true,
            

        }
    }
    componentDidMount() {
        this._isMounted = true;
        if (this.props.inComingData) {
            this.setState({
                worldData: this.props.inComingData
            });
        }else {
            this.setState({
                isLoading: true
            });
        axios.get('https://data.nepalcorona.info/api/v1/world')

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
    componentWillUnmount() {
        this._isMounted = false;
      }
    render() {
        // const numberofItem = this.state.showMore ? worldData.length : 10
        

        let rowData = this.state.worldData.map((item, i) => (
            <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.affectedCountries}</td>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
                <td>{item.todayCases}</td>
                <td>{item.todayDeaths}</td>
                <td>{item.todayRecovered}</td>
            </tr>
        ))


        let content = this.state.isLoading
        ? <p className="loader"><SpinnerExample></SpinnerExample></p>
        : < table className="table">
            <thead className='thead'>
                <tr>
                    <th>S.N</th>
                    <th>Affected Countries</th>
                    <th>Total Cases</th>
                    <th>TotalDeaths</th>
                    <th>Recovered</th>
                    <th>Today's Case</th>
                    <th>Today's Death</th>
                    <th>today's Recover</th>
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
export default WorldStatus