import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}--Endless Essentials`
    }, [title])
}

export default useTitle;