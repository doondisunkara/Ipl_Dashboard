import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {match} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = match
    return (
      <li className="match-card">
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="team-name">{competingTeam}</p>
        <p className="match-result">{result}</p>
        <p
          className={`match-status ${
            matchStatus === 'won' ? 'status-won' : 'status-lose'
          }`}
        >
          {matchStatus}
        </p>
      </li>
    )
  }
}

export default MatchCard
