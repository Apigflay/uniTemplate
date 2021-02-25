<template>
	<view class="tabbarArea">
		<view class="per" :class="index==pageId?'perRed':''" v-for="(item,index) in tabIcon" :key="item.icon" :id="index" @click="getClickPer">
			<text :class="item.icon" class="icon"></text>
			<text class="text">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	import {navigateTo} from "../../lib/js/GlobalFunction.js"
	export default {
		name:'tabbar',
		data() {
			return {
				tabIcon:[{icon:'iconfont icon-shouyedianpujishishangcheng',text:'首页'},
						{icon:'iconfont icon-baobei',text:'全部宝贝'},
						{icon:'iconfont icon-fenlei',text:'宝贝分类'},
						{icon:'iconfont icon-gou_wu_che2',text:'购物车'},
						{icon:'iconfont icon-huiyuan',text:'店铺会员'}],
				pageId:this.tabbarId,//当前页面或点击的id
			}
				
		},
		props:['tabbarId'],
		computed:{
			// pageId(){
			// 	return this.tabbarId;
			// }
		},
		created() {//监听页面加载，其参数为上个页面传递的数据，参数类型为Object
				// this.getLoginMsg()
		},
		methods:{
			getLoginMsg:function(){
				var that = this;
				uni.getStorage({
					key: 'storage_login_str',
					success: function (res) {
						that.loginData = JSON.parse(res.data);
						if(that.loginData.isAnchor==false){
							that.isAnchor = false;
						}
						
					}
				});
			},
			getClickPer:function(e){
				switch (e.currentTarget.id*1) {
					case 0:
						uni.redirectTo({
							url: '/pages/index/index'
						});
						// navigateTo('/pages/index/index',null);
						break;
					case 1:
						uni.redirectTo({
							url: '/pages/allProducts/allProducts'
						});
						// navigateTo('/pages/allProducts/allProducts',null);
						break;
					case 2:
						uni.redirectTo({
							url: '/pages/commodityClassification/commodityClassification'
						});
						// navigateTo('/pages/commodityClassification/commodityClassification',null);
						break;
					case 3:
						uni.redirectTo({
							url: '/pages/shopCar/shopCar'
						});
						// navigateTo('/pages/shopCar/shopCar',null)
						break;
					case 4:
						uni.redirectTo({
							url: '/pages/shopMembers/shopMembers'
						});
						// navigateTo('/pages/shopMembers/shopMembers',null);
						break;
				} 
			}
			
		}
	}
</script>

<style lang="scss">
.tabbarArea{
	height: 96rpx;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #f9f9f9;
	// background:rgba(25,25,25,1);
	.per{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		.icon{
			font-size: 40rpx;
		}
		.text{
			font-size: 20rpx;
		}
	}
	.perRed{
		color:red;
	}
}
</style>
