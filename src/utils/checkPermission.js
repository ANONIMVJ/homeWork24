export function checkPermission(userPermissions, requiredPermissions) {
    return requiredPermissions.every(permission => userPermissions.includes(permission));
  }
  