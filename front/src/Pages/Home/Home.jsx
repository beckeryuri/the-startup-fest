import React, { Component } from 'react';
import Ranking from '../Ranking/Ranking'
import Startups from '../Startups/Startups'
import Header from '../../Components/Header/Header'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startups: true,
            rankings: false
        }
    }
    setStartups() {
        this.setState({
            startups: true,
            rankings: false
        })
    }

    setRankings() {
        this.setState({
            startups: false,
            rankings: true
        })
    }

    renderRanking() {
        const { rankings } = this.state

        return (
            <React.Fragment>

                {rankings && (
                    <Ranking />
                )
                }
            </React.Fragment>
        )
    }

    renderStartups() {
        const { startups } = this.state

        return (
            <React.Fragment>

                {startups && (
                    <Startups />
                )
                }
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                <Header startups={this.setStartups.bind(this)} rankings={this.setRankings.bind(this)}/>
                {this.renderRanking()}
                {this.renderStartups()}
            </div>
        )
    }
}
