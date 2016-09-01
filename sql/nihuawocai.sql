SET NAMES utf8;

DROP DATABASE IF EXISTS nhwc;
CREATE DATABASE nhwc CHARSET=UTF8;
USE nhwc;


CREATE TABLE paints(
	paint varchar(100000)
);


CREATE TABLE words(
	wid  INT PRIMARY KEY AUTO_INCREMENT,
	word  VARCHAR(16),
	wlength INT 
);

/**词库-动作**/
INSERT INTO words VALUES(null,"拔河",2);
INSERT INTO words VALUES(null,"求婚",2);
INSERT INTO words VALUES(null,"遛狗",2);
INSERT INTO words VALUES(null,"拍马屁",3);
INSERT INTO words VALUES(null,"劈叉",2);
INSERT INTO words VALUES(null,"跳伞",2);
/**词库-人物**/
INSERT INTO words VALUES(null,"马云",2);
INSERT INTO words VALUES(null,"李宁",2);
INSERT INTO words VALUES(null,"牛顿",2);
INSERT INTO words VALUES(null,"马化腾",2);
INSERT INTO words VALUES(null,"毛泽东",3);
INSERT INTO words VALUES(null,"孙悟空",3);
INSERT INTO words VALUES(null,"希特勒",3);
INSERT INTO words VALUES(null,"葫芦娃",3);
INSERT INTO words VALUES(null,"达尔文",3);
INSERT INTO words VALUES(null,"奶茶妹妹",3);
/**词库-食物**/
INSERT INTO words VALUES(null,"排骨",2);
INSERT INTO words VALUES(null,"小米",2);
INSERT INTO words VALUES(null,"玉米",2);
INSERT INTO words VALUES(null,"毛豆",2);
INSERT INTO words VALUES(null,"黄瓜",2);
INSERT INTO words VALUES(null,"饼干",2);
INSERT INTO words VALUES(null,"薯片",2);
INSERT INTO words VALUES(null,"爆米花",3);
INSERT INTO words VALUES(null,"汉堡包",3);
INSERT INTO words VALUES(null,"生日蛋糕",4);
/**词库-日常用品**/
INSERT INTO words VALUES(null,"菜刀",2);
INSERT INTO words VALUES(null,"床单",2);
INSERT INTO words VALUES(null,"马桶",2);
INSERT INTO words VALUES(null,"墨镜",2);
INSERT INTO words VALUES(null,"面膜",2);
INSERT INTO words VALUES(null,"显示器",3);
INSERT INTO words VALUES(null,"指南针",3);
INSERT INTO words VALUES(null,"摄像头",3);
INSERT INTO words VALUES(null,"沐浴露",3);
/**词库-体育**/
INSERT INTO words VALUES(null,"拔河",2);
INSERT INTO words VALUES(null,"滑雪");
INSERT INTO words VALUES(null,"冰球");
INSERT INTO words VALUES(null,"呼啦圈");
INSERT INTO words VALUES(null,"游泳圈");
INSERT INTO words VALUES(null,"保龄球");
INSERT INTO words VALUES(null,"橄榄球");
INSERT INTO words VALUES(null,"高尔夫球");
INSERT INTO words VALUES(null,"水上排球");
INSERT INTO words VALUES(null,"沙滩排球");
/**词库-校园生活**/
INSERT INTO words VALUES(null,"饭卡",2);
INSERT INTO words VALUES(null,"餐盘",2);
INSERT INTO words VALUES(null,"公式",2);
INSERT INTO words VALUES(null,"作弊",2);
INSERT INTO words VALUES(null,"点名",2);
INSERT INTO words VALUES(null,"迟到",2);
INSERT INTO words VALUES(null,"同桌",2);
INSERT INTO words VALUES(null,"毕业证",3);
INSERT INTO words VALUES(null,"班主任",3);
INSERT INTO words VALUES(null,"运动会",3);
INSERT INTO words VALUES(null,"圆周率",3);
INSERT INTO words VALUES(null,"升国旗",3);
INSERT INTO words VALUES(null,"三年高考五年模拟",8);
/**词库-成语**/
INSERT INTO words VALUES(null,"目瞪口呆",4);
INSERT INTO words VALUES(null,"破涕为笑",4);
INSERT INTO words VALUES(null,"虎头蛇尾",4);
INSERT INTO words VALUES(null,"大手大脚",4);
INSERT INTO words VALUES(null,"七上八下",4);
INSERT INTO words VALUES(null,"一针见血",4);
INSERT INTO words VALUES(null,"狗急跳墙",4);
INSERT INTO words VALUES(null,"打草惊蛇",4);
INSERT INTO words VALUES(null,"三长两短",4);
INSERT INTO words VALUES(null,"三心二意",4);
INSERT INTO words VALUES(null,"九牛一毛",4);
INSERT INTO words VALUES(null,"放虎归山",4);
INSERT INTO words VALUES(null,"画龙点睛",4);
INSERT INTO words VALUES(null,"画蛇添足",4);
INSERT INTO words VALUES(null,"鸡飞狗跳",4);
INSERT INTO words VALUES(null,"掌上明珠",4);
INSERT INTO words VALUES(null,"万箭穿心",4);
INSERT INTO words VALUES(null,"卧薪尝胆",4);
INSERT INTO words VALUES(null,"千钧一发",4);
INSERT INTO words VALUES(null,"一丝不挂",4);
INSERT INTO words VALUES(null,"天马行空",4);
INSERT INTO words VALUES(null,"狐假虎威",4);
INSERT INTO words VALUES(null,"草船借箭",4);
INSERT INTO words VALUES(null,"飞蛾扑火",4);
INSERT INTO words VALUES(null,"盲人摸象",4);
INSERT INTO words VALUES(null,"枪林弹雨",4);
INSERT INTO words VALUES(null,"人山人海",4);
INSERT INTO words VALUES(null,"坐山观虎斗");
INSERT INTO words VALUES(null,"生米煮成熟饭");
INSERT INTO words VALUES(null,"驴唇不对马嘴");
INSERT INTO words VALUES(null,"挂羊头卖狗肉");
INSERT INTO words VALUES(null,"三天打鱼两天晒网",8);
