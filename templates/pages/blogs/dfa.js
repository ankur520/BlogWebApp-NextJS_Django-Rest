import React from 'react'
import { useRouter } from "next/router";

const blog = () => {

  const router = useRouter()
  const {slug} = router.query
 

  return (
    <div> slug =  {slug} </div>
  )
}

export default blog