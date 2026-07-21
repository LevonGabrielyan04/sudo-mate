<script setup>
defineOptions({
	name: "IndexPage",
});

import TerminalChessboard from "../components/chess/TerminalChessboard.vue";
import TerminalCursor from "../components/TerminalCursor.vue";
</script>

<template>
  <div class="terminal__body">
    <TerminalChessboard />
    <TerminalCursor />
  </div>
</template>

<style scoped>
.terminal__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem 1.1rem;
}
</style>
