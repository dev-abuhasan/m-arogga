
import ActionSlider from "@/components/ui-kits/slider/action-slider";
import BannerSlider from "@/components/ui-kits/slider/banner-slider";
import DraggableSlider from "@/components/ui-kits/slider/draggable-slide";
import styles from "@/services/scss/styles/home.module.scss";
import { IC_whatsapp } from "@/utils/images";
import Image from "next/image";

const Home = async () => {
  // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  // console.log(data);

  // if(!data) throw new AuthRequiredError()
  const data = [
    {
      img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
      name: 'Register Pharmacy',
      off: '14%',
      type: 'OFF+Cashback',
      color: 'warning'
    },
    {
      img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
      name: 'Register Pharmacy',
      off: '14%',
      type: 'OFF+Cashback',
      color: 'warning'
    },
    {
      img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
      name: 'Register Pharmacy',
      off: '14%',
      type: 'OFF+Cashback',
      color: 'warning'
    },
    {
      img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
      name: 'Register Pharmacy',
      off: '14%',
      type: 'OFF+Cashback',
      color: 'warning'
    },
    {
      img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
      name: 'Register Pharmacy',
      off: '14%',
      type: 'OFF+Cashback',
      color: 'warning'
    }
  ];
  const test = () => {
    console.log('test');
  }
  return (
    <div>
      <BannerSlider />
      {/* <ActionSlider /> */}

      <DraggableSlider>
        {data?.map((d, i) =>
          <div className={styles.card} key={i}>
            <div className={styles.icon_wrap}>
              <Image alt="" src={IC_whatsapp} />
            </div>
            <div className={styles.content}>
              <div>
                <h5>Order</h5>
                <p>Via WhatsApp</p>
                <p>01810117100</p>
              </div>
              <button>
                Click Here
              </button>
            </div>
          </div>
        )}
      </DraggableSlider>
    </div>
  );
};

export default Home;