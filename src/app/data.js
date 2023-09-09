export const navLinks = [
    {
        title:'About',
        href:'#about'
    },
    {
        title:"Project",
        href:'#projects'
    },
    {
        title:"Contact",
        href:'#contact'
    }
];

export const tabs = [
    {
        title:'Skills',
        id:'skills',
        contents:(
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>Php</li>
                <li>React</li>
                <li>Laravel</li>
                <li>Mysql</li>

            </ul>
        )
    },
    {
        title:'Education',
        id:'educations',
        contents:(
            <ul className="list-disc pl-2">
                <li>Bachelor's Of Engineering</li>
                <li>Trube College of Science & Technology</li>
            </ul>
        )
    },
    {
        title:'Experience',
        id:'experience',
        contents:(
            <ul className="list-disc pl-2"> 
                <li>3 Years In Multiple Technologies</li>
            </ul>
        )
    },
]

export const projectData = [
    {
        id:1,
        title:'React Portfolio Website',
        description:'Own Portfolio',
        image:'images/laptop.png',
        tag:["All"],
        gitCodeUrl:'/',
        previewUrl:'/'
    },
    {
        id:2,
        title:'Exam Interview Portal',
        description:'Exam Portal',
        image:'images/laptop.png',
        tag:["All",'Web'],
        gitCodeUrl:'/',
        previewUrl:'/'
    },
    {
        id:3,
        title:'Nova Cms',
        description:'Church Cms',
        image:'images/laptop.png',
        tag:["All"],
        gitCodeUrl:'/',
        previewUrl:'/'
    },
    {
        id:4,
        title:'HDFC Credila',
        description:'Education Calculator',
        image:'images/laptop.png',
        tag:["All",'Web'],
        gitCodeUrl:'/',
        previewUrl:'/'
    },
    {
        id:5,
        title:'SK Finance',
        description:'Finance',
        image:'images/laptop.png',
        tag:["All",'Web'],
        gitCodeUrl:'/',
        previewUrl:'/'
    },
    {
        id:6,
        title:'Samraddh MicroFinance',
        description:'SBMFA MicroFinance',
        image:'images/laptop.png',
        tag:["All",'Web'],
        gitCodeUrl:'/',
        previewUrl:'/'
    },
]
export default {navLinks,tabs,projectData};