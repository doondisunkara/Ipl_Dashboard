import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      date,
      competingTeam,
      competingTeamLogo,
      manOfTheMatch,
      matchStatus,
      result,
      venue,
      firstInnings,
      secondInnings,
      umpires,
    } = latestMatchDetails
    console.log(latestMatchDetails)
    // console.log(latestMatchDetails.date)
    return (
      <div className="latest-matches-card">
        <div className="overview-container">
          <div className="overview-details">
            <h1 className="heading">{competingTeam}</h1>
            <p className="heading">{date}</p>
            <p className="sub-heading">{venue}</p>
            <p className="sub-heading">{result}</p>
          </div>
          <img className="team-logo" src={competingTeamLogo} alt="" />
        </div>
        <div>
          <p className="category">First Innings</p>
          <p className="info">{firstInnings}</p>
          <p className="category">Second Innings</p>
          <p className="info">{secondInnings}</p>
          <p className="category">Man Of The Match</p>
          <p className="info">{manOfTheMatch}</p>
          <p className="category">Umpires</p>
          <p className="info">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
