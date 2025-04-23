import { useEffect, useState } from 'react';

function CheckPermission(props) {
    const {permissions, children} = props;

    const [permitted, setPermitted] = useState(false);

    const userObj = JSON.parse(localStorage.getItem("user"));

    const userPermissions = userObj?.permissions || [];

    useEffect(() => {
        let permissionsCount = 0;
        permissions.map(permission => {
            userPermissions.map(uPermission => {
                if (permission === uPermission) permissionsCount += 1;
            });
        });

        setPermitted(permissionsCount === permissions.length);
    }, []);


    return permitted ? children : null;
}

export default CheckPermission;