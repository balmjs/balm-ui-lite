<template>
  <div class="page--test">
    <fieldset class="form-test">
      <legend>Form test</legend>
      <div class="form-item">
        <ui-textfield
          label="Input..."
          :model="formData.name"
          @input="balmUI.onChange('formData.name', $event)"></ui-textfield>
      </div>
      <div class="form-action">
        <ui-button @click="submit">Submit</ui-button>
      </div>
      <div class="images">
        <span>
          <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s031.jpg"></div>
        </span>
        <span>
          <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s032.jpg"></div>
        </span>
        <span>
          <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s033.jpg"></div>
        </span>
        <span>
          <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s034.jpg"></div>
        </span>
        <span>
          <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s035.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s036.jpg"></div>
        </span><br>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s037.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s038.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s039.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s040.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s041.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s042.jpg"></div>
        </span><br>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s043.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s044.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s045.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s046.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s047.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s048.jpg"></div>
        </span><br>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s049.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s050.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s051.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s052.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s053.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s054.jpg"></div>
        </span><br>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s055.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s056.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s057.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s058.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s059.jpg"></div>
        </span>
        <span>
           <div data-src="http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s060.jpg"></div>
        </span></div>
    </fieldset>
  </div>
</template>

<script>

export default {
  /*mixins: [mixins.formValidator],
  validationRules: formValidatorRules,*/
  validations: {
    name: {
      label: 'Username',
      validator: 'required,customRule1,customRule2,customRule3',
      customRule1: {
        validate(value) {
          return value.length > 6;
        },
        message: 'min length < 6'
      },
      customRule2: {
      	validate (value) {
      		return /^\d+$/g.test(value);
        },
        message(){
      		return this.msg;
        }
      }
    }
  },
  data() {
    return {
      formData: {
        name: ''
      },
      msg: 'must be numbers'
    };
  },
  methods: {
    submit() {
      let formData = Object.assign({}, this.formData);
      let result = this.$validate(formData);
      console.log(formData, result);
    }
  }
};
</script>

<style>
  .images {
    display: flex;
    flex-wrap: wrap;
    padding: 1em 0 0 1em;
  }

  .images > span {
    display: flex;
    width: 10%;
    padding-right: 1em;
    margin-bottom: 1em;
    flex-shrink: 0;
  }

  .images [data-src] {
    display: block;
    background-color: #ccc;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-self: stretch;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

</style>
