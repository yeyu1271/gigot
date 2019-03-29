// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: 'home',
    children: [
      {
        name: '监控页',
        path: '/admin/dashboard/monitor',
      },
    ],
  },
  {
    name: '文章管理',
    path: '/admin/post',
    icon: 'copy',
    children: [
      { name: '文章列表', path: '/admin/post/list' },
      { name: '添加文章', path: '/admin/post/create' },
    ],
  },
  {
    name: '分类管理',
    path: '/admin/cate',
    icon: 'cascades',
    children: [
      { name: '分类列表', path: '/admin/cate/list' },
      { name: '添加分类', path: '/admin/cate/create' },
    ],
  },
  {
    name: '标签管理',
    path: '/admin/tag',
    icon: 'pin',
    children: [
      { name: '标签列表', path: '/admin/tag/list' },
      { name: '添加标签', path: '/admin/tag/create' },
    ],
  },
  {
    name: '用户管理',
    path: '/admin/users',
    icon: 'yonghu',
    children: [
      { name: '用户列表', path: '/admin/users/list' },
      { name: '添加用户', path: '/admin/users/create' },
      { name: '修改密码', path: '/admin/users/pwd' },
    ],
  },
  {
    name: '通用设置',
    path: '/admin/setting',
    icon: 'shezhi',
    children: [
      { name: '基础设置', path: '/admin/setting/basic' },
      {
        name: '菜单设置',
        path: '/admin/setting/navigation',
      },
    ],
  },
];

const navConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: false,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: false,
    icon: 'bangzhu',
  },
];

export { headerMenuConfig, asideMenuConfig, navConfig };
