// The studio's wordmark: "Estúdio" in Cocomat Pro, "Caju" in the Virtual script.
export function Wordmark({ className = '', ...rest }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`wordmark ${className}`} {...rest}>
      <span className="wordmark__estudio">Estúdio</span> <span className="wordmark__caju">Caju</span>
    </span>
  );
}
