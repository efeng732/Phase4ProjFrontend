import {useState} from "react"
import styled from 'styled-components'

function Login({ history, setUser, user }) {
    
   const[username, setUsername] = useState("")
   const[password, setPassword] = useState("")

  

   function handleLogin(e) {
      e.preventDefault()

      if(username == "EnriqueKim" && password == "123") {
      const loggedInUser = {
         username: username, 
         password: password, 
         bio: "I hate students", 
         wallet: 100
      }

      fetch(`http://localhost:4000/login` , {
         method: "POST", 
         headers: {"Content-Type": "application/json" }, 
         body: JSON.stringify(loggedInUser)

      })
      .then( (res) => res.json())
      .then(data => {
         setUser(data)
         history.push(`/gamelist`)
      })
   
      setUsername("")
      setPassword("")
   }
   else {
      alert("Wrong username and pasword combination, try again scrub")
   }
}
    
   return (
      <>
      <Wrapper>
         
            <LoginHeader>Login</LoginHeader>
         
            <form onSubmit={handleLogin}>
               <FormLabel htmlFor="username">Username:</FormLabel>
               <br></br>
               <input 
                  type="text" 
                  name="username" 
                  value={username}
                  onChange={ (e) => setUsername(e.target.value)}
               />
               <br></br>
               <FormLabel htmlFor="password">Password:</FormLabel>
               <br></br>
               <input 
                  type="password" 
                  name="password" 
                  value={password}
                  onChange={ (e) => setPassword(e.target.value)}
               />
               <br></br>
               <LoginButton type="submit">Login</LoginButton>
            </form>
          
         
         <AboutH1>About the company </AboutH1>
         <AboutUsParagraph>
             We're a tight knit team of two that combined our passion for playing games and making enough money to keep off the streets into one idea. 
             We offer a wide selection of games for rental prices that can't be found anywhere else. You want to play the unreleased MLB? We gotchu and will charge you exorbitantly high rates that make absolutely no sense. Why would anyone want to pay $80 for 6 weeks, when you could just buy this game for $60 you ask?
             It's because life is all about flexing on your peers who really don't care. We are a LUXURY brand. Yeah that's right, 80 dollars sounding like a good deal now eh? Hope you'll enjoy our site we clearly created using unpaid interns to save money. 
             Happy gaming and please get the word out to your gullible/rich friends about this once in a lifetime get-poor-quick scheme!
         </AboutUsParagraph>
          
          <br></br> 
         <AboutH2>About Jakob </AboutH2>
         <AboutUsParagraph>
            When he is not running the shop, Jakob enjoys long walks on the beach, bullying 12 year olds in online games, hot yoga, blindfolded coding, and other healthy habits in his spare time. 
            He currently lives in Chad with his 3 goats and an unidentified number of "friends". Hey he said it not me, I'm just the intern doing this for experience. 
            His side hustle is being a landlord and has multiple properties in the San Francisco area, where he charges young people like me rent that is 3x the price of what the mortgage would be. 
            Great boss, would want to work for him again someday and maybe get paid!
         </AboutUsParagraph>
         <br></br>
         <AboutH2>About Erwin </AboutH2>
         <AboutUsParagraph>
            I don't know what this guy does. He always says he's available to help if we need it, but anytime shit hits the fan he mutters about doing some "To the moon" stuff and shorting the continent of Antarctica, then leaves the office. 
            Then once we finally fix the problem he shows up and offers us a hard candy as thanks for our efforts. But the candy is pretty good. 
            Anyways, when he's not gaming or dodging taxes, I believe Erwin is busy perfecting the art of slacking while giving off the illusion of being hardest worker and taking the credit.
            Guess you could say he's a real entrepeneur through and through, with an bright future in politics if he so chooses.  
         </AboutUsParagraph>
      {/* </AboutUs> */}
      </Wrapper>
      </>

   )
}

const Wrapper = styled.div`
   margin: auto;
   width: 80%;
   padding: 20px;
   border-style: outset;
   border-color: #F2A900;
   border-radius: 15px;
   background-image: linear-gradient(180deg, #2D68C4, #0073cf);
`

const AboutUs = styled.div`
   color: #F2A900;
   margin: auto;
   margin-top: 20px;
   width: 60%;
   padding: 20px;
   border-style: outset;
   border-color: #F2A900;
   border-radius: 15px;
   background-image: linear-gradient(180deg, #2D68C4, #0073cf);
   font-family: Copperplate; 
`

const AboutH1 = styled.h1`
   color: #F2A900;
   font-family: Copperplate;
`

const AboutH2 = styled.h2 `
   color: #F2A900;
   font-family: Copperplate;
`

const AboutUsParagraph = styled.p`
   color: white;
   font-family: Arial;
   font-size: 20px;
`

const LoginHeader = styled.h1`
   font-family: Copperplate; 
   font-size: 30px;
   color: white;
`


const FormLabel = styled.label`
   font-family: Copperplate;
   color: white;
   margin-right: 5px;
`

const LoginButton = styled.button`
   background-color: white;
   color: black;
   border-radius: 6px;

   margin-top: 3px;
   :hover {
      background-color: red;
      color: black;
   }
`

export default Login 