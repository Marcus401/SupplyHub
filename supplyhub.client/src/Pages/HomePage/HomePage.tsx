import React, {useEffect} from 'react'

type Props = {};

const HomePage = (props: Props) => {
    useEffect(() => {
        document.title = 'SupplyHub: Home';
    }, []);

    return (
        <div>HomePage</div>
    );
};

export default HomePage;
