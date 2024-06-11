<template>
  <div class="container-45">
    <div class="form">
      <div class="flex-col-9">
        <container82
          :labelName="container81Props.labelName"
          :yourNameNicknameOrEtc="container81Props.yourNameNicknameOrEtc"
        />
        <container82
          :labelName="container82Props.labelName"
          :yourNameNicknameOrEtc="container82Props.yourNameNicknameOrEtc"
          :className="container82Props.className"
        />
        <div class="container-46">
          <div class="label-message valign-text-middle worksans-normal-eerie-black-16px">Message*</div>
          <div class="textarea"></div>
        </div>
        <div class="button"><div class="submit valign-text-middle worksans-normal-white-16px">Submit</div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Container82 from "./Container82";
export default {
  name: "Container72",
  components: {
    Container82,
  },
  props: ["container81Props", "container82Props"],
};
</script>

<style>
.container-45,
.container-47 {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 383px;
  left: 567px;
  position: absolute;
  top: 157px;
  width: 657px;
}

.form,
.form-1 {
  align-self: stretch;
  height: 382.56px;
  position: relative;
  width: 100%;
}

.flex-col-9,
.flex-col-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 383px;
  position: relative;
  top: -1px;
  width: 657px;
}

.container-46,
.container-48 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.69px;
  height: 125px;
  margin-top: 21px;
  position: relative;
  width: 657px;
}

.label-message,
.label-message-1 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.textarea,
.textarea-1 {
  align-self: stretch;
  background-color: var(--jamesdoscomseashell);
  height: 96px;
  position: relative;
  width: 100%;
}

.button,
.button-1 {
  align-items: center;
  background-color: var(--jamesdoscomamethyst);
  border-radius: 999px;
  display: inline-flex;
  justify-content: center;
  margin-top: 22px;
  max-width: 657px;
  overflow: hidden;
  padding: 16px 40px;
  position: relative;
}

.submit,
.submit-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
