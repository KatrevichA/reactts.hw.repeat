import React, {useState} from 'react';
import usePrevious from "../../hooks/usePrevious/usePrevious";

const PreviousComponent = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Sergey")
    const previousCount = usePrevious(count)



    return (
        <div>

            <div>
                {count} - {previousCount}
            </div>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(prevState => prevState - 1)}>
                Decrement
            </button>

            <hr/>

            <div>{name}</div>
            <button onClick={() => setName('John')}>Change Name</button>
            <button onClick={() => setName(prevState => prevState='Sergey')}>Change Back</button>

        </div>
    );
};

export default PreviousComponent;