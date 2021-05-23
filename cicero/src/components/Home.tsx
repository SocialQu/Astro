import { iRecordings } from './Forum/Recordings'
import { iDoubt, iForum } from './Forum/Forum'
import { iPost } from './Forum/Posts'

import { iLoginInput, Login } from './Auth/Login'
import { Interaction } from './Interaction'
import { iNewUser } from './Auth/SignUp'
import { Landing } from './Auth/Landing'
import { iLesson } from './LayOut/Menu'
import { Content } from './Content'
import { iUser } from '../App'

import { App } from 'realm-web'


interface iHome { 
    app?:App
    user?:iUser
    isLogin:boolean
    isWelcome:boolean

    lesson:iLesson
    forum?:iForum
    posts?:iPost[]
    recordings?:iRecordings 

    next():void
    createUser(newUser:iNewUser):void
    approve(score?:number):boolean | void
    login(loginInput:iLoginInput):void
    submit(doubt:iDoubt):void
    setWelcome():void

    like(id:string):void
    post(post:iPost):void
    likePost(id:string):void
    reply(text:string, id:string):void
}

export const Home = ({
    app,
    user, 
    isLogin,
    isWelcome,

    lesson, 
    forum, 
    posts,
    recordings, 

    next,
    approve,
    setWelcome,
    createUser,
    login,
    submit,

    like,
    post,
    reply,
    likePost
}: iHome) => {
    return user
        ?   forum || recordings || posts 
            ?   <Interaction 
                    forum={forum} 
                    recordings={recordings} 
                    posts={posts} 
                    like={like}
                    submit={submit}
                    post={post}
                    reply={reply}
                    likePost={likePost}
                />
            :   <Content user={user} lesson={lesson} next={next} approve={approve}/>
        :   isLogin 
            ?  <Login login={login}/>
            :   <Landing app={app} isWelcome={isWelcome} setWelcome={setWelcome} createUser={createUser}/>
}
