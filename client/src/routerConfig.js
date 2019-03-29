// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLogin from './pages/UserLogin';
// import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import CateList from './pages/CateList';
import CreateCate from './pages/CreateCate';
import TagList from './pages/TagList';
import CreateTag from './pages/CreateTag';
import UserList from './pages/UserList';
import CreateUser from './pages/CreateUser';
import EditPassword from './pages/EditPassword';
import BasicSetting from './pages/BasicSetting';

import DemoHome from './pages/DemoHome';
import File from './pages/File';
import Article from './pages/Article';
import NavigationSetting from './pages/NavigationSetting';

const routerConfig = [
  // {
  //   path: '/user/register',
  //   component: UserRegister,
  //   authority: 'admin',
  // },
  {
    path: '/admin/tag/create',
    component: CreateTag,
    authority: 'admin',
  },
  {
    path: '/admin/users/pwd',
    component: EditPassword,
    authority: 'admin',
  },
  {
    path: '/admin/dashboard/monitor',
    component: Dashboard,
    authority: 'admin',
  },
  {
    path: '/admin/setting/basic',
    component: BasicSetting,
    authority: 'admin',
  },
  {
    path: '/admin/setting/navigation',
    component: NavigationSetting,
    authority: 'admin',
  },
  {
    path: '/admin/users/list',
    component: UserList,
    authority: 'admin',
  },
  {
    path: '/admin/users/create',
    component: CreateUser,
    authority: 'admin',
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/admin/tag/list',
    component: TagList,
    authority: 'admin',
  },
  {
    path: '/admin/cate/list',
    component: CateList,
    authority: 'admin',
  },
  {
    path: '/admin/cate/create',
    component: CreateCate,
    authority: 'admin',
  },
  {
    path: '/admin/post/list',
    component: PostList,
    authority: 'admin',
  },
  {
    path: '/admin/post/create',
    component: CreatePost,
    authority: 'admin',
  },
  {
    path: '/index',
    component: DemoHome,
  },
  {
    path: '/main/file',
    component: File,
  },
  {
    path: '/article/content',
    component: Article,
  },
];

export default routerConfig;
