import { parseEther } from 'ethers';

const price = { latte: "0.01", Americano: "0.02", Capacaccino: "0.03" };


const Buy = ({ state }) => {
  const buyCoffee = async (event) => {
    console.log("hello")
    event.preventDefault();
    const { contract } = state;

    if (!contract) {
      alert("Smart contract not loaded yet.");
      return;
    }

    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const type = document.querySelector('#type').value;

    if (!price[type]) {
      alert("Invalid coffee type selected.");
      return;
    }

    try {
      const transaction = await contract.buyCoffee(name, message, type, {
        value: parseEther(price[type]), // 0.001 ETH
      });

      await transaction.wait();
      console.log("Transaction complete");
    } catch (err) {
      console.error("Transaction failed:", err);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={buyCoffee}>
        <label>Name</label>
        <input type="text" id="name" placeholder="Enter your Name" />

        <label>Message</label>
        <input type="text" id="message" placeholder="Message" />
        <label>Type of Coffee</label>
        <select id="type">
          <option value="latte">Latte</option>
          <option value="Americano">Americano</option>
          <option value="Capacaccino">Capacaccino</option>
        </select>

        <button type="submit" disabled={!state.contract}>Pay</button>
      </form>
    </div>
  );
};

export default Buy;
