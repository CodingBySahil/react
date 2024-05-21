import myProfilePic from '../../images/myPic.jpeg'
import MyDetails from './components/MyDetails'
function App() {
  
  return (
    <>
     <h4>Starting with the name of Allah Almighty who is the king of all kings</h4>
     <img src={myProfilePic} width={400}/>
     <h1>I am Muhammad Sahil</h1>
     <p>I am from peshawar student of BSCS in University of Peshawar</p>
     <MyDetails/>
    </>
  )
}

export default App
