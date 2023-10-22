import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, teamImageUrl} = teamDetails
    return (
      <div className="teamcard-container">
        <img className="team-logo" src={teamImageUrl} alt="RCB" />
        <h1 className="teamname">{name}</h1>
      </div>
    )
  }
}

export default TeamCard
