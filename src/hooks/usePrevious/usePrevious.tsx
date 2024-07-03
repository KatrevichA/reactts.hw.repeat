import React, {useRef} from 'react';

const UsePrevious = (value:any) => {

    const currentRef = useRef<number>(value);
    const previousRef = useRef<number>();

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current
        currentRef.current = value
    }


    return [previousRef.current]
};

export default UsePrevious;