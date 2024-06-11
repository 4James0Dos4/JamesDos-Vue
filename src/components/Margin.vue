<template>
  <div :class="[`margin`, className || ``]">
    <div class="container-21">
      <div class="container-22"><div class="en valign-text-middle worksans-normal-white-16px">EN</div></div>
      <img
        class="svgmargin"
        src="https://cdn.animaapp.com/projects/6666c89bab30bce0f1730bc9/releases/6666c8ca25d5561ec722eea4/img/svg-margin.svg"
        alt="SVG:margin"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Margin",
  props: ["className"],
};
</script>

<style>
.margin {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: -0.1px;
  margin-top: -0.1px;
  padding: 0px 0px 0px 32px;
  position: relative;
  width: 85.95px;
}

.container-21 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
}

.container-22 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 0px 0.9px;
  position: relative;
}

.en {
  letter-spacing: 0;
  line-height: 28.8px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.svgmargin {
  height: 15px;
  margin-right: -0.05px;
  position: relative;
  width: 24px;
}

.margin.margin-1 {
  align-items: center;
  height: 29.9px;
  justify-content: center;
}
</style>
