import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Overview';
import Profile from '~/pages/Profile';
import config from '~/config';
import Candidate from '~/pages/Candidate';
import Employee from '~/pages/Employee';
import Email from '~/pages/Email';
import PrivateChat from '~/pages/Chat/Private';
import GroupChat from '~/pages/Chat/Group';
import Todo from '~/pages/Todo';
import Calendar from '~/pages/Calendar';
import Kanban from '~/pages/Kanban';
import Sales from '~/pages/Sales';
import Board from '~/pages/Board';
import UserInformation from '~/layouts/components/UserInformation';
import Support from '~/pages/Support';
import SupportCenter from '~/pages/SupportCenter';
import Timeline from '~/pages/Timeline';
import Manage from '~/pages/Manage';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.user_information, component: UserInformation, layout: null },
    { path: config.routes.sales, component: Sales },
    { path: `${config.routes.profile.info}/*`, component: Profile },
    { path: config.routes.chat.private, component: PrivateChat },
    { path: config.routes.chat.group, component: GroupChat },
    { path: config.routes.employee, component: Employee },
    { path: config.routes.candidates, component: Candidate, layout: HeaderOnly },
    { path: config.routes.email, component: Email },
    { path: config.routes.todo, component: Todo },
    { path: config.routes.timeline, component: Timeline },
    { path: config.routes.calendar, component: Calendar },
    { path: config.routes.kanban, component: Kanban },
    { path: config.routes.board, component: Board },
    { path: config.routes.support, component: Support },
];

const privateRoutes = [
    { path: `${config.routes.manage.user}/*`, component: Manage },
    { path: config.routes.manage.support_center, component: SupportCenter },
];

export { publicRoutes, privateRoutes };
