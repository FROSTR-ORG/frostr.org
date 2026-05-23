/**
 * Renders glossary copy with backtick-wrapped inline code segments.
 */

type GlossaryInlineTextProps = {
  text: string;
};

/**
 * @param props.text - Plain text that may include `inline code` markers.
 */
export function GlossaryInlineText({ text }: GlossaryInlineTextProps) {
  return text
    .split(/(`[^`]+`)/g)
    .filter(Boolean)
    .map((part, index) => {
      const key = `${part}-${index}`;

      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={key} className="igloo-code-inline">
            {part.slice(1, -1)}
          </code>
        );
      }

      return <span key={key}>{part}</span>;
    });
}
