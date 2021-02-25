<template>
	<view class="contentWrap">
		<scroll-view scroll-y>
			<view class="content">
				<navigationbar></navigationbar>
				<scrollbar></scrollbar>
				<verticalscroll-bar></verticalscroll-bar>
				
				<view class="text-area">
					<text class="iconfont icon-youjiantou_huaban"></text>
					<text class="iconfont icon-pingfendengjiRating1"></text>
					<text class="iconfont icon-pingfendengjiRating7"></text>
					<text class="iconfont icon-gengduo"></text>
					<text class="iconfont icon-guanbi"></text>
					<text class="iconfont icon-zhibozhong"></text>
					<text class="iconfont icon-sousuo"></text>
					
				</view>
				<tabbar :tabbar-id="tabbarId"></tabbar>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue';
	import navigationbar from '../../components/navigation-bar/navigation-bar.vue';
	import scrollbar from '../../components/scrollbar/scrollbar.vue';
	import verticalscrollBar from '../../components/verticalscroll-bar/verticalscroll-bar.vue';
	export default {
		data() {
			return {
				tabbarId:0,
			}
		},
		components:{
			tabbar,
			navigationbar,
			scrollbar,
			verticalscrollBar
		},
		onLoad() {

		},
		computed:{
			
		},
		methods: {
			changeTab:function(){
				this.tabbarId++;
			}
		}
	}
</script>

<style>
	page,.contentWrap{
		width: 100%;height: 100%;
	}
	.content {
		width: 100%;
		height: 100%;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
</style>
