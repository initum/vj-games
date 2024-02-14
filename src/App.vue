<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

const block1 = ref()
const selected = ref(0);

const onClick2 = (e:Event) =>{
  const left = block1.value.getBoundingClientRect().left
  const top = block1.value.getBoundingClientRect().top
  //console.log(e, left, block1.value.offsetLeft, top, block1.value.offsetTop)
}

const onClickAfter = (id: number) =>{
  if (selected.value == id){
    selected.value = 0
    return
  }

  selected.value = id
}

const onClick3 = (id: number) => {
  console.log(id)
}
</script>

<template>
  <div class="container" :class="`selected-${selected}`">
    <div class="block block-pink" ref="block1">
      <div class="blur"></div>
      <div class="bg" @click="onClick3(1)"></div>
      <div class="action" @click.prevent="onClickAfter(1)"></div>
      <div class="after after1" @click.prevent="onClickAfter(1)"></div>
      <div class="after after2" @click.prevent="onClickAfter(1)"></div>
    </div>
    <div class="block">
      <div class="blur"></div>
      <div class="bg" @click="onClick3(2)"></div>
      <div class="action" @click="onClickAfter(2)"></div>
    </div>
    <div class="block block-pink">
      <div class="blur"></div>
      <div class="bg"></div>
      <div class="action" @click="onClickAfter(3)"></div>
      <div class="after after1" @click.prevent="onClickAfter(3)"></div>
      <div class="after after2" @click.prevent="onClickAfter(3)"></div>
    </div>
    <div class="block">
      <div class="blur"></div>
      <div class="bg"></div>
      <div class="action" @click.prevent="onClickAfter(4)"></div>
    </div>
  </div>
</template>

<style scoped>

</style>
