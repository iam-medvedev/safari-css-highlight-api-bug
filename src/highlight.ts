import { SelectionDebug } from "./debug";

export class TextHighlight {
  private highlight: Highlight;
  private range: Range;
  private debug: SelectionDebug;

  constructor(private selector: string) {
    const container = document.querySelector<HTMLDivElement>(selector)!;

    this.range = new Range();
    this.highlight = new Highlight(this.range);
    this.debug = new SelectionDebug(container);
    CSS.highlights.set("text-highlight", this.highlight);

    container.addEventListener("beforeinput", this.updateHighlight);
    document.addEventListener("selectionchange", this.updateHighlight);
  }

  /** Updates current highlight */
  public updateHighlight = (e: Event) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);
    const commonAncestor =
      range.commonAncestorContainer instanceof HTMLElement
        ? range.commonAncestorContainer
        : range.commonAncestorContainer.parentElement;
    // Handle only contenteditable block
    if (!commonAncestor || !commonAncestor.closest(this.selector)) {
      return;
    }

    // Set highlight
    this.range.setStart(range.startContainer, range.startOffset);
    this.range.setEnd(range.endContainer, range.endOffset);

    // Debug
    this.debug.updateDebugInfo(range);
  };
}
