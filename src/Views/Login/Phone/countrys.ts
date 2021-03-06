const countries = [
  { isHot: true, code: '+86', name: '中国', abbr: 'CN' },
  { isHot: true, code: '+1', name: '美国', abbr: 'US' },
  { isHot: true, code: '+81', name: '日本', abbr: 'JP' },
  { isHot: true, code: '+852', name: '中国香港', abbr: 'HK' },
  { isHot: true, code: '+886', name: '中国台湾', abbr: 'TW' },
  { isHot: true, code: '+60', name: '马来西亚', abbr: 'MY' },
  { isHot: true, code: '+61', name: '澳大利亚', abbr: 'AU' },
  { isHot: true, code: '+1', name: '加拿大', abbr: 'CA' },
  { isHot: true, code: '+44', name: '英国', abbr: 'GB' },
  { isHot: true, code: '+65', name: '新加坡', abbr: 'SG' },
  { isHot: true, code: '+49', name: '德国', abbr: 'DE' },
  { isHot: false, code: '+7', name: '俄罗斯', abbr: 'RU' },
  { isHot: false, code: '+20', name: '埃及', abbr: 'EG' },
  { isHot: false, code: '+27', name: '南非', abbr: 'ZA' },
  { isHot: false, code: '+30', name: '希腊', abbr: 'GR' },
  { isHot: false, code: '+31', name: '荷兰', abbr: 'NL' },
  { isHot: false, code: '+32', name: '比利时', abbr: 'BE' },
  { isHot: false, code: '+33', name: '法国', abbr: 'FR' },
  { isHot: false, code: '+34', name: '西班牙', abbr: 'ES' },
  { isHot: false, code: '+36', name: '匈牙利', abbr: 'HU' },
  { isHot: false, code: '+39', name: '意大利', abbr: 'IT' },
  { isHot: false, code: '+40', name: '罗马尼亚', abbr: 'RO' },
  { isHot: false, code: '+41', name: '瑞士', abbr: 'CH' },
  { isHot: false, code: '+43', name: '奥地利', abbr: 'AT' },
  { isHot: false, code: '+45', name: '丹麦', abbr: 'DK' },
  { isHot: false, code: '+46', name: '瑞典', abbr: 'SE' },
  { isHot: false, code: '+47', name: '挪威', abbr: 'NO' },
  { isHot: false, code: '+48', name: '波兰', abbr: 'PL' },
  { isHot: false, code: '+51', name: '秘鲁', abbr: 'PE' },
  { isHot: false, code: '+52', name: '墨西哥', abbr: 'MX' },
  { isHot: false, code: '+53', name: '古巴', abbr: 'CU' },
  { isHot: false, code: '+54', name: '阿根廷', abbr: 'AR' },
  { isHot: false, code: '+55', name: '巴西', abbr: 'BR' },
  { isHot: false, code: '+56', name: '智利', abbr: 'CL' },
  { isHot: false, code: '+57', name: '哥伦比亚', abbr: 'CO' },
  { isHot: false, code: '+58', name: '委内瑞拉', abbr: 'VE' },
  { isHot: false, code: '+62', name: '印度尼西亚', abbr: 'ID' },
  { isHot: false, code: '+63', name: '菲律宾', abbr: 'PH' },
  { isHot: false, code: '+64', name: '新西兰', abbr: 'NZ' },
  { isHot: false, code: '+66', name: '泰国', abbr: 'TH' },
  { isHot: false, code: '+7', name: '哈萨克斯坦', abbr: 'KZ' },
  { isHot: false, code: '+82', name: '韩国', abbr: 'KR' },
  { isHot: false, code: '+84', name: '越南', abbr: 'VN' },
  { isHot: false, code: '+90', name: '土耳其', abbr: 'TR' },
  { isHot: false, code: '+91', name: '印度', abbr: 'IN' },
  { isHot: false, code: '+92', name: '巴基斯坦', abbr: 'PK' },
  { isHot: false, code: '+93', name: '阿富汗', abbr: 'AF' },
  { isHot: false, code: '+94', name: '斯里兰卡', abbr: 'LK' },
  { isHot: false, code: '+95', name: '缅甸', abbr: 'MM' },
  { isHot: false, code: '+98', name: '伊朗', abbr: 'IR' },
  { isHot: false, code: '+212', name: '摩洛哥', abbr: 'MA' },
  { isHot: false, code: '+213', name: '阿尔及利亚', abbr: 'DZ' },
  { isHot: false, code: '+216', name: '突尼斯', abbr: 'TN' },
  { isHot: false, code: '+218', name: '利比亚', abbr: 'LY' },
  { isHot: false, code: '+220', name: '冈比亚', abbr: 'GM' },
  { isHot: false, code: '+221', name: '塞内加尔', abbr: 'SN' },
  { isHot: false, code: '+223', name: '马里', abbr: 'ML' },
  { isHot: false, code: '+224', name: '几内亚', abbr: 'GN' },
  { isHot: false, code: '+225', name: '科特迪瓦', abbr: 'CI' },
  { isHot: false, code: '+226', name: '布基纳法索', abbr: 'BF' },
  { isHot: false, code: '+227', name: '尼日尔', abbr: 'NE' },
  { isHot: false, code: '+228', name: '多哥', abbr: 'TG' },
  { isHot: false, code: '+229', name: '贝宁', abbr: 'BJ' },
  { isHot: false, code: '+230', name: '毛里求斯', abbr: 'MU' },
  { isHot: false, code: '+231', name: '利比里亚', abbr: 'LR' },
  { isHot: false, code: '+232', name: '塞拉利昂', abbr: 'SL' },
  { isHot: false, code: '+233', name: '加纳', abbr: 'GH' },
  { isHot: false, code: '+234', name: '尼日利亚', abbr: 'NG' },
  { isHot: false, code: '+235', name: '乍得', abbr: 'TD' },
  { isHot: false, code: '+236', name: '中非共和国', abbr: 'CF' },
  { isHot: false, code: '+237', name: '喀麦隆', abbr: 'CM' },
  { isHot: false, code: '+239', name: '圣多美和普林西比', abbr: 'ST' },
  { isHot: false, code: '+241', name: '加蓬', abbr: 'GA' },
  { isHot: false, code: '+243', name: '刚果民主共和国', abbr: 'CD' },
  { isHot: false, code: '+244', name: '安哥拉', abbr: 'AO' },
  { isHot: false, code: '+247', name: '阿森松岛', abbr: 'AC' },
  { isHot: false, code: '+248', name: '塞舌尔', abbr: 'SC' },
  { isHot: false, code: '+249', name: '苏丹', abbr: 'SD' },
  { isHot: false, code: '+251', name: '埃塞俄比亚', abbr: 'ET' },
  { isHot: false, code: '+252', name: '索马里', abbr: 'SO' },
  { isHot: false, code: '+253', name: '吉布提', abbr: 'DJ' },
  { isHot: false, code: '+254', name: '肯尼亚', abbr: 'KE' },
  { isHot: false, code: '+255', name: '坦桑尼亚', abbr: 'TZ' },
  { isHot: false, code: '+256', name: '乌干达', abbr: 'UG' },
  { isHot: false, code: '+257', name: '布隆迪', abbr: 'BI' },
  { isHot: false, code: '+258', name: '莫桑比克', abbr: 'MZ' },
  { isHot: false, code: '+260', name: '赞比亚', abbr: 'ZM' },
  { isHot: false, code: '+261', name: '马达加斯加', abbr: 'MG' },
  { isHot: false, code: '+263', name: '津巴布韦', abbr: 'ZW' },
  { isHot: false, code: '+264', name: '纳米比亚', abbr: 'NA' },
  { isHot: false, code: '+265', name: '马拉维', abbr: 'MW' },
  { isHot: false, code: '+266', name: '莱索托', abbr: 'LS' },
  { isHot: false, code: '+267', name: '博茨瓦纳', abbr: 'BW' },
  { isHot: false, code: '+268', name: '斯威士兰', abbr: 'SZ' },
  { isHot: false, code: '+350', name: '直布罗陀', abbr: 'GI' },
  { isHot: false, code: '+351', name: '葡萄牙', abbr: 'PT' },
  { isHot: false, code: '+352', name: '卢森堡', abbr: 'LU' },
  { isHot: false, code: '+353', name: '爱尔兰', abbr: 'IE' },
  { isHot: false, code: '+354', name: '冰岛', abbr: 'IS' },
  { isHot: false, code: '+355', name: '阿尔巴尼亚', abbr: 'AL' },
  { isHot: false, code: '+356', name: '马耳他', abbr: 'MT' },
  { isHot: false, code: '+357', name: '塞浦路斯', abbr: 'CY' },
  { isHot: false, code: '+358', name: '芬兰', abbr: 'FI' },
  { isHot: false, code: '+359', name: '保加利亚', abbr: 'BG' },
  { isHot: false, code: '+370', name: '立陶宛', abbr: 'LT' },
  { isHot: false, code: '+371', name: '拉脱维亚', abbr: 'LV' },
  { isHot: false, code: '+372', name: '爱沙尼亚', abbr: 'EE' },
  { isHot: false, code: '+373', name: '摩尔多瓦', abbr: 'MD' },
  { isHot: false, code: '+374', name: '亚美尼亚', abbr: 'AM' },
  { isHot: false, code: '+375', name: '白俄罗斯', abbr: 'BY' },
  { isHot: false, code: '+376', name: '安道尔共和国', abbr: 'AD' },
  { isHot: false, code: '+377', name: '摩纳哥', abbr: 'MC' },
  { isHot: false, code: '+378', name: '圣马力诺', abbr: 'SM' },
  { isHot: false, code: '+380', name: '乌克兰', abbr: 'UA' },
  { isHot: false, code: '+386', name: '斯洛文尼亚', abbr: 'SI' },
  { isHot: false, code: '+420', name: '捷克', abbr: 'CZ' },
  { isHot: false, code: '+421', name: '斯洛伐克', abbr: 'SK' },
  { isHot: false, code: '+423', name: '列支敦士登', abbr: 'LI' },
  { isHot: false, code: '+501', name: '伯利兹', abbr: 'BZ' },
  { isHot: false, code: '+502', name: '瓜地马拉', abbr: 'GT' },
  { isHot: false, code: '+503', name: '萨尔瓦多', abbr: 'SV' },
  { isHot: false, code: '+504', name: '洪都拉斯', abbr: 'HN' },
  { isHot: false, code: '+505', name: '尼加拉瓜', abbr: 'NI' },
  { isHot: false, code: '+506', name: '哥斯达黎加', abbr: 'CR' },
  { isHot: false, code: '+507', name: '巴拿马', abbr: 'PA' },
  { isHot: false, code: '+509', name: '海地', abbr: 'HT' },
  { isHot: false, code: '+591', name: '玻利维亚', abbr: 'BO' },
  { isHot: false, code: '+592', name: '圭亚那', abbr: 'GY' },
  { isHot: false, code: '+593', name: '厄瓜多尔', abbr: 'EC' },
  { isHot: false, code: '+594', name: '法属圭亚那', abbr: 'GF' },
  { isHot: false, code: '+595', name: '巴拉圭', abbr: 'PY' },
  { isHot: false, code: '+596', name: '马提尼克', abbr: 'MQ' },
  { isHot: false, code: '+597', name: '苏里南', abbr: 'SR' },
  { isHot: false, code: '+598', name: '乌拉圭', abbr: 'UY' },
  { isHot: false, code: '+673', name: '文莱', abbr: 'BN' },
  { isHot: false, code: '+675', name: '巴布亚新几内亚', abbr: 'PG' },
  { isHot: false, code: '+676', name: '汤加', abbr: 'TO' },
  { isHot: false, code: '+677', name: '所罗门群岛', abbr: 'SB' },
  { isHot: false, code: '+679', name: '斐济', abbr: 'FJ' },
  { isHot: false, code: '+682', name: '库克群岛', abbr: 'CK' },
  { isHot: false, code: '+689', name: '法属波利尼西亚', abbr: 'PF' },
  { isHot: false, code: '+853', name: '中国澳门', abbr: 'MO' },
  { isHot: false, code: '+855', name: '柬埔寨', abbr: 'KH' },
  { isHot: false, code: '+856', name: '老挝', abbr: 'LA' },
  { isHot: false, code: '+880', name: '孟加拉国', abbr: 'BD' },
  { isHot: false, code: '+960', name: '马尔代夫', abbr: 'MV' },
  { isHot: false, code: '+961', name: '黎巴嫩', abbr: 'LB' },
  { isHot: false, code: '+962', name: '约旦', abbr: 'JO' },
  { isHot: false, code: '+963', name: '叙利亚', abbr: 'SY' },
  { isHot: false, code: '+964', name: '伊拉克', abbr: 'IQ' },
  { isHot: false, code: '+965', name: '科威特', abbr: 'KW' },
  { isHot: false, code: '+966', name: '沙特阿拉伯', abbr: 'SA' },
  { isHot: false, code: '+967', name: '也门', abbr: 'YE' },
  { isHot: false, code: '+968', name: '阿曼', abbr: 'OM' },
  { isHot: false, code: '+971', name: '阿拉伯联合酋长国', abbr: 'AE' },
  { isHot: false, code: '+972', name: '以色列', abbr: 'IL' },
  { isHot: false, code: '+973', name: '巴林', abbr: 'BH' },
  { isHot: false, code: '+974', name: '卡塔尔', abbr: 'QA' },
  { isHot: false, code: '+976', name: '蒙古', abbr: 'MN' },
  { isHot: false, code: '+977', name: '尼泊尔', abbr: 'NP' },
  { isHot: false, code: '+992', name: '塔吉克斯坦', abbr: 'TJ' },
  { isHot: false, code: '+993', name: '土库曼斯坦', abbr: 'TM' },
  { isHot: false, code: '+994', name: '阿塞拜疆', abbr: 'AZ' },
  { isHot: false, code: '+995', name: '格鲁吉亚', abbr: 'GE' },
  { isHot: false, code: '+996', name: '吉尔吉斯斯坦', abbr: 'KG' },
  { isHot: false, code: '+998', name: '乌兹别克斯坦', abbr: 'UZ' },
  { isHot: false, code: '+1242', name: '巴哈马', abbr: 'BS' },
  { isHot: false, code: '+1246', name: '巴巴多斯', abbr: 'BB' },
  { isHot: false, code: '+1264', name: '安圭拉岛', abbr: 'AI' },
  { isHot: false, code: '+1268', name: '安提瓜和巴布达', abbr: 'AG' },
  { isHot: false, code: '+1345', name: '开曼群岛', abbr: 'KY' },
  { isHot: false, code: '+1441', name: '百慕大群岛', abbr: 'BM' },
  { isHot: false, code: '+1473', name: '格林纳达', abbr: 'GD' },
  { isHot: false, code: '+1664', name: '蒙特塞拉特岛', abbr: 'MS' },
  { isHot: false, code: '+1671', name: '关岛', abbr: 'GU' },
  { isHot: false, code: '+1758', name: '圣露西亚', abbr: 'LC' },
  { isHot: false, code: '+1787', name: '波多黎各', abbr: 'PR' },
  { isHot: false, code: '+1809', name: '多明尼加共和国', abbr: 'DO' },
  { isHot: false, code: '+1868', name: '特立尼达和多巴哥', abbr: 'TT' },
  { isHot: false, code: '+1876', name: '牙买加', abbr: 'JM' },
  { isHot: false, code: '+381', name: '塞尔维亚共和国', abbr: 'RS' },
  { isHot: false, code: '+222', name: '毛里塔尼亚', abbr: 'MR' },
]

export default countries
