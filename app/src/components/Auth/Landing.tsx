/* eslint-disable jsx-a11y/anchor-is-valid */

import { useMediaQuery } from 'react-responsive'
import ReactPlayer from 'react-player/youtube'

import { iNewUser } from './SignUp'


interface iWelcome { click():void }
const Welcome = ({ click, }:iWelcome) => {
    const midScreen = useMediaQuery({ query: '(min-width: 900px)' })
    const smallScreen = useMediaQuery({ query: '(max-width: 600px)' })

    return <div className='content' style={{textAlign:'center'}}>
        <h1 
            style={{
                fontSize:!smallScreen ? '3rem' : '2rem', 
                marginBottom:0, 
                color:'saddlebrown'
            }}
        > SATURNO 🪐 </h1>

        <div style={{marginBottom:!smallScreen ? '1rem' : 0}}>
            <h2 
                style={{
                    margin:`${!smallScreen ? '0.5' : '0' }rem auto ${!smallScreen ? '1.5' : '1' }rem`,
                    width:!smallScreen ? 760 : 300, 
                    fontSize:!smallScreen ? '2rem' : '1.5rem',
                    color:'#b08f5c'
                }}
            >
                El señor del Karma
            </h2>

            <div>
                <ReactPlayer 
                    style={{margin:'auto'}}
                    width={midScreen ? 800 : !smallScreen ? 400 : 300 } 
                    height={midScreen ? 450 : !smallScreen ? 225 : 170 } 
                    url='https://youtu.be/HKm47Cbbdxk' 
                />
            </div>
        </div>

        <div style={{marginTop:!smallScreen ? '1rem' : 0}}>
            <a
                onClick={click}
                className='button is-link'
                style={{ 
                    width:!smallScreen ? 320 : 260, 
                    fontSize: !smallScreen ? '1.5rem' : '1.25rem', 
                    fontWeight:900, 
                    marginTop:'1rem',
                    backgroundColor:'saddlebrown', 
                    borderRadius:20 
                }}
            > Descubre tu misión </a>
        </div>
    </div>
}


export interface iLanding { createUser(signUp:iNewUser):void }
interface ILanding { setLogin():void }
export const Landing = ({ setLogin }:ILanding) => <Welcome click={setLogin} />
