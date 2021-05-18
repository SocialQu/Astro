import { iLesson, iModule } from "../components/LayOut/Menu"
import { iRecordings } from "../components/Forum/Recordings"
import { iForum } from "../components/Forum/Forum"
import { iUser } from "../App"


export const lesson: iLesson = { 
    title:'El Sol y los Signos', 
    description:'El signo solar indica el caracter, la escencia y misión de la persona.', 
    type:'Quiz', 
    questions:[{
        question:'First Question?', 
        answers:[
            { answer:'Answer a', value:false },
            { answer:'Answer b', value:true }
        ]
    }, {
        question:'Second Question?', 
        answers:[
            { answer:'Answer a', value:false },
            { answer:'Answer b', value:true }
        ]
    }],
    min:1,
    link:'439429304'
}


export const Forum:iForum = { 
    title:'Portal de Dudas', 
    description:'Comparte las dudas y preguntas que quieras que sean respondidas en la sesión semanal.', 
    questions:[{ 
        question: '¿Qué significa cuando el Sol está en Leo?', 
        details: 'Mi carta tiene el Sol en Leo y no se que significa.'
    }, { 
        question: '¿Qué significa cuando el Sol está en Cancer?', 
        details: 'Mi carta tiene el Sol en Cancer y no se que significa.'
    }] 
}


export const Recordings:iRecordings = { 
    title:'Grabaciones Semanales', 
    description:'Todos los Miércoles nos reunimos por Zoom para resolver sus dudas, estás son las grabaciones de la anteriores.', 
    recordings:[{ 
        title: 'Marzo 28: El Sol y los Signos', 
        link:'439429304', 
        description: 'Aclaramos lo que signfica tu signo solar, la casa y como trabajar las energias.' 
    },  { 
        title: 'Abril 3: La Luna y el Karma', 
        link:'539430817', 
        description: 'Como puedes utilizar el poder de manifestación de las emociones para materializar un presente abundante.' 
    }] 
}


const longDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const lessons:iLesson[] = [{...lesson, type:'Video'}, {...lesson, type:'Reading', description:longDescription, link:'sample.pdf'}, lesson]
export const modules:iModule[] = [
    { title:'Modulo 1', lessons},
    { title:'Módulo 2', lessons},
    { title:'Módulo 3', lessons},
    { title:'Módulo 4', lessons},
    { title:'Módulo 5', lessons},
    { title:'Módulo 6', lessons}
]

export const defaultUser:iUser = { 
    email:'test@branding.gq', 
    progress:{module:3, lesson:1}, 
    current:{module:0, lesson:2}, 
    quizFailures:0 
}
