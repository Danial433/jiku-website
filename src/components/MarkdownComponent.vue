<template>
  <div class="chat-markdown" v-html="renderedContent"></div>
</template>

<script setup>
import { computed } from "vue";
import MarkdownIt from "markdown-it";

const props = defineProps({
  content: {
    type: String,
    default: ""
  }
});

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true
});

const renderedContent = computed(() => {
  return md.render(props.content || "");
});
</script>

<style scoped>
.chat-markdown {
  line-height: 1.6;
  word-break: break-word;
}

.chat-markdown :deep(p) {
  margin: 0.25rem 0;
}

.chat-markdown :deep(em) {
  font-style: italic;
}

.chat-markdown :deep(strong) {
  font-weight: 700;
}

.chat-markdown :deep(ul) {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0.4rem 0;
}

.chat-markdown :deep(ol) {
  list-style: decimal;
  padding-left: 1.25rem;
  margin: 0.4rem 0;
}

.chat-markdown :deep(li) {
  margin: 0.15rem 0;
}

.chat-markdown :deep(blockquote) {
  border-left: 3px solid rgba(126, 217, 173, 0.8);
  padding-left: 0.75rem;
  margin: 0.5rem 0;
  opacity: 0.8;
}

.chat-markdown :deep(code) {
  background: rgba(126, 217, 173, 0.25);
  padding: 0.1rem 0.3rem;
  border-radius: 0.4rem;
  font-size: 0.9em;
}

.chat-markdown :deep(pre) {
  background: rgba(31, 51, 41, 0.08);
  padding: 0.75rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 0.5rem 0;
}

.chat-markdown :deep(pre code) {
  background: transparent;
  padding: 0;
}

.chat-markdown :deep(a) {
  text-decoration: underline;
  font-weight: 600;
}
</style>