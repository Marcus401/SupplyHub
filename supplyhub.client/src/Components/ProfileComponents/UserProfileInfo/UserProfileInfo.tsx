import React, {useEffect} from 'react'

type Props = {};

const UserProfileInfo = (props: Props) => {
    useEffect(() => {
        document.title = 'UserProfile: {name}';
    }, []);

    return (
        <div>UserProfileInfo</div>
    );
};

export default UserProfileInfo;
