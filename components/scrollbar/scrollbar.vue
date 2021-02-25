<template>
	<view class="scrollbarArea">
		<text class="iconfont icon-sousuo"></text>
		<view class="scroll">
			<scroll-view class="scVitical" scroll-x="true" show-scrollbar='false' @scrolltolower="scrolltolower" lower-threshold="50">
				<view class="scrollper" v-for="(item,index) in scrollbabData" :key="index">{{item}}</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	// import {navigateTo} from "../../lib/js/GlobalFunction.js"
	export default {
		name:'scrollbar',
		data() {
			return {
				scrollbabData:['首页','宝贝','618','分类','微淘','添加']
			}
				
		},
		props:['tabbarId'],
		components:{
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
			},
			scrolltolower:function(){
				console.log('即将到达右侧')
				var num =Math.floor(Math.random()*10)
				this.scrollbabData.push('款式'+num,'款式'+num,'款式'+num,'款式'+num,'款式'+num)
			}
			
		}
	}
</script>

<style lang="scss">
.scrollbarArea{
	width: 690rpx;
	padding: 0 30rpx;
	height: 90rpx;
	background: #5f1b12;
	color: #fff;
	font-size: 42rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.scroll{
		height: 90rpx;
		width: 620rpx;
		// background: palevioletred; 
		.scVitical{
			white-space: nowrap; // 滚动必须加的属性
			height: 90rpx;
			display: flex;
			align-items: center;
			.scrollper{
				display: inline-block;
				padding: 0 10rpx;
				margin: 0 20rpx;
				height: 42rpx;
				font-size: 30rpx;
			}
		}
		/deep/.uni-scroll-view::-webkit-scrollbar {
			/* 隐藏滚动条，但依旧具备可以滚动的功能 */
			display: none
		}
		/deep/ .uni-scroll-view{
			display: flex;
			align-items: center;
		}
	}
	
}
.navArea{
	height: 140rpx;
	width: 700rpx;
	padding: 50rpx 30rpx 0 20rpx;
	background: #5f1b12;
	position: relative;
	color: #fff;
	.followBtn,.infoBtn{
		position: absolute;
		height: 76rpx;
		border: 3rpx solid #84453e;
		border-radius: 38rpx;
		background: #400d0a;
		top: 40rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		color: #fff;
		line-height: 70rpx;
		text-align: center;
	}
	.followBtn{
		width: 136rpx;
		right: 215rpx;
	}
	.infoBtn{
		width: 186rpx;
		right: 20rpx;
		.left{margin-right: 30rpx}
		.right{margin-left:30rpx}
	}
	.infoArea{
		.shopName{
			font-size: 40rpx;
			// color: #fff;
			margin-bottom: 20rpx;
		}
		.info{
			height: 36rpx;
			font-size: 28rpx;
			// line-height: 36rpx;
			// color: #fff;
			display: flex;
			align-items: center;
			.cat{
				width: 80rpx;
				height: 36rpx;
				border-radius: 18rpx;
				background: #e20c04;
				font-size: 22rpx;
				line-height: 36rpx;
				text-align: center;
				margin-right: 30rpx;
			}
		}
	}
	
}
.white{
	// background: #fff;
	// color: #000;
}
</style>
