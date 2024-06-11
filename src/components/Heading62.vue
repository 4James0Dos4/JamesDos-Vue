<template>
  <div :class="[`heading-6-16`, className || ``]">
    <div class="ai-4 valign-text-middle jamesdoscommuseomodernoblack-20">
      <span
        ><span class="span0-12 jamesdoscommuseomodernoblack-20">{{ spanText1 }}</span
        ><span class="span1-16 jamesdoscommuseomodernobold-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading62",
  props: ["spanText1", "className"],
};
</script>

<style>
.heading-6-16 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 7px;
  padding: 0px 72px 0px 79.44px;
  position: relative;
}

.ai-4 {
  align-self: stretch;
  color: var(--jamesdoscomnero);
  font-weight: 400;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.span0-12 {
  font-weight: 900;
}

.span1-16 {
  font-weight: 700;
}

.heading-6-16.heading-6-17 {
  margin-left: 7px;
  margin-right: unset;
  margin-top: 22px;
}
</style>
