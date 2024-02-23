import dataBiz from '../img/client-databiz.svg'
import audioPhile from '../img/client-audiophile.svg'
import meet from '../img/client-meet.svg'
import maker from '../img/client-maker.svg'

export default function FooterBar() {
    return(
        <footer>
            <picture className='footPic'><img src={dataBiz} style={{width:'5rem'}} alt="" /></picture>
            <picture className='footPic'><img src={audioPhile} style={{width:'3.7rem'}} alt="" /></picture>
            <picture className='footPic'><img src={meet} alt="" /></picture>
            <picture className='footPic'><img src={maker} alt="" /></picture>
        </footer>
    )
}