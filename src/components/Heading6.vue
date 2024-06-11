<template>
  <div :class="[`heading-6-6`, className || ``]">
    <div class="ai-1 valign-text-middle jamesdoscommuseomodernoblack-20">
      <span
        ><span class="span0-6 jamesdoscommuseomodernoblack-20">{{ spanText1 }}</span
        ><span class="span1-7 jamesdoscommuseomodernobold-20">{{ spanText2 }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading6",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.heading-6-6 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  height: 43px;
  position: relative;
  width: 100%;
}

.ai-1 {
  align-self: stretch;
  color: var(--jamesdoscomnero);
  font-weight: 400;
  line-height: 24px;
  margin-bottom: -4px;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.span0-6 {
  font-weight: 900;
}

.span1-7 {
  font-weight: 700;
}

.heading-6-6.heading-6-7 {
  align-self: unset;
  flex: 0 0 auto;
  height: unset;
  justify-content: center;
  width: 258px;
}

.heading-6-6.heading-6-7 .ai-1,
.heading-6-6.heading-6-8 .ai-1 {
  margin-bottom: unset;
}

.heading-6-6.heading-6-8 {
  flex: 0 0 auto;
  height: unset;
}

.heading-6-6.heading-6-5,
.heading-6-6.heading-6-5-1 {
  align-self: unset;
  height: 48px;
  justify-content: center;
  width: 257.98px;
}

.heading-6-6.heading-6-5-1 .ai-1,
.heading-6-6.heading-6-5 .ai-1 {
  align-self: unset;
  height: 48px;
  margin-bottom: unset;
  width: 257.98px;
}
</style>
