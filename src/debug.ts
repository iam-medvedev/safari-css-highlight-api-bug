export class SelectionDebug {
  private debugCollapsed: HTMLElement;
  private debugStartOffset: HTMLElement;
  private debugEndOffset: HTMLElement;

  constructor(private editor: HTMLElement) {
    this.debugCollapsed = document.getElementById("debug-collapsed")!;
    this.debugStartOffset = document.getElementById("debug-start-offset")!;
    this.debugEndOffset = document.getElementById("debug-end-offset")!;
    this.setupButtons();
  }

  private setupButtons() {
    const triggerBtn = document.getElementById("trigger-bug-btn");
    if (triggerBtn) {
      triggerBtn.addEventListener("click", this.triggerSafariBug);
    }
  }

  private triggerSafariBug = () => {
    const paragraph = this.editor.querySelector("p:nth-child(2)");
    if (!paragraph || !paragraph.firstChild) {
      return;
    }

    const textNode = paragraph.firstChild;
    const textLength = textNode.textContent?.length || 0;

    const range = document.createRange();
    range.setStart(textNode, textLength);
    range.setEnd(textNode, textLength);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }

    this.editor.focus();
  };

  public updateDebugInfo = (range: Range) => {
    this.debugCollapsed.textContent = String(range.collapsed);
    this.debugStartOffset.textContent = range.startOffset.toString();
    this.debugEndOffset.textContent = range.endOffset.toString();
  };
}
