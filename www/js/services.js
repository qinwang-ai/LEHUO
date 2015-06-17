angular.module('starter.services', [])

.factory('Dashs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dashs = [{
    id: 0,
    //点击跳转到详情页的链接
    link: '#/tab/dash/0',
    //首页显示的每一个项目标题
    title: '奔跑奔跑｜奔跑奔跑奔跑奔跑奔跑', 
    //详情页的标题
    name: '奔跑吧，大学生',
    //举办方
    laucher: '奔跑吧',
    startdate: '04-22',
    //图片滑动和截止时间要显示的
    enddate: '04-22',
    //活动页显示
    address: '广州市 天河区 天河路234号 广场blablablablabla',
    way: '免费入场，需要提前预约',
    starttime: '8:00',
    finaltime: '12:00', 
    //首页显示的阅读人数
    readers: '419', 
    //备注
    add: '活力五月，定向越野。“奔跑吧，大学生”。',
    //活动详情
    more: '1、丰富同学的课外生活，强健体魄，也能够使学生更进一步的熟悉校园，更能够发展学生的团结协作精神。2、从医学角度来讲，体育运动是一种行之有效的放松身心的方法新型校园定向运动不仅可以直接舒缓紧张压力，精神障碍等，而且还可以消除因紧张所引起的一系列躯体潜在的病理状态，预防肥胖症、消除脑力疲劳、改善睡眠、增强人体免疫功能和抗病的能力，提高生活质量和健康水平。',
    //首页显示（包括图片滑动）
    image: 'img/0.jpg',
    //活动页海报
    poster: 'img/post.jpg'
  },
  {
    id: 1,
    link: '#/tab/dash/1',
    title: '数据玩家｜今天截止报名，你还在等吗？', 
    name: '第十届阿里巴巴数据分析大赛',
    laucher: '中山大学东校区数据学院发展中心',
    startdate: '04-01',
    enddate: '06-30',
    address: '广州市 番禺区 大学城',
    way: '网上报名，网址：www.xxx.com',
    starttime: '03-11',
    finaltime: '04-22', 
    readers: '342', 
    add: '组队报名',
    more: '数据时代。。。', 
    image: 'img/1.jpg',
    poster: 'img/post.jpg'
  },
  {
    id: 2,
    link: '#/tab/dash/2', 
    title: '脱单节日｜520，TA！', 
    name: '脱单！',
    launcher: '中山大学爱情树脱单平台',
    startdate: '05-20',
    enddate: '05-20',
    address: '中山大学',
    way: '微信报名',
    starttime: '00：00',
    finaltime: '23：59', 
    readers: '532', 
    add: '脱单嘛',
    more: '脱单！ 单！ ！',
    image: 'img/2.jpg',
    poster: 'img/post.jpg'
  },
  {
    id: 3,
    link: '#/tab/dash/3', 
    title: '中东美食｜吃货的福利来啦！', 
    name: '',
    laucher: '贝岗新天地',
    startdate: '05-12',
    enddate: '05-15',
    address: '广州市 番禺区 大学城 贝岗村 新天地3楼',
    way: '预约或现场报名',
    starttime: '12：00',
    finaltime: '22：00', 
    readers: '1111',
    add: '凭预约信息可获取一份惊喜！',
    more: '吃吃喝喝吃吃喝喝吃吃喝喝吃吃喝喝',
    image: 'img/3.jpg',
    poster: 'img/post.jpg'
  },{
    id: 4,
    link: '#/tab/dash/4', 
    title: '职来职往｜勇往直前，你准备好了吗？', 
    name: '',
    laucher: '中山大学东校区职业发展协会',
    startdate: '04-05',
    enddate: '05-03',
    address: '中山大学',
    way: '宿舍楼下填表报名',
    starttime: '8：00',
    finaltime: '18:00', 
    readers: '644',
    add: '挑战自我，成就辉煌',
    more: '走向人生颠峰，开始', 
    image: 'img/4.jpg',
    poster: 'img/post.jpg'
  },{
    id: 5,
    link: '#/tab/dash/5', 
    title: '电影约吗｜侏罗纪公园来袭', 
    name: '一起来看恐龙',
    laucher: '中山大学东校区电影协会',
    startdate: '03-21',
    enddate: '03-21',
    address: '广州市 海珠区 车坡南 电影院',
    way: '需提前预约',
    starttime: '9：00',
    finaltime: '已截止', 
    readers: '223', 
    add: '看电影',
    more: '看电影',
    image: 'img/5.jpg',
    poster: 'img/post.jpg'
  }];

  return {
    all: function() {
      return dashs;
    },
    get: function(dashId) {
      for (var i = 0; i < dashs.length; i++) {
        if (dashs[i].id === parseInt(dashId)) {
          return dashs[i];
        }
      }
      return null;
    }
  };
})

.factory('Corporations', function(){
    var corporations = [{
        id: 0,
        name: "GBT",
        alias: "gbt",
        avatar: "img/1.jpg",
        profile: "中东广播台",
        introduction: "中大广播台是blablablbal...",
        review: "中大广播台历史悠久balbalbla...",
        recent: "中大广播台最近举行了balbalbla..."
    }, {
        id: 1,
        name: "团联",
        alias: "tuanlian",
        avatar: "img/2.jpg",
        profile: "爱国爱人民的团联"
    }, {
        id: 2,
        name: "Maxcell",
        alias: "maxcell",
        avatar: "img/3.jpg",
        profile: "听说可以帮忙修电脑的maxcell"
    },{
        id: 3,
        name: "中大青年",
        alias: "zhongdaqingnian",
        avatar: "img/2.jpg",
        profile: "中大有个好青年"
    },{
        id: 4,
        name: "中大中年",
        alias: "zhongdazhongnian",
        avatar: "img/4.jpg",
        profile: "中大有个好中年"
    },{
        id: 5,
        name: "中大老年",
        alias: "zhongdalaonian",
        avatar: "img/5.jpg",
        profile: "中大有个好老年"
    },{
        id: 6,
        name: "m大青年",
        alias: "mdaqingnian",
        avatar: "img/2.jpg",
        profile: "m大有个好青年"
    }];
    
    for(var i = 0; i < corporations.length; i++) {
        corporations[i].initial = corporations[i].alias.charAt(0).toUpperCase();
    }
    
    return {
        all:function() {
            return corporations;
        },
        get:function(CorporationId) {
            for(var i = 0; i < corporations.length; i++) {
                if (corporations[i].id == parseInt(CorporationId)) {
                    return corporations[i];
                }
            }
            return null;
        }
    };
});