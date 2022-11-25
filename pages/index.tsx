import type { NextPage } from 'next'
import Layout from '../components/layout'
import authorizedService from '/images/content-link-authorized-provider_2x.png'
import pspBannerHeroLarge from '/images/psp-banner-hero-repair.image.large_2x.jpg'
import pspBannerHeroSmall from '/images/psp-banner-hero-repair.image.small_2x.jpg'

// import store from "../store/store";
// import { useSelector, useDispatch } from 'react-redux'
// import { useAppSelector, useAppDispatch } from '../store/hooks'
// import { login, logout } from '../store/slices/authSlice'
import Link from 'next/link'

const Home: NextPage = () => {  
  const whatsappText = 'سلام برای تعمیرات از سایت ایران اپل فیکس پیام میدم';
  // const { token } = useAppSelector(state => state.auth)
  // console.log("token", token);

  return (
    <Layout title="تعمیرات تخصصی محصولات اپل">
          <section className="as-columns  as-columns--1up  as-banner as-banner--top  ">
            <div className="row">
              <div className="column large-12 medium-12 small-12">
                <div className="as-banner-cont">
                  <div className="as-banner-image as-banner-image--top">
                    <img
                      sizes="(min-width:735px ) 735w, 100vw"
                      src={pspBannerHeroLarge.src} alt=""
                      // srcSet="/psp-banner-hero-repair.image.small_2x.jpg 735w, /psp-banner-hero-repair.image.large_2x.jpg 1440w"
                      srcSet={pspBannerHeroSmall.src + ' 735w, ' + pspBannerHeroLarge.src + ' 1440w'}

                    // className="as-image-speculativedownload"
                    />
                  </div>
                </div>
                <div className="as-banner-content">
                </div>
              </div>
            </div>
          </section><div className="pageTitle  ">
            <h1 className="pageTitle-heading">تعمیرات اپل</h1>
            <p className="pageTitle-intro">
              ما برای کمک به شما اینجا هستیم. تعمیرات ما توسط کارشناسان تایید شده انجام می‌شوند که از قطعات اصلی اپل استفاده می‌کنند. هر روشی را که برای تعمیر دستگاه خود انتخاب کنید، دستگاه شما مانند روز اول کار خواهد کرد.
            </p>
          </div>
          <div className="contentLink contentBlock ">
            <div className="u-layout u-layout--3up">
              <div className="u-layout-item">
                <div className="contentLink-item">
                  <img src="/content-link-send-your-product_2x.png"
                    alt="" width="150" className="contentLink-image" height="150" />
                  <div className="contentLink-block">
                    <h3 className="contentLink-title" data-analytics-link-component_type="Content Block" data-analytics-link-component_name="Send your product to Apple">ارسال دستگاه به دفتر ما</h3><div className="richText">
                      <div className="table-responsive">
                        <div className="contentLink-copy" data-analytics-event="link.click" data-analytics-link-component_type="Content Block">
                          <p>پس از ثبت درخواست و هماهنگی با شما پیک ما برای دریافت دستگاه شما اعزام می‌شود</p>
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-layout-item">
                <div className="contentLink-item">
                  <img src="/content-link-genius-store_2x.png" alt="" width="150"
                    className="contentLink-image" height="150" /><div className="contentLink-block">
                    <h3 className="contentLink-title" >تعمیر دستگاه در محل شما</h3><div className="richText">
                      <div className="table-responsive">
                        <div className="contentLink-copy">
                          <p>با ثبت درخواست خود کارشناسان ما در اسرع وقت به محل شما مراجعه کرده و مشکل دستگاه شما را برطرف می‌کنند</p>
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-layout-item">
                <div className="contentLink-item">
                  <img src={authorizedService.src} alt="" width="150" className="contentLink-image" height="150" /><div className="contentLink-block">
                    <h3 className="contentLink-title" data-analytics-link-component_type="Content Block" data-analytics-link-component_name="Visit a Genius at an Apple Store">مراجعه حضوری به کارشناسان ما</h3><div className="richText">
                      <div className="table-responsive">
                        <div className="contentLink-copy" data-analytics-event="link.click" data-analytics-link-component_type="Content Block">
                          <p>در فروشگاه‌های ما علاوه بر امکان خرید حضوری می‌توانید برای حل مشکلات نرم‌افزاری و سخت‌افزاری خود مراجعه کنید</p>
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="as-navLink-wrapper as-navLink--button as-navLink--light">
            <div className="as-navLink-inner ">
          <Link href="/device" >
              <a className="as-navLink button">ثبت درخواست تعمیر</a>
          </Link>
              </div>
          </div>
          <div className="as-navLink-wrapper as-navLink--icon">
            <div className="as-navLink-inner ">
          <Link href="/orders" >
              <a className="as-navLink ">
                <span className="icon icon-chevronright" aria-hidden="true"></span>
                <span className="as-navlink-text">مشاهده وضعیت سفارش</span>
              </a>
          </Link>
            </div>
          </div>
          <div className="divider divider--fullwidth">
            <hr aria-hidden="true" />
          </div>
          {/* <div className="sectionTitle   ">
            <h2 className="sectionTitle-heading">Other Repair Options</h2></div>
          <div className="richText large">
            <div className="table-responsive">
              <h2>Independent Repair Providers</h2>
              <p>Independent Repair Providers have access to genuine Apple parts and repair resources. Independent Repair Providers do not provide repairs covered by Apple's warranty or AppleCare plans* but may offer their own repair warranty. You can check if a provider is an <a href="/en-us/repair/verify-repair-provider">Independent Repair Provider or an Apple Authorized Service Provider</a>.</p>

            </div>
          </div>
          <div className="richText large">
            <div className="table-responsive">
              <h2>Self Service Repair</h2>
              <p>Self Service Repair is intended for individuals with the knowledge and experience to repair electronic devices. If you are experienced with the complexities of repairing electronic devices, Self Service Repair provides you with access to genuine Apple parts, tools, and repair manuals to perform your own out-of-warranty* repair.&nbsp;To learn more, please visit the <a href="/en-us/self-service-repair">Self Service Repair</a> page.</p>

            </div>
          </div>
          <div className="richText large">
            <div className="table-responsive">
              <p className="as-center">Learn more about <a href="https://checkcoverage.apple.com/us/en/">your Apple Limited Warranty or AppleCare Product coverage status</a>.</p>

            </div>
          </div>
          <div className="richText large">
            <div className="table-responsive">
              <p><span className="note">*Unless required by law, repairs made by Independent Repair Providers or through Self Service Repair are not backed by Apple. Damage caused by repairs performed outside of Apple or the Apple Authorized Service Provider network is not covered by Apple’s Limited Warranty or an AppleCare plan.</span></p>

            </div>
          </div> */}


          <section className="section section-hero" data-analytics-section-engagement="name:hero">
            <div className="section-content">
              <div className="row lockupMiddle">
                <div className="column large-12 large-centered small-12">
                  <h1 className="typography-headline-elevated large-10 large-centered small-12">
                    خدمات و پشتیبانی از افرادی که محصولات اپل شما را به خوبی می شناسند.

                  </h1>
                  <figure className="image-hero-lockup"></figure>
                  {/* <p className="typography-intro-elevated">Because Apple makes the hardware, the operating system, and many applications, Apple products are truly integrated systems. And only AppleCare products give you one-stop service and support from Apple experts, so most issues can be resolved in a single call.</p> */}
                </div>
              </div>
            </div>
          </section>

          <section className="section section-support" data-analytics-section-engagement="name:additional-support">
            <div className="section-content snipcss-eDtom">
              <div className="row heading-row">
                <div className="column large-12 small-12">
                  <h2 className="typography-headline snip-h2">راه‌های تماس با ما</h2>
                </div>
              </div>
              <div className="row">
                <div className="column large-6 small-12 chat-support">
                  <figure className="image-chat-support-icon"></figure>
                  <h2 className="headline typography-support-headline snip-h2">
                    پشتیبانی از طریق چت</h2>
                  {/* <p className="snip-p">Call Apple&nbsp;Support at 1‑800‑APLCARE.</p> */}
                  <a href={`https://api.whatsapp.com/send/?phone=9809961022975&text=${whatsappText}&type=phone_number&app_absent=0`}
                    className="icon-wrapper snip-a">
                    <span className="icon icon-after more"></span>
                    <span className="icon-copy">رفتن به چت واتساپ</span>
                  </a>
                </div>
                <div className="column large-6 small-12 support-app">
                  <figure className="image-support-app-icon"></figure>
                  <h2 className="headline typography-support-headline snip-h2">
                    تماس تلفنی با واحد خدمات
                  </h2>
                  <a href="tel:02166172575"
                    className="icon-wrapper snip-a">
                    <span className="icon icon-after more"></span>
                    <span className="icon-copy">برقراری تماس</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
    </Layout>
  )
}
// Home.title = 'Homepage';

export default Home
