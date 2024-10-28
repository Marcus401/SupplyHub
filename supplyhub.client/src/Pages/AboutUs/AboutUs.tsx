import React, {useEffect} from 'react'

type Props = {};

const AboutUs = (props: Props) => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    return (
        <div>AboutUs</div>
    );
};

export default AboutUs;
