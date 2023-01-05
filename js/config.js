// 配置
window.Config = {

  // 站点名
  SiteName: 'JiuXia2025 - 服务器状态',

  // 站点链接
  SiteUrl: 'http://status.9xia.top/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    //Sever
    '你的API地址',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'http://www.9xia.top/'
    },
    {
      text: '状态',
      url: 'http://status.9xia.top/'
    }
  ]
};
