<template>
  <div :class="[`container-19`, className || ``]">
    <div class="overlap-group-3">
      <h1 class="title valign-text-middle jamesdoscommuseomodernoblack-240">Jamesdos</h1>
      <div class="emphasis-hurricane valign-text-middle jamesdoscommuseomodernoblack-110">(Hurricane)</div>
      <div class="place valign-text-middle jamesdoscommuseomodernoblack-72">Vermillion</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["className"],
};
</script>

<style>
.container-19 {
  height: 772px;
  margin-bottom: -10px;
  margin-top: -23.5px;
  max-width: 1224px;
  position: relative;
  width: 1224px;
}

.overlap-group-3 {
  height: 389px;
  left: 14px;
  position: relative;
  top: 352px;
}

.title {
  color: var(--jamesdoscomnero);
  font-weight: 900;
  height: 312px;
  left: 24px;
  line-height: 312px;
  position: absolute;
  text-align: center;
  top: -1px;
  width: 1183px;
}

.emphasis-hurricane {
  color: var(--jamesdoscomamethyst);
  font-weight: 900;
  height: 118px;
  left: 611px;
  line-height: 143px;
  position: absolute;
  text-align: center;
  top: 215px;
  white-space: nowrap;
  width: 601px;
}

.place {
  color: var(--jamesdoscomalabaster);
  font-weight: 900;
  height: 87px;
  left: 518px;
  line-height: 86.4px;
  position: absolute;
  top: 302px;
  width: 414px;
}

.container-19.container-20 {
  margin-top: -13.5px;
}
</style>
