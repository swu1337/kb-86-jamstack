<template>
  <svg
      :class="className"
      v-html="path"
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
  </svg>
</template>
<script>
const ICONS = {
  'arrow-down':
    `<path d="M12 5v14M19 12l-7 7-7-7"/>`,
  'arrow-right':
    `<path d="M5 12h14M12 5l7 7-7 7"/>`,
  'chevron-left':
    `<path d="M15 18l-6-6 6-6"/>`,
  'chevron-right':
    `<path d="M9 18l6-6-6-6"/>`,
  'message-square':
    `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`,
  'calender':
    `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>`,
  'user':
    `<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  'blog':
    `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>`
};
export default {
  props: {
    className: String,
    type: String
  },
  computed: {
    path() {
      return ICONS[this.type];
    }
  }
}
</script>