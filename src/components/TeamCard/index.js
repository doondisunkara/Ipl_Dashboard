import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, teamImageUrl} = teamDetails
    return (
      <Link to={`/team-matches/:${id}`}>
        <li className="teamcard-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <p className="teamname">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
