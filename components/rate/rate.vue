<template>
	<view class="rateArea">
		<text v-if="starNum[0]!=0" class="iconfont icon-pingfendengjiRating1 red" v-for="index of starNum[0]"></text>
		<text v-if="starNum[1]!=0" class="iconfont icon-pingfendengjiRating7 red" v-for="index of starNum[1]"></text>
		<text v-if="starNum[2]!=0" class="iconfont icon-pingfendengjiRating1 gray" v-for="index of starNum[2]"></text>
	</view>
</template>

<script>
	import {navigateTo} from "../../lib/js/GlobalFunction.js"
	export default {
		name:'rate',
		data() {
			return {
				
			}
				
		},
		props:['rateNum'],
		computed:{
			starNum(){
				switch (this.rateNum) {
					case 0:
						var star = [0,0,5];
						break;
					case 0.5:
						var star = [0,1,4];
						break;
					case 1:
						var star = [1,0,4];
						break;
					case 1.5:
						var star = [1,1,3];
						break;
					case 2:
						var star = [2,0,3];
						break;
					case 2.5:
						var star = [2,1,2];
						break;
					case 3:
						var star = [3,0,2];
						break;
					case 3.5:
						var star = [3,1,1];
						break;
					case 4:
						var star = [4,0,1];
						break;
					case 4.5:
						var star = [4,1,0];
						break;
					case 5:
						var star = [5,0,0];
						break;
					
				} 
				// console.log(star)
				return star;
			}
		},
		created() {//监听页面加载，其参数为上个页面传递的数据，参数类型为Object
				// this.getLoginMsg()
		},
		methods:{
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
.rateArea{
	margin: 0 15rpx;
	.red{
		color: #ff0038;
	}
	.gray{
		color:#e2ddd7;
	}
}
</style>
