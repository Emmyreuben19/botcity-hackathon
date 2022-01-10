import "./team.css";
import { team, TeamInfo } from "./teamData";
import { JoinTeam, TeamItem } from "./TeamItem";

const Team = () => {
    return (
        <section className="team section" id="team">
            <h2 className="section__title">Our Team</h2>
            <span className="section__subtitle"> See the organizers of this hackathon </span>

            { team.join.required && <JoinTeam /> }
            <div className="team__container container grid">
                { TeamInfo.map(TeamItem) }
            </div>
        </section>
    )
}

export default Team
