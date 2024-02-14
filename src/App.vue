<script setup lang="ts">
import {ref, watch} from "vue";

const selected = ref(0);

watch(()=>selected.value, (id: typeof selected.value)=>{
  switch (id){
    case 1:{
      console.log("Нажата кнопка 1")
      break;
    }
    case 2:{
      console.log("Нажата кнопка 2")
      break;
    }
    case 3:{
      console.log("Нажата кнопка 3")
      break;
    }
    case 4:{
      console.log("Нажата кнопка 4")
      break;
    }
  }
})

const onClickContainer = () => {
  selected.value = 0
}

const onClickBlock = (id: number) => {
  if (selected.value === id){
    selected.value = 0
  }else{
    selected.value = id
  }
}

const onClick1 = (e: MouseEvent) => {
  const target = e.target as HTMLTextAreaElement;
  const x = e.offsetX
  const w = target.clientWidth

  if (w / 2 <= x) {
    onClickBlock(2)
  } else {
    onClickBlock(0)
  }
}

const onClick2 = (e: MouseEvent) => {
  const target = e.target as HTMLTextAreaElement;
  const x = e.offsetX
  const w = target.clientWidth

  if (w / 2 > x) {
    onClickBlock(1)
  } else {
    onClickBlock(3)
  }
}

const onClick3 = (e: MouseEvent) => {
  const target = e.target as HTMLTextAreaElement;
  const x = e.offsetX
  const w = target.clientWidth

  if (w / 2 > x) {
    onClickBlock(2)
  } else {
    onClickBlock(4)
  }
}

const onClick4 = (e: MouseEvent) => {
  const target = e.target as HTMLTextAreaElement;
  const x = e.offsetX
  const w = target.clientWidth

  if (w / 2 > x) {
    onClickBlock(3)
  } else {
    onClickBlock(0)
  }
}
</script>

<template>
  <div class="container" :class="`${!!selected && 'selected'} selected-${selected}`" @click="onClickContainer">
    <div class="block block-pink">
      <div class="blur"></div>
      <div class="bg" @click.stop="onClick1"></div>
      <div class="action" @click.stop="onClickBlock(1)"></div>
      <div class="after after1" @click.stop="onClickBlock(1)"></div>
      <div class="after after2" @click.stop="onClickBlock(1)"></div>
    </div>
    <div class="block">
      <div class="blur"></div>
      <div class="bg" @click.stop="onClick2"></div>
      <div class="action" @click.stop="onClickBlock(2)"></div>
    </div>
    <div class="block block-pink">
      <div class="blur"></div>
      <div class="bg" @click.stop="onClick3"></div>
      <div class="action" @click.stop="onClickBlock(3)"></div>
      <div class="after after1" @click.stop="onClickBlock(3)"></div>
      <div class="after after2" @click.stop="onClickBlock(3)"></div>
    </div>
    <div class="block">
      <div class="blur"></div>
      <div class="bg" @click.stop="onClick4"></div>
      <div class="action" @click.stop="onClickBlock(4)"></div>
    </div>
  </div>
</template>

<style scoped>

</style>
