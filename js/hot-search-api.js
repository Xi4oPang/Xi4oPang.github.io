// 本地热搜数据获取模块
class LocalHotSearchAPI {
  constructor() {
    this.cache = new Map();
    this.cacheExpiry = 5 * 60 * 1000;
  }

  async getWeiboHot() {
    const mockData = [
      { title: 'iPhone 15 Pro Max 评测出炉', hot: '2.8万', url: 'https://weibo.com/search?q=iPhone15评测', desc: '最新iPhone评测结果公布', rank: 1 },
      { title: '新能源汽车补贴政策调整', hot: '1.9万', url: 'https://weibo.com/search?q=新能源补贴', desc: '2024年新能源车补贴新规', rank: 2 },
      { title: '世界杯预选赛最新战况', hot: '1.6万', url: 'https://weibo.com/search?q=世界杯预选赛', desc: '国足关键比赛结果', rank: 3 },
      { title: '双11购物节数据公布', hot: '1.4万', url: 'https://weibo.com/search?q=双11数据', desc: '今年双11销售总额创新高', rank: 4 },
      { title: 'AI技术在教育领域应用', hot: '1.2万', url: 'https://weibo.com/search?q=AI教育', desc: '人工智能改变传统教学模式', rank: 5 },
      { title: '房价调控政策最新消息', hot: '9.8千', url: 'https://weibo.com/search?q=房价调控', desc: '多地出台楼市新政策', rank: 6 },
      { title: '5G网络覆盖范围扩大', hot: '8.5千', url: 'https://weibo.com/search?q=5G覆盖', desc: '全国5G基站建设进展', rank: 7 },
      { title: '电影票房排行榜更新', hot: '7.2千', url: 'https://weibo.com/search?q=电影票房', desc: '本周热门电影票房数据', rank: 8 },
      { title: '健康饮食新趋势', hot: '6.8千', url: 'https://weibo.com/search?q=健康饮食', desc: '营养师推荐的饮食方案', rank: 9 },
      { title: '环保政策最新动态', hot: '5.9千', url: 'https://weibo.com/search?q=环保政策', desc: '碳中和目标推进情况', rank: 10 }
    ];
    return mockData;
  }

  async getZhihuHot() {
    const mockData = [
      { title: '如何提高工作效率？', hot: '15.2万', url: 'https://www.zhihu.com/search?q=提高工作效率', desc: '职场效率提升的实用技巧', rank: 1 },
      { title: '2024年最值得学习的技能', hot: '12.8万', url: 'https://www.zhihu.com/search?q=2024技能', desc: '未来职场必备技能分析', rank: 2 },
      { title: '理财投资入门指南', hot: '11.5万', url: 'https://www.zhihu.com/search?q=理财投资', desc: '新手理财基础知识', rank: 3 },
      { title: '心理健康维护方法', hot: '10.3万', url: 'https://www.zhihu.com/search?q=心理健康', desc: '现代人心理压力缓解', rank: 4 },
      { title: '编程语言选择建议', hot: '9.7万', url: 'https://www.zhihu.com/search?q=编程语言', desc: '初学者如何选择编程语言', rank: 5 },
      { title: '时间管理技巧分享', hot: '8.9万', url: 'https://www.zhihu.com/search?q=时间管理', desc: '高效时间管理方法', rank: 6 },
      { title: '创业经验总结', hot: '7.6万', url: 'https://www.zhihu.com/search?q=创业经验', desc: '成功创业者的经验分享', rank: 7 },
      { title: '学习方法论探讨', hot: '6.8万', url: 'https://www.zhihu.com/search?q=学习方法', desc: '科学有效的学习方法', rank: 8 },
      { title: '人际关系处理技巧', hot: '5.9万', url: 'https://www.zhihu.com/search?q=人际关系', desc: '职场人际关系维护', rank: 9 },
      { title: '个人品牌建设方法', hot: '5.2万', url: 'https://www.zhihu.com/search?q=个人品牌', desc: '如何打造个人影响力', rank: 10 }
    ];
    return mockData;
  }

  async getBaiduHot() {
    const mockData = [
      { title: '今日天气查询', hot: '25.6万', url: 'https://www.baidu.com/s?wd=今日天气', desc: '全国主要城市天气预报', rank: 1 },
      { title: '实时疫情数据', hot: '22.3万', url: 'https://www.baidu.com/s?wd=疫情数据', desc: '最新疫情统计信息', rank: 2 },
      { title: '股票行情查询', hot: '18.9万', url: 'https://www.baidu.com/s?wd=股票行情', desc: 'A股市场实时数据', rank: 3 },
      { title: '交通出行信息', hot: '16.7万', url: 'https://www.baidu.com/s?wd=交通出行', desc: '路况信息和出行建议', rank: 4 },
      { title: '美食菜谱大全', hot: '14.2万', url: 'https://www.baidu.com/s?wd=美食菜谱', desc: '家常菜制作方法', rank: 5 },
      { title: '旅游攻略推荐', hot: '12.8万', url: 'https://www.baidu.com/s?wd=旅游攻略', desc: '热门旅游目的地指南', rank: 6 },
      { title: '健康养生知识', hot: '11.5万', url: 'https://www.baidu.com/s?wd=健康养生', desc: '日常保健小贴士', rank: 7 },
      { title: '教育考试信息', hot: '10.3万', url: 'https://www.baidu.com/s?wd=教育考试', desc: '各类考试报名时间', rank: 8 },
      { title: '购物优惠信息', hot: '9.1万', url: 'https://www.baidu.com/s?wd=购物优惠', desc: '各大平台优惠活动', rank: 9 },
      { title: '娱乐八卦新闻', hot: '8.4万', url: 'https://www.baidu.com/s?wd=娱乐八卦', desc: '娱乐圈最新动态', rank: 10 }
    ];
    return mockData;
  }

  async getBilibiliHot() {
    const mockData = [
      { title: '【原神】4.2版本更新内容详解', hot: '45.8万', url: 'https://search.bilibili.com/all?keyword=原神4.2', desc: '新角色、新地图、新剧情全面解析', rank: 1 },
      { title: '【科技】ChatGPT-5最新功能演示', hot: '38.2万', url: 'https://search.bilibili.com/all?keyword=ChatGPT5', desc: 'AI助手最新升级功能展示', rank: 2 },
      { title: '【美食】家常菜制作教程合集', hot: '32.1万', url: 'https://search.bilibili.com/all?keyword=家常菜教程', desc: '简单易学的家常菜做法', rank: 3 },
      { title: '【音乐】2024年最火歌曲TOP10', hot: '28.7万', url: 'https://search.bilibili.com/all?keyword=2024热门歌曲', desc: '年度最受欢迎音乐作品', rank: 4 },
      { title: '【游戏】王者荣耀新赛季攻略', hot: '25.4万', url: 'https://search.bilibili.com/all?keyword=王者荣耀攻略', desc: '新版本英雄出装推荐', rank: 5 },
      { title: '【动漫】新番推荐2024年1月', hot: '22.9万', url: 'https://search.bilibili.com/all?keyword=2024年1月新番', desc: '冬季新番动画推荐', rank: 6 },
      { title: '【生活】省钱小技巧分享', hot: '19.6万', url: 'https://search.bilibili.com/all?keyword=省钱技巧', desc: '日常生活中的省钱方法', rank: 7 },
      { title: '【学习】编程入门教程推荐', hot: '17.3万', url: 'https://search.bilibili.com/all?keyword=编程入门', desc: '零基础学习编程指南', rank: 8 },
      { title: '【运动】健身减肥计划制定', hot: '15.8万', url: 'https://search.bilibili.com/all?keyword=健身减肥', desc: '科学健身减肥方案', rank: 9 },
      { title: '【旅游】国内热门景点推荐', hot: '14.2万', url: 'https://search.bilibili.com/all?keyword=国内旅游', desc: '值得一去的旅游胜地', rank: 10 }
    ];
    return mockData;
  }

  async getGithubHot() {
    const mockData = [
      { title: 'ChatGPT-Web: 开源ChatGPT应用', hot: '89.2k', url: 'https://github.com/search?q=ChatGPT-Web', desc: '基于ChatGPT API的Web应用', rank: 1 },
      { title: 'AutoGPT: 自主AI助手项目', hot: '76.8k', url: 'https://github.com/search?q=AutoGPT', desc: '能够自主完成任务的AI工具', rank: 2 },
      { title: 'Stable Diffusion: AI绘画模型', hot: '65.4k', url: 'https://github.com/search?q=Stable-Diffusion', desc: '开源的AI图像生成模型', rank: 3 },
      { title: 'Vue.js 4.0: 前端框架更新', hot: '58.9k', url: 'https://github.com/search?q=Vue.js', desc: 'Vue.js最新版本特性介绍', rank: 4 },
      { title: 'React 19: 新特性预览', hot: '52.3k', url: 'https://github.com/search?q=React19', desc: 'React框架最新版本更新', rank: 5 },
      { title: 'Python 3.12: 性能优化', hot: '47.1k', url: 'https://github.com/search?q=Python3.12', desc: 'Python最新版本性能提升', rank: 6 },
      { title: 'Docker容器化部署指南', hot: '41.8k', url: 'https://github.com/search?q=Docker部署', desc: '容器化应用部署最佳实践', rank: 7 },
      { title: 'Kubernetes集群管理工具', hot: '38.5k', url: 'https://github.com/search?q=Kubernetes', desc: '容器编排平台管理方案', rank: 8 },
      { title: '机器学习算法实现', hot: '35.2k', url: 'https://github.com/search?q=机器学习', desc: '经典ML算法代码实现', rank: 9 },
      { title: '区块链技术开源项目', hot: '31.9k', url: 'https://github.com/search?q=区块链', desc: '去中心化应用开发框架', rank: 10 }
    ];
    return mockData;
  }

  async getV2exHot() {
    const mockData = [
      { title: '程序员35岁危机讨论', hot: '1.2k', url: 'https://www.v2ex.com/t/程序员35岁', desc: '关于程序员职业发展的讨论', rank: 1 },
      { title: '远程工作体验分享', hot: '1.1k', url: 'https://www.v2ex.com/t/远程工作', desc: '在家办公的优缺点分析', rank: 2 },
      { title: '技术选型经验总结', hot: '987', url: 'https://www.v2ex.com/t/技术选型', desc: '项目技术栈选择建议', rank: 3 },
      { title: '创业项目想法征集', hot: '856', url: 'https://www.v2ex.com/t/创业想法', desc: '寻找创业合作伙伴', rank: 4 },
      { title: '学习新技术的建议', hot: '743', url: 'https://www.v2ex.com/t/学习技术', desc: '如何高效学习新技术', rank: 5 },
      { title: '工作与生活平衡', hot: '689', url: 'https://www.v2ex.com/t/工作生活平衡', desc: '程序员如何平衡工作生活', rank: 6 },
      { title: '面试经验分享', hot: '612', url: 'https://www.v2ex.com/t/面试经验', desc: '大厂面试技巧总结', rank: 7 },
      { title: '开源项目维护心得', hot: '578', url: 'https://www.v2ex.com/t/开源维护', desc: '开源项目运营经验', rank: 8 },
      { title: '技术债务处理方案', hot: '534', url: 'https://www.v2ex.com/t/技术债务', desc: '如何应对遗留代码问题', rank: 9 },
      { title: '团队协作最佳实践', hot: '489', url: 'https://www.v2ex.com/t/团队协作', desc: '提高团队效率的方法', rank: 10 }
    ];
    return mockData;
  }

  async getJuejinHot() {
    const mockData = [
      { title: 'Vue3 Composition API 最佳实践', hot: '12.8k', url: 'https://juejin.cn/search?query=Vue3最佳实践', desc: 'Vue3组合式API使用技巧', rank: 1 },
      { title: 'React Hooks 性能优化指南', hot: '11.5k', url: 'https://juejin.cn/search?query=React性能优化', desc: 'React应用性能提升方法', rank: 2 },
      { title: 'TypeScript 高级类型技巧', hot: '10.3k', url: 'https://juejin.cn/search?query=TypeScript高级类型', desc: 'TS类型系统深度解析', rank: 3 },
      { title: 'Node.js 微服务架构设计', hot: '9.7k', url: 'https://juejin.cn/search?query=Node.js微服务', desc: '基于Node.js的微服务实现', rank: 4 },
      { title: '前端工程化实践总结', hot: '8.9k', url: 'https://juejin.cn/search?query=前端工程化', desc: '现代前端开发流程优化', rank: 5 },
      { title: 'CSS Grid 布局完全指南', hot: '8.2k', url: 'https://juejin.cn/search?query=CSS Grid', desc: 'CSS网格布局详细教程', rank: 6 },
      { title: 'JavaScript 异步编程详解', hot: '7.6k', url: 'https://juejin.cn/search?query=JavaScript异步', desc: 'Promise、async/await使用', rank: 7 },
      { title: 'Webpack 5 配置优化', hot: '7.1k', url: 'https://juejin.cn/search?query=Webpack5优化', desc: '构建工具性能提升', rank: 8 },
      { title: '移动端适配解决方案', hot: '6.8k', url: 'https://juejin.cn/search?query=移动端适配', desc: '响应式设计最佳实践', rank: 9 },
      { title: '前端安全防护措施', hot: '6.3k', url: 'https://juejin.cn/search?query=前端安全', desc: 'XSS、CSRF等攻击防护', rank: 10 }
    ];
    return mockData;
  }

  async getCsdnHot() {
    const mockData = [
      { title: 'Spring Boot 3.0 新特性详解', hot: '15.6k', url: 'https://so.csdn.net/so/search?q=SpringBoot3.0', desc: 'Spring Boot最新版本功能介绍', rank: 1 },
      { title: 'MySQL 8.0 性能优化技巧', hot: '13.8k', url: 'https://so.csdn.net/so/search?q=MySQL8.0优化', desc: '数据库性能提升最佳实践', rank: 2 },
      { title: 'Redis 集群部署方案', hot: '12.4k', url: 'https://so.csdn.net/so/search?q=Redis集群', desc: '高可用Redis集群配置', rank: 3 },
      { title: '微服务架构设计模式', hot: '11.2k', url: 'https://so.csdn.net/so/search?q=微服务架构', desc: '微服务系统设计原则', rank: 4 },
      { title: 'Docker 容器化实践指南', hot: '10.7k', url: 'https://so.csdn.net/so/search?q=Docker实践', desc: '容器化应用部署教程', rank: 5 },
      { title: 'Linux 系统管理技巧', hot: '9.8k', url: 'https://so.csdn.net/so/search?q=Linux管理', desc: '服务器运维实用技巧', rank: 6 },
      { title: 'Python 数据分析实战', hot: '9.1k', url: 'https://so.csdn.net/so/search?q=Python数据分析', desc: '数据科学项目实战', rank: 7 },
      { title: 'Java 并发编程详解', hot: '8.5k', url: 'https://so.csdn.net/so/search?q=Java并发', desc: '多线程编程最佳实践', rank: 8 },
      { title: '前端性能优化策略', hot: '7.9k', url: 'https://so.csdn.net/so/search?q=前端性能优化', desc: 'Web应用性能提升方法', rank: 9 },
      { title: '网络安全防护措施', hot: '7.3k', url: 'https://so.csdn.net/so/search?q=网络安全', desc: '常见网络攻击防护', rank: 10 }
    ];
    return mockData;
  }

  async getCnblogsHot() {
    const mockData = [
      { title: '.NET 8 新特性预览', hot: '8.9k', url: 'https://www.cnblogs.com/search?q=.NET8', desc: '微软最新框架功能介绍', rank: 1 },
      { title: 'C# 异步编程模式', hot: '7.8k', url: 'https://www.cnblogs.com/search?q=C#异步', desc: 'C#异步编程最佳实践', rank: 2 },
      { title: 'ASP.NET Core 性能优化', hot: '7.2k', url: 'https://www.cnblogs.com/search?q=ASP.NET性能', desc: 'Web应用性能提升技巧', rank: 3 },
      { title: 'Entity Framework 使用指南', hot: '6.8k', url: 'https://www.cnblogs.com/search?q=EntityFramework', desc: 'ORM框架使用教程', rank: 4 },
      { title: 'Blazor 开发实战', hot: '6.3k', url: 'https://www.cnblogs.com/search?q=Blazor', desc: 'WebAssembly应用开发', rank: 5 },
      { title: 'WPF 界面设计技巧', hot: '5.9k', url: 'https://www.cnblogs.com/search?q=WPF设计', desc: '桌面应用UI设计', rank: 6 },
      { title: 'Xamarin 跨平台开发', hot: '5.4k', url: 'https://www.cnblogs.com/search?q=Xamarin', desc: '移动应用开发指南', rank: 7 },
      { title: 'Unity 游戏开发教程', hot: '5.1k', url: 'https://www.cnblogs.com/search?q=Unity开发', desc: '游戏引擎使用技巧', rank: 8 },
      { title: 'Azure 云服务部署', hot: '4.8k', url: 'https://www.cnblogs.com/search?q=Azure部署', desc: '微软云平台使用', rank: 9 },
      { title: 'PowerShell 脚本编程', hot: '4.5k', url: 'https://www.cnblogs.com/search?q=PowerShell', desc: 'Windows自动化脚本', rank: 10 }
    ];
    return mockData;
  }

  async getHotData(platform) {
    switch (platform) {
      case 'weibo':
        return await this.getWeiboHot();
      case 'zhihu':
        return await this.getZhihuHot();
      case 'baidu':
        return await this.getBaiduHot();
      case 'bilibili':
        return await this.getBilibiliHot();
      case 'github':
        return await this.getGithubHot();
      case 'v2ex':
        return await this.getV2exHot();
      case 'juejin':
        return await this.getJuejinHot();
      case 'csdn':
        return await this.getCsdnHot();
      case 'cnblogs':
        return await this.getCnblogsHot();
      default:
        throw new Error('不支持的平台: ' + platform);
    }
  }

  async getAllPlatforms() {
    return {
      weibo: await this.getWeiboHot(),
      zhihu: await this.getZhihuHot(),
      baidu: await this.getBaiduHot(),
      bilibili: await this.getBilibiliHot(),
      github: await this.getGithubHot(),
      v2ex: await this.getV2exHot(),
      juejin: await this.getJuejinHot(),
      csdn: await this.getCsdnHot(),
      cnblogs: await this.getCnblogsHot()
    };
  }

  clearCache() {
    this.cache.clear();
  }
}

window.LocalHotSearchAPI = LocalHotSearchAPI;
c