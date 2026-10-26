import Banner from '../components/Banner'

/** Inner-page banner — a thin wrapper so every page shares one geometry. */
export default function PageHeader(props) {
  return <Banner {...props} subtitle={props.blurb ?? props.subtitle} />
}
