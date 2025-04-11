export function Button({ children, onClick, variant = "default", size = "md" }) {
    const base = "inline-flex items-center justify-center rounded-lg transition";
    const variants = {
      default: "bg-gray-200 text-black hover:bg-gray-300",
      ghost: "bg-transparent hover:bg-gray-100",
    };
    const sizes = {
      md: "px-4 py-2 text-sm",
      icon: "w-8 h-8",
    };
    return (
      <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
        {children}
      </button>
    );
  }
  