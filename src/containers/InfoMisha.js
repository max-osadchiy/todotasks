import React, { useState, useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { requestApiData } from "../actions/index"

const InfoMisha = () => {
    console.log(requestApiData())
    const [hasError, setErrors] = useState(false)
    const [inform, setInform] = useState({})

    const fetchData = async (state) => {
        const res = await fetch(requestApiData())
        console.log(requestApiData(state))
        res
            .json()
            .then(res => setInform(res))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData()
        console.log(fetchData)
    }, [])

    return (
        <div>
            <span>{JSON.stringify(inform)}</span>
            <span>{JSON.stringify(hasError)}</span>
        </div>
    )

}

const mapStateToProps = state => ({ data: state.data })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InfoMisha)