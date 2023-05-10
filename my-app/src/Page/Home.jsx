import React from 'react'
import "../Style/Home.css"
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className='home'>
        <div className='picCont'>
            <img src="https://www.globeslcc.com/wp-content/uploads/media/art-crash-course-courtesy-image.jpg"/>
        </div>
        <div className='come'>
        <h2 >COURSES</h2>
        <div className='grid'>
          
            <div className='imgdiv'>
            <Link to="/VideoPlayer">
                <img className='img1' src="https://idpdefault.s3.ap-south-1.amazonaws.com/912663d4fa5ca0dab1520230128160508.jpg" />
                </Link>
                <h3>LinkedIn Growth Guide</h3>
               
            </div>
           
            <div>
                <Link to="/marketing">
                <img  className='img1' src="https://idpdefault.s3.ap-south-1.amazonaws.com/147063760bf0a37f25820221117155448.jpg" />
                </Link>
                <h3>Marketing Mindset</h3>
               
            </div>

            <div>
            <Link to="/Grammer">
                <img className='img1' src="https://idpdefault.s3.ap-south-1.amazonaws.com/7973638459e84eb043220221128121912.jpg" />
                </Link>
                <h3>English Grammer Mastery</h3>
               
            </div>

            <div>
            <Link to="/Digital">
                <img className='img1' src="https://idpdefault.s3.ap-south-1.amazonaws.com/793263760a07963637420221117154639.jpg" />
                </Link>
                <h3>Digital Marketing Revolution</h3>
               
            </div>

            <div>
            <Link to="/Job">
                <img className='img1' src="https://idpdefault.s3.ap-south-1.amazonaws.com/356063845a31465be6820221128122025.jpg" />
                </Link>
                <h3>Job Interview</h3>
               
            </div>
        </div>
        </div>
    </div>
  )
}
