import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectList = () => {
    const projects = [
        {
            title: "Text Editor",
            image: "https://cdn.dribbble.com/users/5205954/screenshots/13372768/editor_4x.png",
            url: "https://still-bayou-95263.herokuapp.com/",
            repo: "https://github.com/Alasow2001/PWA-Text-Editor",
            description: "A standard text editor, that can be used as a downloadable application"

        },

        {
            title: "Work Day Scheduler",
            image: "https://e7.pngegg.com/pngimages/685/640/png-clipart-computer-icons-schedule-miscellaneous-text.png",
            url: "https://alasow2001.github.io/Work-Day-Scheduler/",
            repo: "https://github.com/Alasow2001/Work-Day-Scheduler",
            description: "Schedule your work day by the hour"

        },

        {
            title: "Note Taker",
            image: "https://shovelapp.io/wp-content/uploads/2017/03/Take-Notes-Effectively.png",
            url: "https://afternoon-temple-40523.herokuapp.com/",
            repo: "https://github.com/Alasow2001/note-taker",
            description: "Create, save or delete notes for any need necessary"

        },

        {
            title: "README Generator",
            image: "https://cdn2.iconfinder.com/data/icons/text-file-extension-field-outline-1/64/1_README-512.png",
            url: "",
            repo: "https://github.com/Alasow2001/README-Generator",
            description: "Generates README files for any coding project"

        },

        {
            title: "Weather Dashboard",
            image: "https://static.vecteezy.com/system/resources/previews/009/386/351/original/weather-3d-icon-free-png.png",
            url: "https://alasow2001.github.io/Weather-Dashboard/",
            repo: "https://github.com/Alasow2001/Weather-Dashboard",
            description: "Takes in a location and provides the weather forcast for the next 5 days"

        }
    ]

    function projectCards(card){
        return(
        <Card>
            <Card.Img src={card.image} className='portfolio-img'></Card.Img>
            <Card.Body>
                <Card>{card.title}</Card>
                <Card>{card.description}</Card>
                <Button href={card.url}>View Site</Button>
                <Button href={card.repo}>Vist Repository</Button>
            </Card.Body>
        </Card>
        )
    }

    return <div className='grid'>{projects.map(projectCards)}</div>

}

export default ProjectList;