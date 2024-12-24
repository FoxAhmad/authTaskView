import { ButtonProps } from "../../types/button-props";

export default function Button({ onClick, children, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={`rounded-md bg-teal-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all hover:border-teal-700 border-[1.5px] border-white focus:bg-teal-700 focus:shadow-none active:bg-teal-700 hover:text-teal-700 hover:bg-white focus:hover:bg-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${className ?? ""}`} type="button">
            {children}
        </button>
    )
}
