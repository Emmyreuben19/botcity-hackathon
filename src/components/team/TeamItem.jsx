import { Button } from "../";
import { team } from "./teamData";

const JoinTeam = () => {
    return(
        <div className="team__join">
            <h3 className="team__title"> Interested in joining our team </h3>
            <a href={ team.join.src }>
                <Button 
                    type="Join our team" 
                    overlay="Fill the form" 
                    classname="button button--flex team__link" 
                />
            </a>
        </div>
    )
}

const TeamMembers = (props) => {
    return (
        <div className="team__content">
            <img key={ props.id } src={ props.img } alt="botcity hack"></img>

            <div className="team__member">
                <h3 className="team__member-name">{ props.name }</h3>
                <p className="team__member-role">{props.role}</p>

                <div className="team__icons">
                    <a href={ props.href }>
                        <i className="fab fa-2x fa-github team__icon"></i>
                    </a>
                    <a href={ props.href }>
                        <i className="fab fa-2x fa-linkedin team__icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

const TeamItem = (props) => {
    return(
        <>
            { props.map(team => (
                <TeamMembers name={team.Name} role={team.role} img={team.img} />
            ))}
        </>
    )
}

export { JoinTeam, TeamItem }
