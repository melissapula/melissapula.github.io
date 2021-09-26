<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row id="veteransPage" class="justify-content-center" fluid>
      <mdb-col lg="7" sm="12">
        <mdb-row id="beltramiNature" class="m-0">
          <mdb-col col="3">
            <mdb-row class="align-items-center">
              <img src="../assets/BCLogo.png" class="img-fluid">
            </mdb-row>
          </mdb-col>
          <mdb-col col="3">
            <mdb-row class="align-items-end justify-content-center h-100">
              <strong style="color: #92bf6d; font-size: 20px; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif" ><i>Minnesota</i></strong>
            </mdb-row>
          </mdb-col>
        </mdb-row>
        <mdb-row class="pt-4 justify-content-center m-0" style="background-color: white"><h1>Veteran's Services</h1></mdb-row>
        <mdb-tabs style="background-color: white"
            :active="0"
            default
            :links="[
      { text: 'Home', slot: 'custom-slot' },
      { text: 'Discharge Record' },
      { text: 'Services' },
      { text: 'Homestead Market Value Exclusion'}]"
            :transition-duration="0.5"
            transition-style="linear"
        >
          <template :slot="'custom-slot'">
            <mdb-container>
              <mdb-row class="m-2">
                <mdb-col>
                  <mdb-row class="mt-1 justify-content-center align-items-center">
                    <mdb-col lg="5" sm="8">
                      <mdb-row class="justify-content-center"><h2><b>Shane Gustafson</b></h2></mdb-row>
                      <mdb-row class="justify-content-center"><h2><b>Veterans Service Officer</b></h2></mdb-row>
                      </mdb-col>
                    <mdb-col lg="3" sm="6"><img src="../assets/shane-gustafson-beltrami.jpg" class="img-fluid"></mdb-col>
                  </mdb-row>
                  <mdb-row class="mt-2"><p>The Beltrami County Veterans Service Office provides guidance and assistance to Veterans and their family
                    members regarding federal and state Veteran benefit programs.</p>
                    <p>It is our goal to provide benefits and services to Veterans and their families in recognition of their service
                      to the Nation.  Our vision is that the Veterans whom we provide service to will feel that our Nation has kept its
                      commitment to them.  Compassion, honesty, trust, respect, open communication, and accountability will be reflected
                      in our day to day behavior.</p>
                  </mdb-row>
                  <mdb-row class="mt-1"><h3>Links to Resources and Services</h3></mdb-row>
                  <mdb-row class="mt-1"><mdb-icon icon="check" color="green" class="mr-2"></mdb-icon>
                    <a href="https://www.myhealth.va.gov/mhv-portal-web/home" target="_blank">Veteran's Health</a>
                  </mdb-row>
                  <mdb-row class="mt-1"><mdb-icon icon="check" color="green" class="mr-2"></mdb-icon>
                    <a href="https://benefits.va.gov/benefits/" target="_blank">Federal VA Benefits</a>
                  </mdb-row>
                  <mdb-row class="mt-1"><mdb-icon icon="check" color="green" class="mr-2"></mdb-icon>
                    <a href="https://mn.gov/mdva/" target="_blank">State VA Benefits</a>
                  </mdb-row>
                  <mdb-row class="mt-1"><mdb-icon icon="check" color="green" class="mr-2"></mdb-icon>
                    <a href="https://www.tricare.mil/" target="_blank">TRICARE Military Health Plan</a>
                  </mdb-row>
                  <mdb-row class="mt-1"><mdb-icon icon="check" color="green" class="mr-2"></mdb-icon>
                    <a href="https://www.mac-v.org/" target="_blank">MN Assistance Council for Veterans</a>
                  </mdb-row>
                  <mdb-row class="mt-4 mb-2">
                    <mdb-tbl bordered striped style="width: 100%">
                      <mdb-tbl-head>
                        <tr>
                          <th colspan="2" style="text-align: center"><b>Frequently Requested Numbers</b></th>
                        </tr>
                      </mdb-tbl-head>
                      <mdb-tbl-body>
                        <tr>
                          <td>Vets Linkage Line</td>
                          <td>888-546-5838</td>
                        </tr>
                        <tr>
                          <td>VA Medical Center Fargo</td>
                          <td>800-410-9723</td>
                        </tr>
                        <tr>
                          <td>Bemidji Community Outpatient Clinic</td>
                          <td>218-755-6360</td>
                        </tr>
                        <tr>
                          <td>VA Benefits Information</td>
                          <td>800-827-1000</td>
                        </tr>
                        <tr>
                          <td>VA Debt Management Center</td>
                          <td>800-827-0648</td>
                        </tr>
                        <tr>
                          <td>Vets Crisis Line</td>
                          <td>800-273-8255</td>
                        </tr>
                      </mdb-tbl-body>
                    </mdb-tbl>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
          <template :slot="'Discharge Record'">
            <mdb-container>
              <mdb-row class="m-2">
                <mdb-col>
              <mdb-row class="mt-2 justify-content-center"><h3>Discharge Record</h3></mdb-row>
              <mdb-row><p>The Beltrami County Veterans Service Office believes that a military discharge record is one of the
                most important documents a veteran will receive.</p>
              <p>The discharge record that pertains to active military service is referred to a DD214. The discharge
                record pertaining to any National Guard service is referred to as NGB22. If you have a discharge
                document with an ink signature, we strongly recommend it be recorded.</p>
              <p>If you currently have the original discharge record, it is recommended that you furnish it to the
                County Recorder and/or the Veterans Service Office for recording.</p>
              <p>Your original document will be returned to you along with two (2) certified copies. Once this has been
                completed you will be able to obtain additional certified copies to prove your veteran status. Currently
                the recording of the original discharge and receiving certified copies are free of charge.</p>
              <p>In addition we recommend you safeguard the original by storing it in a safety deposit box, fire proof box, etc.</p>
              <p>Finally, be sure to let someone know (a spouse, children, or attorney) where the original or a certified
                copy of the original can be obtained in time of need, should you be incapacitated.</p>
              <p>To obtain State or Federal benefits, to acquire Financial Aid, and for certain employment purposes you
                may be requested to furnish a copy of your discharge record.</p>
              <p>Be sure to locate a copy of your discharge before you are required to furnish a copy. If you cannot
                locate a copy of your discharge there are a few options to explore:</p>
              <p>Check with the County Recorder's Office or Veterans Service Office in the county in which you were
                living when you were discharged to see if it was recorded there.</p>
              <p>If you previously visited with a County Veterans Service Officer, contact their office to see if they have a copy.</p>
              <p>If you are unable to locate a copy of your discharge, please contact the County Veterans Service Office
                for assistance with retrieving your document. This process can take some time, so please be sure to begin the search as soon as possible.</p>
              </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
          <template :slot="'Services'">
            <mdb-container>
              <mdb-row class="m-2">
                <mdb-col>
                  <mdb-row class="mt-2 justify-content-center"><h3>Services</h3></mdb-row>
              <mdb-row class="mt-4"><a href="https://www.va.gov/" target="_blank"><span style="font-size: 16px">Federal Services</span></a></mdb-row>
              <mdb-row class="pb-4"><a href="https://mn.gov/mdva/" target="_blank"><span style="font-size: 16px">State Services</span></a></mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
          <template :slot="'Homestead Market Value Exclusion'">
            <mdb-container>
              <mdb-row class="m-2">
                <mdb-col>
              <mdb-row class="mt-2 justify-content-center"><h2>Market Value Exclusion</h2></mdb-row>
              <mdb-row class="mt-2"><h3>On Homesteads of Disabled Veterans</h3></mdb-row>
            <mdb-row><p>Eligibility for a market value exclusion on property for a Veteran with a disailtiy, require either of the following:</p>
            <p>1. A United States military veteran with a service-connected disability rating of 70% or more as
              determined by the United States Department of Veteran Affairs.</p>
            <p>2. A United States military veteran with 100% permanent and total service-connected disability as
              determined by the United States Department of Veteran Affairs.</p>
            <p>Applications for this program are due by December 31st of the current year to receive the benefit on
              property taxes payable in the following year. A homestead exclusion for a veteran with a disability
              application can be found <a href="https://www.co.beltrami.mn.us/Document%20Center/Documents%20Forms/Real%20Estate%20and%20Tax/Disabled%20Veteran%20Homestead%20Application.pdf" target="_blank">HERE</a>.</p>
            <p>Completed applications and any required documents can be turned in to the Beltrami County Assessor’s
              Office either by mail, email or in person:</p>
            <p>County Administration Building
              701 Minnesota Ave NW Ste 130
              Bemidji, MN 56601</p>
            </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
        </mdb-tabs>
        <mdb-row class="justify-content-center align-items-center py-4 mx-0" style="background-color: white">
          <mdb-col lg="2" sm="8">
            <mdb-row class="justify-content-center"><img src="../assets/Veterans.jpg" class="img-fluid"></mdb-row>
            </mdb-col>
          <mdb-col lg="4" sm="8">
            <mdb-row class="justify-content-center">
              Community Service Center<br>
              616 America Ave. NW Ste.140<br>
              Bemidji, MN 56601<br><br>
              phone: 218-333-4177
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
export default {
  name: "VeteransHomePage"
}
</script>

<style scoped>
#veteransPage {
  background-image: url("../assets/body-bg2.jpg");
  background-color: #FCEBB6;
  color: #221811;
  text-family: Verdana, Arial, sans-serif;
  min-height: 100vh;
}
#beltramiNature {
  background-image: url("../assets/Nature&Wildlife1021.jpg");
  background-color: #FCEBB6;
  color: #221811;
  text-family: Verdana, Arial, sans-serif;
}
@media only screen and (max-width: 768px) {

}

</style>