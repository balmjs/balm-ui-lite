<template>
  <label class="mdl-fileupload">
    <input type="file"
      class="mdl-fileupload__input"
      ref="input"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange">
    <span class="mdl-fileupload__content">
      <span v-if="hasSelection">{{ displayText }}</span>
      <slot v-else>{{ placeholder }}</slot>
    </span>
  </label>
</template>

<script>
const EVENT_CHANGE = 'change';
const EVENT_FOCUS = 'focus';
const EVENT_BLUR = 'blur';

export default {
  name: 'ui-fileupload',
  props: {
    // element attributes
    name: String,
    accept: String,
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // ui attributes
    label: String
  },
  data() {
    return {
      hasSelection: false,
      displayText: ''
    };
  },
  computed: {
    placeholder() {
      if (this.label) {
        return this.label;
      }
      return this.multiple ? 'Choose files' : 'Choose a file';
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleChange(event) {
      let displayText;
      const input = this.$refs.input;

      // input.files (IE10+)
      if (input.files && input.files.length > 1) {
        displayText = `${input.files.length} files selected`;
      } else {
        displayText = event.target.value.split('\\').pop();
      }

      if (displayText) {
        this.hasSelection = true;
        this.displayText = displayText;
      }

      this.$emit(EVENT_CHANGE, input.files, event);
    }
  }
};
</script>
