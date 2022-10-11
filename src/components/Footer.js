import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer(){
  return(
   <MDBFooter className='text-center' color='black' bgColor="white">
    <hr/>
      <MDBContainer className='p-2'>
        <section className='mb-2'> 
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='discord' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='telegram' />
          </MDBBtn>
        </section>

        <section className='mb-1'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-1'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='4' start='12'>
                <MDBInput contrast type='email' placeholder="Email Address" className='mb-2' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='dark' type='submit' className='mb-2'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
        <section className=''>
          <MDBRow className="justify-content-center">
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>cst websites</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.cst.edu.bt'className='text-dark' target="_blank">
                    CST 
                  </a>
                </li>
                <li>
                  <a href='https://vle.cst.edu.bt/' className='text-dark' target="_blank">
                    CST VLE
                  </a>
                </li>
                <li>
                  <a href='https://www.rub.edu.bt/' className='text-dark' target="_blank">
                    RUB CST
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>API</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Terms and Services
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Help-Desk</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Contact Admin
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Counselling services
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Tutorials
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 - {new Date().getFullYear()}
      </div>
    </MDBFooter>
  );
}
