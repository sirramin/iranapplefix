import React, { ReactNode, useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../store/hooks'

type Props = {
  children?: ReactNode
  title?: string
}

export default function Layout({ children, title }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const { isAuthenticated, mobile } = useAppSelector(state => state.auth)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);
  return (
    <div className={styles.container}>
      <Head>
        {/* <title>ایران اپل فیکس | تعمیرات تخصصی محصولات اپل</title> */}
        <title>{title + ' | ایران اپل فیکس'}</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="ac-gn-current-support">
        <aside id="ac-gn-segmentbar" className="ac-gn-segmentbar" lang="en-US" dir="rtl" ></aside>
        <input type="checkbox" id="ac-gn-menustate" className="ac-gn-menustate" />
        <nav id="ac-globalnav" className="js no-touch windows no-firefox" role="navigation" lang="en-US" dir="rtl" >
          <div className="ac-gn-content">
            <ul className="ac-gn-header">
              <li className="ac-gn-item ac-gn-menuicon">
                <a href="#ac-gn-menustate" role="button" className="ac-gn-menuanchor ac-gn-menuanchor-open" id="ac-gn-menuanchor-open">
                  <span className="ac-gn-menuanchor-label">Global Nav Open Menu</span>
                </a>
                <a href="#" rel="nofollow" role="button" className="ac-gn-menuanchor ac-gn-menuanchor-close" id="ac-gn-menuanchor-close">
                  <span className="ac-gn-menuanchor-label">Global Nav Close Menu</span>
                </a>
                <label className="ac-gn-menuicon-label" htmlFor="ac-gn-menustate" aria-hidden="true">
                  <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
                    <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top"></span>
                  </span>
                  <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
                    <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom"></span>
                  </span>
                </label>
              </li>
              <li className="ac-gn-item ac-gn-apple">
                <a className="ac-gn-link ac-gn-link-apple" id="ac-gn-firstfocus-small">
                  {/* <span>اپل</span> */}
                </a>
              </li>
              <li className="ac-gn-item ac-gn-bag ac-gn-bag-small" id="ac-gn-bag-small" onClick={() => { setShowMenu(!showMenu) }}>
                <div className="ac-gn-bag-wrapper">
                  <a className="ac-gn-link ac-gn-link-bag" aria-label="Shopping Bag" data-string-badge="Shopping Bag with item count :" role="button"
                    aria-haspopup="true" aria-expanded="false" aria-controls="ac-gn-bagview-content">
                    {/* <span>سبد خرید</span> */}
                  </a>
                  <span className="ac-gn-bag-badge" aria-hidden="true" data-analytics-title="bag" data-analytics-click="bag">
                    <span className="ac-gn-bag-badge-separator"></span>
                    <span className="ac-gn-bag-badge-number"></span>
                    <span className="ac-gn-bag-badge-unit">+</span>
                  </span>
                </div>
                <span className="ac-gn-bagview-caret ac-gn-bagview-caret-large"></span>
              </li>
            </ul>
            {/* <div className="ac-gn-search-placeholder-container" role="search">
              <div className="ac-gn-search ac-gn-search-small">
                <a id="ac-gn-link-search-small" className="ac-gn-link" href="/kb/index?page=search&amp;locale=en_US" data-analytics-title="search" data-analytics-intrapage-link="" aria-label="Search Support" role="button" aria-haspopup="true">
                  <div className="ac-gn-search-placeholder-bar">
                    <div className="ac-gn-search-placeholder-input">
                      <div className="ac-gn-search-placeholder-input-text" aria-hidden="true">
                        <div className="ac-gn-link-search ac-gn-search-placeholder-input-icon"></div>
                        <span className="ac-gn-search-placeholder">Search Support</span>
                      </div>
                    </div>
                    <div className="ac-gn-searchview-close ac-gn-searchview-close-small ac-gn-search-placeholder-searchview-close">
                      <span className="ac-gn-searchview-close-cancel" aria-hidden="true">لغو</span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            <ul className="ac-gn-list">
              <li className="ac-gn-item ac-gn-apple">
                <Link href="/" >
                  <a className="ac-gn-link ac-gn-link-apple" id="ac-gn-firstfocus"></a>
                </Link>
              </li>
              <li className="ac-gn-item ac-gn-item-menu ac-gn-iphone">
                <a className="ac-gn-link" href="#" data-analytics-title="iphone">
                  <span>آیفون</span>
                </a>
              </li>
              <li className="ac-gn-item ac-gn-item-menu ac-gn-ipad">
                <a className="ac-gn-link" href="#" data-analytics-title="ipad">
                  <span>آی‌مک</span>
                </a>
              </li>
              <li className="ac-gn-item ac-gn-item-menu ac-gn-mac">
                <a className="ac-gn-link" href="#" data-analytics-title="mac">
                  <span>مک‌بوک</span>
                </a>
              </li>
              <li className="ac-gn-item ac-gn-item-menu ac-gn-support">
                <a className="ac-gn-link" href="/device">
                  <span>درخواست تعمیر</span>
                </a>
              </li>
              <li className="ac-gn-item ac-gn-item-menu ac-gn-accessories">
                <a className="ac-gn-link" href="https://iranapplestore.com">
                  <span>فروشگاه</span>
                </a>
              </li>

              <li className="ac-gn-item ac-gn-item-menu ac-gn-watch">
                <a className="ac-gn-link" href="#" data-analytics-title="watch">
                  <span>وبلاگ</span>
                </a>
              </li>
              {/* <li className="ac-gn-item ac-gn-item-menu ac-gn-search" role="search">
                <a id="ac-gn-link-search" className="ac-gn-link ac-gn-link-search" href="/kb/index?page=search&amp;locale=en_US" data-analytics-title="search" data-analytics-intrapage-link="" aria-label="Search Support" role="button" aria-haspopup="true" data-analytics-listener-added="true"></a>
              </li> */}
              <li className="ac-gn-item ac-gn-bag" id="ac-gn-bag" onClick={() => { setShowMenu(!showMenu) }}>
                <div className="ac-gn-bag-wrapper">
                  <a className="ac-gn-link ac-gn-link-bag" href="#" data-analytics-title="bag" data-analytics-click="bag" aria-label="Shopping Bag" data-string-badge="Shopping Bag with item count : {%BAGITEMCOUNT%}" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="ac-gn-bagview-content">
                    <span className="ac-gn-link-text">Shopping Bag</span>
                  </a>
                  <span className="ac-gn-bag-badge" aria-hidden="true" data-analytics-title="bag" data-analytics-click="bag">
                    <span className="ac-gn-bag-badge-separator"></span>
                    <span className="ac-gn-bag-badge-number"></span>
                    <span className="ac-gn-bag-badge-unit">+</span>
                  </span>
                </div>
                <span className="ac-gn-bagview-caret ac-gn-bagview-caret-large" style={{ display: showMenu ? 'block' : 'none' }}></span>
              </li>
            </ul>
            {/* <aside id="ac-gn-searchview" className="ac-gn-searchview" role="search" data-analytics-region="search" >
              <div className="ac-gn-searchview-content">
                <div className="ac-gn-searchview-bar">
                  <div className="ac-gn-searchview-bar-wrapper">
                    <form id="ac-gn-searchform" className="ac-gn-searchform" action="https://support.apple.com/kb/index" method="get">
                      <div className="ac-gn-searchform-wrapper">
                        <input id="ac-gn-searchform-input" className="ac-gn-searchform-input" type="text" aria-label="Search Support" placeholder="Search Support"
                          role="combobox" aria-autocomplete="list" aria-expanded="true" aria-owns="quicklinks suggestions" name="q" />
                        <input id="ac-gn-searchform-src" type="hidden" name="src" value="globalnav_support" />
                        <button id="ac-gn-searchform-submit" className="ac-gn-searchform-submit" type="submit" disabled aria-label="Submit Search" data-analytics-key-listener-added="true"> </button>
                        <button id="ac-gn-searchform-reset" className="ac-gn-searchform-reset" type="reset" disabled aria-label="Clear Search">
                          <span className="ac-gn-searchform-reset-background"></span>
                        </button>
                        <input type="hidden" name="type" value="organic" />
                        <input type="hidden" name="page" value="search" /><input type="hidden" name="locale" value="en_US" />
                      </div>
                    </form>
                    <button id="ac-gn-searchview-close-small" className="ac-gn-searchview-close ac-gn-searchview-close-small" aria-label="Cancel Search">
                      <span className="ac-gn-searchview-close-cancel" aria-hidden="true">
                        Cancel
                      </span>
                    </button>
                  </div>
                </div>
                <aside id="ac-gn-searchresults" className="ac-gn-searchresults" data-string-quicklinks="Quick Links" data-string-suggestions="Suggested Searches" data-string-noresults="">	<section className="ac-gn-searchresults-section ac-gn-searchresults-section-defaultlinks" data-analytics-region="defaultlinks search">
                  <div className="ac-gn-searchresults-section-wrapper">
                    <h3 className="ac-gn-searchresults-header ac-gn-searchresults-animated">Quick Links</h3>
                    <ul className="ac-gn-searchresults-list" id="defaultlinks" role="listbox">
                      <li className="ac-gn-searchresults-item ac-gn-searchresults-animated" role="presentation">
                        <a href="https://support.apple.com/en-us/HT201487" role="option" className="ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks" data-query="no keyword" data-section="defaultlinks" data-items="5" data-index="0" data-label="If you forgot your Apple ID password" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50">If you forgot your Apple ID password</a>
                      </li>
                      <li className="ac-gn-searchresults-item ac-gn-searchresults-animated" role="presentation">
                        <a href="https://support.apple.com/en-us/HT204306" role="option" className="ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks" data-query="no keyword" data-section="defaultlinks" data-items="5" data-index="1" data-label="If you forgot the passcode for your iPhone, iPad, or iPod touch" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50">If you forgot the passcode for your iPhone, iPad, or iPod touch</a>
                      </li>
                      <li className="ac-gn-searchresults-item ac-gn-searchresults-animated" role="presentation">
                        <a href="https://support.apple.com/en-us/HT202039" role="option" className="ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks" data-query="no keyword" data-section="defaultlinks" data-items="5" data-index="2" data-label="How to cancel a subscription from Apple" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50">How to cancel a subscription from Apple</a>
                      </li>
                      <li className="ac-gn-searchresults-item ac-gn-searchresults-animated" role="presentation">
                        <a href="https://support.apple.com/en-us/HT204204" role="option" className="ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks" data-query="no keyword" data-section="defaultlinks" data-items="5" data-index="3" data-label="Update iOS on your device" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50">Update iOS on your device</a>
                      </li>
                      <li className="ac-gn-searchresults-item ac-gn-searchresults-animated" role="presentation">
                        <a href="https://support.apple.com/contact" role="option" className="ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks" data-query="no keyword" data-section="defaultlinks" data-items="5" data-index="4" data-label="Contact Apple Support" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50">Contact Apple Support</a>
                      </li>
                    </ul>
                    <span role="status" className="ac-gn-searchresults-count" aria-live="polite">5 Quick Links</span>
                  </div>
                </section>

                </aside>
              </div>
              <button id="ac-gn-searchview-close" className="ac-gn-searchview-close" aria-label="Cancel Search">
                <span className="ac-gn-searchview-close-wrapper">
                  <span className="ac-gn-searchview-close-left"></span>
                  <span className="ac-gn-searchview-close-right"></span>
                </span>
              </button>
            </aside> */}
            <aside ref={ref} className="ac-gn-bagview" style={{ display: showMenu ? 'block' : 'none' }}>
              <div className="ac-gn-bagview-scrim">
                <span
                  className={`ac-gn-bagview-caret ac-gn-bagview-caret-small ${showMenu ? 'showCarret' : ''}`}
                ></span>
              </div>
              <div className="ac-gn-bagview-content" id="ac-gn-bagview-content">
                <p className="ac-gn-bagview-message ac-gn-bagview-message-empty">
                  {!isAuthenticated ?
                    <span>
                      <span>سلام، </span>
                      <span>مهمان گرامی</span>
                    </span>
                    : 
                    <span>{mobile}</span>
                    }
                </p>
                <nav className="ac-gn-bagview-nav">
                  <ul className="ac-gn-bagview-nav-list ac-gn-bagview-nav-nobtn">
                    {/* <li className="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-bag">
                      <a href="https://www.apple.com/shop/bag" data-evar1="[pageName] | global nav | bag" data-analytics-activitymap-link-id="bag" data-analytics-title="bag" data-analytics-region="global nav" className="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-bag" data-ac-autom="gn-bagview-link-bag">
                        Bag
                      </a>
                    </li>
                    <li className="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-savedbyyou">
                      <a href="https://www.apple.com/shop/saveditems" data-evar1="[pageName] | global nav | saved items" data-analytics-activitymap-link-id="saved items" data-analytics-title="saved items" data-analytics-region="global nav" className="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-savedbyyou" data-ac-autom="gn-bagview-link-savedbyyou">
                        Saved Items
                      </a>
                    </li> */}
                    <li className="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-orders">
                      <a href="https://secure5.store.apple.com/shop/order/list" data-evar1="[pageName] | global nav | orders" data-analytics-activitymap-link-id="orders" data-analytics-title="orders" data-analytics-region="global nav" className="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-orders" data-ac-autom="gn-bagview-link-orders">
                        سفارش‌ها
                      </a>
                    </li>
                    {/* <li className="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-account">
                      <a href="https://secure5.store.apple.com/shop/account/home" data-evar1="[pageName] | global nav | account" data-analytics-activitymap-link-id="account" data-analytics-title="account" data-analytics-region="global nav" className="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-account" data-ac-autom="gn-bagview-link-account">
                        حساب
                      </a>
                    </li> */}
                    <li className="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn">
                      {!isAuthenticated ?
                        <Link href="/login" >
                          <a href="" className="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-signIn">
                            ورود / ثبت نام
                          </a>
                        </Link>
                        : <Link href="/logout">
                          <a href="" className="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-signIn">
                            خروج
                          </a>
                        </Link>}
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </nav>
        <div className="ac-gn-blur"></div>
        <div id="ac-gn-curtain" className="ac-gn-curtain"></div>
        <div id="ac-gn-placeholder" className="ac-nav-placeholder"></div>

        <div className="main" data-env="live" data-edit-mode="false" role="main">
          {children}
        </div>
        {/* <footer id="ac-globalfooter" className="js no-touch svg no-ie7 no-ie8" lang="en-US" data-analytics-region="global footer" role="contentinfo" aria-labelledby="ac-gf-label">
          <div className="ac-gf-content">
            <h2 className="ac-gf-label" id="ac-gf-label">Apple Footer</h2>
            <nav className="ac-gf-breadcrumbs" aria-label="Breadcrumbs" role="navigation">
              <a href="https://www.apple.com" className="home ac-gf-breadcrumbs-home analytics-exitlink">
                <span className="ac-gf-breadcrumbs-home-icon" aria-hidden="true"></span>
                <span className="ac-gf-breadcrumbs-home-label">Apple</span>
                <span className="ac-gf-breadcrumbs-home-chevron"></span>
                <span className="ac-gf-breadcrumbs-home-mask"></span>
              </a>
              <div className="ac-gf-breadcrumbs-path">
                <ol className="ac-gf-breadcrumbs-list" vocab="http://schema.org/" typeof="BreadcrumbList">
                  <li className="ac-gf-breadcrumbs-item" property="itemListElement" typeof="ListItem">
                    <a typeof="WebPage" property="item" className="ac-gf-breadcrumbs-link" href="/">
                      <span property="name">Support</span>
                    </a>
                    <meta property="position" content="1" />
                  </li>
                  <li className="ac-gf-breadcrumbs-item" property="itemListElement" typeof="ListItem">
                    <span property="name">Repair</span>
                    <meta property="position" content="2" />
                  </li>
                </ol>
              </div>
            </nav>
            <nav className="ac-gf-directory with-4-columns" aria-label="Apple Directory" role="navigation">
              <div className="ac-gf-directory-column">
                <div className="ac-gf-directory-column-section">
                  <h3 className="ac-gf-directory-column-section-title">Product Support</h3><button className="ac-gf-directory-column-section-toggler" aria-controls="Product Support" aria-expanded="false">+</button>
                  <ul className="ac-gf-directory-column-section-list">
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="iPhone " data-analytics-link-url="/iphone" href="/iphone">iPhone <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Mac " data-analytics-link-url="/mac" href="/mac">Mac <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="iPad " data-analytics-link-url="/ipad" href="/ipad">iPad <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Watch " data-analytics-link-url="/watch" href="/watch">Watch <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="AirPods " data-analytics-link-url="/airpods" href="/airpods">AirPods <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Music " data-analytics-link-url="/music" href="/music">Music <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="TV " data-analytics-link-url="/tv" href="/tv">TV <span className="a11y">Support</span></a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Support Site Map" data-analytics-link-url="/sitemap" href="/sitemap">Support Site Map</a></li>
                  </ul>
                </div>
              </div>
              <div className="ac-gf-directory-column">
                <div className="ac-gf-directory-column-section">
                  <h3 className="ac-gf-directory-column-section-title">Service and Repair</h3><button className="ac-gf-directory-column-section-toggler" aria-controls="Service and Repair" aria-expanded="false">+</button>
                  <ul className="ac-gf-directory-column-section-list">
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Apple Repair Options" data-analytics-link-url="/repair" href="/repair">Apple Repair Options</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Service and Repair Information" data-analytics-link-url="/repair-products" href="/repair-products">Service and Repair Information</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="AppleCare Products" data-analytics-link-url="http://www.apple.com/support/products/" href="http://www.apple.com/support/products/">AppleCare Products</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link analytics-exitlink" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Hardware Warranties" data-analytics-link-url="https://www.apple.com/legal/warranty/" href="https://www.apple.com/legal/warranty/">Hardware Warranties</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link analytics-exitlink" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Software License Agreements" data-analytics-link-url="https://www.apple.com/legal/sla/" href="https://www.apple.com/legal/sla/">Software License Agreements</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Complimentary Support" data-analytics-link-url="/complimentary" href="/complimentary">Complimentary Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="ac-gf-directory-column">
                <div className="ac-gf-directory-column-section">
                  <h3 className="ac-gf-directory-column-section-title">Resources</h3><button className="ac-gf-directory-column-section-toggler" aria-controls="Resources" aria-expanded="false">+</button>
                  <ul className="ac-gf-directory-column-section-list">
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="My Support" data-analytics-link-url="/en-us/my-support" href="/en-us/my-support">My Support</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Downloads" data-analytics-link-url="/en_US/downloads" href="/en_US/downloads">Downloads</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Manuals" data-analytics-link-url="/en_US/manuals" href="/en_US/manuals">Manuals</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Tech Specs" data-analytics-link-url="/en_US/specs" href="/en_US/specs">Tech Specs</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Accessibility" data-analytics-link-url="/accessibility" href="/accessibility">Accessibility</a></li>
                  </ul>
                </div>
              </div>
              <div className="ac-gf-directory-column">
                <div className="ac-gf-directory-column-section">
                  <h3 className="ac-gf-directory-column-section-title">Connect</h3><button className="ac-gf-directory-column-section-toggler" aria-controls="Connect" aria-expanded="false">+</button>
                  <ul className="ac-gf-directory-column-section-list">
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Contact Us" data-analytics-link-url="/contact" href="/contact">Contact Us</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Phone Numbers" data-analytics-link-url="/en-us/HT201232" href="/en-us/HT201232">Phone Numbers</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Support app" data-analytics-link-url="https://apps.apple.com/us/app/apple-support/id1130498044?pt=2003&amp;ct=support.footer&amp;mt=8&amp;l=en" href="https://apps.apple.com/us/app/apple-support/id1130498044?pt=2003&amp;ct=support.footer&amp;mt=8&amp;l=en">Support app</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link analytics-exitlink" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Apple Communities" data-analytics-link-url="https://discussions.apple.com" href="https://discussions.apple.com">Apple Communities</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link analytics-exitlink" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="Apple Support Videos" data-analytics-link-url="https://www.youtube.com/applesupport" href="https://www.youtube.com/applesupport" rel="nofollow">Apple Support Videos</a></li>
                    <li className="ac-gf-directory-column-section-item">
                      <a className="ac-gf-directory-column-section-link analytics-exitlink" data-analytics-event="link.click" data-analytics-link-component_type="Simple List" data-analytics-link-component_name="@AppleSupport" data-analytics-link-url="https://twitter.com/AppleSupport" href="https://twitter.com/AppleSupport">@AppleSupport</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <section className="ac-gf-footer">
              <div className="ac-gf-footer-shop" x-ms-format-detection="none"></div>
              <div className="ac-gf-footer-locale">
                <a className="ac-gf-footer-locale-link" href="/choose-country-region" title="Choose your country or region" aria-label="United States. Choose your country or region">United States</a>
              </div>
              <div className="ac-gf-footer-legal">
                <div className="ac-gf-footer-legal-copyright">Copyright © 2022 Apple Inc. All rights reserved.</div>
                <div className="ac-gf-footer-legal-links">
                  <a className="ac-gf-footer-legal-link analytics-exitlink" href="https://www.apple.com/legal/privacy/">Privacy Policy</a>
                  <a className="ac-gf-footer-legal-link" href="https://www.apple.com/legal/internet-services/terms/site.html">Terms of Use</a>
                  <a className="ac-gf-footer-legal-link analytics-exitlink" href="https://www.apple.com/shop/goto/help/sales_refunds">Sales and Refunds</a>
                  <a className="ac-gf-footer-legal-link analytics-exitlink" href="https://www.apple.com/legal/">Legal</a>
                  <a className="ac-gf-footer-legal-link" href="https://www.apple.com/sitemap/">Site Map</a>
                </div>
              </div>
            </section></div>
        </footer> */}
        {/* 
                <div className="snipcss-modal snipcss-micromodal-slide" id="modal-pick-resolution"></div>
                <div className="edge_builder edge_builder_top" style={{top: 586px; left: 351px; height: 0px; width: 0px;}}></div>
                <div className="edge_builder edge_builder_right" style="top: 586px; left: 1168px; height: 0px; width: 0px;"></div>
                <div className="edge_builder edge_builder_bottom" style="top: 638px; left: 351px; height: 0px; width: 0px;"></div>
                <div className="edge_builder edge_builder_left" style="top: 586px; left: 349px; height: 0px; width: 0px;"></div> */}
      </div>
    </div >
  )
}