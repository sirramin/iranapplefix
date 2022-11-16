import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import type { NextPage } from 'next'
import Layout from '../components/layout'
import RequestHelper from '../utils/requestHelper'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/slices/authSlice'
import { useAppSelector } from '../store/hooks'


const Home: NextPage = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { isAuthenticated, firstname, lastname } = useAppSelector(state => state.auth)

  const selectProblem = (problem: string) => {
    dispatch(login({
      problem,
    }))
    if (!isAuthenticated) {
      router.push({ pathname: '/login' });
    } else if (!firstname || !lastname) {
      router.push({ pathname: '/personalInfo', query: { previous: 'problem' } });
    } else {
      router.push({ pathname: '/delivery' });
    }
  };

  const problems: Array<string> = [
    'ال سی دی',
    'مشکلات صفحه نمایش و تاچ',
    'تعویض قاب',
    'آب خوردگی',
    'ضربه خوردگی',
    'مشکلات میکروفون',
    'مشکلات شبکه و اینترنت',
    'هنگ کردن',
    'مشکلات شارژ',
    'خاموش شدن ناگهانی',
    'عمر کم باتری',
    'مشکلات نرم افزاری',
    'مشکلات اسپیکر',
    'روشن نشدن دستگاه',
    'موارد دیگر',
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
                    چه مشکلی دارید؟
                  </span>
                </h2>
                <div className="row">
                  <ul role="list" className="row" id="allproducts">
                    {problems.map(problem =>
                      <li role="listitem" className="form-selector column large-6 medium-6 small-12"
                        onClick={() => { selectProblem(problem) }}
                      >
                        <button className="signed-more-product-card column large-12 medium-12 small-12" aria-label="AirPods" id="PFC7000" data-testid="signed-more-product-card">
                          <label className="form-selector-label" htmlFor="PFC7000" id="label_PFC7000">
                            <span className="row details-container problem-text">
                              <span className="form-selector-left-col">
                                <span className="form-selector-title">
                                  {problem}
                                </span>
                              </span>
                            </span>
                          </label>
                        </button>
                      </li>
                    )}
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
