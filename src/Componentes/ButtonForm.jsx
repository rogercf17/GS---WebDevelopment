import { useNavigate } from "react-router-dom"

const ButtonForm = ({legenda}) => {
    const navigate = useNavigate()

    return (
        <button className="
            bg-lime-600
            p-2
            text-sm
            font-medium
            rounded-2xl
            mt-5
            w-36 h-auto
            hover:bg-lime-500
            hover:opacity-85
        " onClick={() => navigate('/calculadora')}>
            {legenda}
        </button>
    )
}

export default ButtonForm
