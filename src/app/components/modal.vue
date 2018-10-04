<template>
  <transition name="boardal">
        <div class="boardal">
          <div class="boardal__mask" v-if="hasMask" @click="clickMask"></div>
          <div class="boardal__wrapper">
            <slot></slot>
            <div class="boardal__x" v-if="hasX" @click="clickX">&times;</div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
:root {
  --accent: #8fd1f2;
}

[v-cloak] {
  display: none;
}

.boardal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__mask {
    background: rgba(#000,.65);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  &__wrapper {
    position: relative;
    width: 65vw;
    max-width: 60em;
    min-width: 30em;
    max-height: 65vh;
    height: 30em;
    background: #fff;
    color: #333;
    display: flex;
    flex-direction: var(--cross, column);
    border-radius: .2em;
    box-shadow: 0 0 0 1px rgba(0,0,0,.2), 0 1em 2em -1em;
  }
  &__x {
    cursor: pointer;
    font-size: 2em;
    line-height: .5;
    opacity: .15;
    &:hover {
      opacity: .65;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: opacity .25s
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

// modal content sliders
article {
  flex: 1 1 100%;
  height: 100%;
  display: flex;
  flex-direction: var(--axis, row);
  overflow: hidden;
}
section {
  width: 100%;
  visibility: hidden;
  flex: 0 0 100%;
  padding: 2em;
  overflow: auto;
  will-change: transform;
  transform: translate(var(--x, 0%), var(--y, 0%));
  transition: transform 300ms ease-out;
  position: relative;
  h2,h3,h4 {
    margin-top: 0;
  }
  &.current {
    visibility: visible;
  }
}
footer {
  position: relative;
  text-align: right;
  display: flex;
  flex-direction: var(--axis-reverse, row-reverse);
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0 1px rgba(#000, .1);
  background: rgba(#000, .05);
  &:not(:empty) {
    padding: 1em;
  }
}

.step-dots {
  display: flex;
  flex-direction: var(--axis, row);
}
.step-dot {
  cursor: pointer;
  width: 1em;
  height: 1em;
  margin: .5ch;
  border-radius: 1em;
  background: currentColor;
  opacity: .2;
  transition: transform 100ms ease-out, opacity 150ms linear;
  &.active {
    opacity: .7;
    box-shadow: 0 0 1em -.25em;
  }
  &:hover {
    transform: scale(1.2)
  }
}
.forward-actions,
.back-actions {
  flex: 1;
  display: flex;
  flex-direction: var(--axis, row);
}
.forward-actions {
  justify-content: flex-end;
  // text-align: right;
}
.back-actions {
  justify-content: flex-start;
  // text-align: left;
}

// boring
*, *::before, *::after {box-sizing: border-box;}

a {
  color: var(--accent);
}

del {
  color: #ca1e34;
  font-style: italic;
}

// broadal buttons
button {
  outline: none;
  font: inherit;
  line-height: 1;
  cursor: pointer;
  padding: .5em 1em;
  border-radius: .35em;
  color: rgba(#000, .7);
  background: rgba(#000, .1);
  border: 2px solid rgba(#000, .05);
  text-shadow: 0 1px 0 rgba(#fff, .4);
  transition: transform 50ms ease-out;
  will-change: transform;
  &:active {
    transform: scale(.95);
  }
  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 1em 0 var(--accent);
  }
  &[disabled] {
    opacity: .2;
    cursor: not-allowed;
  }
  &.primary {
    border-color: transparent;
    background: transparent;
    font-weight: bold;
    &:not([disabled]) {
      color: var(--accent);
    }
  }
  &.accent {
    background: var(--accent);
    &:not([disabled]) {
      color: #fff;
    }
  }
  &.secondary {
    border-color: transparent;
    background: transparent;
    &:not([disabled]) {
      color: rgba(#000, .4);
    }
  }
  &.cancel:not([disabled]) {
    color: var(--accent);
  }
}
</style>


Vue.component('boardal', {
    props: [
      'hasX',
      'hasMask',
      'canClickMask'
    ],
    methods: {
      clickX: function(){
        this.$emit('toggle')
      },
      clickMask: function(){
        if(this.canClickMask) {
          this.$emit('toggle')
        }
      }
    }
  })
  
  let vm = new Vue({
    el: 'main',
    data: {
      modal: {
        isOpen: false,
        hasMask: true,
        canClickMask: false,
        hasX: false
      },
      step: 1,
      max: 1,
      showDots: true,
      orientation: 'row',
      // xray: 'hidden'
    },
    computed: {
      isFirstStep: function(){
        return (this.step === 1)
      },
      isLastStep: function(){
        return (this.step === this.max)
      },
      hasDots: function(){
        return (this.max > 1 && this.showDots)
      },
      x_multiplier: function(){
        return (this.orientation === 'row' ? -1 : 0)
      },
      y_multiplier: function(){
        return (this.orientation === 'row' ? 0 : -1)
      },
      axis: function() {
        return (this.orientation === 'row' ? 'row' : 'column')
      },
      axisReverse: function() {
        return (this.orientation === 'row' ? 'row-reverse' : 'column-reverse')
      },
      cross: function() {
        return (this.orientation === 'row' ? 'column' : 'row')
      },
      crossReverse: function() {
        return (this.orientation === 'row' ? 'column-reverse' : 'row-reverse')
      },
      nextIcon: function() {
        return (this.orientation === 'row' ? 'fa-arrow-right' : 'fa-arrow-down')
      },
      backIcon: function() {
        return (this.orientation === 'row' ? 'fa-arrow-left' : 'fa-arrow-up')
      },
      
    },
    watch: {
      orientation: 'setCssVars',
      // xray: 'setCssVars'
    },
    methods: {
      toggleModal: function(step) {
        step = step || 1
        this.modal.isOpen = !this.modal.isOpen
        if(this.modal.isOpen) {
          let self = this
          setTimeout(function(){
            self.$sections = self.$el.querySelectorAll('section')
            self.max = self.$sections.length
            self.goToStep(step)
          }, 1)
        }
      },
      setCssVars: function(){
        this.$el.style.setProperty('--x', (((this.step * 100) - 100) * this.x_multiplier) + '%')
        this.$el.style.setProperty('--y', (((this.step * 100) - 100) * this.y_multiplier) + '%')
        this.$el.style.setProperty('--axis', this.axis)
        this.$el.style.setProperty('--axis-reverse', this.axisReverse)
        this.$el.style.setProperty('--cross', this.cross)
        this.$el.style.setProperty('--cross-reverse', this.crossReverse)
        // this.$el.style.setProperty('--vision', this.xray)
      },
      goToStep: function(step){
        this.step = step > this.max ? this.max : step < 1 ? 1 : step
        this.currentSection = this.$sections[this.step-1]
        this.$sections.forEach(function(section){
          section.classList.remove('current')
        })
        this.currentSection.classList.add('current')
        this.currentSection.scrollTop = 0
        this.setCssVars()
      },
      skip: function(step){
        this.step+=step
        this.goToStep(this.step)
      },
      reset: function(){
        this.goToStep(1)
      },
      finish: function(){
        this.toggleModal()
      }
    } 
  });  