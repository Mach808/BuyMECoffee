import { useState, useEffect } from "react";
import './memos.css'

const Memos = ({ state }) => {
    let counter = 0;
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async () => {
            if (!state.contract) return;
            const memos = await contract.getMemos();
            setMemos(memos);
        };
        contract && memosMessage();
        
    }, [contract]);


    return (
        <>
            <h2>Records</h2>
            <table style={{ width: "full"}}>
                {/* <thead>
                    <tr>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Type</th>
                        <th>Time</th>
                        <th>From</th>
                    </tr>
                </thead> */}

                <tbody>
                    {memos.map((memo, index) => (
                        <tr key={index}>
                            <td>{++counter+'.'}</td>
                            <td>{memo.name}</td>
                            <td>{memo.message}</td>
                            <td>{memo.typeofCoffee}</td>
                            <td>
                                {new Date(Number(memo.timestamp) * 1000).toLocaleString()}
                            </td>
                            <td>{memo.from}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

}

export default Memos
