<template>
  <div :class="[`strong-1`, className || ``]">
    <div class="youwillfindme-here valign-text-middle worksans-bold-bunker-18px">You will find me <br />here:</div>
  </div>
</template>

<script>
export default {
  name: "xStrong",
  props: ["className"],
};
</script>

<style>
.strong-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  position: relative;
}

.youwillfindme-here {
  letter-spacing: 0;
  line-height: 26.8px;
  margin-top: -1px;
  position: relative;
  text-align: right;
  width: fit-content;
}

.strong-1.strong-2 .youwillfindme-here {
  line-height: 25.2px;
}
</style>
