import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import type { NextPage } from 'next'
import Layout from '../components/layout'
import RequestHelper from '../utils/requestHelper'
import { useSelector, useDispatch } from 'react-redux'
import { updateModel } from '../store/slices/orderSlice'


const Home: NextPage = () => {

  // const [mobile, setMobile] = useState('');
  const router = useRouter()
  const dispatch = useDispatch()

  const selectModel = (model: string) => {
    dispatch(updateModel({
      model,
    }))
    router.push({ pathname: '/problem' });
  };

  const models: Array<string> = [
    'iPhone 5',
    'iPhone 5c',
    'iPhone 5s',
    'iPhone 6',
    'iPhone 6 Plus',
    'iPhone 6s',
    'iPhone 6s Plus',
    'iPhone SE (1st generation)',
    'iPhone 7',
    'iPhone 7 Plus',
    'iPhone 8',
    'iPhone 8 Plus',
    'iPhone X',
    'iPhone XR',
    'iPhone XS',
    'iPhone XS Max',
    'iPhone 11',
    'iPhone 11 Pro',
    'iPhone 11 Pro Max',
    'iPhone SE (2nd generation)',
    'iPhone 12 mini',
    'iPhone 12',
    'iPhone 12 Pro',
    'iPhone 12 Pro Max',
    'iPhone 13 mini',
    'iPhone 13',
    'iPhone 13 Pro',
    'iPhone 13 Pro Max',
    'iPhone SE (3rd generation)',
    'iPhone 14',
    'iPhone 14 Plus',
    'iPhone 14 Pro',
  ]

  return (
    <Layout title="ثبت سفارش">
      <div className="core-layout__viewport">
        <div className="signed-product-selector snipcss-o5Wlo">
          <div className="content-area">
            <div className="signed-product-selector-wrapper">
              <div className="signed-product generic-products-services">
                <h2 className="device-heading">
                  <span>
                    انتخاب مدل
                  </span>
                </h2>
                <div className="row">
                  <ul role="list" className="row" id="allproducts">
                    {models.reverse().map(model =>
                      <li key={model} role="listitem" className="form-selector column large-6 medium-6 small-12"
                        onClick={() => { selectModel(model) }}
                      >
                        <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="AirPods" data-testid="signed-more-product-card">
                          <label className="form-selector-label" htmlFor="PFC7000" >
                            <span className="row details-container">
                              <span className="form-selector-left-col"                           >
                                {/* <img className="device-image" width="42" height="42"
                                src="/iphone.png" alt="" aria-hidden="true" /> */}
                                <span className="form-selector-title">
                                  {model}
                                </span>
                              </span>
                            </span>
                          </label>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
