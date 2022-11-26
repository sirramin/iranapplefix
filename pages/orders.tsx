import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import RequestHelper from '../utils/requestHelper'
import { useAppSelector } from '../store/hooks'
import { useSelector, useDispatch } from 'react-redux'
import { updateName } from '../store/slices/authSlice'

const Home: NextPage = () => {

  const router = useRouter()
  const dispatch = useDispatch()

  const [collection, setCollection] = useState([])

  const fetchData = async () => {
    try {
      const results = await RequestHelper(
        'get',
        '/orders'
      )
      setCollection(results)
    } catch (err) { }
  }

  useEffect(() => {
    fetchData()
  }, [])

  interface Item {
    _id: string;
    deviceType: boolean;
    model: string | null;
    deliveryType: string | null;
    problem: string | null;
    createdAt: string | number | Date;
  }

  return (
    <Layout title="اطلاعات شخصی">
      <div className="si-body si-container container-fluid" id="content" role="main" data-theme="dark">
        <div className="widget-container  fade-in restrict-min-content  restrict-max-wh  fade-in " data-mode="inline" data-isiebutnotedge="false">
          <div id="step" className="si-step  ">
            <div id="stepEl" className="   ">
              <div className="signin fade-in" id="signin">
                <h1 tabIndex={-1} className="si-container-title tk-label  ">
                  سفارش های شما
                </h1>
                <div className="orders-table">
                  <div className="wrapper">

                    <div className="table">

                      <div className="row header">
                        <span className="cell">
                          نوع دستگاه
                        </span>
                        <span className="cell">
                          مدل
                        </span>
                        <span className="cell">
                          مشکل
                        </span>
                        <span className="cell">
                          روش ارسال
                        </span>
                        <span className="cell">
                          تاریخ
                        </span>
                      </div>

                      {collection.reverse().map((item: Item) => (
                        <div className="row" key={item._id}>
                          <span className="cell" data-title="نوع دستگاه">
                            {item.deviceType}
                          </span>
                          <span className="cell" data-title="مدل">
                            {item.model}
                          </span>
                          <span className="cell" data-title="مشکل">
                            {item.problem}
                          </span>
                          <span className="cell" data-title="روش ارسال">
                            {item.deliveryType}
                          </span>
                          <span className="cell" data-title="تاریخ">
                            {new Intl.DateTimeFormat('fa-IR',
                              {
                                dateStyle: 'short', timeStyle: 'short'
                              }
                            ).format(
                              new Date(item.createdAt)
                            )}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div >
          </div >
          <div id="stocking" style={{ display: 'none !important' }}></div>
        </div >
      </div >
    </Layout>
  )
}

export default Home
