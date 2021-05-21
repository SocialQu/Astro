import { Header, Modal, Likes } from "./Atoms"
import { useEffect, useState } from "react"


const monthDict = (month:number) => ({
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre'
}[month])


export const DateTime = ({ date }:{ date:Date }) => <i style={{marginBottom:12}}>
    { date.getHours() % 12 }:{ date.getMinutes() } { date.getHours() > 12 ? 'PM - ' : 'AM - ' }  
    { date.getDate() } { monthDict(date.getMonth()) } { date.getFullYear() } <br/>
</i>


export interface iPost { id?:string, title:string, detail:string, likes?:number, comments?:string[] }
interface IPost extends iPost { id:string, reply(text:string, postId:string):void, like(postId:string):void }
const Post = ({ id, title, detail, likes=0, comments=[], reply, like }: IPost) => {
    const [ canComment, setCanComment ] = useState(false) 
    const [ value, setValue ] = useState('')
    const [ replies, setReplies ] = useState<string[]>([])

    useEffect(() => {
        const recentComments = comments.filter((_, i) => i < 5)
        setReplies(recentComments)
    }, [comments])

    return <div style={{display:'flex'}}>
        <Likes likes={likes} like={() => like(id)}/>

        <div className="card" style={{textAlign:'left', width:'100%'}}>
            <header className="card-header" style={{backgroundColor:'goldenrod'}}>
                <p className="card-header-title" style={{color:'white'}}>
                    { title }
                </p>
            </header>

            <div className="card-content">
                <nav className="level">
                    <div className='level-item' style={{width:160}}>
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="signs/Leo.png" alt="Solar sign" />
                                </figure>
                                <p className="title is-4">John Smith</p>
                            </div>
                        </div>
                    </div>

                    <div className="level-item" style={{width:'calc(100% - 160px)', minHeight:100}}>
                        <div className="content" style={{minHeight: 100, textAlign:'left', width:'100%'}}>
                            <p> 
                                <DateTime date={new Date()} />
                                { detail } 
                            </p>
                        </div>
                    </div>
                </nav>
            </div>

            <footer className="card-footer">
                { !canComment && <a href="#" className="card-footer-item" onClick={() => setCanComment(true)}> Comentar </a> }
                <a href="#" className="card-footer-item"> Mostrar Comentarios </a>
            </footer>

            {
                canComment && 
                <div className="field has-addons" style={{marginBottom:10, borderTop: '2px #ededed solid', paddingTop:10}}>
                    <div className="control" style={{width:'100%', marginLeft:20}}>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Comentar"
                            onChange={({target:{value}}) => setValue(value)}                        
                            onKeyPress={({ key }) => key === 'Enter' ? reply(value, id) : null}
                        />
                    </div>

                    <div className="control" style={{marginRight:20}}>
                        <a className="button is-info" onClick={() => reply(value, id)}> 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                data-supported-dps="24x24" 
                                fill="white" 
                                className="mercado-match" 
                                width="24" 
                                height="24" 
                                focusable="false"
                            ><path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path></svg>
                        </a>
                    </div>
                </div>
            }
        </div>        
        <div style={{width:80}}/>
    </div>
}


interface iPosts { 
    posts:iPost[]
    submit(post:iPost):void
    like(postId:string):void
    reply(text:string, postId:string):void
}

export const Posts = ({posts, submit, reply, like}: iPosts) => {
    const [ isActive, setActive] = useState(false)
    const [ newPost, setNewPost ] = useState<iPost>({ title:'', detail:''})

    return <div className='content' style={{maxWidth:720, margin:'auto'}}>
        <Header 
            title={"AstroChat"} 
            description={"Interactua con el grupo y comparte lo que haz aprendido."} 
            buttonText={"Publicar"}
            submit={() => setActive(true)}
        />

        <Modal title={"Publicar"} isActive={isActive} submit={() => submit(newPost)} deactivate={() => setActive(false)}>
            <div className="field">
                <label className="label"> Título: </label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        value={newPost.title} 
                        onChange={({target:{value}})=> setNewPost({...newPost, title:value})}
                    />
                </div>
            </div>

            <div className="field">
                <label className="label"> Contentido Adicional (opcional): </label>    
                <div className="control">
                    <textarea 
                        className="textarea" 
                        placeholder="e.g. Hello world" 
                        value={newPost.detail} 
                        onChange={({target:{value}})=> setNewPost({...newPost, detail:value})}
                    />
                </div>
            </div>
        </Modal>

        { posts.map((post, i) => <Post id={String(i)} {...post} reply={reply} like={like}/>) } 
    </div>
}
