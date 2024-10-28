import React, {useEffect} from 'react'

type Props = {};

const Help = (props: Props) => {
    useEffect(() => {
        document.title = 'Help';
    }, []);

    return (
        <div>Help</div>
    );
};

export default Help;
