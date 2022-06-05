import Script from 'next/script'

export default function Scripts() {
  return (
    <>
    <Script src="/js/jquery-2.1.4.min.js"strategy="beforeInteractive" />
    <Script src="/js/bootstrap.min.js"strategy="beforeInteractive" />
    <Script src="/js/isotope.pkgd.min.js"strategy="beforeInteractive" />
    <Script src="/js/owl.carousel.min.js"strategy="beforeInteractive" />
    <Script src="/js/jquery.owl-filter.js"strategy="beforeInteractive" />
    <Script src="/js/magnific-popup.min.js"strategy="beforeInteractive" />
    <Script src="/js/circle-progress.min.js"strategy="beforeInteractive" />
    <Script src="/js/main.js"strategy="beforeInteractive" />
    </>
  )
}
