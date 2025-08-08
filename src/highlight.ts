export class TextHighlight {
  private highlight: Highlight;
  private range: Range;

  constructor() {
    this.range = new Range();
    this.highlight = new Highlight(this.range);
    CSS.highlights.set("text-highlight", this.highlight);
  }

  /** Updates current highlight */
  public updateHighlight = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);
    this.range.setStart(range.startContainer, range.startOffset);
    this.range.setEnd(range.endContainer, range.endOffset);
  };
}
