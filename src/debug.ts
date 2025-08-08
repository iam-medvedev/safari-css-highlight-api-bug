export class SelectionDebug {
  private debugCollapsed: HTMLElement;
  private debugStartOffset: HTMLElement;
  private debugEndOffset: HTMLElement;

  constructor() {
    this.debugCollapsed = document.getElementById("debug-collapsed")!;
    this.debugStartOffset = document.getElementById("debug-start-offset")!;
    this.debugEndOffset = document.getElementById("debug-end-offset")!;
  }

  public updateDebugInfo = (range: Range) => {
    this.debugCollapsed.textContent = String(range.collapsed);
    this.debugStartOffset.textContent = range.startOffset.toString();
    this.debugEndOffset.textContent = range.endOffset.toString();
  };
}
