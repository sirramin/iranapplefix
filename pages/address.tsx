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

  // const { firstname, lastname } = useAppSelector(state => state.auth)

  const [address, setAddress] = useState('');
  const previous = router.query.previous;

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      // dispatch(updateName({
      //   address,
      // }))
      await RequestHelper('patch', '/user', {
        address,
      });
      alert('درخواست شما با موفقیت ثبت شد')
      router.push('/')
    } catch (err) { }
  };

  return (
    <Layout title="اطلاعات شخصی">
      <div className="si-body si-container container-fluid" id="content" role="main" data-theme="dark">
        <div className="widget-container  fade-in restrict-min-content  restrict-max-wh  fade-in " data-mode="inline" data-isiebutnotedge="false">
          <div id="step" className="si-step  ">
            <div id="stepEl" className="   ">
              <div className="signin fade-in" id="signin">
                <h1 tabIndex={-1} className="si-container-title tk-label  ">
                  آدرس خود را وارد کنید
                </h1>
                <form onSubmit={submit} >
                  <div className="container si-field-container  password-second-step" style={{ maxWidth: '528px' }}>
                    <div id="sign_in_form" className="signin-form  account-name-entered  fed-auth  password-entered   hide-password">
                      <div className="si-field-container container" style={{ maxWidth: '528px' }}>
                        <div className="form-table">
                          <div className="account-name form-row">
                            {/* <label className="sr-only form-cell form-label" htmlFor="account_name_text_field">Sign In with your Apple&nbsp;ID</label> */}
                            <div className="form-cell">
                              <div className=" form-cell-wrapper">
                                <input type="text"
                                  id="account_name_text_field"
                                  // can-field="accountName" 
                                  // autoComplete="off"
                                  // autoCorrect="off" 
                                  // autoCapitalize="off" 
                                  // aria-required="true" 
                                  // spellCheck="false"
                                  required
                                  className="force-ltr form-textbox form-textbox-text personalInfo" placeholder="آدرس" aria-invalid="false"
                                  value={address}
                                  onChange={
                                    (e) =>
                                      setAddress(e.target.value)
                                  }
                                />
                                {/* <input type="text"
                                  id="account_name_text_field"
                                  // can-field="accountName" 
                                  // autoComplete="off"
                                  // autoCorrect="off" 
                                  // autoCapitalize="off" 
                                  // aria-required="true" 
                                  // spellCheck="false"
                                  required
                                  className="force-ltr form-textbox form-textbox-text personalInfo" placeholder="نام خانوادگی" aria-invalid="false"
                                  value={lastName}
                                  onChange={
                                    (e) =>
                                      setlastName(e.target.value)
                                  }
                                /> */}
                                <button className='button-63' style={{
                                  maxWidth: '300px',
                                  marginLeft: 'auto',
                                  marginRight: 'auto'
                                }}>ثبت</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="spinner-container auth  hide "></div>
                    {/* <button id="sign-in" tabIndex={0} className="si-button btn  fed-ui   fed-ui-animation-show      remember-me  " aria-label="Continue" aria-disabled="false">
                      <i className="shared-icon icon_sign_in"></i>
                      <span className="text feat-split">
                        Continue

                      </span>
                    </button> */}
                    <button id="sign-in-cancel" aria-disabled="false" tabIndex={0} className="si-button btn secondary feat-split  remember-me   link " aria-label="Close">
                      <span className="text">                      Close

                      </span>
                    </button>
                  </div>
                </form>
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
