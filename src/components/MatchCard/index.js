import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {match} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = match
    return (
      <div className="match-card">
        <img className="team-logo" src={competingTeamLogo} alt="" />
        <h1 className="team-name">{competingTeam}</h1>
        <p className="match-result">{result}</p>
        <p
          className={`match-status ${
            matchStatus === 'won' ? 'status-won' : 'status-lose'
          }`}
        >
          {matchStatus}
        </p>
      </div>
    )
  }
}

export default MatchCard
