import { useLocation } from 'react-router-dom'

function Gif() {
    const { state } = useLocation();
    
    // TODO: if state is not pass (e.g. hit route directly) then load gif by id

    return (
        <div>
            <pre>
                Gif ID: {state?.id}
            </pre>
        </div>
    )
}

export default Gif