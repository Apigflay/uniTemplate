<template>
	<view>
		<navigationbar></navigationbar>
		全部宝贝
		<video ref="video" id="my_video" class="video" x5-video-player-type="h5-page" :x5-video-player-fullscreen='true'
		 :webkit-playsinline="true" :playsinline="true" :autoplay="true" :loop="true" objectFit="cover" :muted="true"
		  :controls="true" src="../../static/promotionalVideo.mp4"
		 :show-center-play-btn="false" >
		 </video>
		 <!-- <video ref="video" id="my_video" class="video" x5-video-player-type="h5-page" :x5-video-player-fullscreen='true'
		  :webkit-playsinline="true" :playsinline="true" :autoplay="true" :loop="true" objectFit="cover" muted="muted"
		   :controls="false" src="http://ls.mycat1314.com/cat/11000042-1592985934.flv"
		  :show-center-play-btn="false" >
		  </video> -->
		<tabbar :tabbar-id="tabbarId"></tabbar>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	import navigationbar from '../../components/navigation-bar/navigation-bar.vue';
	export default {
		data() {
			return {
				tabbarId:1,
			};
		},
		components:{
			tabbar,
			navigationbar
		},
		onReady() {
			this.getInitMsg()
		},
		methods:{
			getInitMsg:function(){
				var oUl = document.getElementById("my_video");        //加上它的上级元素，可以避免我们筛选出许多无用的节点出来
				// console.log(oUl)
				var aLi = oUl.getElementsByTagName("video");
				console.log(aLi)
				// console.log(stream.mediaStream)
				// aLi[0].srcObject = stream.mediaStream;
				aLi[0].muted=true;
				// aLi[0].autoplay=true;
			}
		}
	}
</script>

<style lang="scss">

</style>
