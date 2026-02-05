import heroImg from '../../assets/hero.png';


const HeroImage = () => {
  return (
    <div>
       <div className="heroImg pl-20 p "> 
            <img className='rounded-[50%] h-100' src={heroImg} alt="Hero Image" />
        </div>
    </div>
  )
}

export default HeroImage
