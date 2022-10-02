import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function NotificationBadge() {
  return (
    <IconButton aria-label={notificationsLabel(100)} size="small">
      <Badge badgeContent={10} color="secondary" >
        <FontAwesomeIcon icon={faBell} color="black"/>
      </Badge>
    </IconButton>
  );
}
