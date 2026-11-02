"use client"; // useState componentini server componentinde kullanabilmek için işaretlememiz gerekir
import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <Button variant="contained" onClick={() => setCount(count + 1)}>{count}</Button>
    )
}