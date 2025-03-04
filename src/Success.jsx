import { Link } from "react-router-dom"

export const Success = ()=>{
  return(
    <div className="w-full h-screen flex justify-center items-center bg-gray-600">
      <div className="bg-white p-10 rounded-lg">
      <h1 className="text-2xl font-extrabold mb-4">Congratulation!</h1>
      <Link to='/signup' className=" bg-blue-600 text-white p-2 text-xl font-semibold rounded-lg" >Home</Link>
      </div>
    </div>
  )
}