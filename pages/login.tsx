import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import type { NextPage } from 'next'
// import '../styles/login.module.css'
import Layout from '../components/layout'
import axios from 'axios'
import RequestHelper from '../utils/requestHelper'


const Home: NextPage = () => {

  const [mobile, setMobile] = useState('');
  const router = useRouter()

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await RequestHelper('post', '/otp', {
        mobile,
      });
      router.push({ pathname: '/verify', query: { mobile } });

      // if (comeFromAddService) {
      //   goesToAddService(false);
      //   navigation.navigate("خانه", { screen: "AddService" });
      // } else {
      //   navigation.navigate("profile");
      // }
    } catch (err) { }
  };

  return (
    <Layout title="ورود / ثبت نام">
      <div className="si-body si-container container-fluid" id="content" role="main" data-theme="dark">
        {/* <apple-auth app-loading-defaults="{appLoadingDefaults}" pmrpc-hook="{pmrpcHook}"> */}
        <div className="widget-container  fade-in restrict-min-content  restrict-max-wh  fade-in " data-mode="inline" data-isiebutnotedge="false">

          <div id="step" className="si-step  ">
            {/* <logo {hide - app - logo}="hideAppLogo" {show - fade -in}="showFadeIn" {(section)}="section"></logo> */}
            <div id="stepEl" className="   ">
              {/* <sign-in suppress-iforgot="{suppressIforgot}" initial-route="" {on - test - idp}="@_onTestIdp"> */}


              <div className="signin fade-in" id="signin">
                {/* <app-title signin-label="true" title-className=""> */}


                <h1 tabIndex={-1} className="si-container-title tk-label  ">
                  ورود به ایران اپل فیکس
                </h1>
                {/* </app-title> */}


                <form onSubmit={submit} >
                  <div className="container si-field-container  password-second-step     ">
                    <div id="sign_in_form" className="signin-form  account-name-entered  fed-auth  password-entered   hide-password">
                      <div className="si-field-container container">
                        <div className="form-table">
                          <div className="account-name form-row    ">
                            <label className="sr-only form-cell form-label" htmlFor="account_name_text_field">Sign In with your Apple&nbsp;ID</label>
                            <div className="form-cell">
                              <div className=" form-cell-wrapper ">
                                <input type="number"
                                  id="account_name_text_field"
                                  // can-field="accountName" 
                                  // autoComplete="off"
                                  // autoCorrect="off" 
                                  // autoCapitalize="off" 
                                  // aria-required="true" 
                                  // spellCheck="false"
                                  required
                                  className="force-ltr form-textbox form-textbox-text " placeholder="شماره همراه" aria-invalid="false"
                                  value={mobile}
                                  onChange={
                                    (e) =>
                                      setMobile(e.target.value)
                                  }
                                />
                                {/* <span aria-hidden="true" id="apple_id_field_label" className=" form-label-flyout">
                                شماره همراه
                              </span> */}
                              </div>
                            </div>

                          </div>
                          {/* <div className="password form-row" aria-hidden="true">
                          <label className="sr-only form-cell form-label" htmlFor="password_text_field">Password</label>
                          <div className="form-cell">
                            <div className="form-cell-wrapper ">
                              <input type="password" id="password_text_field" aria-required="true" required can-field="password" autoComplete="off" className="form-textbox form-textbox-text " placeholder="Password" aria-invalid="false" tabIndex={-1} />
                              <span id="password_field_label" aria-hidden="true" className=" form-label-flyout">              Password
                              </span>
                              <span className="sr-only form-label-flyout" id="invalid_user_name_pwd_err_msg" aria-hidden="true">
                              </span>
                            </div>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>


                    {/* <div className="si-remember-password">
                    <input type="checkbox" id="remember-me" className="form-choice form-choice-checkbox"
                    // {($checked)}="isRememberMeChecked" 
                    />
                    <label id="remember-me-label" className="form-label" htmlFor="remember-me">
                      <span className="form-choice-indicator" aria-hidden="true"></span>                      Remember me
                    </label>
                  </div> */}
                    <div className="spinner-container auth  hide "></div>
                    <button id="sign-in" tabIndex={0} className="si-button btn  fed-ui   fed-ui-animation-show      remember-me  " aria-label="Continue" aria-disabled="false">
                      <i className="shared-icon icon_sign_in"></i>
                      <span className="text feat-split">
                        Continue

                      </span>
                    </button>
                    <button id="sign-in-cancel" aria-disabled="false" tabIndex={0} className="si-button btn secondary feat-split  remember-me   link " aria-label="Close">
                      <span className="text">                      Close

                      </span>
                    </button>
                  </div>
                </form>

                {/* <div className="si-container-footer">

                  <div className="separator "></div>
                  <div className="links tk-subbody">
                    <div className="si-forgot-password">
                      <a id="iforgot-link" className="si-link ax-outline lite-theme-override" href="https://iforgot.apple.com/password/verify/appleid" target="_blank">
                        Forgot Apple&nbsp;ID or <span className="no-wrap sk-icon sk-icon-after sk-icon-external">password?</span><span className="sr-only">Opens in a new window.</span>
                      </a>
                    </div>

                    <div>
                      <span className="fat">
                        Don’t have an Apple&nbsp;ID?</span>
                      <a id="create-link" className="si-forgot-password si-link ax-outline lite-theme-override " href="https://appleid.apple.com/account" target="_blank">
                        Create yours <span className="no-wrap sk-icon sk-icon-after sk-icon-external">now.</span><span className="sr-only">Opens in a new window.</span></a>
                    </div>



                  </div>


                </div> */}
              </div>






              {/* </sign -in> */}
            </div >
          </div >
          <div id="stocking" style={{ display: 'none !important' }}></div>










        </div >
        {/* <idms-modal wrap-className="full-page-error-wrapper " {(show)}="showfullPageError" auto - close="false" > 
</idms - modal >
</apple - auth > */}
      </div >
    </Layout>
  )
}

export default Home
