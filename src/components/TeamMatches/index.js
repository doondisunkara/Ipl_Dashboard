import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedMatchDetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.convertMatches(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.convertMatches(eachMatch),
      ),
    }
    console.log(updatedMatchDetails)
    this.setState({teamMatchDetails: updatedMatchDetails, isLoading: false})
  }

  convertMatches = match => ({
    id: match.id,
    date: match.date,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    venue: match.venue,
    umpires: match.umpires,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
  })

  render() {
    const {teamMatchDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    console.log(this.props)
    return (
      <div className="match-details-container">
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              className="team-players-img"
              src={teamBannerUrl}
              alt="team banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="matchcard-container">
              {recentMatches.map(eachMatch => (
                <MatchCard match={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
