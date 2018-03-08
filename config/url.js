const basePath = 'http://127.0.0.1:8360/api/';

module.exports = {
  IndexUrl: basePath + 'index/index', //首页数据接口
  CatalogList: basePath + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: basePath + 'catalog/current',  //分类目录当前分类数据接口

  AuthLoginByWeixin: basePath + 'auth/loginByWeixin', //微信登录

  GoodsCount: basePath + 'goods/count',  //统计商品总数
  GoodsList: basePath + 'goods/list',  //获得商品列表
  GoodsCategory: basePath + 'goods/category',  //获得分类数据
  GoodsDetail: basePath + 'goods/detail',  //获得商品的详情
  GoodsNew: basePath + 'goods/new',  //新品
  GoodsHot: basePath + 'goods/hot',  //热门
  GoodsRelated: basePath + 'goods/related',  //商品详情页的关联商品（大家都在看）

  BrandList: basePath + 'brand/list',  //品牌列表
  BrandDetail: basePath + 'brand/detail',  //品牌详情

  CartList: basePath + 'cart/index', //获取购物车的数据
  CartAdd: basePath + 'cart/add', // 添加商品到购物车
  CartUpdate: basePath + 'cart/update', // 更新购物车的商品
  CartDelete: basePath + 'cart/delete', // 删除购物车的商品
  CartChecked: basePath + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: basePath + 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: basePath + 'cart/checkout', // 下单前信息确认

  OrderSubmit: basePath + 'order/submit', // 提交订单
  PayPrepayId: basePath + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: basePath + 'collect/list',  //收藏列表
  CollectAddOrDelete: basePath + 'collect/addordelete',  //添加或取消收藏

  CommentList: basePath + 'comment/list',  //评论列表
  CommentCount: basePath + 'comment/count',  //评论总数
  CommentPost: basePath + 'comment/post',   //发表评论

  TopicList: basePath + 'topic/list',  //专题列表
  TopicDetail: basePath + 'topic/detail',  //专题详情
  TopicRelated: basePath + 'topic/related',  //相关专题

  SearchIndex: basePath + 'search/index',  //搜索页面数据
  SearchResult: basePath + 'search/result',  //搜索数据
  SearchHelper: basePath + 'search/helper',  //搜索帮助
  SearchClearHistory: basePath + 'search/clearhistory',  //搜索帮助

  AddressList: basePath + 'address/list',  //收货地址列表
  AddressDetail: basePath + 'address/detail',  //收货地址详情
  AddressSave: basePath + 'address/save',  //保存收货地址
  AddressDelete: basePath + 'address/delete',  //保存收货地址

  RegionList: basePath + 'region/list',  //获取区域列表

  OrderList: basePath + 'order/list',  //订单列表
  OrderDetail: basePath + 'order/detail',  //订单详情
  OrderCancel: basePath + 'order/cancel',  //取消订单
  OrderExpress: basePath + 'order/express', //物流详情

  FootprintList: basePath + 'footprint/list',  //足迹列表
  FootprintDelete: basePath + 'footprint/delete',  //删除足迹
};

