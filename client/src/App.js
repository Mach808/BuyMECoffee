import abi from './contract/coffee.json'
import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from 'ethers';
import Buy from './components/buy';
import Memos from './components/memos';
import './App.css'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  })
  const [account, setAccount] = useState("None")
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x3868c10412652593396e656dfb0153eab464b483";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;
        if (ethereum) {
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });

          window.ethereum.on("chainChanged", () => {
            window.location.reload(); 
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          })


          const provider = new BrowserProvider(ethereum);
          const signer = await provider.getSigner();

          const contract = new Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
          setAccount(accounts);
        } else {
          alert("Please install MetaMask!");

        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);
  // console.log(state);

  return (
    <div className="App">
      <div>
        <h1 className='title'>Buy Manan A Coffee☕</h1>
        {/* <img src={headerIMG} height={500} width={1250}></img> */}
        <Buy state={state}></Buy>
        <Memos state={state}></Memos>
      </div>
    </div>
  );
}

export default App;
