<template>
  <div class="page--test">
    <fieldset class="form-test" v-show="false">
      <legend>Form test</legend>
      <div class="form-item">
        <ui-textfield label="Input..." v-model="formData.name"></ui-textfield>
      </div>
      <div class="form-action">
        <ui-button @click="submit">Submit</ui-button>
      </div>
    </fieldset>

    <div style="width: 50%;" v-show="false">
      <ui-file multiple preview @change="onChange"></ui-file>
      <ul>
        <li v-for="file in files" :key="file.uid">
          <img :src="file.previewSrc" />
          <span>{{file.name}} -- {{file.size}} b</span>
          <span>{{file.type}}</span>
        </li>
      </ul>
    </div>
    <input type="range" v-model="progress" />
    <div style="width: 200px;height: 200px;">
      <ui-circle :progress="progress" :strokeWidth="30" :animate="true">{{ progress }} %</ui-circle>
    </div>
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
        validate(value) {
          return /^\d+$/g.test(value);
        },
        message() {
          return this.msg;
        }
      }
    }
  },
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts',
      files: [],
      formData: {
        name: ''
      },
      msg: 'must be numbers',
      progress: 0
    };
  },
  methods: {
    submit() {
      let formData = Object.assign({}, this.formData);
      let result = this.$validate(formData);
      console.log(formData, result);
    },
    async upload(file) {
      try {
        let res = await this.$http.post(this.url, {
          file: file.sourceFile
        });

        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    onChange(files) {
      this.files = files;
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
