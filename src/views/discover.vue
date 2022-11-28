<template>
  <div class="discover-page">
    <div id="menu" class="menu-container">
      <div class="menu-right">
        <div class="bg"></div>
        <div class="content">
          <div class="logo">
            <a href="" class="image-logo">
              <!-- <picture>
                <source media="(min-width: 1080px)" srcset="https://sinsekaistudio.jp/cms/wp-content/uploads/2021/11/aru_thumb.jpg" />
                <img src="https://sinsekaistudio.jp/cms/wp-content/uploads/2021/11/asu_thumb_sp-500x353.jpg" alt="明透" />
              </picture> -->
            </a>
          </div>
          <div class="line line-top"></div>
          <ul class="sections">
            <li v-for="(list, index) in menuList">
              <a href="" :ref="`list-${index}`" @mouseenter="debounceMouseEnterHandler">
                <span></span>
                <div class="line-big">{{ list.title }}</div>
                <div class="line-sub">{{ list.sub }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-left">
        <div class="bg"></div>
      </div>
      <div class="menu-bottom">
        <div class="offical">
          <div class="line"></div>
          <figure></figure>
          <div class="text">Offical</div>
        </div>
        <div class="offical">
          <div class="line"></div>
          <figure></figure>
          <div class="text">Offical</div>
        </div>
      </div>
    </div>
    <div id="main" class="main-container">
      <div id="bg" class="bg-container"></div>
      <div id="text"></div>
      <a id="btn">
        <span class="btn-outline"></span>
        <span class="btn-outline"></span>
        <span class="btn-outline"></span>
        <span class="btn-outline"></span>
        <div class="btn-process"></div>
        <b class="btn-text">
          <svg t="1668930804988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6309" width="200" height="200">
            <path
              d="M740.863479 475.644354l-68.544456-68.544456-12.917192-12.917192 12.917192-12.917192 25.626043-25.626043 12.917192-12.917192 12.917193 12.917192 143.547507 143.547508 12.917193 12.917192-12.917193 12.917192-143.547507 143.547508-12.917193 12.917192-12.917192-12.917192-25.626043-25.626043-12.917192-12.917192 12.917192-12.917192 68.544456-68.544456H127.921872v-72.711292l612.941607-0.208342z"
              fill="#000"
              p-id="6310"
            ></path>
            <path
              d="M740.863479 475.644354l-68.544456-68.544456-12.917192-12.917192 12.917192-12.70885 25.626043-25.834385 12.917192-12.917192 12.917193 12.917192 143.339165 143.547508 12.917193 12.917192-12.917193 12.70885-143.339165 143.547508-12.917193 12.917192-12.917192-12.917192-25.626043-25.626043-12.917192-12.917192 12.917192-12.917192 68.544456-68.544456 28.959512-36.251475z"
              fill="#000"
              p-id="6311"
            ></path>
          </svg>
        </b>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce, throttle, scale } from '@/utils/common.js'
import gsap from 'gsap'
console.log(gsap.to)
const menuList = [
  {
    title: 'Iceland',
    sub: 'a magical land',
  },
  {
    title: 'Discover',
    sub: 'the island',
  },
  {
    title: 'Places',
    sub: 'of interest',
  },
  {
    title: 'Discover',
    sub: 'and lifestyle',
  },
  {
    title: 'More',
    sub: 'info and advice',
  },
]
const menuListData = []
const menuItemMouseEnterHandler = (e: Event) => {
  const menuItem = e.target!
  const cursor = (menuItem as HTMLLinkElement).querySelector('span')!
  const title = (menuItem as HTMLLinkElement).querySelector('.line-big') as HTMLDivElement
  titleAnimation(title)
  cursorAnimation(cursor)
}
const debounceMouseEnterHandler = menuItemMouseEnterHandler

const cursorAnimation = (cursor: HTMLElement) => {
  cursor.style.display = 'block'
  let tween = gsap.to(cursor, { width: '8px', duration: 1, ease: 'elastic', delay: 0.5 })
  tween.play().then(() => {
    setTimeout(() => {
      gsap.to(cursor, { width: '0px', duration: 0.5 })
    }, 2000)
  })
}

const titleAnimation = (title: HTMLElement) => {
  let tween = gsap.to(title, { x: '16.2px', duration: 1, ease: 'power1.out' })
  tween.play().then(() => {
    setTimeout(() => {
      tween.reverse()
    }, 2000)
  })
}
</script>

<style lang="less" scoped>
.discover-page {
  height: 100%;
  width: 100%;
  position: relative;
  .menu-container {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 317px;
    .menu-left {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 4.2vw;
      height: 100vh;
      .bg {
        width: 100%;
        height: 100%;
        background-image: url(../assets/bg/bg-menu-small.jpg);
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .menu-right {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      .bg {
        width: 100%;
        height: 100%;
        background-image: url(../assets/bg/bg-menu-big.jpg);
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .content {
        display: block;
        position: absolute;
        top: 0;
        right: 1.8vw;
        width: 8.7vw;
        height: calc(82vh - 10px);
        .logo {
          position: relative;
          width: 8.7vw;
          height: 8.7vw;
          .image-logo {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 17.5%;
            left: 17.5%;
            width: 65%;
            height: 65%;
            @media screen and (min-width: 1600px) {
              top: 22.5%;
              left: 22.5%;
              width: 55%;
              height: 55%;
            }
            img {
              width: 100%;
              height: auto;
              vertical-align: top;
              image-rendering: -webkit-optimize-contrast;
              border-radius: 50%;
            }
          }
        }
        .line {
          display: block;
          width: 100%;
          height: 1px;
          background-color: #c1d3d7;
          transform-origin: 0 50%;
          &.line-top {
            position: relative;
            margin: 0 0 3.5vh;
          }
        }
        .sections {
          display: block;
          margin: 0;
          padding: 0;
          position: relative;
          list-style-type: none;
          width: 100%;
          height: auto;
          li {
            width: 100%;
            a {
              display: inline-block;
              position: relative;
              width: 90%;
              padding: 1.1vh 0;
              font-family: playfair_displayregular;
              font-weight: 400;
              color: #434148;
              text-decoration: none;
              @media screen and (min-height: 1600px) {
                width: 80%;
              }
              span {
                display: none;
                position: absolute;
                top: 2.7vh;
                left: 0;
                // width: 0.6vw;
                height: 1px;
                background-color: #434148;
                transform-origin: 0 50%;
              }
              .line-big {
                font-size: 2.3vh;
                // transform: matrix(1, 0, 0, 1, 19.2, 0);
                @media screen and (min-height: 1600px) {
                  font-size: 2vh;
                }
              }
              .line-sub {
                font-size: 1.55vh;
                @media screen and (min-height: 1600px) {
                  font-size: 1.15vh;
                }
              }
            }
          }
        }
      }
    }
    .menu-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      height: calc(4.2vw * 2);
      width: 100%;
      .offical {
        display: block;
        position: relative;
        width: 100%;
        height: 4.2vw;
        text-decoration: none;
        font-weight: 400;
        cursor: pointer;
        .line {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #c1d3d7;
          transform-origin: 0 50%;
        }
        figure {
          top: calc(4.2vw / 2 - 1.6vw / 2);
          left: calc(4.2vw / 2 - 1.6vw / 2);
          width: 1.6vw;
          height: 1.6vw;
          background: #ccc 50% / contain no-repeat;
          margin: 0;
          padding: 0;
          display: block;
          position: absolute;
        }
        .text {
          display: inline-block;
          position: absolute;
          left: 6vw;
          top: calc(4.2vw / 2 - 1.5vh / 2);
          font-weight: 400;
          font-size: 1.3vh;
          line-height: 1.5vh;
          color: #434148;
          &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: -1px;
            left: 0;
            background-color: #9e9d9b;
            transform-origin: 100% 50%;
          }
        }
      }
    }
  }
  .main-container {
    margin-left: 317px;
    width: calc(100% - 317px);
    height: 100%;
    overflow: hidden;
    .bg-container {
      width: 100%;
      height: 100%;
      // background-image: url(https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_main_pc.jpg);
      background: 'white';
      background-size: cover;
      animation: scaleBg 1s linear;
    }
  }
}

@keyframes scaleBg {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
