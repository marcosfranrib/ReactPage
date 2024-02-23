import backImgLarge from '../img/backImg.png'
import backImagSmall from '../img/image-hero-mobile.png'
import Button from '../components/Button'
import FooterBar from './FooterBar'

export default function MainBody() {
    return (
        <main className='main'>
            <section className='info'>
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <Button nameClass={'mainButton'} tipo={'Learn more'}/>
                <FooterBar />
            </section>
            <picture className='picInfo'>
                <source media="(max-width: 600px)" srcSet={backImagSmall}className='backImg'/>
                <source media="(min-width: 601px)" srcSet={backImgLarge}className='backImg'/>

                <img src={backImgLarge} className='backImg'/>
            </picture>
        </main>
    )
}