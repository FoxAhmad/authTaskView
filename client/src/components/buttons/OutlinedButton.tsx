import { ButtonProps } from "../../types/button-props";

export default function OutlinedButton({ onClick, children }: ButtonProps) {
    return (
        <button onClick={onClick} className="rounded-md border border-teal-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-teal-600 hover:text-white hover:bg-teal-800 hover:border-teal-800 focus:text-white focus:bg-teal-800 focus:border-teal-800 active:border-teal-800 active:text-white active:bg-teal-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            {children}
        </button>
    )
}
