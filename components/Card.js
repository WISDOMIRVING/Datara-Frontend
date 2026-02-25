export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`glass p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
