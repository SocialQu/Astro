import { iRecordings } from '../components/Forum/Recordings'
import { iForum } from '../components/Forum/Forum'
import { iUnit } from '../components/LayOut/Menu'

import { planets, houses } from './chart'
import { module1 } from './module-1'
import { module2 } from './module-2'
import { module3 } from './module-3'
import { module4 } from './module-4'
import { iUser } from '../App'


const defaultUser:iUser = {
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


export const Forum:iForum = {
    user:defaultUser,
    title:'Foro de Dudas',
    description:'',
    questions:[]
}


export const Recordings:iRecordings = {
    title:'Grabaciones Semanales',
    description:'',
    recordings:[]
}


export const Units:iUnit[] = [
    { title: '1. Saturno y el Karma', modules: module1 },
    { title: '2. El Signo de Saturno', modules: module2 },
    { title: '3. La Casa de Saturno', modules: module3 },
    { title: '4. Saturno y la Kabbalah', modules: module4 }
]
