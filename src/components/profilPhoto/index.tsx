function ProfilPhoto() {
  return (
    <div className="w-[150px] h-[150px] rounded-md flex items-center justify-center bg-white">
      <div className="w-[130px] h-[130px] rounded-md overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="./images/slider.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default ProfilPhoto
