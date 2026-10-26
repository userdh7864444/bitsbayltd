import {
  FaAccusoft,
  FaAmazon,
  FaAndroid,
  FaAngular,
  FaApple,
  FaCircleNotch,
  FaDigitalOcean,
  FaJava,
  FaMixer,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaSwift,
  FaUnity,
  FaVrCardboard,
} from 'react-icons/fa'

/** The live theme draws Vive with a plain triangle outline (gtn-triangle-line). */
function TriangleOutline(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 3.5 22 20.5H2L12 3.5Z" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Technology → icon + brand colour, taken from the live /technologies/ page
 * (FontAwesome brand glyphs, coloured per `.guten-icon-box … .icon i{color}`).
 * The four entries with no entry here fall back to the uploaded logo images.
 */
export const techIcons = {
  'Android NDK': { Icon: FaAndroid, color: 'rgb(21,158,92)' },
  Java: { Icon: FaJava, color: 'rgb(255,0,0)' },
  Xamarin: { Icon: FaMixer, color: 'rgb(58,155,220)' },
  'React Native': { Icon: FaReact, color: 'rgb(8,217,253)' },
  'Objective-C': { Icon: FaApple, color: 'rgb(92,96,92)' },
  'Angular JS': { Icon: FaAngular, color: 'rgb(255,0,0)' },
  Ionic: { Icon: FaCircleNotch, color: 'rgb(58,155,220)' },
  'Google VR': { Icon: FaVrCardboard, color: 'rgb(241,105,40)' },
  Unity: { Icon: FaUnity, color: 'rgb(255,0,0)' },
  Vive: { Icon: TriangleOutline, color: 'rgb(58,155,220)' },
  'Node JS': { Icon: FaNodeJs, color: 'rgb(88,161,72)' },
  Python: { Icon: FaPython, color: 'rgb(60,120,169)' },
  IBM: { Icon: FaServer, color: 'rgb(58,155,220)' },
  AWS: { Icon: FaAmazon, color: 'rgb(252,156,33)' },
  DOCN: { Icon: FaDigitalOcean, color: 'rgb(58,155,220)' },
  Swift: { Icon: FaSwift, color: 'rgb(237,79,55)' },
  Azure: { Icon: FaAccusoft, color: 'rgb(60,120,169)' },
}

/** These four are uploaded logo images on the live site, not icon-font glyphs. */
export const techLogos = {
  Oculus: '/tech/oculus.png',
  MySQL: '/tech/mysql.png',
  MongoDB: '/tech/mongodb.png',
  Firebase: '/tech/firebase.png',
}
