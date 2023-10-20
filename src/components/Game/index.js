import { Component } from 'react'
import './index.css'

class Game extends Component {
    state = { mangoCount: 0 , bananaCount: 0 }
    
    onMango = () => {
        this.setState(prevState => ({
            mangoCount: prevState.mangoCount + 1
        }))
    }

    onbanana = () => {
        this.setState(prevState => ({
            bananaCount: prevState.bananaCount + 1
        }))
    }

    render(){
        const {mangoCount, bananaCount} = this.state

        return(
            <div className='bg-container'>
            <div className='card-container'>
                <h1>Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span> bananas </h1>
                <div className='cards'>
                    <div className='card'>
                        <img src="images/mango-img.png" className="image" alt="mango" />
                        <button className="btn" onClick={this.onMango}>Eat Mango</button>
                    </div>
                    <div className='card'>
                        <img src="images/banana-img.png" className="image" alt="banana" />
                        <button className="btn" onClick={this.onbanana}>Eat Banana</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Game