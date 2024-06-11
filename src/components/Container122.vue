<template>
  <div :class="[`container-103`, className || ``]">
    <div class="label-3 valign-text-middle worksans-normal-eerie-black-16px">{{ labelName }}</div>
    <div class="input-2">
      <div class="container-102">
        <p class="your-2 valign-text-middle worksans-normal-suva-gray-14px">{{ yourNameNicknameOrEtc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container122",
  props: ["labelName", "yourNameNicknameOrEtc", "className"],
};
</script>

<style>
.container-103 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.69px;
  height: 71px;
  position: relative;
  width: 288px;
}

.label-3 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.input-2 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--jamesdoscomseashell);
  display: flex;
  height: 48px;
  justify-content: center;
  margin-bottom: -0.6px;
  padding: 16px;
  position: relative;
  width: 100%;
}

.container-102 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  opacity: 0.5;
  position: relative;
}

.your-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.container-103.container-104 {
  margin-top: 21px;
}
</style>
