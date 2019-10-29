<template>
  <div id="app" class="text-left mt-3 mt-md-5 mb-md-5 pt-md-5">
    <div class="container">
      <div class="row">
        <div class="col col-md-3 col-sm-6 col-12">
          <img style="max-width: 100%" src="https://avatars0.githubusercontent.com/u/1303929?s=460&v=4">
          <h3 class="mt-4 mb-4"><strong>Rex Valkering</strong></h3>
          <p>I am a full-stack developer and security analyst with a bachelor's degree in Computer Science and roughly 9 years of experience. I specialize in creation of administration software and security.</p>
          <p>In my free time I spend a lot of time on big and small IT projects. On the right you will find a selection of my voluntary project portfolio.</p>
          <h4 class="mt-4">Contact info</h4>
          <p><i>myfullname at gmail dot com</i></p>
          <p><a href="https://www.linkedin.com/in/rex-valkering/">LinkedIn</a></p>
        </div>
        <div class="col col-md-9 pl-md-5">
          <navigation></navigation>
          <hr>
          <transition name="slide" mode="out-in">
            <router-view :key="$route.fullPath"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    portfolio: Portfolio,
    navigation: Navigation
  }
}
</script>

<style>
a {
  color: #246b81;
}

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0px);
        opacity: 1;
    }
    to {
        transform: translateY(-30);
        opacity: 0;
    }
}
</style>
