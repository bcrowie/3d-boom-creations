import { useNavigate } from "react-router-dom"
import "../../styles/Pages/MessageSent.scss"

const MessageSent: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="message-sent">
            <div className="summary">
                <h1>Request sent</h1>
                <p>Your message has been sent!</p>
                <button onClick={() => navigate("/")}><span>Return</span></button>
            </div>
        </div>
    )
}

export default MessageSent
