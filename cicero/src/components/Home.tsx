import { Recordings, iRecordings } from './Forum/Recordings'
import { Forum, iForum } from './Forum/Forum'

import { Document, Quiz, Video } from './Views'
import { Login, iLogin } from './Auth/Login'
import { Landing } from './Auth/Landing'
import { iLesson } from './LayOut/Menu'
import { iUser } from '../App'


interface iHome extends iLogin { 
    user:iUser
    isAuth:boolean, 
    isLogin:boolean, 
    lesson:iLesson, 
    forum?:iForum, 
    recordings?:iRecordings 
    next():void
    approve(score:number):boolean
}

export const Home = ({ user, isAuth, isLogin, lesson, forum, recordings, login, next, approve }: iHome) => {
    return isAuth
        ?   isLogin ?  <Login login={login}/>
            :   forum ? <Forum {...forum}/>
            :   recordings ? <Recordings {...recordings}/>
            :   lesson.type === 'Video' ? <Video {...lesson} next={next}/>
            :   lesson.type === 'Reading' ? <Document {...lesson} next={next}/>
            :   lesson.type === 'Quiz' ? <Quiz  {...lesson} next={next} approve={approve} user={user}/> : <Landing/>
        :   <Landing/>
}
