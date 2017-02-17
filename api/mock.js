module.exports = {
    //登陆
    "/User/Login/UserLoginPwd": {
        code: 0,
        msg: "登陆成功"
    },

    //注册
    "/User/Register/UserReginstre": {
        code: 0,
        msg: "注册成功"
    },

    //忘记密码
    "/User/UserCore/UserPwdBack": {
        code: 0,

    },

    //修改密码
    "/User/UserCore/UserPwdUpdate": {
        code: 0,
        msg: "修改密码成功"
    },

    //签到
    "/User/UserCore/UserSign": {
        code: 0,
        data: {
            year: 2016,
            month: 10,
            day: 8,
            signtime: [0,1,2,5]
        }
    },

    //获取购物车数量
    "/User/UserCore/ShopCatContentAggregate": {
      code: 0,
      content: 2
    },

    //个人中心
    "/User/UserCore/UserBasic": {
        code: 0,
        msg: "获取信息成功",
        data: {
            avatar: "/static/images/avatar.jpg",
            name: "aswsx",
            getpoints: 1,
            isvip: 1,
            islicense: 1,
            iphone: "13692425302",
            getpoints: 1,
            getlevel: "3",
            isvip: 1,
            viplevel: 1,
            score: 233,
            historyscore: "350",
            criticalvalue: "500",
            istoplever: 0,
            myorderrecord: 2,
            reserveorderrecord: 3,
            msgcount: 4,
            isstaff: {
                status: 1,
                isacceptopen: 1,
                goodsauthority: 1,
                authority: 1
            }
        }
    },

    //我的积分
    "/User/UserCore/UserInfoListConsume": {
        code: 0,
        msg: "获取信息记录成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            addtime: "2015.11.22",
            inerralid: 1,
            integralname: "签到",
            score: "200",
            state: 1
        },{
            addtime: "2015.11.22",
            inerralid: 2,
            integralname: "消费",
            score: "100",
            state: 0
        },{
            addtime: "2015.11.22",
            integralname: "签到",
            inerralid: 1,
            score: "400",
            state: 1
        },{
            addtime: "2015.11.22",
            inerralid: 1,
            integralname: "签到",
            score: "200",
            state: 1
        },{
            addtime: "2015.11.22",
            inerralid: 1,
            integralname: "签到",
            score: "100",
            state: 0
        },{
            addtime: "2015.11.22",
            inerralid: 3,
            integralname: "分享",
            score: "400",
            state: 1
        },{
            addtime: "2015.11.22",
            integralname: "活动",
            inerralid: 4,
            score: "200",
            state: 1
        },{
            addtime: "2015.11.22",
            integralname: "活动",
            inerralid: 4,
            score: "100",
            state: 0
        },{
            addtime: "2015.11.22",
            inerralid: 5,
            integralname: "扫描烟盒二维码",
            score: "400",
            state: 1
        }]
    },

    //获取个人信息
    "/User/UserCore/UserModifySelect": {
        code: 0,
        msg: "获取成功",
        moduser: {
            avatar: "/static/images/avatar.jpg",
            fullname: "aswsx",
            getpoints: 1,
            isvip: 1
        }
    },

    //编辑个人信息
    "/User/UserCore/UserModifyUpdate": {
        code: 0,
        msg: "修改成功"
    },

    //获取收货地址列表
    "/User/UserCore/ReceiptAddressList": {
        code: 0,
        msg: "获取成功",
        listaddress: [{
            addressid: 1,
            receiver: "小张",
            phone: "13011129324",
            gpsaddress: "重庆市南岸区师傅师傅是个大法师格式工厂发我符文啊",
            defaultaddress: 0,
            province: "北京市",
            city: "东城区",
            district: ""

        },{
            addressid: 2,
            receiver: "小李",
            phone: "15342321224",
            gpsaddress: "重庆市江北区是客观看待了",
            defaultaddress: 1,
            province: "上海市",
            city: "黄浦区",
            district: ""
        },{
            addressid: 3,
            receiver: "小x",
            phone: "14657658447",
            gpsaddress: "重庆市沙坪坝区世界冠军色",
            defaultaddress: 0,
            province: "广州市",
            city: "黄浦区",
            district: ""
        },{
            addressid: 4,
            receiver: "小网",
            phone: "12565864654",
            gpsaddress: "重庆北部新区师父说过滚动",
            defaultaddress: 0,
            province: "上海市",
            city: "黄浦区",
            district: ""
        }]
    },
    //添加收货地址
    "/User/UserCore/ReceiptAddressAdd": {
        code: 0,
        msg: "添加成功"
    },
    //编辑收货地址
    "/User/UserCore/ReceiptAddressUpdate": {
        code: 0,
        msg: "修改成功"
    },
    //修改默认地址
    "/User/UserCore/DefaultAddressUpdate": {
        code: 0,
        msg: "修改成功"
    },
    //删除收货地址
    "/User/UserCore/ReceiptAddressDelect": {
        code: 0,
        msg: "删除成功"
    },

    //获取要客商城分类列表
    "/Shop/GuestShop/GuestMallState": {
        code: 0,
        msg: "获取成功",
        data: [{
            ptypeid: 1,
            typename: "天子"
        },{
            ptypeid: 2,
            typename: "龙凤呈祥"
        },{
            ptypeid: 3,
            typename: "中华"
        },{
            ptypeid: 4,
            typename: "天子"
        },{
            ptypeid: 5,
            typename: "龙凤呈祥"
        },{
            ptypeid: 6,
            typename: "中华"
        },{
            ptypeid: 7,
            typename: "天子"
        },{
            ptypeid: 8,
            typename: "龙凤呈祥"
        },{
            ptypeid: 9,
            typename: "中华"
        },{
            ptypeid: 10,
            typename: "中华"
        },{
            ptypeid: 11,
            typename: "天子"
        },{
            ptypeid: 12,
            typename: "龙凤呈祥"
        },{
            ptypeid: 13,
            typename: "中华"
        }]
    },

    //获取商品列表
    "/Shop/GuestShop/ImportantMall": {
        code: 0,
        msg: "获取成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            goodsid: 1,
            goodsname: "天子",
            imageurl: "/static/images/home/home_banner.png",
            price: 100
        },{
            goodsid: 2,
            goodsname: "中华",
            imageurl: "/static/images/home/home_banner.png",
            price: 100
        },{
            goodsid: 3,
            goodsname: "龙凤呈祥",
            imageurl: "/static/images/home/home_banner.png",
            price: 100
        },{
            goodsid: 4,
            goodsname: "天子",
            imageurl: "/static/images/home/home_banner.png",
            price: 100
        },{
            goodsid: 5,
            goodsname: "中华",
            imageurl: "/static/images/home/home_banner.png",
            price: 100
        }]
    },

    //获取订单列表
    "/User/OrderUser/OrderList": {
        code: 0,
        msg: "获取成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            ordercode: 14553543543,
            orderid: 1,
            shopimgurl: "/static/images/avatar.jpg",
            shopname: "店铺名称1",
            mustpayment: 100,
            phone: 653723582,
            iscomment: 1,
            goodscount: 4,
            distributionfee: 2,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        },{
            ordercode: 13553543543,
            orderid: 2,
            shopimgurl: "/static/images/avatar.jpg",
            shopname: "店铺名称2",
            mustpayment: 200,
            phone: 653723582,
            goodscount: 4,
            distributionfee: 2,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        },{
            ordercode: 15353543543,
            orderid: 3,
            shopimgurl: "/static/images/avatar.jpg",
            shopname: "店铺名称3",
            mustpayment: 300,
            phone: 653723582,
            iscomment: 1,
            goodscount: 4,
            distributionfee: 2,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        },{
            ordercode: 14553543543,
            orderid: 1,
            shopimgurl: "/static/images/avatar.jpg",
            shopname: "店铺名称1",
            mustpayment: 100,
            phone: 653723582,
            goodscount: 4,
            distributionfee: 2,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        },{
            ordercode: 13553543543,
            orderid: 2,
            shopimgurl: "/static/images/avatar.jpg",
            shopname: "店铺名称2",
            mustpayment: 200,
            phone: 653723582,
            goodscount: 4,
            distributionfee: 2,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        },{
            ordercode: 15353543543,
            orderid: 3,
            shopimgurl: "/static/images/avatar.jpg",
            shopname: "店铺名称3",
            mustpayment: 300,
            phone: 653723582,
            goodscount: 4,
            distributionfee: 2,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        }]
    },

    //获取订单详情
    "/User/OrderUser/OrderDetails": {
        code: 0,
        msg: "获取成功",
        data: {
            "orderid": 132,
            "ordercode":"b15020210032129",
            "total": 29,
            "mustpayment": 29,
            "shipfee": 2,
            "addtime": "2016-10-12 15:21:28",
            "shopaddress":"重庆南岸港丽酒店  江南大道7号1栋（会展中心斜对面盛汇广场旁） ",
            "shopiphone":"测试内容v7ml",
            "shopname":"佳烟难寻",
            "status": "0",
            "ordertype": "1",
            "orderaddress": {
                "receiver": "zzzz",
                "phone": 143243534,
                "raddress": "xsfsdfsfrd"
            },
            "orderdata": [{
                "goodsid": 1,
                "goodsimageurl": "/static/images/avatar.jpg",
                "goodsname":　"商品1",
                "goodsprice": 123,
                "buycount": 1
            },{
                "goodsid": 2,
                "goodsimageurl": "/static/images/avatar.jpg",
                "goodsname":　"商品2",
                "goodsprice": 10,
                "buycount": 2
            },{
                "goodsid": 3,
                "goodsimageurl": "/static/images/avatar.jpg",
                "goodsname":　"商品3",
                "goodsprice": 40,
                "buycount": 4
            }]
        }
    },

    //获取商品详情
    "/Shop/GuestShop/ImportantDetails": {
        code: 0,
        msg: "获取成功",
        data: {
            applyshopid: 0,
            goodstype: 0,
            goodsname: "天子(重庆20年)",
            price: 200,
            listpicture:　[{
                imageurl: "/static/images/goods_banner_02.png"
            },{
                imageurl: "/static/images/goods_banner_02.png"
            },{
                imageurl: "/static/images/goods_banner_02.png"
            }]
        }
    },

    //添加购物车
    "/User/UserCore/ShoppingCart": {
        code: 0,
        msg: "添加成功",
    },

    //获取微商城购物车列表
    "/User/UserCore/ShoppingCartList": {
        code: 0,
        msg: "获取成功",
        data: {
            "shoppdata": [{
              "goodsid": 83,
              "goodsname": "龙凤呈祥(畅行天下)(/包)",
              "goodscount": 3,
              "applyshopid": 0,
              "goodsprice": 15,
              "goodsimageurl": "http://lcb.51byod.cn:8011/shopmgr/images/goodsphoto/201701231119436887.png",
              "shopname": "",
              "distributionfee": 0,
              "cartid": 442,
              "ischoice": 1,
              "isshelves": 1
            }, {
              "goodsid": 82,
              "goodsname": "龙凤呈祥(百年好合)(/包)",
              "goodscount": 1,
              "applyshopid": 0,
              "goodsprice": 15,
              "goodsimageurl": "http://lcb.51byod.cn:8011/shopmgr/images/goodsphoto/201701231109055805.png",
              "shopname": "",
              "distributionfee": 0,
              "cartid": 441,
              "ischoice": 1,
              "isshelves": 1
            }],
            "goodstotal": 4,
            "ordertotal": 60,
            "listshopcatnow": null,
            listshopcatnow: [{
                shopname: "店铺名称1",
                applyshopid: 1,
                isbeyond: 0,
                shopdatanow: [{
                    goodsid: 1,
                    goodscount: 3,
                    goodsname: "商品名字1",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　55.5,
                    cartid: 1,
                    ischoice: 1,
                    stock: 20,
                    isshelves: 0
                },{
                    goodsid: 2,
                    goodscount: 2,
                    goodsname: "商品名字3商品名字3商品名字3xxxxx",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　100,
                    cartid: 2,
                    ischoice: 1,
                    stock: 10,
                    isshelves: 0
                },{
                    goodsid: 1,
                    goodscount: 3,
                    goodsname: "商品名字1",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　55.5,
                    cartid: 1,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 2,
                    goodscount: 2,
                    goodsname: "商品名字3商品名字3商品名字3xxxxx",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　100,
                    cartid: 2,
                    ischoice: 1,
                    isshelves: 1
                }]
            },{
                shopname: "店铺名称2",
                applyshopid: 2,
                isbeyond: 0,
                shopdatanow: [{
                    goodsid: 3,
                    goodscount: 1,
                    goodsname: "商品名字2",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　200,
                    cartid: 3,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 4,
                    goodscount: 3,
                    goodsname: "商品名字1",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　55.5,
                    cartid: 1,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 1,
                    goodscount: 3,
                    goodsname: "商品名字1",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　55.5,
                    cartid: 1,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 2,
                    goodscount: 2,
                    goodsname: "商品名字3商品名字3商品名字3xxxxx",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　100,
                    cartid: 2,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 1,
                    goodscount: 3,
                    goodsname: "商品名字1",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　55.5,
                    cartid: 1,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 2,
                    goodscount: 2,
                    goodsname: "商品名字3商品名字3商品名字3xxxxx",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　100,
                    cartid: 2,
                    ischoice: 1,
                    isshelves: 1
                }]
            },{
                applyshopid: 6,
                shopname: "店铺名称6",
                isbeyond: 1,
                shopdatanow: [{
                    goodsid: 5,
                    goodscount: 2,
                    goodsname: "商品名字3商品名字3商品名字3商品名字3",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　100,
                    cartid: 2,
                    ischoice: 1,
                    isshelves: 1
                },{
                    goodsid: 6,
                    goodscount: 1,
                    goodsname: "商品名字2",
                    goodsimageurl: "/static/images/avatar.jpg",
                    goodsprice:　200,
                    cartid: 3,
                    ischoice: 1,
                    isshelves: 1
                }]

            }]
        }
    },

    //购物车删除商品
    "/User/UserCore/ShopCatDelect": {
        code: 0,
        msg:  "删除成功",
    },

    //要客商城首页
    "/Shop/GuestShop/ImportantShopHome": {
        code: 0,
        msg: "获取成功",
        data: {
            phonedata: [{
                photourl: "/static/images/home/home_banner.png",
                linkurl: ""
            },{
                photourl: "/static/images/home/home_banner.png",
                linkurl: ""
            },{
                photourl: "/static/images/home/home_banner.png",
                linkurl: ""
            }],
            picturedata: [{
                goodphoto: "/static/images/home/home_banner.png",
                goodsid: 1,
                goodsname: "商品名称1",
                price: 100
            },{
                goodphoto: "/static/images/home/home_banner.png",
                goodsid: 2,
                goodsname: "商品名称2",
                price: 200
            },{
                goodphoto: "/static/images/home/home_banner.png",
                goodsid: 3,
                goodsname: "商品名称3",
                price: 110
            },{
                goodphoto: "/static/images/home/home_banner.png",
                goodsid: 5,
                goodsname: "商品名称4",
                price: 80
            },{
                goodphoto: "/static/images/home/home_banner.png",
                goodsid: 6,
                goodsname: "商品名称5",
                price: 50
            },{
                goodphoto: "/static/images/home/home_banner.png",
                goodsid: 7,
                goodsname: "商品名称6",
                price: 30
            }]
        }
    },

    "/User/OrderUser/OrderStateUptend": {
        code: 0,
        msg: "操作成功"
    },

    //获取预定货单列表
    "/User/UserCore/ApplyShopOrder": {
        code: 0,
        msg: "获取成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            ordercode: 14553543543,
            orderid: 1,
            mustpayment: 100,
            goodscount: 4,
            distributionfee: 2,
            orderType: 1,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_03.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_10.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_10.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_10.png"
            }]
        },{
            ordercode: 14553543543,
            orderid: 2,
            mustpayment: 100,
            goodscount: 4,
            distributionfee: 2,
            orderType: 0,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_10.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_10.png"
            },{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_10.png"
            }]
        },{
            ordercode: 14553543543,
            orderid: 3,
            mustpayment: 100,
            goodscount: 4,
            distributionfee: 2,
            orderType: 0,
            orderdata: [{
                goodsname: "商品名称1",
                buycount: 2,
                goodsprice: 20,
                goodsimageurl: "/static/images/goods/goods_05.png"
            }]
        }]
    },

    //获取预定货单详情
    "/User/UserCore/ApplyShopDetails": {
        code: 0,
        msg: "获取成功",
        data: {
            "ordercode":"b15020210032129",
            "state": "0",
            "ordertype": "1",
            "userdata": {
                "username": "zzzz",
                "iphone": 143243534,
                "raddress": "xsfsdfsfrd"
            },
            "listordergoods": [{
                "goodsid": 1,
                "goodsimageurl": "/static/images/avatar.jpg",
                "goodsname":　"商品1",
                "goodsprice": 123,
                "buycount": 1
            },{
                "goodsid": 2,
                "goodsimageurl": "/static/images/avatar.jpg",
                "goodsname":　"商品2",
                "goodsprice": 10,
                "buycount": 2
            },{
                "goodsid": 3,
                "goodsimageurl": "/static/images/avatar.jpg",
                "goodsname":　"商品3",
                "goodsprice": 40,
                "buycount": 4
            }]
        }
    },

    //接受订单
    "/User/UserCore/ApplyShopUpted": {
        code: 0,
        msg: "操作成功"
    },

    //获取添加商品列表
    "/Shop/MicroShop/MicroShopStore": {
        code: 0,
        msg: "获取成功",
        data: [{
            ptypeid:　1,
            typename: "饮料",
            newcount: 3
        },{
            ptypeid:　2,
            typename: "烟酒"
        },{
            ptypeid:　3,
            typename: "小吃"
        },{
            ptypeid:　4,
            typename: "熟食",
            newcount: 2
        },{
            ptypeid:　5,
            typename: "干货"
        },{
            ptypeid:　6,
            typename: "其他"
        },{
            ptypeid:　7,
            typename: "熟食xx"
        },{
            ptypeid:　8,
            typename: "干s货"
        },{
            ptypeid:　9,
            typename: "其a他"
        }]
    },

    //获取对应类型商品类别
    "/Shop/MicroShop/MIcroShopGoodAdd": {
        code: 0,
        msg: "获取成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            goodsid: 1,
            shopgoodsid: 1,
            goodsname: "农夫山泉",
            imageurl:　"/static/images/goods/goods_03.png",
            price:　10,
            stock: 2000,
            state: 1
        },{
            goodsid: 2,
            shopgoodsid: 2,
            goodsname: "康师傅",
            imageurl:　"/static/images/goods/goods_05.png",
            price:　30,
            stock: 1000,
            state: 1
        },{
            goodsid: 3,
            shopgoodsid: 3,
            goodsname: "农夫山泉2号",
            imageurl:　"/static/images/goods/goods_09.png",
            price:　5,
            stock: 2000,
            state: 0
        },{
            goodsid: 4,
            shopgoodsid: 4,
            goodsname: "统一",
            imageurl:　"/static/images/goods/goods_10.png",
            price:　50,
            stock: 10000,
            state: 0
        },{
            goodsid: 5,
            shopgoodsid: 5,
            goodsname: "龙凤呈祥",
            imageurl:　"/static/images/goods/goods_13.png",
            price:　100,
            stock: 500,
            state: 1
        },{
            goodsid: 6,
            shopgoodsid: 6,
            goodsname: "农夫山泉2号",
            imageurl:　"/static/images/goods/goods_14.png",
            price:　5,
            stock: 2000,
            state: 1
        },{
            goodsid: 7,
            shopgoodsid: 7,
            goodsname: "统一",
            imageurl:　"/static/images/goods/goods_17.png",
            price:　50,
            stock: 10000,
            state: 0
        },{
            goodsid: 8,
            shopgoodsid: 8,
            goodsname: "龙凤呈祥",
            imageurl:　"/static/images/goods/goods_03.png",
            price:　100,
            stock: 500,
            state: 0
        },]
    },

    //删除商品
    "/Shop/MicroShop/MicroShopGoodDelect": {
        code: 0,
        msg: "删除成功"
    },

    //获取购买商品信息
    "/User/OrderUser/GenerateOrderSet": {
        code: 0,
        msg: "提交成功"
    },

    //获取订单确认
    "/User/OrderUser/OrderAddCookie": {
        code: 0,
        msg:　"获取成功",
        data: [{
            orderdata: [{
                goodsid: 1,
                buycount: 3,
                goodsname: "商品名字1",
                goodsimageurl: "/static/images/avatar.jpg",
                goodsprice:　55.5,
            },{
                goodsid: 2,
                buycount: 2,
                goodsname: "商品3xxxxx",
                goodsimageurl: "/static/images/avatar.jpg",
                goodsprice:　100,
            },{
                goodsid: 3,
                buycount: 1,
                goodsname: "商品名字2",
                goodsimageurl: "/static/images/avatar.jpg",
                goodsprice:　200,
            },{
                goodsid: 4,
                buycount: 3,
                goodsname: "商品名字1",
                goodsimageurl: "/static/images/avatar.jpg",
                goodsprice:　55.5,
            }],
            basicstotal: 200,
            discountstotal: 10,
            goodscount: 10,
            mustpayment: 100
        }]
    },

    //提交订单
    "/User/OrderUser/GenerateOrder": {
        code: 0,
        msg: "提交订单成功"
    },

    //店铺信息
    "/User/UserCore/ApplyShopSelect": {
        code: 0,
        msg: "查询成功",
        data: {
            shopimg: "/static/images/avatar.jpg",
            shopname: "店铺名称sxc",
            shopiphone: "145352344",
            startingprice: "10",
            distributionfee: "2",
            degree: "106.568194,29.527738",
            isverify: 1,
            gpsaddress: "详细地址沙发沙发沙发沙发",
            smallimg: "/static/images/store_logo_03.png",
            shopimg: [{
                "imgurl": "/static/images/banner_02.png"
            }]
        }
    },

    //编辑商品信息
    "/Shop/MicroShop/MicroShopGoodUpten": {
        code: 0,
        msg: "修改成功"
    },

    //添加商品
    "/Shop/MicroShop/MicroGoodsAdd": {
        code: 0,
        msg: "添加成功"
    },

    //添加商品商品分类
    "/Shop/MicroShop/MicroMallListtype": {
        code: 0,
        msg: "获取成功",
        data: [{
            ptypeid:　1,
            typename: "饮料",
        },{
            ptypeid:　2,
            typename: "烟酒"
        },{
            ptypeid:　3,
            typename: "小吃"
        },{
            ptypeid:　4,
            typename: "熟食",
        },{
            ptypeid:　5,
            typename: "干货"
        },{
            ptypeid:　6,
            typename: "其他"
        },{
            ptypeid:　4,
            typename: "熟食"
        },{
            ptypeid:　5,
            typename: "干货"
        },{
            ptypeid:　6,
            typename: "其他"
        }]
    },

    //添加商品商品列表
    "/Shop/MicroShop/MicroMallDataList": {
        code: 0,
        msg: "获取成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            goodsid: 1,
            goodsname: "农夫山泉",
            imageurl:　"/static/images/goods/goods_03.png",
            price:　10,
            stock: 2000,
            state: 1
        },{
            goodsid: 2,
            goodsname: "康师傅",
            imageurl:　"/static/images/goods/goods_05.png",
            price:　30,
            stock: 1000,
            state: 1
        },{
            goodsid: 3,
            goodsname: "农夫山泉2号",
            imageurl:　"/static/images/goods/goods_09.png",
            price:　5,
            stock: 2000
        },{
            goodsid: 4,
            goodsname: "统一",
            imageurl:　"/static/images/goods/goods_10.png",
            price:　50,
            stock: 10000
        },{
            goodsid: 5,
            goodsname: "龙凤呈祥",
            imageurl:　"/static/images/goods/goods_13.png",
            price:　100,
            stock: 500
        },{
            goodsid: 6,
            goodsname: "农夫山泉2号",
            imageurl:　"/static/images/goods/goods_14.png",
            price:　5,
            stock: 2000
        },{
            goodsid: 7,
            goodsname: "统一",
            imageurl:　"/static/images/goods/goods_17.png",
            price:　50,
            stock: 10000
        },{
            goodsid: 8,
            goodsname: "龙凤呈祥",
            imageurl:　"/static/images/goods/goods_13.png",
            price:　100,
            stock: 500
        },]
    },

    //微商城首页
    "/Shop/MicroShop/MicroShopHome": {
        code: 0,
        msg: "获取成功",
        data: {
            photodata: [{
                photourl: "/static/images/home/home_banner.png",
                linkurl: ""
            },{
                photourl: "/static/images/home/home_banner.png",
                linkurl: ""
            },{
                photourl: "/static/images/home/home_banner.png",
                linkurl: ""
            }],
            Classdata: [{
                typeimage: "/static/images/home/weindex_i_03.png",
                typename: "饮料超市",
                ptypeid: 1,
            },{
                typeimage: "/static/images/home/weindex_i_05.png",
                typename: "干货超市",
                ptypeid: 2,
            },{
                typeimage: "/static/images/home/weindex_i_07.png",
                typename: "冷冻超市",
                ptypeid: 3,
            },{
                typeimage: "/static/images/home/weindex_i_09.png",
                typename: "零食超市",
                ptypeid: 4,
            }],
            Shopdata: [{
                imgurl: "/static/images/avatar.png",
                applyid: 1,
                shopname: "永辉超市",
                quality: 1,
                fraction: 5,
                distance: "500",
                ordercount: 2000,
                sotreinfo: "民生超市 百姓永辉",
                monthlysales: 2000
            },{
                imgurl: "/static/images/avatar.png",
                applyid: 2,
                shopname: "想啊想啊市场",
                quality: 0,
                fraction: 3,
                distance: "200",
                ordercount: 1000,
                sotreinfo: "民生超市 百姓永辉",
                monthlysales: 1000
            },{
                imgurl: "/static/images/avatar.png",
                applyid: 3,
                shopname: "休息休息啊",
                quality: 0,
                fraction: 4,
                distance: "400",
                ordercount: 1500,
                sotreinfo: "民生超市 百姓永辉",
                monthlysales: 1500
            },{
                imgurl: "/static/images/avatar.png",
                applyid: 4,
                shopname: "粉色粉色",
                quality: 1,
                fraction: 4,
                distance: "300",
                ordercount: 1700,
                sotreinfo: "民生超市 百姓永辉",
                monthlysales: 1800
            }]
        }
    },

    //微商城分类
    "/Shop/MicroShop/MicroGoodsState": {
        code: 0,
        msg: "获取成功",
        data: [{
            ptypeid:　1,
            typename: "二级分类1",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　2,
            typename: "二级分类2",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　3,
            typename: "二级分类3",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　4,
            typename: "二级分类4",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　5,
            typename: "二级分类5",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　6,
            typename: "二级分类6",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　7,
            typename: "二级分类7",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　8,
            typename: "二级分类8",
            typeimage: "/static/images/avatar.jpg"
        },{
            ptypeid:　9,
            typename: "二级分类9",
            typeimage: "/static/images/avatar.jpg"
        }]
    },

    //微商城店铺列表
    "/Shop/MicroShop/MicroShopList": {
        code: 0,
        pagedata: {
            pageindex: 1,
            pagesize: 5,
            pagecount: 30
        },
        data:　[{
            imgurl: "/static/images/avatar.png",
            applyid: 1,
            shopname: "永辉超市",
            quality: 1,
            fraction: 5,
            distance: "500",
            ordercount: 2000,
            sotreinfo: "民生超市 百姓永辉",
            monthlysales: 2000,
            shopgoodslist: [{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品名称1",
                shopgoodsid: 1,
                ptypeid: 3,
                price: 30
            }]
        },{
            imgurl: "/static/images/avatar.png",
            applyid: 2,
            shopname: "想啊想啊市场",
            quality: 0,
            fraction: 3,
            distance: "200",
            ordercount: 1000,
            sotreinfo: "民生超市 百姓永辉",
            monthlysales: 1000,
            shopgoodslist: [{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品名称1",
                shopgoodsid: 2,
                ptypeid: 3,
                price: 40
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品asd称1",
                shopgoodsid: 6,
                price: 30
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品名称1",
                shopgoodsid: 2,
                ptypeid: 3,
                price: 40
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品asd称1",
                shopgoodsid: 6,
                price: 30
            }]
        },{
            imgurl: "/static/images/avatar.png",
            applyid: 3,
            shopname: "休息休息啊",
            quality: 0,
            fraction: 4,
            distance: "400",
            ordercount: 1500,
            sotreinfo: "民生超市 百姓永辉",
            monthlysales: 1500,
            shopgoodslist: [{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品名2aaa称1",
                shopgoodsid: 3,
                ptypeid: 3,
                price: 10
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商asf名称1",
                shopgoodsid: 7,
                price: 30
            }]
        },{
            imgurl: "/static/images/avatar.png",
            applyid: 4,
            shopname: "粉色粉色",
            quality: 1,
            fraction: 4,
            distance: "300",
            ordercount: 1700,
            sotreinfo: "民生超市 百姓永辉",
            monthlysales: 1800,
            shopgoodslist: [{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品名wrff1",
                shopgoodsid: 4,
                ptypeid: 3,
                price: 42
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "ffg名称1",
                shopgoodsid: 8,
                price: 50
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "商品名wrff1",
                shopgoodsid: 4,
                ptypeid: 3,
                price: 42
            },{
                goodsimg: "/static/images/avatar.jpg",
                goodsname: "ffg名称1",
                shopgoodsid: 8,
                price: 50
            }]
        }]
    },

    //获取对应店铺详情对应商品
    "/Shop/MicroShop/MicorShopGoodsUser": {
        code: 0,
        msg: "获取成功",
        pagedata: {
            pagesize: 10,
            pageindex: 1,
            pagecount: 100
        },
        data: [{
            goodsid: 1,
            shopgoodsid: 1,
            goodsname: "农夫山泉",
            imageurl:　"/static/images/avatar.jpg",
            price:　10,
            stock: 2000,
            state: 1
        },{
            goodsid: 2,
            shopgoodsid: 2,
            goodsname: "康师傅",
            imageurl:　"/static/images/avatar.jpg",
            price:　30,
            stock: 1000,
            state: 1
        },{
            goodsid: 3,
            shopgoodsid: 3,
            goodsname: "农夫山泉2号",
            imageurl:　"/static/images/avatar.jpg",
            price:　5,
            stock: 2000
        },{
            goodsid: 4,
            shopgoodsid: 4,
            goodsname: "统一",
            imageurl:　"/static/images/avatar.jpg",
            price:　50,
            stock: 10000
        },{
            goodsid: 5,
            shopgoodsid: 5,
            goodsname: "龙凤呈祥",
            imageurl:　"/static/images/avatar.jpg",
            price:　100,
            stock: 500
        },{
            goodsid: 6,
            shopgoodsid: 6,
            goodsname: "农夫山泉2号",
            imageurl:　"/static/images/avatar.jpg",
            price:　5,
            stock: 2000
        },{
            goodsid: 7,
            shopgoodsid: 7,
            goodsname: "统一",
            imageurl:　"/static/images/avatar.jpg",
            price:　50,
            stock: 10000
        },{
            goodsid: 8,
            shopgoodsid: 8,
            goodsname: "龙凤呈祥",
            imageurl:　"/static/images/avatar.jpg",
            price:　100,
            stock: 500
        },]
    },

    //店铺信息和购物车信息
    "/Shop/MicroShop/MicroShopListUser": {
        code: 0,
        data: {
            goodscont: 2,
            total: 100,
            shopname: "sacs",
            iphone: 1939833,
            shopaddress: "fsfsdgdsgsdgd",
            startingprice: 100,
            distributionfee: 2,
            smallimg: "/static/images/avatar.jpg",
            monthlysales: 289,
            starttime: "09:00",
            endtime: "22:00",
            fraction: 4,
            allgoodscount: 184,
            goodselected: 10,
            picturedata: [{
                photourl: "/static/images/banner_02.png"
            }],
            shopcatgoodslist: [{
                applyshopid: 1,
                cartid: 1,
                goodsid: 1,
                goodsimg: "/static/images/avatar.jpg",
                goodsname:　"苹果",
                goodsprice: 20,
                goodscount: 2,
                ischoice: 1,
                isshelves: 1
            },{
                applyshopid: 1,
                cartid: 2,
                goodsid: 2,
                goodsimg: "/static/images/avatar.jpg",
                goodsname:　"西瓜",
                goodsprice: 10,
                goodscount: 1,
                ischoice: 1,
                isshelves: 1
            },{
                applyshopid: 1,
                cartid: 3,
                goodsid: 3,
                goodsimg: "/static/images/avatar.jpg",
                goodsname:　"桃子",
                goodsprice: 30,
                goodscount: 3,
                ischoice: 1,
                isshelves: 0
            }]
        }
    },

    //改变选择状态
    "/Shop/MicroShop/MicroShopCatUptend": {
        code: 0,
        data: {
            total: 200,
            goodscont: 10
        },
        msg: "操作成功"
    },

    //改变购物车商品数量
    "/Shop/MicroShop/MicroShopCatUser": {
        code: 0,
        data: {
            cartid: 11,
            total: 200,
            goodscont: 10
        },
        msg: "操作成功"
    },

    //店铺详情商品分类
    "/Shop/MicroShop/MicroShopStoreUser": {
        code: 0,
        msg: "获取成功",
        data: [{
            ptypeid:　1,
            typename: "饮料",
            newcount: 3
        },{
            ptypeid:　2,
            typename: "烟酒"
        },{
            ptypeid:　3,
            typename: "小吃"
        },{
            ptypeid:　4,
            typename: "熟食",
            newcount: 2
        },{
            ptypeid:　5,
            typename: "干货"
        },{
            ptypeid:　6,
            typename: "其他"
        }]
    },

    //个人中心菜单
    "/User/UserCore/PersonalMenu": {
        code: 0,
        msg: "获取成功",
        data: [21,22,23,24,25]
    },

    //订单评论
    "/User/OrderUser/ShopOrderEvaluate": {
        code: 0,
        msg: "评论成功"
    },

    //商品评论列表
    "/Shop/MicroShop/MicroGoodsComment": {
        code: 0,
        data: [{
            fullname: "dasf",
            addtime: "2016/03/03",
            content: "哇回复角色额浮生就睡觉哦公司看色鬼"
        },{
            fullname: "dasf",
            addtime: "2016/03/03",
            content: "哇回复角色额浮生就睡觉哦公司看色鬼"
        },{
            fullname: "dasf",
            addtime: "2016/03/03",
            content: "哇回复角色额浮生就睡觉哦公司看色鬼"
        },{
            fullname: "dasf",
            addtime: "2016/03/03",
            content: "哇回复角色额浮生就睡觉哦公司看色鬼"
        },{
            fullname: "dasf",
            addtime: "2016/03/03",
            content: "哇回复角色额浮生就睡觉哦公司看色鬼"
        }],
        pagedata: {
            pageindex: 1,
            pagesize: 20,
            pagecount: 30
        }
    },

    //店铺列表
    "/User/UserCore/ApplyShopSelectList": {
        code: 0,
        data: [{
            applyid: 1,
            img: "/static/images/store_logo_03.png",
            shopname: "点哦名称1",
            shopiphone: 1214342434,
            degree: "104.423422,28.4353453",
            gpsaddress: "啊福克斯色狼给你发你是公司十多个",
            distributionfee: 10,
            startingprice: 2,
            isverify: 0,
        },{
            applyid: 2,
            img: "/static/images/store_logo_03.png",
            shopname: "fassf",
            shopiphone: 24435557653,
            degree: "104.423422,28.4353453",
            gpsaddress: "鹅头方大国日本",
            distributionfee: 20,
            startingprice: 3,
            isverify: 4,
        },{
            applyid: 3,
            img: "/static/images/store_logo_03.png",
            shopname: "发涩发",
            shopiphone: 243254534,
            degree: "104.423422,28.4353453",
            gpsaddress: "啊发顺丰给的认同感退热贴",
            distributionfee: 44,
            startingprice: 5,
            isverify: 5,
        }],
        pagedata: {
            pagesize: 10,
            pagecount: 30,
            pageindex: 1
        }
    },

    //更新店铺信息
    "/User/UserCore/ApplyShopUptend": {
        code: 0,
        msg: "编辑成功"
    },

    //要客购物车
    "/Shop/GuestShop/GuestShopCatUser": {
        code: 0,
        data: {
            total: 100,
            goodselected: 3
        }
    },

    //要客购物车更新
    "/Shop/GuestShop/GuestShopCatUptend": {
        code: 0,
        data: {
            total: 99,
            goodselected: 2
        }
    },

    //地址详情
    "/User/UserCore/ReceiptAddressDetails": {
        code: 0,
        data: {
            addressid: 2,
            receiver: "小李",
            phone: "15342321224",
            gpsaddress: "重庆市江北区是客观看待了",
            defaultaddress: 1,
            province: "上海市",
            city: "黄浦区",
            district: ""
        }
    },

    //要客购买限制说明
    "/User/OrderUser/GuestPurchaseLimit": {
        code: 0,
        data: {
            guserlist: [{
                controlattributename: "包",
                isopentotal: 1,
                controlprice: 500,
                unitprice: 30
            },{
                controlattributename: "条",
                isopentotal: 1,
                controlprice: 2000,
                unitprice: 200
            }]
        }
    },

    //员工加入店铺查询
    "/Shop/MicroShop/MicroShopSelectStaff": {
        code: 0,
        data: [{
            "applyid": 31,
            "imgurl": "/static/images/store_logo_03.png",
            "shopname": "dasda",
            "shopaddress": "中国重庆市重庆市南岸区江南大道12号",
            "startingprice": 0,
            "distributionfee": 0,
            "quality": 0,
            "distance": 0,
            "fraction": 0,
            "monthlysales": 0,
            "shopgoodslist": null
        },{
            "applyid": 21,
            "imgurl": "/static/images/store_logo_03.png",
            "shopname": "fasfj1",
            "shopaddress": "中国重庆市重庆市南岸区江南大道10号",
            "startingprice": 0,
            "distributionfee": 0,
            "quality": 0,
            "distance": 0,
            "fraction": 0,
            "monthlysales": 0,
            "shopgoodslist": null
        },{
            "applyid": 11,
            "imgurl": "/static/images/store_logo_03.png",
            "shopname": "fasfj1",
            "shopaddress": "中国重庆市重庆市南岸区江南大道10号",
            "startingprice": 0,
            "distributionfee": 0,
            "quality": 0,
            "distance": 0,
            "fraction": 0,
            "monthlysales": 0,
            "shopgoodslist": null
        }]
    },

    //申请加入店铺
    "/Shop/MicroShop/MicroShopAddStaff": {
        code: 0,
        msg: "申请成功"
    },

    //历史纪录
    "/User/UserCore/FootPrintSelect": {
        code: 0,
        data: [{
            goodsname: "商品名称s",
            thumbnail: "/static/images/goods/goods_03.png",
            url: "/view/vipmall/goodsDetails.html",
            price: 20
        },{
            goodsname: "商品名称s",
            thumbnail: "/static/images/goods/goods_03.png",
            url: "/view/vipmall/goodsDetails.html",
            price: 60
        },{
            goodsname: "dfawe",
            thumbnail: "/static/images/goods/goods_03.png",
            url: "/view/vipmall/goodsDetails.html",
            price: 209
        },{
            goodsname: "发发发 胜多负少",
            thumbnail: "/static/images/goods/goods_03.png",
            url: "/view/vipmall/goodsDetails.html",
            price: 142
        },{
            goodsname: "微软微软为维特瑞",
            thumbnail: "/static/images/goods/goods_03.png",
            url: "/view/vipmall/goodsDetails.html",
            price: 25
        }]
    },

    //清空浏览记录
    "/User/UserCore/FootPrintDelect": {
        code: 0,
        msg: "删除成功"
    },

    //员工管理列表
    "/Shop/MicroShop/MicroShopExamine": {
      code: 0,
      data: [{
            "name": "测试号",
            "avatar": "/Static/images/avatar.jpg",
            "userid": 11,
            "userphone": "14588140173",
            "applyid": 31,
            "shopname": "南坪店dsad"
        },{
              "name": "测试号1",
              "avatar": "/Static/images/avatar.jpg",
              "userid": 13,
              "userphone": "17042540173",
              "applyid": 31,
              "shopname": "南坪sdasd"
        },{
                "name": "测试号2",
                "avatar": "/Static/images/avatar.jpg",
                "userid": 12,
                "userphone": "14688140173",
                "applyid": 31,
                "shopname": "南坪店234"
        }],
        pagedata: {
          "pageindex": 1,
          "pagesize": 10,
          "pagecount": 100
      }
    },

    //员工详情
    "/Shop/MicroShop/MicroShopUserDetailsSelect": {
      code: 0,
      data: {
        avatar: "/static/images/avatar.jpg",
        name: "姓名实打实",
        iphone: 18929382459,
        usersex: 0,
        Addtime: "2016.10.23",
        shopname: "店铺名称xxxx",
        jurisdiction: 0,
      }
  },

  //经验说明
  "/User/UserCore/UserGradeObtainExplain": {
      code: 0,
      data: {
          gradedata: [{
              grade: 1,
              product: 100
          },{
              grade: 2,
              product: 200
          },{
              grade: 3,
              product: 400
          },{
              grade: 4,
              product: 700
          }],
          imprtantdata: [{
              importantgrade: 1,
              importantproduct: 200
          },{
              importantgrade: 2,
              importantproduct: 400
          },{
              importantgrade: 3,
              importantproduct: 600
          },{
              importantgrade: 4,
              importantproduct: 1000
          }],
          channeldata: [{
              explain: "签到",
              product: 10,
              state: 0
          },{
              explain: "注册",
              product: 10,
              state: 0
          },{
              explain: "转发",
              product: 20,
              state: 0
          },{
              explain: "购买商品",
              product: 700,
              product2: 100,
              state: 0
          },{
              explain: "购买商品",
              product: 200,
              state: 1
          }]
      }
  },

  //积分商城分类菜单
  "/jfsc/classmenu": {
      code: 0,
      data: [{
          typeid: 1,
          typename: "电脑数码"
      },{
          typeid: 2,
          typename: "办公用品"
      },{
          typeid: 3,
          typename: "家用电器"
      },{
          typeid: 4,
          typename: "服饰内衣"
      },{
          typeid: 5,
          typename: "个护化妆"
      },{
          typeid: 7,
          typename: "运动户外"
      },{
          typeid: 8,
          typename: "食品饮料"
      },{
          typeid: 9,
          typename: "母婴儿童"
      },{
          typeid: 10,
          typename: "家居家装"
      },{
          typeid: 11,
          typename: "礼品箱包"
      }]
  },

  //积分商城分类商品列表
  "/jfsc/goodslist": {
      code: 0,
      data: [{
          goodsid: 1,
          goodsname: "捷力“牛奶”锅2号",
          icount: 400,
          gimg: "/static/images/creditmall/hot_exchange_01.jpg"
      },{
          goodsid: 2,
          goodsname: "捷牛奶”锅",
          icount: 500,
          gimg: "/static/images/creditmall/hot_exchange_01.jpg"
      },{
          goodsid: 3,
          goodsname: "捷力“牛奶”锅5号",
          icount: 450,
          gimg: "/static/images/creditmall/hot_exchange_01.jpg"
      },{
          goodsid: 4,
          goodsname: "捷力锅",
          icount: 200,
          gimg: "/static/images/creditmall/hot_exchange_01.jpg"
      }],
      pagedata: {
          pagesize: 10,
          pageindex: 1,
          pagecount: 100
      },
  },

  //积分记录列表分类对应积分数
  "/User/UserCore/UserIntegralRecordNow": {
      code: 0,
      data: [{
          integralname: "签到",
          inerralid: 1,
          score: 1000,
          img: "/static/images/integral_icon_01.png"
      },{
          integralname: "消费",
          inerralid: 2,
          score: 2000,
          img: "/static/images/integral_icon_02.png"
      },{
          integralname: "分享",
          inerralid: 3,
          score: 1100,
          img: "/static/images/integral_icon_03.png"
      },{
          integralname: "活动",
          inerralid: 4,
          score: 1400,
          img: "/static/images/integral_icon_04.png"
      },{
          integralname: "扫描烟盒二维码",
          inerralid: 5,
          score: 900,
          img: "/static/images/integral_icon_05.png"
      },{
          integralname: "注册",
          inerralid: 6,
          score: 200,
          img: "/static/images/integral_icon_06.png"
      }]
  },

  //获取积分商城购物车列表
  "/User/creditmall/ShoppingCartList": {
      code: 0,
      msg: "获取成功",
      data: {
          amount: 5,
          totalPrice: 300,
          shopdata: [{
              goodsid: 1,
              goodscount: 3,
              goodsname: "商品名字1",
              goodsimageurl: "/static/images/avatar.jpg",
              goodsprice:　55.5,
              cartid: 1,
              ischoice: 1,
              stock: 20,
              isshelves: 0
          },{
              goodsid: 2,
              goodscount: 2,
              goodsname: "商品名字3商品名字3商品名字3xxxxx",
              goodsimageurl: "/static/images/avatar.jpg",
              goodsprice:　100,
              cartid: 2,
              ischoice: 1,
              stock: 10,
              isshelves: 0
          },{
              goodsid: 1,
              goodscount: 3,
              goodsname: "商品名字1",
              goodsimageurl: "/static/images/avatar.jpg",
              goodsprice:　55.5,
              cartid: 1,
              ischoice: 1,
              isshelves: 1
          },{
              goodsid: 2,
              goodscount: 2,
              goodsname: "商品名字3商品名字3商品名字3xxxxx",
              goodsimageurl: "/static/images/avatar.jpg",
              goodsprice:　100,
              cartid: 2,
              ischoice: 1,
              isshelves: 1
            }]
        }
    },

    //积分商城首页
    "/Shop/IntegralShop/IntegralAttribute": {
        code: 0,
        msg: "获取成功",
        data: {
            "imgdata": [{
                "photourl": "http://lcb.51byod.cn:8011/admin/cqzy_photo/images/201611171130256991.png",
                "linkurl": "http://zy.51byod.cn/ViewRegion/ViewArea/storeDetails?applyid=144"
            },{
                "photourl": "http://lcb.51byod.cn:8011/admin/cqzy_photo/images/201612091720122186.png",
                "linkurl": "http://zy.51byod.cn/ViewRegion/ViewArea/storeDetails?applyid=144"
            }],
            "goodscandata": [{
                "goodsid": 1,
                "goodsname": "iPhone6移动，20",
                "saleprice": 20,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 10
            },{
                "goodsid": 2,
                "goodsname": "iPhone6联通,10元,四川",
                "saleprice": 60,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 50
            },{
                "goodsid": 3,
                "goodsname": "iPhone6移动,20元,四川",
                "saleprice": 60,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 50
            }],
            "topgoodscandata": [{
                "goodsid": 0,
                "goodsname": "iPhone6移动，20",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6联通,10元,四川",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6移动,20元,四川",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6移动，20",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6联通,10元,四川",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6移动,20元,四川",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6移动，20",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6联通,10元,四川",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            },{
                "goodsid": 0,
                "goodsname": "iPhone6移动,20元,四川",
                "saleprice": 0,
                "thumbnailsurll": "/static/images/avatar.jpg",
                "stock": 0
            }]
        }

    },

    //积分商城分类菜单
    "/Shop/IntegralShop/IntegralList": {
        "code": 0,
        "data": [{
            ctitleid: 1,
            ctitle: "电脑数码"
        },{
            ctitleid: 2,
            ctitle: "办公用品"
        },{
            ctitleid: 3,
            ctitle: "家用电器"
        },{
            ctitleid: 4,
            ctitle: "服饰内衣"
        },{
            ctitleid: 5,
            ctitle: "个护化妆"
        },{
            ctitleid: 7,
            ctitle: "运动户外"
        },{
            ctitleid: 8,
            ctitle: "食品饮料"
        },{
            ctitleid: 9,
            ctitle: "母婴儿童"
        },{
            ctitleid: 10,
            ctitle: "家居家装"
        },{
            ctitleid: 11,
            ctitle: "礼品箱包"
        }]
    },

    //积分商城分类上商品
    "/Shop/IntegralShop/IntegralGoods": {
        code: 0,
        data: [{
            goodsid: 1,
            goodsname: "捷力“牛奶”锅2号",
            saleprice: 400,
            thumbnailsurll: "/static/images/creditmall/hot_exchange_01.jpg"
        },{
            goodsid: 2,
            goodsname: "捷牛奶”锅",
            saleprice: 500,
            thumbnailsurll: "/static/images/creditmall/hot_exchange_01.jpg"
        },{
            goodsid: 3,
            goodsname: "捷力“牛奶”锅5号",
            saleprice: 450,
            thumbnailsurll: "/static/images/creditmall/hot_exchange_01.jpg"
        },{
            goodsid: 4,
            goodsname: "捷力锅",
            saleprice: 200,
            thumbnailsurll: "/static/images/creditmall/hot_exchange_01.jpg"
        }],
        pagedata: {
            pagecount: 100,
            pagesize: 10,
            pageindex: 2
        }
    },

    //积分商城商品详情
    "/Shop/IntegralShop/IntegralGoodsDetails": {
        code: 0,
        data: {
            "goodsname": "压轴连衣裙(乐丁),疯狂彩色世界压轴连衣裙",
            "price": 200,
            "stock": 10,
            "currencyid": 0,
            "albumsdata": [{
                "original": "http://lcb.51byod.cn:8011/admin/cqzy_images/images/default/201612271755353507.png"
            }],
            "skugoodsdata": [{
                "catalogid": 37,
                "catalogname": "营业商",
                "tributedata": [{
                    "skuattributevalue": "移动",
                    "skuattribute": "23"
                },{
                    "skuattributevalue": "电信",
                    "skuattribute": "21"
                },{
                    "skuattributevalue": "联通",
                    "skuattribute": "20"
                }]
            },{
                "catalogid": 27,
                "catalogname": "充值面额",
                "tributedata": [{
                    "skuattributevalue": "50元",
                    "skuattribute": "11"
                },{
                    "skuattributevalue": "100元",
                    "skuattribute": "12"
                },{
                    "skuattributevalue": "200元",
                    "skuattribute": "13"
                },{
                    "skuattributevalue": "300元",
                    "skuattribute": "14"
                }]
            },{
                "catalogid": 17,
                "catalogname": "区域",
                "tributedata": [{
                    "skuattributevalue": "重庆",
                    "skuattribute": "1"
                },{
                    "skuattributevalue": "成都",
                    "skuattribute": "2"
                },{
                    "skuattributevalue": "北京",
                    "skuattribute": "3"
                },{
                    "skuattributevalue": "上海",
                    "skuattribute": "4"
                }]
            }]

        }
    },

    //积分商城详情查询价格
    "/Shop/IntegralShop/IntegralGoodsDetailsSelect": {
        code: 0,
        data: {
            skuprice: "233"
        }
    },

    //积分商城购物车
    "/Shop/IntegralShop/IntegralShopCatGoodsList": {
        code: 0,
        data: [{
            supplier: 2,
            suppliername: "京东",
            listgoods: [{
                "goodsname": "测试12",
                "goodscount": 2,
                "goodsid": 11,
                "shopcatid": 1,
                "skuattribute": "1,2",
                "state": 1,
                "price": "100",
                "original": "/static/images/avatar.jpg",
                "skuinfo":"营业商:电信;充值面额:30元;区域:重庆;",
                "isupdown": 1
            },{
                "goodsname": "测试1112",
                "goodscount": 2,
                "goodsid": 22,
                "shopcatid": 2,
                "skuattribute": "1,2",
                "state": 0,
                "price": "100",
                "original": "/static/images/avatar.jpg",
                "skuinfo":"营业商:电信;充值面额:30元;区域:重庆;",
                "isupdown": 0
            },{
                "goodsname": "测试2测试2",
                "goodscount": 2,
                "goodsid": 33,
                "shopcatid": 3,
                "skuattribute": "1,2",
                "state": 1,
                "price": "100",
                "original": "/static/images/avatar.jpg",
                "skuinfo":"营业商:电信;充值面额:30元;",
                "isupdown": 1
            }]
        },{
            supplier: 4,
            suppliername: "重庆中烟",
            listgoods: [{
                "goodsname": "测试1",
                "goodscount": 2,
                "goodsid": 44,
                "shopcatid": 4,
                "skuattribute": "1,2",
                "state": 1,
                "price": "100",
                "original": "/static/images/avatar.jpg",
                "skuinfo":"区域:重庆;",
                "isupdown": 1
            },{
                "goodsname": "测试2",
                "goodscount": 2,
                "goodsid": 55,
                "shopcatid": 5,
                "skuattribute": "1,2",
                "state": 0,
                "price": "100",
                "original": "/static/images/avatar.jpg",
                "skuinfo":"营业商:电信;区域:重庆;",
                "isupdown": 0
            }]
        }],
        totalPrice: 200,
        amount: 5
    },

    //积分商城订单确认页获取订单信息
    "/Shop/IntegralShop/OrderAddCookie": {
        code: 0,
        "orderdata": [{
            "goodsdata": [{
                    "goodsid": 25,
                    "skugoodsid": 0,
                    "goodsname": "iphone5s",
                    "goodsattribute": null,
                    "goodsprice": 20,
                    "basicsprice": 0,
                    "buycount": 2,
                    "goodsimageurl": "http://lcb.51byod.cn:8011/admin/cqzy_images/images/integralshop/201701051119407710-1.png",
                    "skuattribute": null,
                    "skuinfo": "颜色:黑色;内存:32G;"
                },{
                    "goodsid": 25,
                    "skugoodsid": 0,
                    "goodsname": "iphone5s",
                    "goodsattribute": null,
                    "goodsprice": 20,
                    "basicsprice": 0,
                    "buycount": 2,
                    "goodsimageurl": "http://lcb.51byod.cn:8011/admin/cqzy_images/images/integralshop/201701051119407710-1.png",
                    "skuattribute": null,
                    "skuinfo": "颜色:黑色;内存:32G;"
                }],
            "applyid": "1",//供应商id
            "ordertype": 2//订单类型
        },{
            "goodsdata": [{
                    "goodsid": 25,
                    "skugoodsid": 0,
                    "goodsname": "iphone5s",
                    "goodsattribute": null,
                    "goodsprice": 20,
                    "basicsprice": 0,
                    "buycount": 2,
                    "goodsimageurl": "http://lcb.51byod.cn:8011/admin/cqzy_images/images/integralshop/201701051119407710-1.png",
                    "skuattribute": null,
                    "skuinfo": "颜色:黑色;内存:32G;"
                },{
                    "goodsid": 25,
                    "skugoodsid": 0,
                    "goodsname": "iphone5s",
                    "goodsattribute": null,
                    "goodsprice": 20,
                    "basicsprice": 0,
                    "buycount": 2,
                    "goodsimageurl": "http://lcb.51byod.cn:8011/admin/cqzy_images/images/integralshop/201701051119407710-1.png",
                    "skuattribute": null,
                    "skuinfo": "颜色:黑色;内存:32G;"
                }],
            "applyid": "0",//供应商id
            "ordertype": 2//订单类型
        }],
        "pricecont": 40,//总价
        "contgoods": 2,//总数量
        "key": "integral_key_oaQEtuEUUFB1gk7IcFfeCUlY04JM"
    },

    //积分商城限时兑换
    "/Shop/IntegralShop/TimeLimitDiscount": {
        code: 0,
        data: {
            Integralgoods: [{
                id: 1,
                skuattributevalue: "捷力厨房刀具",
                price: 2200,
                timeprice: 1700,
                staretime: "2017-1-10",
                endtime: "2017-2-12",
                timegoodsurl: "/static/images/creditmall/hot_exchange_02.jpg"
            },{
                id: 2,
                skuattributevalue: "捷力“不锈钢”盆",
                price: 1900,
                timeprice: 1600,
                staretime: "2017-1-10",
                endtime: "2017-2-12",
                timegoodsurl: "/static/images/creditmall/hot_exchange_01.jpg"
            },{
                id: 3,
                skuattributevalue: "捷力牛奶锅",
                price: 1200,
                timeprice: 1000,
                staretime: "2017-1-03",
                endtime: "2017-2-11",
                timegoodsurl: "/static/images/creditmall/hot_exchange_03.jpg"
            }]
        }
    },

    //积分商城积分转赠积分分类
    "/Shop/IntegralShop/IntegralClassificationTo": {
        code: 0,
        data: [{
            "interralid": 1,
            "typename": "注册",
            "score": 600,
            "sort": 1
        },{
            "interralid": 2,
            "typename": "签到",
            "score": 900,
            "sort": 2
        },{
            "interralid": 8,
            "typename": "二维码",
            "score": 500,
            "sort": 8
        }],
        totalscore: 2000
    },

    //积分商城话费充值商品列表
    "/Shop/IntegralShop/RechargeCore": {
        code: 0,
        data: [{
            "rerchargeid": 23,
            "rechargegoodsname": "中国移动 100元话费直充 全国通用 移动充值话费100元",
            "score": 2300,
            "rerchargeurl": "https://img.alicdn.com/bao/uploaded/i4/TB1_8PLNpXXXXcuXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
        },{
            "rerchargeid": 23,
            "rechargegoodsname": "中国移动 50元话费直充 全国通用 移动充值话费50元",
            "score": 1300,
            "rerchargeurl": "https://img.alicdn.com/bao/uploaded/i4/TB18GTANpXXXXX1aXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
        },{
            "rerchargeid": 23,
            "rechargegoodsname": "中国联通 50元话费直充",
            "score": 2300,
            "rerchargeurl": "https://img.alicdn.com/bao/uploaded/i4/TB1B8kHLpXXXXb2XpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
        }],
        pagedata: {
            pageindex: 1,
            pagecount: 100,
            pagesize: 10
        }
    }

}
