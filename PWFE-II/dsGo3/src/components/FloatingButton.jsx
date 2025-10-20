export default function FloatingButton({
  children,
  onClick,
  disabled = false,
  color = "#EA5A00",
  lightColor = "#FF6B1A",
  ariaLabel
}) {
  const baseShadow = `0 6px 0 ${color}`;
  const activeShadow = `0 2px 0 ${color}`;
  const gradient = `linear-gradient(to bottom, ${lightColor} 0%, ${color} 100%)`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Botão flutuante')}
      style={{
        "--btn-color": color,
        "--btn-light": lightColor,
        "--btn-gradient": gradient,
      }}
      className={`
        relative w-full py-3 px-6 rounded-lg font-bold text-white 
        select-none cursor-pointer transition-all duration-150 ease-in-out
        disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none
        disabled:translate-y-0
        bg-[color:var(--btn-color)] shadow-[0_6px_0_var(--btn-color)]
        hover:bg-[image:var(--btn-gradient)] 
        active:translate-y-[4px] active:shadow-[0_2px_0_var(--btn-color)] active:bg-[color:var(--btn-light)] active:hover:bg-[color:var(--btn-light)]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400
      `}
    >
      {children}
    </button>
  );
}