<template>
	<view class="shopcarArea">
		<!-- <view class="titleArea">
			<text class="iconfont icon-fanhui2" @tap="goPages"></text>
		</view> -->
		<view class="clickArea" @tap="taptest">
			{{index}} <br>
			<text v-if="clickstatus==true" :key="index">请求中</text>
			<text v-if="clickstatus==false" :key="index+'-'+index">未请求</text>
		</view>
		<button type="primary" @tap="sendor">and</button>
		{{textMs}}
		<!-- 购物车 -->
		<view class="l" @click="textToast">
			toast
		</view>
		<tabbar :tabbar-id="tabbarId"></tabbar>
	</view>
</template>

<script>
	import {encrypt,decrypt,system,systemId,base64ToArrayBuffer,sendData,sendD,work,regMail,sendDSocket} from "../../lib/js/GlobalFunction.js"
	import tabbar from '../../components/tabbar/tabbar.vue'
	import {navigateTo} from "../../lib/js/GlobalFunction.js"
	export default {
		data() {
			return {
				tabbarId:3,
				// initShopCar:[{name:'乐力旗舰店',list:[{id:001}]},{},{},{},{}],//购物
				clickstatus:false,
				index:0,
				textMs:null,
			};
		},
		components:{
			tabbar
		},
		methods:{
			goPages:function(){
				navigateTo('/pages/shopMembers/shopMembers',null);
			},
			taptest:function(){
				
				var json = {useridx: 11000036, playbackId: 560, password: "", type: 1};
				var array=base64ToArrayBuffer(encrypt(JSON.stringify({useridx: 11000036, playbackId: 560, password: "", type: 1})))
				if(this.clickstatus==false){
					console.log(this.clickstatus)
					this.clickstatus=true;
					var res = JSON.parse(decrypt(sendData('POST',this.GLOBAL.urlPoint+'/UserInfo/getPlayBackLiveUrl',array)));
					console.log(res)
					if(res.code==102){ 
						this.index++;
						this.clickstatus = false;
						// this.liveRoomPass='';
						// this.$store.commit("set_allLiveRevideoUrl",res.data)
						navigateTo('/pages/shopMembers/shopMembers',null);
					}else{
						this.index++;
						this.clickstatus = false;
						// console.log(this.liveClickStatus)
						// uni.showToast({
						// 	title:res.msg,
						// 	duration: 1500,
						// 	icon:"none",
						// });
					}
				}else if(this.clickstatus==true){
					console.log('请求中 不能连续请求')
					console.log(this.clickstatus)
				}
				
			},
			sendor:function(){
				uni.request({
					url: 'http://173.248.234.130:2020/'+'H5/Active/GoldenAnchroRank', // http://173.248.234.130:2020/ https://api.bunnylive.me/ 仅为示例，并非真实接口地址。
					method:'POST',
					data: {
						token:'jCk5vVeCMvckvMGADlougXbkoqOTbigJKyAGMLxJtZ0/8fV4woVtdPIfWButO9jcdMF7L+PF9hGhsC9bVbZYHQ=='
					},
					success: function(res) {
						console.log(res);
					}
				});
				// var a = false;
				// this.textMs = 1;
			},
			textToast:function(){
				this.$loading('aaaa')
			}
		}
		
	}
</script>

<style lang="scss">
page{
	width: 100%;height: 100%;
}
.shopcarArea{
	.titleArea{
		height: 90rpx;
		width: 100%;
		background: #cecece;
		font-size: 24rpx;
		line-height: 90rpx;
		.iconfont{
			padding: 15rpx;
		}
	}
	.clickArea{
		height: 300rpx;
		background: #cecece;
	}
}
</style>
