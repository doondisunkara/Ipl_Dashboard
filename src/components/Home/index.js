import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedTeamsList = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    // console.log(updatedTeamsList)
    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    console.log(teamsList)
    return (
      <div className="dashboard-container">
        <div className="dashboard-heading-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <div className="teamcards-container">
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
