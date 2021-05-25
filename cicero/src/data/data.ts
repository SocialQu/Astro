import { iRecordings } from "../components/Forum/Recordings"
import { iLesson, iUnit } from "../components/LayOut/Menu"
import { iForum } from "../components/Forum/Forum"
import { iPost } from "../components/Forum/Posts"
import { planets, houses } from './chart'
import { iUser } from "../App"


export const defaultUser:iUser = { 
    sign:'Leo',
    user_id:'0',
    quizFailures:0,
    name:'Santiago M.',
    location:'Mexico City',
    email:'test@branding.gq', 
    date:new Date(1988,7,17,12,37),
    natalChart:{ planets, houses },
    current:{unit:3, module:0, lesson:1}, 
    progress:{unit:3, module:0, lesson:5}, 
}


export const lesson: iLesson = { 
    title:'Quiz', 
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
    link:'https://www.youtube.com/watch?v=8u9sRggTos8'
}


export const Forum:iForum = { 
    user:defaultUser,
    title:'Portal de Dudas', 
    description:'Comparte las dudas y preguntas que quieras que sean respondidas en la sesión semanal.', 
    questions:[{ 
        question: '¿Qué significa cuando el Sol está en Leo?', 
        details: 'Mi carta tiene el Sol en Leo y no se que significa.',
        likes: []
    }, { 
        question: 'Cómo afecta la Luna en Cancer mis emociones?', 
        details: 'Mi carta tiene la Luna en Cancer cual es el efecto en mis emociones.',
        likes: []
    }] 
}


export const Recordings:iRecordings = { 
    title:'Grabaciones Semanales', 
    description:'Todos los Miércoles nos reunimos por Zoom para resolver sus dudas, estás son las grabaciones de la anteriores.', 
    recordings:[{ 
        title: 'Marzo 28: El Sol y los Signos', 
        link:'https://www.youtube.com/watch?v=BPwn_iCi7BQ', 
        description: 'Aclaramos lo que signfica tu signo solar, la casa y como trabajar las energias.' 
    },  { 
        title: 'Abril 3: La Luna y el Karma', 
        link:'https://www.youtube.com/watch?v=BPwn_iCi7BQ', 
        description: 'Como puedes utilizar el poder de manifestación de las emociones para materializar un presente abundante.' 
    }] 
}


const longDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const lessons:iLesson[] = [
    {...lesson, type:'Video', title:'Video'}, 
    {...lesson, type:'Reading', title:'Lectura', description:longDescription, link:'sample.pdf'}, 
    lesson
]

export const Posts:iPost[] = [{
    name:'Alice',
    title:'Title', 
    image:'Pis',
    detail:'Detail', 
    comments:[
        {name:'Beth', image:'Aqu', comment:'Test'} 
    ],
    likes: []
}]


export const Units:iUnit[] = [{ 
    title: '1. ASTROCONCIENCIA', 
    modules: [
        { title: '1.1 Introducción a la astroconsciencia', lessons },
        { title: '1.2 Historia de la astrología', lessons },
        { title: '1.3 Proposito de vida', lessons }
    ]
}, { 
    title: '2. LOS 12 SIGNOS DEL ZODIACO', 
    modules: [
        { title: '2.1 Características, elementos y cualidades de los signos', lessons },
        { title: '2.2 Los 12 signos', lessons }
    ] 
}, { 
    title: '3. LAS 12 CASAS DE LA CARTA ASTRAL', 
    modules: [
        { title: '3.1 Estructura de la carta astral', lessons },
        { title: '3.2 Casas en la carta astral', lessons },
        { title: '3.3 Ascendentes', lessons },
        { title: '3.4 Signos en las casas', lessons }
    ] 
}, { 
    title: '4. ASTROCONCIENCIA PLANETARIA', 
    modules: [
        { 
            title: '4.1 Planetas', 
            lessons:[
                { title:'Sol', type:'Chart', description:'El sol representa quien eres', planet:'Sun'},
                { title:'Luna', type:'Chart', description:'La Luna rige tus emociones', planet:'Moon'},
                { title:'Mercurio', type:'Chart', description:'El planeta que rige la mente', planet:'Mercury'},
                { title:'Venus', type:'Chart', description:'El planeta que rige el amor', planet:'Venus'},
                { title:'Marte', type:'Chart', description:'El planeta que rige la energía', planet:'Mars'},
                { title:'Jupiter', type:'Chart', description:'El planeta que rige la suerte', planet:'Jupiter'},
                { title:'Saturno', type:'Chart', description:'El planeta que rige tu responsabilidad', planet:'Saturn'},
                { title:'Urano', type:'Chart', description:'El planeta de la creatividad', planet:'Uranus'},
                { title:'Neptuno', type:'Chart', description:'El planeta de la imaginación y espiritualidad', planet:'Neptune'},
                { title:'Pluto', type:'Chart', description:'El planeta del subconsciente', planet:'Pluto'},
            ] 
        },
        { title: '4.2 Regencia/ Dignidad', lessons },
        { title: '4.3 Planetas en signos y casas', lessons }
    ] 
}, { 
    title: '5. ASTROCONCIENCIA KARMICA', 
    modules: [
        { title: '5.1 Consciencia karmica', lessons },
        { title: '5.2 Luna', lessons },
        { title: '5.3 Saturno y Kirón', lessons },
        { title: '5.4 Casa 12', lessons },
        { title: '5.5 Nodos lunares', lessons }
    ] 
}, { 
    title: '6. MISIONES', 
    modules: [
        { title: '6.1 Nuestras misiones', lessons },
        { title: '6.2 Misión personal', lessons },
        { title: '6.3 Misión conciente', lessons },
        { title: '6.4 Misión transpersonal', lessons },
        { title: '6.5 Dones divinos', lessons },
    ] 
}]
