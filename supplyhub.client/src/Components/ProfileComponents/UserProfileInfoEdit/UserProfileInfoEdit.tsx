import React, {useEffect} from 'react'

type Props = {};

const UserProfileInfoEdit = (props: Props) => {
    useEffect(() => {
        document.title = 'Edit User Profile';
    }, []);

    return (
        <div>UserProfileInfoEdit</div>
    );
};

export default UserProfileInfoEdit;
