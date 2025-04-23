import React from 'react';
import { COMPONENT_VIEW, PAGE_VISIT } from '../../constants/permissions';
import CheckPermission from '../../utils/Guard';

function AnnouncementsPage(props) {

    return (
        <div className='text-3xl'>
            <h1>Announcements Page</h1>
            <CheckPermission permissions={[COMPONENT_VIEW.CAN_SEE_ADD_BUTTON, PAGE_VISIT.CAN_VISIT_STATISTICS]}>
                <button>Add Announcement button</button>
            </CheckPermission>
        </div>
    );
}

export default AnnouncementsPage;
