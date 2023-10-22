import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentMatches} = this.props
    console.log(recentMatches)
    const {
      competingTeam,
      competingTeamLogo,
      matchStatus,
      result,
    } = recentMatches
    return (
      <div className="match-card">
        <img src={competingTeamLogo} alt="" />
        <h1 className="team-name">{competingTeam}</h1>
        <p className="match-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </div>
    )
  }
}

export default MatchCard
