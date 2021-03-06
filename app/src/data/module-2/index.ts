import { iLesson } from '../../components/LayOut/Menu'
import { posts1, posts2, posts3 } from './posts'
import { quiz3 } from './quiz3'
import { quiz2 } from './quiz2'
import { quiz1 } from './quiz1'


const posts1Description = ['Nuevamente, te invitamos a que compartas tu experiencia con los demás, también puedes dar like y comentar en la experiencia de los otros.']
const signsDescription = [
    'En el vídeo anterior, Gaby habló sobre la lucha contra la negatividad de las características del signo de tu Saturno.',
    '',
    'Ahora, entra en todas las características y palomea cuales de las positivas si tienes desarrolladas y cuales de las negativas te hace falta corregir.',
    '',
    'Tiempo mínimo sugerido: 3 minutos'
]

const lessons1:iLesson[] = [
    { type:'Video', title:'La carta astral', link:'https://www.youtu.be/QSWYfSnHUHo' },
    { type:'Chart', title:'El signo de tu Saturno', planet:'Saturn', drawHouses:false },
    { type:'Video', title:'El significado del signo', link:'https://youtu.be/uJP6kRJq9Qs' },
    { 
        type:'Reading', 
        title:'Caracteristicas de los Signos', 
        link:'docs/Caracteristicas-de-los-Signos.pdf', 
        description:signsDescription, 
        min:3
    },
    { type:'Quiz', title:'Quiz 2.1', questions:quiz1 }, 
    { type:'Video', title:'Tus vidas pasadas', link:'https://youtu.be/qR1KmIG5Fl0' },
    { type:'Reflection', title:'Ejercicio de Compartir', posts:posts1, numbered:true, description:posts1Description }
]


const posts2Description = [
    'En base al vídeo "La Misión de Saturno" toma un tiempo para reflexionar y encontrar o reafirmar tu misión de servicio:'
]


const karmaDescription = [
    'En esta lectura conocerás a profundidad tu karma de Saturno, lo que te está restringiendo y lo que vienes a aprender.',
    '',
    'Obtendrás un vistazo a tus vidas pasadas y algunas de las circunstancias que te hicieron desarrollar tu karma.',
    '',
    'Tiempo mínimo sugerido: 4 minutos'
]

const lessons2:iLesson[] = [
    { type:'Video', title:'La influencia de tu signo', link:'https://youtu.be/k5oxhnHwYWQ' }, 
    { 
        type:'Reading', 
        title:'Saturno en DYNAMIC_SIGN', 
        link:'docs/karma/Karma-de-Saturno-en-DYNAMIC_SIGN.pdf', 
        description:karmaDescription, 
        min:4 
    },
    { type:'Quiz', title:'Quiz 2.2', questions:quiz2 }, 
    { type:'Video', title:'La misión de Saturno', link:'https://youtu.be/iLpqbBzRIvk' },
    { type:'Reflection', title:'Preguntas de Reflexión', posts:posts2, numbered:true, description:posts2Description }
]


const misionDescription = [
    'En esta lectura sabrás cual es el ejemplo que debes dar a otros, y lo que aprenderás en el proceso al volverte un maestro de ese signo del zodiaco.',
    '',
    'Entenderás cual es el pacto que tienes con las figuras de autoridad en tu vida y como te impulsan en tu misión de servicio.',
    '',
    'Tiempo mínimo sugerido: 5 minutos'
]

const returnDescription = ['En está primer lección de Kabbalah, empezamos a ver como liberar el Karma desde una consciencia espiritual alineada a nuestro ser superior.']
const excersiceDescription = ['¡Felicidades! Has completado el segundo módulo.', 'Ahora, continuaremos con el proceso de aplicar los aprendizajes a nuestra vida diaria e incrementar nuestra voluntad de servir:']
const lessons3:iLesson[] = [
    { type:'Video', title:'Ser un buen ejemplo', link:'https://youtu.be/MjU_S2C_cqc' },
    { 
        type:'Reading', 
        title:'Misión de DYNAMIC_SIGN', 
        link:'docs/mission/Misión-de-Saturno-en-DYNAMIC_SIGN.pdf', 
        description:misionDescription,
        min:5
    },
    { type:'Quiz', title:'Quiz 2.3', questions:quiz3 }, 
    { type:'Video', title:'El camino de retorno', link:'https://youtu.be/_XjOhM-i9NA', description:returnDescription },
    { type:'Reflection', title:'Ejercicio Práctico', posts:posts3, end:true, description:excersiceDescription }
]

export const module2 = [
    { title: '2.1 Saturno y tus vidas pasadas', lessons:lessons1 },
    { title: '2.2 La misión de Saturno', lessons:lessons2 },
    { title: '2.3 El camino de retorno', lessons:lessons3 }
]
