import styled from 'styled-components'
import {useState} from 'react'

function Wallet({ wallet, setWallet, walletValue, setWalletValue }) {

  

    function handleWallet(e) {
        e.preventDefault() 
        setWallet(walletValue)
      }

   return (
    
    <WalletWrapper>
    <p>Current wallet: ${wallet}</p>
    <form onSubmit={handleWallet}>
      <label htmlFor="wallet"> Set Current Wallet </label>
      <input 
        type = "number" 
        value={walletValue} 
        onChange={(e) => setWalletValue(e.target.value)}
      />
      <button type="submit">Set!</button>
    </form>
  </WalletWrapper>
   )
}

const WalletWrapper = styled.div`
  color: white;
  border-color: #F2A900;
  border-style: outset;
  border-radius: 20px;
  background-image: linear-gradient(180deg, #2D68C4, #0073cf);
  display: inline-block;
  text-align: center;
  padding: 15px;
`

export default Wallet; 