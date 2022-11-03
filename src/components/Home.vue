<script setup>
import { ref, watch } from 'vue'
import { hexToRgb, rgbToHsl } from '../utils/color'
const hex = ref('#000000')
const rgb = ref('rgb(0,0,0)')
const hsl = ref('hsl(0,0,0)')

watch(hex, () => {
  const r = hexToRgb(hex.value)
  const h = rgbToHsl(...r)
  rgb.value = `rgb(${r[0]},${r[1]},${r[2]})`
  hsl.value = `hsl(${h[0]},${h[1]},${h[2]})`
})
</script>

<template>
  <div class="infos">
    <span class="label">请点击拾取颜色: </span>
    <input type="color" id="myColor" autofocus v-model="hex">
  </div>
  <div class="infos">
    <span class="label-color">{{ hex }}</span>
    <span class="label-color">{{ rgb }}</span>
    <span class="label-color">{{ hsl }}</span>
  </div>
</template>

<style scoped>
.infos{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  height: 40px;
}
#myColor{
  margin: 0 8px;
}
.label{
  font-size: 14px;
  line-height: 27px;
}
.label-color{
  font-size: 14px;
  line-height: 27px;
  margin: 0 4px;
}
</style>