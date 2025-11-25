import type { FC } from "react";
import "./Input.css";

type Props = {
    placeholder?: string;
    handleInput: (value: string | number | boolean | File | Date | null) => void;
    type:
        | "text"
        | "password"
        | "email"
        | "tel"
        | "number"
        | "file"
        | "date"
        | "time"
        | "checkbox"
        | "radio";
    resetMessage: () => void;
    autocomplete?: "email" | "current-password" | "new-password";
    value: string | boolean | number | Date;
    min?: number;
    max?: number;
};

const Input: FC<Props> = ({
    placeholder,
    handleInput,
    type,
    resetMessage,
    autocomplete,
    value,
    min,
    max
}) => {
    function handleResult(val: string | boolean | number | File | null) {
        resetMessage();
        handleInput(val);
    }

    return (
        <input
            autoComplete={autocomplete ? autocomplete : ""}
            className="input"
            type={type}
            placeholder={placeholder || ""}
            checked={typeof value === "boolean" ? value : undefined}
            value={typeof value === "string" || typeof value === "number" ? value : undefined}
            min={type === "number" && min !== undefined ? min : undefined}
            max={type === "number" && max !== undefined ? max : undefined}
            onInput={(e) => {
                if (type === "checkbox" || type === "radio" || type === "file") return;
                const target = e.target as HTMLInputElement;
                if (type === "number") {
                    handleResult(target.value === "" ? 0 : parseFloat(target.value));
                } else {
                    handleResult(target.value);
                }
            }}
            onChange={(e) => {
                const target = e.target as HTMLInputElement;

                if (type === "checkbox" || type === "radio") {
                    handleResult(target.checked);
                    return;
                }

                if (type === "file") {
                    handleResult(target.files && target.files[0] ? target.files[0] : null);
                    return;
                }
            }}
        />
    );
};

export default Input;
