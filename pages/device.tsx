import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import type { NextPage } from 'next'
import Layout from '../components/layout'
import RequestHelper from '../utils/requestHelper'
import { useSelector, useDispatch } from 'react-redux'
import { updateDeviceType } from '../store/slices/orderSlice'


const Home: NextPage = () => {

  const router = useRouter()
  const dispatch = useDispatch()

  const selectDevice = (type: string) => {
    dispatch(updateDeviceType({
      deviceType: type,
    }))
    router.push({ pathname: '/models' });
  };

  return (
    <Layout title="ثبت سفارش">
      <div className="core-layout__viewport">
        <div className="signed-product-selector snipcss-o5Wlo">
          <div className="content-area">
            <div className="signed-product-selector-wrapper">
              <div className="signed-product generic-products-services">
                <h2 className="device-heading">
                  <span>
                    انتخاب دستگاه‌
                  </span>
                </h2>
                <div className="row">
                  <ul role="list" className="row" id="allproducts">
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12"
                      onClick={() => { selectDevice('iphone') }}
                    >
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="AirPods" id="PFC7000" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PFC7000" id="label_PFC7000">
                          <span className="row details-container">
                            <span className="form-selector-left-col"                           >
                              <img className="device-image" width="42" height="42"
                                src="/iphone.png" alt="" aria-hidden="true" />
                              <span className="form-selector-title">
                                iPhone
                              </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12"
                      onClick={() => { selectDevice('imac') }}
                    >
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="AirTag" id="PGF33001" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF33001" id="label_PGF33001">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42"
                                src="/imac.jfif" alt="" aria-hidden="true" />
                              <span className="form-selector-title">
                                iMac
                              </span>
                         
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12"
                      onClick={() => { selectDevice('macbook') }}
                    >
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="App Store" id="PGF63003" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63003" id="label_PGF63003">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42"
                                src="/mac.png" alt="" aria-hidden="true" />
                              <span className="form-selector-title">
                                MacBook
                              </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    {/* <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                    <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Arcade" id="PGF63007" data-testid="signed-more-product-card">
                      <label className="form-selector-label" htmlFor="PGF63007" id="label_PGF63007">
                        <span className="row details-container">
                          <span className="form-selector-left-col">
                            <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PL204&amp;size=480" alt="" aria-hidden="true"/>
                              <span className="form-selector-title">
                                Apple Arcade
                              </span>
                          </span>
                        </span>
                      </label>
                    </button>
                  </li>
                  <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                    <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Card" id="PGF90002" data-testid="signed-more-product-card">
                      <label className="form-selector-label" htmlFor="PGF90002" id="label_PGF90002">
                        <span className="row details-container">
                          <span className="form-selector-left-col">
                            <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PP102&amp;size=480" alt="" aria-hidden="true"/>
                              <span className="form-selector-title">
                                Apple Card
                              </span>
                          </span>
                        </span>
                      </label>
                    </button>
                  </li>
                  <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                    <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Fitness+" id="PGF63011" data-testid="signed-more-product-card">
                      <label className="form-selector-label" htmlFor="PGF63011" id="label_PGF63011">
                        <span className="row details-container">
                          <span className="form-selector-left-col">
                            <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PL211&amp;size=480" alt="" aria-hidden="true"/>
                              <span className="form-selector-title">
                                Apple Fitness+
                              </span>
                          </span>
                        </span>
                      </label>
                    </button>
                  </li> */}
                    {/* <div id="more-products-drawer" aria-hidden="true" className="row less-products">
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple ID" id="PGF63005" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63005" id="label_PGF63005">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF23&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple ID
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Music" id="PGF51003" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF51003" id="label_PGF51003">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF32&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple Music
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple News+" id="PGF63008" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63008" id="label_PGF63008">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PL205&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple News+
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple One" id="PGF63010" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63010" id="label_PGF63010">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=300225&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple One
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Pay" id="PFC6009" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PFC6009" id="label_PFC6009">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF29&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple Pay
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Pencil" id="PGF42004" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF42004" id="label_PGF42004">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PP125&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple Pencil
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple TV" id="PGF62001" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF62001" id="label_PGF62001">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF10&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple TV
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple TV+" id="PGF63009" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63009" id="label_PGF63009">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PL203&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple TV+
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Apple Watch" id="SG008" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="SG008" id="label_SG008">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF28&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Apple Watch
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Beats by Dre" id="PFC6007" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PFC6007" id="label_PFC6007">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF27&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Beats by Dre
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Billing &amp; Subscriptions" id="PGF63006" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63006" id="label_PGF63006">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PGF63006&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Billing &amp; Subscriptions
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Hardware Coverage" id="PGF66001" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF66001" id="label_PGF66001">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PGF66001&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Hardware Coverage
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="HomePod" id="PFC6014" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PFC6014" id="label_PFC6014">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF34&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  HomePod
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="iCloud" id="PGF63004" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF63004" id="label_PGF63004">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=133314&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  iCloud
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="iPad" id="SG004" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="SG004" id="label_SG004">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF22&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  iPad
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="iPhone" id="SG003" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="SG003" id="label_SG003">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF9&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  iPhone
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="iPod" id="SG002" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="SG002" id="label_SG002">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF3&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  iPod
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="iTunes Player" id="PGF51001" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF51001" id="label_PGF51001">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF4&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  iTunes Player
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="iTunes Store" id="PGF51002" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF51002" id="label_PGF51002">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=131629&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  iTunes Store
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Mac" id="SG001" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="SG001" id="label_SG001">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=SG001&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Mac
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Magic Keyboard" id="PGF42006" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF42006" id="label_PGF42006">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=300173&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Magic Keyboard
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Smart Keyboard" id="PGF42005" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PGF42005" id="label_PGF42005">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=300015&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Smart Keyboard
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                    <li role="listitem" className="form-selector column large-6 medium-6 small-12">
                      <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="Wireless" id="PFC6001" data-testid="signed-more-product-card">
                        <label className="form-selector-label" htmlFor="PFC6001" id="label_PFC6001">
                          <span className="row details-container">
                            <span className="form-selector-left-col">
                              <img className="device-image" width="42" height="42" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PF7&amp;size=480" alt="" aria-hidden="true"/>
                                <span className="form-selector-title">
                                  Wireless
                                </span>
                            </span>
                          </span>
                        </label>
                      </button>
                    </li>
                  </div> */}
                  </ul>
                </div>
                {/* <div className="more-products-link">
                <button aria-expanded="false" aria-label="Show all Generic Devices and Services" className="link icon icon-after icon-chevrondown show-more" data-testid="more-generic-products-link">
                  <span>
                    Show all
                  </span>
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
