<template>
  <div :class="[`container-100-1`, className || ``]">
    <heading6
      :spanText1="heading6Props.spanText1"
      :spanText2="heading6Props.spanText2"
      :className="heading6Props.className"
    />
  </div>
</template>

<script>
import Heading6 from "./Heading6";
export default {
  name: "Container112",
  components: {
    Heading6,
  },
  props: ["className", "heading6Props"],
};
</script>

<style>
.container-100-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.container-100-1.container-101 {
  align-self: unset;
  width: 257.98px;
}
</style>
