<template>
  <div class="form-container">
    <label>Thẻ trả trước</label>
    <q-form @submit="onSubmit" class="q-gutter-md form-main">
      <template v-for="(item, i) of inputList">
        <q-select
            v-if="!i"
            :key="item.label"
            v-model="formData[item.model]"
            :placeholder="item.hint"
            option-value="value"
            option-label="label"
            :options="cardList"
            :label="item.label"
            :rules="rules"
            emit-value
            map-options
        />
        <q-input
            v-else
            :key="item.label"
            v-model="formData[item.model]"
            :placeholder="item.hint"
            :label="item.label"
            lazy-rules
            :rules="rules"
            maxlength="200"
        />
      </template>

      <q-btn push class="submit-btn glossy" label="Nạp tiền" type="submit" color="primary"/>
    </q-form>
  </div>
</template>

<script>
import {recharge} from "@/http/form";

export default {
  name: "RechargeForm",
  data() {
    return {
      params: {},
      formData: {
        channelCode: '',
        insideCardNum: '',
        pin: ''
      },
      rules: [ val => !!val || 'Lỗi nhập thông tin, vui lòng nhập lại'],
      inputList: [
        {label: 'Thẻ trả trước', model: 'channelCode', hint: 'Vui lòng nhập số thẻ'},
        {label: 'số thẻ', model: 'insideCardNum', hint: 'Vui lòng nhập số thẻ'},
        {label: 'PIN', model: 'pin', hint: 'Vui lòng nhập mã PIN'},
      ],
      cardList: [
        {value: 'MOBIFONE', label: 'Mobi'},
        {value: 'VINAPHONE', label: 'Vina'},
        {value: 'VIETTEL', label: 'Viettel'},
      ]
    }
  },
  mounted() {
    if (!location.hash.includes('=')) return
    const {orderBalanceModel, mobileReqDefualtModel} = JSON.parse(decodeURIComponent(location.hash.split('=')[1]))
    this.params = {...orderBalanceModel, ...mobileReqDefualtModel}
  },
  methods: {
    onSubmit () {
      this.params = {...this.params, ...this.formData}
      recharge(this.params)
    },
  }
}
</script>

<style scoped lang="sass">
  /deep/ .el-form--label-top .el-form-item__label
    padding: 0

  .form-container
    padding-top: 10vh
    text-align: center

    >label
      font-size: 24px

    .form-main
      margin-top: 6vh
      padding: 0 15vw
      text-align: left

      .submit-btn
        margin-top: 50px
        width: 70vw
        height: 50px
</style>