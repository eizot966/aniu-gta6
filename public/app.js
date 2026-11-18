// ============================================================================
// 《阿牛 GTA 6 · 罪恶都市全中文交互式地图、PS5 伴侣与 212GB 扩容中心》核心引擎
// ============================================================================

const VIP_CODE = "13947223459";
const GTA6_SIZE_GB = 212;

const MAP_PINS = [
  // 绝版超跑与载具 (7)
  { id: "v1", cat: "绝版载具", icon: "🏎️", color: "#ff2a85", x: 855, y: 245, region: "罪恶海滩·星光岛", title: "Pegassi Ignus Vice 霓虹限量超跑", desc: "凌晨 02:00-04:00 固定停放于星光岛北侧豪宅环形车道，自带防弹轮胎与二级氮气。", reward: "省下 $2,850,000 购车款" },
  { id: "v2", cat: "绝版载具", icon: "🏎️", color: "#ff2a85", x: 750, y: 315, region: "罪恶都市·市中心", title: "Grotti Cheetah Classic 经典赤红超跑", desc: "市中心摩天大楼顶层私人停机坪旁展厅，打碎落地窗可直接驾驶飞跃大楼。", reward: "致敬 1986 罪恶都市传奇名车" },
  { id: "v3", cat: "绝版载具", icon: "🚁", color: "#ff2a85", x: 560, y: 78, region: "卡拉加国家公园", title: "猎杀者隐形武装直升机 (Stealth Chopper)", desc: "卡拉加山北麓军方机密雷达站停机坪，穿戴安保制服或使用露西娅黑客终端瘫痪防空网后直接开走。", reward: "全地图最强空中重火力" },
  { id: "v4", cat: "绝版载具", icon: "🚤", color: "#ff2a85", x: 465, y: 475, region: "大沼泽湿地", title: "改装装甲气垫船 (Armored Airboat)", desc: "红树林深处走私客秘密船坞，配备双联装机枪，无视沼泽浅滩与鳄鱼袭击。", reward: "大沼泽全收集必备神具" },
  { id: "v5", cat: "绝版载具", icon: "🛩️", color: "#ff2a85", x: 375, y: 582, region: "雷奥奈达群岛礁", title: "海风号水陆两栖走私飞机", desc: "最南端珊瑚礁废弃灯塔后方海湾，可在海面随时起降。", reward: "跨岛劫案最佳逃逸工具" },
  { id: "v6", cat: "绝版载具", icon: "🏍️", color: "#ff2a85", x: 245, y: 280, region: "盖尔霍恩港", title: "长崎白鸟极速改装摩托 (Hakuchou Drag)", desc: "盖尔霍恩港地下直线加速赛冠军奖品车，完成 3 场午夜赌赛直接入库。", reward: "全图最高极速两轮载具" },

  // 重型武器与黄金枪械 (6)
  { id: "w1", cat: "重型武器", icon: "🔫", color: "#ffb800", x: 868, y: 355, region: "罪恶海滩·海景大道", title: "黄金定制沙漠之鹰 (.50 Gold Pistol)", desc: "Ocean View 酒店顶层套房保险箱内（密码：1986），开局即可无伤获取。", reward: "单发高爆伤害 + 豪华涂装" },
  { id: "w2", cat: "重型武器", icon: "🔫", color: "#ffb800", x: 225, y: 215, region: "盖尔霍恩港·旧货柜区", title: "重型反器材电磁狙击步枪", desc: "港口第 4 号蓝色起重机最高处走道武器箱，可穿透装甲运钞车防弹玻璃。", reward: "远程劫案破甲神器" },
  { id: "w3", cat: "重型武器", icon: "🔫", color: "#ffb800", x: 605, y: 210, region: "安布罗西亚·废弃糖厂", title: "六管火神加特林机枪 (Minigun)", desc: "废弃炼糖厂地下二层军火走私密室，用C4炸开生锈铁门即可拾取。", reward: "五星通缉清场重武器" },
  { id: "w4", cat: "重型武器", icon: "🔫", color: "#ffb800", x: 715, y: 365, region: "罪恶都市·小哈瓦那", title: "古巴辛迪加满配战术突击步枪", desc: "小哈瓦那雪茄工厂后院地下靶场桌面，自带消音器与热成像瞄具。", reward: "潜行劫案主力步枪" },
  { id: "w5", cat: "重型武器", icon: "🔫", color: "#ffb800", x: 380, y: 120, region: "卡拉加山脉·猎人木屋", title: "高爆复合猎弓 & 麻醉箭", desc: "深山传奇猎人木屋壁炉上方悬挂，悄无声息放倒巡逻守卫。", reward: "零警报潜入必备" },
  { id: "w6", cat: "重型武器", icon: "🔫", color: "#ffb800", x: 615, y: 552, region: "雷奥奈达群岛·沉船点", title: "军用多联装追踪火箭筒", desc: "群岛东侧二战护卫舰沉船货舱内（建议携带水肺潜水服前往）。", reward: "防空反装甲大杀器" },

  // 安全屋与核心资产 (6)
  { id: "s1", cat: "安全屋资产", icon: "🏠", color: "#00f0ff", x: 862, y: 310, region: "罪恶海滩", title: "海景霓虹顶层公寓 (Ocean Beach Penthouse)", desc: "包含 10 车位恒温车库、私人武器改装台与楼顶直升机坪。", reward: "主线第三章解锁核心据点" },
  { id: "s2", cat: "安全屋资产", icon: "🏠", color: "#00f0ff", x: 735, y: 260, region: "罪恶都市·夜生活区", title: "Jack of Hearts 传奇夜总会资产", desc: "收购后每日产生被动洗钱收益，地下室为大型劫案战术策划室。", reward: "每日被动收入 $45,000" },
  { id: "s3", cat: "安全屋资产", icon: "🏠", color: "#00f0ff", x: 265, y: 335, region: "盖尔霍恩港", title: "西海岸黑市拆车与改装工坊", desc: "杰森专属改装据点，抢来的高档豪车可在此直接洗白或高价拆解出售。", reward: "开荒期最快搞钱资产" },
  { id: "s4", cat: "安全屋资产", icon: "🏠", color: "#00f0ff", x: 500, y: 562, region: "雷奥奈达群岛礁", title: "珊瑚礁私人游艇码头与水上机库", desc: "可停靠大型游艇、快艇与水上飞机，支持直接发起海上走私航线。", reward: "解锁海上走私贸易线" },
  { id: "s5", cat: "安全屋资产", icon: "🏠", color: "#00f0ff", x: 355, y: 425, region: "大沼泽湿地西缘", title: "湿地隐秘避难安全屋", desc: "五星通缉下警方直升机无法锁定的隐蔽木屋，内含全套医疗包与弹药补给。", reward: "劫案撤离最佳藏身处" },
  { id: "s6", cat: "安全屋资产", icon: "🏠", color: "#00f0ff", x: 640, y: 125, region: "卡拉加山南麓", title: "山顶观星别墅安全屋", desc: "可俯瞰整个雷奥奈达湖与远方罪恶都市天际线，自带越野车库。", reward: "全图风景最美安全屋" },

  // 大型抢劫金库与沉船金箱 (6)
  { id: "h1", cat: "抢劫金库", icon: "💰", color: "#10b981", x: 765, y: 285, region: "罪恶都市·金融街", title: "雷奥奈达联邦储备金库 (Union Depository)", desc: "全游戏收益最高的主线/终局大劫案目标，推荐采用“地下盾构机+露西娅电网入侵”方案。", reward: "最高分红 $45,000,000" },
  { id: "h2", cat: "抢劫金库", icon: "💰", color: "#10b981", x: 485, y: 575, region: "雷奥奈达群岛外海", title: "西班牙古沉船黄金宝箱 #1", desc: "海底珊瑚礁裂缝中的18世纪沉船船长室，打开手提箱立即获得高额现金与金条。", reward: "立得现金 $150,000" },
  { id: "h3", cat: "抢劫金库", icon: "💰", color: "#10b981", x: 882, y: 275, region: "罪恶海滩·钻戒街", title: "Vangelico 顶级珠宝旗舰店", desc: "可随时发起的快闪抢劫目标：用催泪瓦斯投入通风口后 90 秒内洗劫全部展柜。", reward: "净赚 $850,000" },
  { id: "h4", cat: "抢劫金库", icon: "💰", color: "#10b981", x: 565, y: 235, region: "安布罗西亚公路", title: "集团重型装甲运钞车队必经点", desc: "每周五 14:00-18:00 固定经过跨湖大桥，用粘性炸弹炸开后门即可夺取不记名债券。", reward: "单次收益 $200,000" },
  { id: "h5", cat: "抢劫金库", icon: "💰", color: "#10b981", x: 205, y: 295, region: "盖尔霍恩港外海", title: "海底走私潜艇残骸金箱 #2", desc: "沉没的半潜式走私船舱内，内含整箱不记名钻石。", reward: "立得现金 $180,000" },
  { id: "h6", cat: "抢劫金库", icon: "💰", color: "#10b981", x: 745, y: 405, region: "罪恶都市南港", title: "豪华邮轮赌场金库劫案点", desc: "伪装成VIP赌客登船，配合杰森快艇接应完成零伤亡撤离。", reward: "净赚 $3,200,000" },

  // 神秘彩蛋与特殊收集品 (6)
  { id: "e1", cat: "神秘彩蛋", icon: "💎", color: "#a855f7", x: 848, y: 382, region: "罪恶海滩南端", title: "汤米·维赛迪夏威夷衬衫纪念彩蛋", desc: "复刻《罪恶都市》经典粉红棕榈树夏威夷套装，解锁后双主角衣柜永久可用。", reward: "解锁传奇怀旧服装" },
  { id: "e2", cat: "神秘彩蛋", icon: "💎", color: "#a855f7", x: 430, y: 488, region: "大沼泽迷雾区", title: "午夜外星 UFO 坠毁残骸点", desc: "仅在雷雨夜 00:00-03:00 发出蓝紫色脉冲光，扫描后可解锁外星能量手枪蓝图。", reward: "外星科技彩蛋成就" },
  { id: "e3", cat: "神秘彩蛋", icon: "💎", color: "#a855f7", x: 315, y: 85, region: "卡拉加山原始森林", title: "雷奥奈达大脚怪 (Skunk Ape) 神秘巢穴", desc: "开启杰森鹰眼追踪森林中的巨大脚印，拍照取证即可解锁隐藏银杯。", reward: "解锁【传说成真】奖杯" },
  { id: "e4", cat: "神秘彩蛋", icon: "💎", color: "#a855f7", x: 525, y: 265, region: "雷奥奈达湖中心", title: "湖底沉没的西部蒸汽火车头 (RDR2 联动彩蛋)", desc: "湖心最深处沉没着刻有 Cornwall 字样的古典蒸汽机车，内含一把左轮手枪。", reward: "解锁荒野大镖客联动左轮" },
  { id: "e5", cat: "神秘彩蛋", icon: "💎", color: "#a855f7", x: 690, y: 195, region: "罪恶都市北郊航空中心", title: "火箭背包 (Jetpack) 机密实验室", desc: "潜入航空航天中心第 7 号机库，通关主线后可直接穿戴单兵飞行背包升空。", reward: "单兵喷气飞行背包" },
  { id: "e6", cat: "神秘彩蛋", icon: "💎", color: "#a855f7", x: 340, y: 590, region: "雷奥奈达群岛最西端", title: "日落海平线黄金船锚雕像", desc: "全图最后一个绝景打卡点，双主角在此合影可触发隐藏对话与全收集礼花。", reward: "100% 探索纪念打卡" }
];

const PS5_MODELS = [
  { id: "fat", name: "PS5 初代光驱/数字版", usableGb: 667 },
  { id: "slim", name: "PS5 Slim 轻薄版 (1TB)", usableGb: 848 },
  { id: "pro", name: "PS5 Pro 旗舰版 (2TB)", usableGb: 1820 }
];

const POPULAR_PS5_GAMES = [
  { id: "cod", name: "使命召唤：黑色行动", gb: 165, defaultOn: true },
  { id: "nba", name: "NBA 2K26 / 2K27", gb: 155, defaultOn: true },
  { id: "wukong", name: "黑神话：悟空", gb: 105, defaultOn: true },
  { id: "rdr2", name: "荒野大镖客：救赎2", gb: 115, defaultOn: false },
  { id: "hoyoverse", name: "原神 / 崩铁 / 绝区零", gb: 110, defaultOn: false },
  { id: "mhwilds", name: "怪物猎人：荒野", gb: 100, defaultOn: false },
  { id: "spiderman2", name: "漫威蜘蛛侠 2", gb: 98, defaultOn: false },
  { id: "gow", name: "战神：诸神黄昏", gb: 90, defaultOn: false },
  { id: "eafc", name: "EA FC 26 / 27 足球", gb: 75, defaultOn: false },
  { id: "elden", name: "艾尔登法环 + 黄金树幽影", gb: 65, defaultOn: false }
];

const TRADE_IN_DISCS = [
  { id: "d1", name: "PS5《黑神话：悟空》铁盒/实体盘", val: 210 },
  { id: "d2", name: "PS5《艾尔登法环》实体光盘", val: 160 },
  { id: "d3", name: "PS5《怪物猎人：荒野》光盘", val: 190 },
  { id: "d4", name: "PS5《漫威蜘蛛侠2》实体光盘", val: 150 },
  { id: "d5", name: "PS5《战神：诸神黄昏》光盘", val: 130 },
  { id: "d6", name: "PS5《剑星 Stellar Blade》光盘", val: 180 },
  { id: "d7", name: "PS4/PS5《荒野大镖客2》光盘", val: 110 },
  { id: "d8", name: "PS4/PS5《GTA 5》老光盘", val: 85 }
];

const CHEATS_DATA = [
  { title: "🏎️ 刷新霓虹超跑 (Comet Vice)", desc: "在平坦道路上按顺序输入，立即在面前空投一辆定制跑车", keys: ["R1", "○", "R2", "→", "L1", "L2", "×", "×", "□", "R1"], phone: "1-999-289-9633" },
  { title: "🚓 降低通缉星级 (Lawyer Up)", desc: "立即消除当前 1~2 颗警星（主线强制通缉除外）", keys: ["R1", "R1", "○", "R2", "→", "←", "→", "←", "→", "←"], phone: "1-999-529-93787" },
  { title: "🛡️ 满血满防弹衣与载具修复 (Turtle)", desc: "瞬间恢复露西娅/杰森生命值与护甲，并修复当前驾驶载具", keys: ["○", "L1", "△", "R2", "×", "□", "○", "→", "□", "L1"], phone: "1-999-887-853" },
  { title: "🚁 刷新武装攻击直升机 (Buzzard)", desc: "需要前方有空旷路面或草坪，立即召唤带火箭巢的直升机", keys: ["○", "○", "L1", "○", "○", "○", "L1", "L2", "R1", "△"], phone: "1-999-289-9633" },
  { title: "⛈️ 切换雷奥奈达天气 (Make It Rain)", desc: "在烈日、迈阿密粉红晚霞、热带飓风与雷暴之间循环切换", keys: ["R2", "×", "L1", "L1", "L2", "L2", "L2", "□"], phone: "1-999-842-32489" },
  { title: "🎯 慢动作死眼瞄准 (Deadeye Aim)", desc: "开镜瞄准时减缓时间流速（可连按 3 次叠加慢放倍率）", keys: ["□", "L2", "R1", "△", "←", "□", "L2", "→", "×"], phone: "1-999-332-3393" },
  { title: "🪂 获得高空跳伞包 (Skyfall)", desc: "立即装备降落伞包，适合从罪恶都市金融塔顶极限跳伞", keys: ["←", "→", "L1", "L2", "R1", "R2", "R2", "←", "←", "→"], phone: "1-999-759-3483" },
  { title: "🚤 刷新大沼泽改装气垫船", desc: "在水岸或湿地旁输入，立即召唤水陆两栖高速气垫船", keys: ["R2", "L1", "○", "→", "L1", "R1", "→", "←", "○", "R2"], phone: "1-999-247-2628" }
];

const TROPHIES_DATA = [
  { id: "t1", grade: "🏆 白金奖杯", color: "#00f0ff", title: "雷奥奈达传奇 (Legend of Leonida)", desc: "解锁《Grand Theft Auto VI》全部其他奖杯，加冕罪恶都市之王。" },
  { id: "t2", grade: "🥇 金杯", color: "#ffb800", title: "阳光州大满贯 (100% Completion)", desc: "在雷奥奈达州达成 100% 游戏完成度（含主线、陌生人支线与核心收集）。" },
  { id: "t3", grade: "🥇 金杯", color: "#ffb800", title: "亡命鸳鸯终成眷属 (Trust Issues Resolved)", desc: "以双主角零背叛完美结局通关全部主线章节并全身而退。" },
  { id: "t4", grade: "🥈 银杯", color: "#cbd5e1", title: "联邦储备大劫案 (Breaking the Bank)", desc: "在不触发最高警报的情况下洗劫罪恶都市联邦储备金库。" },
  { id: "t5", grade: "🥈 银杯", color: "#cbd5e1", title: "跨海狂飙 (Keys to the City)", desc: "驾驶超跑在 4 分 30 秒内从卡拉加山顶一路狂飙抵达雷奥奈达群岛最南端。" },
  { id: "t6", grade: "🥈 银杯", color: "#cbd5e1", title: "沼泽霸主 (Apex Predator)", desc: "在大沼泽湿地成功捕获或击败传奇白化巨鳄。" },
  { id: "t7", grade: "🥈 银杯", color: "#cbd5e1", title: "夜店大亨 (Vice Nightlife Mogul)", desc: "收购罪恶都市全部 5 家核心夜总会与海滨资产。" },
  { id: "t8", grade: "🥉 铜杯", color: "#d97706", title: "重获自由 (Ankle Monitor Off)", desc: "完成序章并解除露西娅脚踝上的电子保释追踪器。" },
  { id: "t9", grade: "🥉 铜杯", color: "#d97706", title: "深海寻金客 (Sunken Treasure)", desc: "在雷奥奈达群岛海域打捞全部 15 个古沉船黄金宝箱。" },
  { id: "t10", grade: "🥉 铜杯", color: "#d97706", title: "传说成真 (Skunk Ape Sighting)", desc: "在卡拉加国家公园拍下神秘大脚怪的清晰照片。" }
];

const APP_STATE = {
  collectedPins: new Set(JSON.parse(localStorage.getItem("aniu_gta6_pins") || "[]")),
  unlockedTrophies: new Set(JSON.parse(localStorage.getItem("aniu_gta6_trophies") || "[]")),
  mapCategory: "all",
  selectedPinId: "v1",
  selectedModelId: "fat",
  selectedGames: new Set(["cod", "nba", "wukong"]),
  selectedTradeDiscs: new Set(["d1", "d2"])
};

function showToast(msg) {
  const el = document.getElementById("toastEl");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__gtaToast);
  window.__gtaToast = setTimeout(() => el.classList.remove("show"), 3200);
}

// 门禁与初始化
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const urlPwd = params.get("pwd");
  const saved = localStorage.getItem("aniu_book_vip_pass") || localStorage.getItem("aniu_gta6_vip");
  if (saved === VIP_CODE || urlPwd === VIP_CODE) {
    localStorage.setItem("aniu_gta6_vip", VIP_CODE);
    document.getElementById("gateOverlay")?.classList.add("unlocked");
  }

  renderMapAndSidebar();
  renderStoreCalculator();
  renderCheatsPanel();
  renderTrophiesPanel();
  updateTopMetrics();
});

function verifyVipPass(e) {
  if (e) e.preventDefault();
  const val = (document.getElementById("vipPassInput")?.value || "").trim();
  if (val === VIP_CODE) {
    localStorage.setItem("aniu_gta6_vip", VIP_CODE);
    localStorage.setItem("aniu_book_vip_pass", VIP_CODE);
    document.getElementById("gateOverlay")?.classList.add("unlocked");
    showToast("🔓 欢迎豹哥！GTA 6 雷奥奈达全中文战术指挥中心已全面激活");
  } else {
    document.getElementById("gateErr").textContent = "❌ 密码错误，请输入专属手机号或点击下方门店客人免密测容量";
  }
}

function enterStoreGuestMode() {
  document.getElementById("gateOverlay")?.classList.add("unlocked");
  switchTab("store");
  showToast("🛠️ 已进入阿牛门店 PS5 容量与老盘置换自检中心！");
}

function switchTab(tabName) {
  document.querySelectorAll(".module-tabs .tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `panel-${tabName}`);
  });
}

// ============================================================================
// 模块一：雷奥奈达交互地图渲染
// ============================================================================
function filterMapCategory(cat, btnEl) {
  APP_STATE.mapCategory = cat;
  document.querySelectorAll(".map-filter-bar .map-chip").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderMapAndSidebar();
}

function renderMapAndSidebar() {
  const layer = document.getElementById("mapPinsLayer");
  const listEl = document.getElementById("mapPinList");
  if (!layer || !listEl) return;

  const filtered = APP_STATE.mapCategory === "all"
    ? MAP_PINS
    : MAP_PINS.filter(p => p.cat === APP_STATE.mapCategory);

  layer.innerHTML = filtered.map(p => {
    const isDone = APP_STATE.collectedPins.has(p.id);
    const isSel = APP_STATE.selectedPinId === p.id;
    const r = isSel ? 15 : 11;
    return `
      <g class="map-pin ${isDone ? "collected" : ""}" onclick="selectPin('${p.id}')">
        <circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${isDone ? "#10b981" : p.color}" stroke="#ffffff" stroke-width="${isSel ? 3 : 1.5}" />
        <text x="${p.x}" y="${p.y + 5}" text-anchor="middle" font-size="12">${isDone ? "✓" : p.icon}</text>
      </g>
    `;
  }).join("");

  listEl.innerHTML = filtered.map(p => {
    const isDone = APP_STATE.collectedPins.has(p.id);
    return `
      <div class="pin-list-item ${isDone ? "done" : ""}" onclick="selectPin('${p.id}')">
        <div>
          <div style="font-size:0.84rem; font-weight:800;">${p.icon} ${p.title}</div>
          <div style="font-size:0.74rem; color:var(--text-muted);">${p.region} · ${p.reward}</div>
        </div>
        <button class="map-chip ${isDone ? "active" : ""}" onclick="event.stopPropagation(); togglePinCollected('${p.id}')">
          ${isDone ? "✅ 已收集" : "标记收集"}
        </button>
      </div>
    `;
  }).join("");

  renderSelectedPinCard();
}

function selectPin(pinId) {
  APP_STATE.selectedPinId = pinId;
  renderMapAndSidebar();
}

function renderSelectedPinCard() {
  const box = document.getElementById("selectedPinDetail");
  if (!box) return;
  const p = MAP_PINS.find(x => x.id === APP_STATE.selectedPinId) || MAP_PINS[0];
  const isDone = APP_STATE.collectedPins.has(p.id);

  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:0.75rem; color:var(--neon-cyan); font-weight:800;">📍 ${p.region} · 【${p.cat}】</span>
      <span style="font-size:0.75rem; color:var(--neon-gold); font-weight:800;">🎁 ${p.reward}</span>
    </div>
    <h3 style="margin:0.35rem 0; font-size:1.05rem;">${p.icon} ${p.title}</h3>
    <p style="font-size:0.83rem; color:var(--text-sub); margin-bottom:0.75rem;">${p.desc}</p>
    <button class="btn-neon" style="width:100%; padding:0.55rem;" onclick="togglePinCollected('${p.id}')">
      ${isDone ? "✅ 已标记为收集完成（点击取消）" : "🎯 标记为「我已收集 / 已拿取」"}
    </button>
  `;
}

function togglePinCollected(pinId) {
  if (APP_STATE.collectedPins.has(pinId)) {
    APP_STATE.collectedPins.delete(pinId);
  } else {
    APP_STATE.collectedPins.add(pinId);
    showToast("🎯 已记录收集进度！距离 100% 白金奖杯更近一步");
  }
  localStorage.setItem("aniu_gta6_pins", JSON.stringify(Array.from(APP_STATE.collectedPins)));
  renderMapAndSidebar();
  updateTopMetrics();
}

function resetCollectedPins() {
  APP_STATE.collectedPins.clear();
  localStorage.setItem("aniu_gta6_pins", "[]");
  renderMapAndSidebar();
  updateTopMetrics();
  showToast("已重置地图收集进度");
}

// ============================================================================
// 模块二：阿牛门店 PS5 212GB 容量与置换计算器
// ============================================================================
function renderStoreCalculator() {
  const modelWrap = document.getElementById("ps5ModelOptions");
  const gamesWrap = document.getElementById("installedGamesGrid");
  const tradeWrap = document.getElementById("tradeInDiscsGrid");
  if (!modelWrap || !gamesWrap || !tradeWrap) return;

  modelWrap.innerHTML = PS5_MODELS.map(m => `
    <div class="check-card ${APP_STATE.selectedModelId === m.id ? "selected" : ""}" onclick="selectPs5Model('${m.id}')">
      <span>🎮 ${m.name}</span>
      <span style="color:var(--neon-cyan);">${m.usableGb}G</span>
    </div>
  `).join("");

  gamesWrap.innerHTML = POPULAR_PS5_GAMES.map(g => `
    <div class="check-card ${APP_STATE.selectedGames.has(g.id) ? "selected" : ""}" onclick="toggleInstalledGame('${g.id}')">
      <span>${APP_STATE.selectedGames.has(g.id) ? "☑️" : "⬜"} ${g.name}</span>
      <span style="color:var(--text-muted);">${g.gb}G</span>
    </div>
  `).join("");

  tradeWrap.innerHTML = TRADE_IN_DISCS.map(d => `
    <div class="check-card ${APP_STATE.selectedTradeDiscs.has(d.id) ? "selected" : ""}" onclick="toggleTradeDisc('${d.id}')">
      <span>${APP_STATE.selectedTradeDiscs.has(d.id) ? "💿" : "⬜"} ${d.name}</span>
      <span style="color:var(--neon-emerald);">抵¥${d.val}</span>
    </div>
  `).join("");

  updateStorageMetrics();
}

function selectPs5Model(id) {
  APP_STATE.selectedModelId = id;
  renderStoreCalculator();
}

function toggleInstalledGame(id) {
  if (APP_STATE.selectedGames.has(id)) APP_STATE.selectedGames.delete(id);
  else APP_STATE.selectedGames.add(id);
  renderStoreCalculator();
}

function toggleTradeDisc(id) {
  if (APP_STATE.selectedTradeDiscs.has(id)) APP_STATE.selectedTradeDiscs.delete(id);
  else APP_STATE.selectedTradeDiscs.add(id);
  renderStoreCalculator();
}

function updateStorageMetrics() {
  const model = PS5_MODELS.find(m => m.id === APP_STATE.selectedModelId) || PS5_MODELS[0];
  let existingGb = 0;
  POPULAR_PS5_GAMES.forEach(g => {
    if (APP_STATE.selectedGames.has(g.id)) existingGb += g.gb;
  });

  const totalNeeded = existingGb + GTA6_SIZE_GB;
  const pct = Math.min(100, Math.round((totalNeeded / model.usableGb) * 100));
  const diff = totalNeeded - model.usableGb;

  const titleEl = document.getElementById("storageStatusTitle");
  const numEl = document.getElementById("storageNumbersText");
  const fillEl = document.getElementById("storageMeterFill");
  const adviceEl = document.getElementById("storageAdviceText");

  numEl.textContent = `需 ${totalNeeded} GB / 机身可用 ${model.usableGb} GB`;
  fillEl.style.width = `${pct}%`;

  if (diff > 0) {
    fillEl.classList.add("danger");
    titleEl.innerHTML = `<span style="color:#ff2a85;">🚨 空间严重告急！还差 ${diff} GB 才能装下《GTA 6》！</span>`;
    adviceEl.innerHTML = `您的 <strong>${model.name}</strong> 当前常驻游戏已占 ${existingGb}GB，加上《GTA 6》首发 <strong>212GB</strong> 共需 <strong>${totalNeeded}GB</strong>，原装硬盘已彻底爆满！强烈建议直接到阿牛门店加装 <strong>2TB PCIe 4.0 高速固态硬盘</strong>，免删老游戏满速畅玩！`;
  } else {
    fillEl.classList.remove("danger");
    titleEl.innerHTML = `<span style="color:#10b981;">✅ 当前空间可装下 GTA 6（剩余 ${Math.abs(diff)} GB 缓冲空间）</span>`;
    adviceEl.innerHTML = `安装《GTA 6》(212GB) 后您的机身仅剩 <strong>${Math.abs(diff)}GB</strong>。建议顺手做一次 <strong>PS5 深度清灰液金保养</strong>，防止罪恶都市光追高负载引发风扇狂转过热。`;
  }

  let tradeSum = 0;
  TRADE_IN_DISCS.forEach(d => {
    if (APP_STATE.selectedTradeDiscs.has(d.id)) tradeSum += d.val;
  });
  document.getElementById("tradeInSummaryTitle").textContent =
    `💿 老盘折价置换《GTA 6》首发盘估算：已选 ${APP_STATE.selectedTradeDiscs.size} 张老盘，预计可抵扣 ¥${tradeSum}！`;
}

function copyStoreOrderPlan() {
  const model = PS5_MODELS.find(m => m.id === APP_STATE.selectedModelId) || PS5_MODELS[0];
  const discs = TRADE_IN_DISCS.filter(d => APP_STATE.selectedTradeDiscs.has(d.id)).map(d => d.name);
  let tradeSum = 0;
  TRADE_IN_DISCS.forEach(d => {
    if (APP_STATE.selectedTradeDiscs.has(d.id)) tradeSum += d.val;
  });

  const text = `【阿牛店长 · PS5 备战 GTA6 升级与置换预约单】\n🎮 我的机型：${model.name}\n💾 升级需求：咨询 GTA6 (212GB) M.2 固态硬盘扩容 + 深度清灰保养\n💿 拟折价置换老盘（共 ${discs.length} 张，预估抵扣 ¥${tradeSum}）：${discs.join("、") || "暂无"}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  showToast("✅ 已复制您的专属扩容与置换方案！可直接粘贴发给阿牛店长");
}

// ============================================================================
// 模块三 & 四：PS5 秘籍电话 & 白金奖杯追踪
// ============================================================================
function renderCheatsPanel() {
  const grid = document.getElementById("cheatsGrid");
  if (!grid) return;
  grid.innerHTML = CHEATS_DATA.map(c => `
    <div class="cheat-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h4 style="color:var(--neon-pink); font-size:0.96rem;">${c.title}</h4>
        <span class="map-chip" onclick="copyText('${c.phone}', '已复制游戏内电话号码 ${c.phone}')">📱 ${c.phone}</span>
      </div>
      <p style="font-size:0.8rem; color:var(--text-sub); margin-top:0.3rem;">${c.desc}</p>
      <div class="ps-btn-row">
        ${c.keys.map(k => `<span class="ps-key">${k}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderTrophiesPanel() {
  const grid = document.getElementById("trophiesGrid");
  if (!grid) return;
  grid.innerHTML = TROPHIES_DATA.map(t => {
    const done = APP_STATE.unlockedTrophies.has(t.id);
    return `
      <div class="cheat-card" style="border-color:${done ? "#10b981" : "rgba(255,42,133,0.22)"}; opacity:${done ? "0.7" : "1"};">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.76rem; font-weight:800; color:${t.color};">${t.grade}</span>
          <button class="map-chip ${done ? "active" : ""}" onclick="toggleTrophy('${t.id}')">
            ${done ? "✅ 已解锁" : "标记解锁"}
          </button>
        </div>
        <h4 style="margin:0.35rem 0; font-size:0.96rem;">${t.title}</h4>
        <p style="font-size:0.8rem; color:var(--text-sub);">${t.desc}</p>
      </div>
    `;
  }).join("");
}

function toggleTrophy(id) {
  if (APP_STATE.unlockedTrophies.has(id)) APP_STATE.unlockedTrophies.delete(id);
  else {
    APP_STATE.unlockedTrophies.add(id);
    showToast("🏆 恭喜解锁奖杯！");
  }
  localStorage.setItem("aniu_gta6_trophies", JSON.stringify(Array.from(APP_STATE.unlockedTrophies)));
  renderTrophiesPanel();
  updateTopMetrics();
}

function updateTopMetrics() {
  const m1 = document.getElementById("metricCollected");
  const m2 = document.getElementById("metricTrophies");
  if (m1) m1.textContent = `${APP_STATE.collectedPins.size} / ${MAP_PINS.length}`;
  if (m2) m2.textContent = `${APP_STATE.unlockedTrophies.size} / ${TROPHIES_DATA.length}`;
}

function copyText(txt, toastMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).catch(() => {});
  }
  showToast(toastMsg || "已复制");
}
