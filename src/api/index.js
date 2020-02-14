export const fetchData = async () => {
    try {
        const response = await fetch("https://api.github.com/users/Mishawaka")
        const data = await response.toJson()
        return data
    } catch (e) {
        console.log(e)
    }
}

