import { CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
// import HeroLogo from "../../assets/hero-image.png";
import HeroLogo from "../../assets/hero-image2.png";

import { Link } from "../../components/Link";
import "./index.css";
const Home = () => {
  return (
    <main>
      <div className="hero-container">
        <CContainer>
          <CRow className="justify-content-between">
            <CCol className="" lg={7}>
              <div className="logo-container ">
                <img className="hero-logo" src={HeroLogo} alt="" />
              </div>
            </CCol>
            <CCol lg={5 }>
              <div className="question-container">
                <CContainer>
                  <CCol className="d-grid gap-5">
                    <CRow>
                      <Link page="Cardápio" />
                    </CRow>
                    <CRow>
                      <Link page=" Pratos da estação" />
                    </CRow>
                    <CRow>
                      <Link page="O espaço" />
                    </CRow>
                    <CRow>
                      <Link page="FAQ de delivery" />
                    </CRow>
                    <CRow>
                      <Link page="Sobre nós" />
                    </CRow>
                    <CRow className="center text-center justify-content-md-center">
                      <CCol className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 50 50"
                        >
                          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
                      </CCol>
                      <CCol>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="46"
                          height="46"
                          viewBox="0 0 32 32"
                        >
                          <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                        </svg>
                      </CCol>
                      <CCol>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>{" "}
                      </CCol>
                    </CRow>
                  </CCol>
                </CContainer>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </main>
  );
};

export { Home };
