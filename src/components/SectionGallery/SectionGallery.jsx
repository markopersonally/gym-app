import { ContainerImg, Img } from "./SectionGalleryStyled.jsx";
import img1 from "../../images/gallery1.jpg";
import img2 from "../../images/gallery2.jpg";
import img3 from "../../images/gallery3.jpg";
import img4 from "../../images/gallery4.jpg";
import img5 from "../../images/gallery5.jpg";
import img6 from "../../images/gallery6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function SectionGallery() {
  return (
    <section id="gallery">
      <ContainerImg>
        <Img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src={img1}
          alt="gallery foto1"
        />
        <Img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          src={img2}
          alt="gallery foto2"
        />
        <Img
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          src={img3}
          alt="gallery foto3"
        />
        <Img
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          src={img4}
          alt="gallery foto4"
        />
        <Img
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          src={img5}
          alt="gallery foto5"
        />
        <Img
          data-aos="zoom-out"
          data-aos-duration="1000"
          src={img6}
          alt="gallery foto6"
        />
      </ContainerImg>
    </section>
  );
}
