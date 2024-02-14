<script setup lang="ts">
import { ref, watch } from "vue";
import axios from "axios"; // Импорт Axios

const selected = ref(0);

// Функция для отправки OSC сообщений теперь принимает адрес OSC в качестве параметра
const sendOscMessage = (address, id) => {
  axios.post('http://localhost:3000/send-osc', {
    address, // Используйте переданный адрес
    args: [id],
  })
  .then(() => console.log(`OSC message sent for address: ${address} with id: ${id}`))
  .catch(error => console.error('Error sending OSC message:', error));
};

watch(() => selected.value, (id) => {
  switch (id) {
    case 1:
      console.log("Нажата кнопка 1");
      // Отправка OSC сообщений для кнопки 1 с соответствующими адресами
      sendOscMessage('/composition/columns/1/connect', 1);
      break;
    case 2:
      console.log("Нажата кнопка 2");
      sendOscMessage('/composition/columns/2/connect', 1);
      break;
    case 3:
      console.log("Нажата кнопка 3");
      sendOscMessage('/composition/columns/3/connect', 1);
      break;
    case 4:
      console.log("Нажата кнопка 4");
      sendOscMessage('/composition/columns/4/connect', 1);
      break;
  }
});

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
