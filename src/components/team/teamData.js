// Importing all Team members images  from Assets
import me from "../assets/Team/me.png";
import moon from "../assets/Team/moon.png";
import Ryah from "../assets/Team/Ryah.jpg";
import lyin from "../assets/Team/lyin.jpg";
import zoha from "../assets/Team/zoha.png";

export const team = {
    join: {
        src: "jointeam@botcity.com",
        required: true,
    },

    volunteering_form: {
        required: true,
        src: "volunteerteam@botcity.com"
    },

    Privacy_policy: {
        required: true,
        src: ""
    },

    Terms_of_use: {
        required: true,
        src: ""
    }
}

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

export const TeamInfo = [
  [
    //Array 1
    {
      id: 1,
      Name: "Olanipekun",
      role: "Lead Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      id: 2,
      Name: "Seyirex",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      id: 3,
      Name: "Chirag",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      id: 4,
      Name: "Frank",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      id: 5,
      Name: "Emmy Reuben",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    },    
  ] 
];