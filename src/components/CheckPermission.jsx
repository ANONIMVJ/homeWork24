import React from 'react';

import { useSelector } from 'react-redux';
import { checkPermission } from '../utils/checkPermission';

const CheckPermission = ({ permissions, children }) => {
  const userPermissions = useSelector(state => state.auth.permissions);

  const hasPermission = checkPermission(userPermissions, permissions);

  return hasPermission ? <>{children}</> : null;
};

export default CheckPermission;
