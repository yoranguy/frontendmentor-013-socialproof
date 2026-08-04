// How to use:
// Place the following code in main.tsx
// import '/src/utils/stringExtensions';

String.prototype.toCapitalize = function (): string {
  if (!this) return "";
  return this.charAt(0).toUpperCase() + this.slice(1);
};

