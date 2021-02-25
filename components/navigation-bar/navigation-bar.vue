<template>
	<view class="navArea" :class="pageId==0?'':'white'">
		<view class="infoArea">
			<view class="shopName">
				乐力保健食品旗舰店<text class="iconfont icon-youjiantou_huaban"></text>
			</view>
			<view class="info">
				<text class="cat">天猫</text>
				<text>综合体验</text>
				<rate :rate-num="rateNum"></rate>
				<text>粉丝数12.4万</text>
			</view>
		</view>

		<view class="followBtn">
			已关注
		</view>
		<view class="infoBtn">
			<text class="left iconfont icon-gengduo"></text><text class="iconfont icon-tubiaozhizuo-"></text><text class="right iconfont icon-guanbi"></text>
		</view>
	</view>
</template>

<script>
	import {navigateTo} from "../../lib/js/GlobalFunction.js"
	import rate from '../rate/rate.vue';
	export default {
		name:'navigationbar',
		data() {
			return {
				tabIcon:[{icon:'iconfont icon-shouyedianpujishishangcheng',text:'首页'},{icon:'iconfont icon-baobei',text:'全部宝贝'},{icon:'iconfont icon-fenlei',text:'宝贝分类'},{icon:'iconfont icon-huiyuan',text:'店铺会员'},],
				pageId:this.tabbarId,//当前页面或点击的id
				rateNum:4.5,
			}
				
		},
		props:['tabbarId'],
		components:{
			rate
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
				this.pageId=e.currentTarget.id*1;
				switch (this.pageId) {
					case 0:
						navigateTo('/pages/index/index',null);
						break;
					case 1:
						navigateTo('/pages/allProducts/allProducts',null);
						break;
					case 2:
						navigateTo('/pages/commodityClassification/commodityClassification',null);
						break;
					case 3:
						navigateTo('/pages/shopMembers/shopMembers',null);
						break;
				} 
			}
			
		}
	}
</script>

<style lang="scss">
.navArea{
	height: 108rpx;
	width: 700rpx;
	padding: 28rpx 25rpx 0 25rpx;
	background: #5f1b12;
	position: relative;
	color: #fff;
	.followBtn,.infoBtn{
		position: absolute;
		height: 58rpx;
		border: 2rpx solid #84453e;
		border-radius: 29rpx;
		background: #400d0a;
		top: 28rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #fff;
		line-height: 58rpx;
		text-align: center;
	}
	.followBtn{
		width: 124rpx;
		right: 226rpx;
	}
	.infoBtn{
		width: 190rpx;
		right: 25rpx;
		.left{margin-right: 20rpx}
		.right{margin-left:20rpx}
	}
	.infoArea{
		.shopName{
			font-size: 30rpx;
			line-height: 58rpx;
			margin-bottom: 10rpx;
		}
		.info{
			height: 26rpx;
			font-size: 24rpx;
			// line-height: 36rpx;
			// color: #fff;
			display: flex;
			align-items: center;
			.cat{
				width: 54rpx;
				height: 26rpx;
				border-radius: 13rpx;
				background: #e20c04;
				font-size: 20rpx;
				line-height: 26rpx;
				text-align: center;
				margin-right: 20rpx;
			}
		}
	}
	
}
.white{
	// background: #fff;
	// color: #000;
}
</style>
