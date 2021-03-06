import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import { AlertCircle } from 'react-feather'
import ButtonDispensary from './ButtonDispensary'

import './SolutionSection.scss'

const SolutionSection = ({
  title,
  section3,
  section3List,
  section3Features,
  solution1,
  solution2,
  solution3,
  diagram
}) => {
  return (
    <section className="SolutionSection section thick bg-primary-dusty">
      <div className="container row">
        <div className="col-lg-6">
          <div className="inline py-5">
            <div className="Solution--Title my-auto">
              <img
                src="../images/svg/text-symbol-dark.svg"
                alt={title}
                width="70px"
                className="pr-4 py-4"
              />
              <h2 className="text-white my-auto">SOLUTION</h2>
            </div>
            <Content source={section3} className="my-auto text-center-sm" />
            <img src={diagram} alt={title} className="img-fluid p-3" />
            <div className="Solution--Approved">
              <p>CHECKLIST:</p>
              <Content
                source={section3Features}
                className="my-auto text-center-sm Solution--Feature--List"
              />
            </div>
          </div>
          <ButtonDispensary />
          <div>
            <div className="breaker"></div>
            <div className="container row">
              <div className="col-6">
                {' '}
                <small className="small-text">
                  The {title}
                  <br />
                  Innovation 4.20
                </small>
              </div>
              <div className="col-6">
                <div>
                  <small className="small-text">
                    BAKKED R&amp;D #Seshwithoutthemess
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg-dots">
          <img
            src={solution1}
            alt={title}
            className="img-fluid mx-auto text-center solution1"
          />
          <img
            src={solution2}
            alt={title}
            className="img-fluid mx-auto text-center solution2"
          />
          <img
            src={solution3}
            alt={title}
            className="img-fluid mx-auto text-center solution3 Tilt"
          />
        </div>
        <img
          src="../images/svg/product-barcode.svg"
          alt="Bakked Barcode"
          className="img-fluid Solution-Barcode"
        />
      </div>
    </section>
  )
}
SolutionSection.propTypes = {
  sticker1: PropTypes.string,
  sticker2: PropTypes.string,
  diagram: PropTypes.string
}

export default SolutionSection
