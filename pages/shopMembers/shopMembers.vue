<template>
	<view class="shopMembers">
		<navigationbar></navigationbar>
		<view class="topSetArea">


		</view>
		<view class="cardArea">
			<view class="cardper" v-for="(item,index) in cardAreaData" :key="index" @tap="gopages(index+1)">
				<view class="title">
					{{item.name}}
				</view>
				<text class="iconfont" :class="item.icon"></text>
			</view>
		</view>
		<tabbar :tabbar-id="tabbarId"></tabbar>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	import navigationbar from '../../components/navigation-bar/navigation-bar.vue';
	import {navigateTo} from "../../lib/js/GlobalFunction.js"
	export default {
		data() {
			return {
				tabbarId:4,
				cardAreaData:[{name:'购物车',icon:'icon-gou_wu_che2'},{name:'会员中心',icon:'icon-kabao'}]
			};
		},
		components:{
			tabbar,
			navigationbar
		},
		methods:{
			gopages:function(id){
				console.log(id)
				switch(id){
					case 1:
						navigateTo('/pages/shopCar/shopCar',null)
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;height: 100%;
}
.shopMembers{
	width: 100%;
	height: 100%;
	background: #f2f2f2;
	.topSetArea{
		height: 300rpx;
		background:linear-gradient(to right top,#f58e0b,50%,#ff5004);
	}
	.cardArea{
		height: 108rpx;
		width: 660rpx;
		background: #fff;
		border-radius: 20rpx;
		position: relative;
		top: -40rpx;
		margin: auto;
		padding: 20rpx 20rpx 0 20rpx;
		display: flex;
		justify-content: space-between;
		.cardper{
			width: 320rpx;
			height: 84rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.title{
				font-size: 36rpx;
				font-weight: bold;
			}
			.iconfont{
				font-size: 68rpx;
			}
		}
	}

}
</style>
