import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../assects/images/image1.jpg';
import image2 from '../../assects/images/image2.jpg';
import image3 from '../../assects/images/image3.jpg';
import image4 from '../../assects/images/image4.jpg';
const imm = [image1,image2,image3,image4];
const responsive = {
    0: { items: 1 },
    1024: { items: 2 }
  };
function ImageBrowser(){

    const dd = imm.map((item) => {
        return (
          <>
            <img src={item} style={{width:'100%',height:'450px'}} className="sliderimg" alt="" />
          </>
        );
      })

    return(
        <>
             <AliceCarousel items={dd} 
               
                        autoPlay={false}
               
                ></AliceCarousel>
        </>
    )
}

export default ImageBrowser;