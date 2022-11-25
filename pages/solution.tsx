import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import type { NextPage } from 'next'
import Layout from '../components/layout'
import RequestHelper from '../utils/requestHelper'
import { useSelector, useDispatch } from 'react-redux'
import { updateSolution, updatePrevious } from '../store/slices/orderSlice'
import { useAppSelector } from '../store/hooks'


const Home: NextPage = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { isAuthenticated, firstname, lastname } = useAppSelector(state => state.auth)
  const { deviceType, model, problem } = useAppSelector(state => state.order)
  console.log('deviceType, model, problem, solution', deviceType, model, problem)

  if (!isAuthenticated) {
    router.push('/login')
  }

    useEffect(() => {
    // fetchData()
  }, [])

  const selectSolution = async (solution: string) => {
    dispatch(updateSolution({
      solution,
    }))
    await RequestHelper('post', '/order', {
      deviceType,
      model, 
      problem, 
      "deliveryType": solution,
      description: "test"
    });
    dispatch(updatePrevious({
      previous: '',
    }))
    if (solution === 'پیک') {
      router.push('/address')
    } else {
      alert('درخواست شما با موفقیت ثبت شد')
      router.push('/orders')
    }
  };

  return (
    <Layout title="ثبت سفارش">
      <div className="core-layout__viewport">
        <div className="top-section-solution-groups">
          <div className=" solution-group button-group">
            <div className="content-area">
              <br />
              <br />
              <br />
              {/* <h2 className="button-group-title">Solutions</h2> */}
              <div className="user-loc-button">
                <span className="location-name loc-button">
                  لطفا روش دریافت دستگاه خود را انتخاب کنید
                </span>
              </div>
              <ul className="button-group-solutions">
                <li id="CIN.MULTI" className="solution-tile tile-shadow tile tile-rounded"
                  onClick={() => { selectSolution('مراجعه به فروشگاه') }}
                >
                  <div className="tile-content">
                    <img className="bcs-image"
                      src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/cas/v1/solutions/takein.svg" alt="" aria-hidden="true" />
                    <h3 className="tile-title" id="Bring in for Repair">مراجعه به فروشگاه ما</h3>
                    <p className="subtitle">می تونید دستگاه‌تون رو برای تعمیر به فروشگاه ما تحویل بدین</p>
                  </div>
                  <button className="actions cta-button button button-secondary"
                    aria-label="Find a location (Bring in for Repair)">ثبت درخواست</button>
                </li>
                <li id="ONS.MAASP" className="solution-tile tile-shadow tile tile-rounded"
                  onClick={() => { selectSolution('پیک') }}
                >
                  <div className="tile-content">
                    <img className="bcs-image" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/cas/v1/solutions/Repair-Van-Long.svg"
                      alt="" aria-hidden="true" />
                    <h3 className="tile-title" id="We’ll Come to You">تحویل به پیک</h3>
                    <p className="subtitle">پیک ما به آدرس شما مراجعه میکنه و دستگاه رو ازتون تحویل میگیره</p>
                  </div>
                  <button className="actions cta-button button button-secondary" aria-label="Find a provider (We’ll Come to You)">ثبت درخواست</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
