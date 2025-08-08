import { TextHighlight } from "./highlight";

const editor = document.getElementById("editor");
if (!editor) {
  throw new Error("Cannot initialize");
}

const highlighter = new TextHighlight();
editor.addEventListener("beforeinput", highlighter.updateHighlight);
document.addEventListener("selectionchange", highlighter.updateHighlight);
