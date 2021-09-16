<template>
  <mdb-container class="h-100 m-0 p-0 mb-0 overflow-auto" fluid>
    <mdb-row class="pb-4" style="background-color: #A8D0E6">
      <mdb-col col="12">
        <mdb-row class="mt-4 justify-content-center align-items-center" style="background-color: #24305E; color: white; height: 50px">
          <h1>Parenting</h1>
        </mdb-row>
        <mdb-row class="justify-content-center mt-4">
      <mdb-col col="3">
        <img src="../assets/Madison.jpg" class="img-fluid">
        </mdb-col>
        <mdb-col col="3">
          <img src="../assets/girlsnme.jpg" class="img-fluid">
        </mdb-col>
        <mdb-col col="3">
          <img src="../assets/Olivia.jpg" class="img-fluid">
        </mdb-col>
        </mdb-row>
        <mdb-row class="mt-4 justify-content-center align-items-center" style="background-color: #24305E; color: white; height: 50px">
          <h1>World's Okayest Mom</h1>
        </mdb-row>
        <mdb-row class="mt-4">
          <mdb-card-group deck class="mx-4">
            <mdb-card>
              <mdb-card-header style="background-color: #F76C6C; color: white">Homeschooling</mdb-card-header>
              <mdb-card-body>
                <mdb-card-title tag="h5">Why we love it!</mdb-card-title>
                <mdb-card-text style="font-size: 14px">There are many pros and cons when it comes to homeschooling, but for us, the pros far
                  outweigh the cons.</mdb-card-text>
                <mdb-card-text small muted>Last updated Sept. 22 2021</mdb-card-text>
                <mdb-nav-item active @click.native="view = 'homeschooling'" class="text-primary noBullets">View Homeschooling Info</mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
            <mdb-card>
              <mdb-card-header style="background-color: #F76C6C; color: white">Kid-friendly Recipes</mdb-card-header>
              <mdb-card-body>
                <mdb-card-title tag="h5">Food they'll actually eat!</mdb-card-title>
                <mdb-card-text style="font-size: 14px">My oldest loves fruits and vegetables and struggles with meat, while my youngest loves
                  meat and struggles with fruits and vegetables.  Here are some recipes that make them both happy and
                  coming back for seconds!</mdb-card-text>
                <mdb-card-text small muted>Last updated Sept. 22 2021</mdb-card-text>
                <mdb-nav-item active @click.native="view = 'recipes'" class="text-primary noBullets">View Recipes</mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
            <mdb-card>
              <mdb-card-header style="background-color: #F76C6C; color: white">Activities</mdb-card-header>
              <mdb-card-body>
                <mdb-card-title tag="h5">Activate their body and mind!</mdb-card-title>
                <mdb-card-text style="font-size: 14px">Activities to engage your child for a strong and healthier lifestyle.  Not only will
                they enjoy them, but they will be begging for more!</mdb-card-text>
                <mdb-card-text small muted>Last updated Sept. 22 2021</mdb-card-text>
                <mdb-nav-item active @click.native="view = 'activities'" class="text-primary noBullets">View Activities</mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-card-group>
        </mdb-row>
        <mdb-row v-if="view == 'homeschooling'" class="m-t">
          <mdb-col col="12">
          <mdb-card class="mt-4 mx-4" style="min-height: 400px">
            <mdb-card-header style="background-color: #F8E9A1; color: #24305E">Information on Homeschooling</mdb-card-header>
            <mdb-card-body>
            <mdb-card-title>Experience from a homeschooling family</mdb-card-title>
            <mdb-card-text style="font-size: 14px">
              <p>One of the reasons I love homeschooling so much is for the flexibility it provides us as a
              family.  My husband works evenings and weekends and has Thursdays and Fridays off.  If we choose to send our
            kids to public school, they won't get to see him very much.  Since we public school though, we are able
                to arrange our school schedule in a way that better suits us as a family.  Our kids do schoolwork
                Saturday through Wednesday and their schedule is as follows:</p>
              <ul>
                <li><b>8:00 - 11:00:</b> schoolwork (math, english, science, social studies, anatomy, sign language, spanish).</li>
                <li><b>11:00 - 12:00:</b> weight lifting (Mon-chest, Tues-back, Wed-legs, Thurs-delts, Fri-arms and abs, Sat-legs)</li>
                <li><b>12:00 - 13:00:</b> lunch</li>
                <li><b>13:00 - 14:30:</b> schoolwork, or outside play if all their schoolwork is done</li>
                <li><b>14:30 - 15:30:</b> cardio/reading (two days a week, one walks on the treadmill while the other reads out
                loud to me for half an hour and then they switch; two days a week we do a boxing working for half an hour
                and then they read quietly on their own for half an hour)</li>
                <li><b>15:30 - 18:00:</b> outdoor play, kindle time, supper</li>
                <li><b>18:00:</b> bedtime (usually a little bit of kindle time in bed and then I read to them for half an hour
                before lights out by 19:00)</li>
              </ul>
              <p>For anyone interested, we get most of our books through a company called <a href="http://www.criticalthinking.com" target="_blank">Critical Thinking Company.</a></p>
            </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="view == 'recipes'" class="m-t">
          <mdb-col col="12">
          <mdb-card class="mt-4 mx-4" style="min-height: 400px">
            <mdb-card-header style="background-color: #F8E9A1; color: #24305E">Recipe Book</mdb-card-header>
            <mdb-card-body>
            <mdb-card-title>Kid-friendly Recipes:</mdb-card-title>
            <mdb-card-text style="font-size: 14px">
              <p><b>Tator Tot Hotdish</b></p>
            <p>You will need:</p>
            <ul>
              <li>Tator Tots</li>
              <li>Corn, 1 can</li>
              <li>Beef, 1 pound</li>
              <li>Cream of Chicken Soup, 1 can</li>
            </ul>
              <p>How to make:</p>
              <ol>
                <li>Start tator tots in the oven (follow instructions on package).</li>
                <li>Brown beef over the stove-top in a pan.</li>
                <li>Add soup, one soup can of milk, and corn to beef.</li>
                <li>Bring to a boil</li>
                <li>Lower the heat and let simmer until tator tots are done.</li>
                <li>Once tator tots are done, pour meat mixture over tator tots and stir.</li>
                <li>Place back in the over for five minutes.</li>
                <li>Let cool.  Enjoy!</li>
              </ol>
            </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="view == 'activities'" class="m-t">
          <mdb-col col="12">
          <mdb-card class="mt-4 mx-4" style="min-height: 400px">
            <mdb-card-header style="background-color: #F8E9A1; color: #24305E">Activities of a Homeschooling Family</mdb-card-header>
            <mdb-card-body>
            <mdb-card-title>Fun-filled activities:</mdb-card-title>
            <mdb-card-text style="font-size: 14px">
              <mdb-row class="justify-content-center">
                <mdb-col lg="3" sm="12">
                  <mdb-row class="justify-content-center">
                    <h5>Arts and Crafts</h5>
                  </mdb-row>
                  <mdb-row class="mt-2">
                    <mdb-col col="12">
                      <ul>
                        <li><b>Origami</b> - my kids love learning new folds they can create, decorate, and play with</li>
                        <li><b>Drawing</b> - we get learn-to-draw books and go through them together</li>
                        <li><b>Rock Art</b> - who doesn't love a good rock collection!?</li>
                        <li><b>Pottery</b> - my kiddos have an inexpensive pottery wheel and they create various objects
                        and animals from clay</li>
                      </ul>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
                <mdb-col lg="3" sm="12">
                  <mdb-row class="justify-content-center">
                    <h5>Experiments</h5>
                  </mdb-row>
                  <mdb-row class="mt-2">
                    <mdb-col col="12">
                      <ul>
                        <li>
                          <a href="https://www.amazon.com/Scientific-Explorer-First-Blowing-Science/dp/B000BURAP2/ref=sr_1_26?dchild=1&keywords=experiments&qid=1632351811&sr=8-26" target="_blank">
                          Mind Blowing Science
                        </a> - this is a fun kit and my kiddos were able to do most of it themselves, with my supervision, of course
                        </li>
                        <li>
                          <a href="https://www.amazon.com/Magic-School-Bus-Chemistry-Lab/dp/B004OYYAUE/ref=sr_1_2?crid=X7IFV4RTRKKT&dchild=1&keywords=magic+school+bus+experiments&qid=1632352015&sprefix=experiments+magic+sc%2Caps%2C594&sr=8-2" target="_blank">
                            Magic School Bus
                          </a> - this is probably the science kit that they enjoyed the most for it's variety or experiments
                        </li>
                        <li>
                          <a href="https://www.amazon.com/ScienceWiz-7800-Electricity-Kit/dp/188697800X/ref=sr_1_2?dchild=1&keywords=electricity+science+wiz&qid=1632352168&sr=8-2" target="_blank">
                            Electricity
                          </a> - a great option to teach the kiddos about electricity
                        </li>
                        <li><a href="https://www.amazon.com/VATOS-Different-Archaeology-Paleontology-Educational/dp/B07QXBZ5KR/ref=sr_1_12?dchild=1&keywords=dino+dig&qid=1632356393&s=toys-and-games&sr=1-12" target="_blank">
                          Dino Eggs Dig Kit
                        </a> - my youngest loves dinosaurs, and this is one of her favorite activities, chiselling away at an egg to see the surprise dinosaur inside</li>
                      </ul>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
                <mdb-col lg="3" sm="12">
                  <mdb-row class="justify-content-center">
                    <h5>Sports</h5>
                  </mdb-row>
                  <mdb-row class="mt-2">
                    <mdb-col col="12">
                      <ul>
                        <li><b>Swimming</b> - they took lessons for a couple years and are now on a team.</li>
                        <li><b>Boxing</b> - they were boxing twice a week before Covid hit.</li>
                        <li><b>Jiu Jitsu</b> - we do Jiu Jitsu at home (for now, from a book, but hoping to start following an
                        online curriculum soon).</li>
                        <li><b>Open Gym Gymnastics</b> - we take them to a local gymnastics gym during open gym hours.</li>
                        <li><b>Kayaking</b> - during the summer, we get out on the lake and kayak as often as possible.</li>
                        <li><b>Ice Skating</b> - during the winter, we go to the community ice rink and skate.</li>
                      </ul>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
                <mdb-col lg="3" sm="12">
                  <mdb-row class="justify-content-center">
                    <h5>Games</h5>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col col="12">
                      <ul>
                        <li><a href="https://www.amazon.com/Hasbro-Gaming-C1009-Monopoly-Classic/dp/B01MU9K3XU/ref=sxin_23_ac_d_mf_br?ac_md=1-0-TW9ub3BvbHk%3D-ac_d_mf_br_br&cv_ct_cx=monoploy&dchild=1&keywords=monoploy&pd_rd_i=B01MU9K3XU&pd_rd_r=d4739cab-0c92-4709-8735-f29d9d19c1ae&pd_rd_w=AXFTy&pd_rd_wg=Uoj19&pf_rd_p=c85b552a-3c22-49f0-ad31-2c95ecdedb9e&pf_rd_r=7DASXDT0C3YCKE5GM0HX&psc=1&qid=1632355155&sr=1-1-ed8a42d3-65f1-4884-a3a2-0dd6e83b6876" target="_blank">
                        Monopoly</a> - this is such a great way to teach money! (Warning: only play if you have hours to spare)</li>
                        <li><a href="https://www.amazon.com/YH-Poker-Giant-Checkers-Reversible/dp/B07Q9Y9N21/ref=sxin_13_pa_sp_search_thematic_sspa?cv_ct_cx=monoploy&dchild=1&keywords=monoploy&pd_rd_i=B07Q9Y9N21&pd_rd_r=7a29729a-8923-4b81-8637-3fb91a30f9ef&pd_rd_w=a5OK1&pd_rd_wg=aZPPv&pf_rd_p=223a47dc-bb00-4156-be50-d6ca802a37dd&pf_rd_r=V1XEVYAGBY87EN8Q7DW1&qid=1632355273&sr=1-3-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFLN0xSQVBKSzVGSDUmZW5jcnlwdGVkSWQ9QTAxNTAyOTcxNTc2QzM3Q1JCMUpBJmVuY3J5cHRlZEFkSWQ9QTA3MTEzNjkxSVQ0QUY5UTE2QjFGJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" target="_blank">
                          Checkers</a> - my kiddos love this rug version of checkers!</li>
                        <li><a href="https://www.amazon.com/Learning-Resources-Swamp-Game-Pieces/dp/B00004TDLD/ref=sr_1_1_sspa?dchild=1&keywords=sum+swamp&qid=1632355391&s=toys-and-games&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyT0NaUzgxT0FNUzREJmVuY3J5cHRlZElkPUEwMTI5MzMyM1NCNTdEWjNOSk05USZlbmNyeXB0ZWRBZElkPUEwODMwMDE1M1JRQjZDVzAyME1JRiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=" target="_blank">
                          Sum Swamp</a> - this is a great game for learning addition and subtraction.</li>
                        <li><a href="https://www.amazon.com/Peaceable-Kingdom-Mermaid-Cooperative-Adventure/dp/B004HVKABC/ref=sr_1_1_sspa?crid=2GZBUZ4YTB91A&dchild=1&keywords=mermaid+island+board+game&qid=1632355499&s=toys-and-games&sprefix=mermaid%2Ctoys-and-games%2C195&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNFE0NFJIQjBaVEtTJmVuY3J5cHRlZElkPUEwNjE4OTY1MTdQV1ZaQkNKVTcyQSZlbmNyeXB0ZWRBZElkPUExMDIxMDUwMktJOTRIUzBKWTZTSCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=" target="_blank">
                          Mermaid Island</a> - a fun cooperative game.</li>
                        <li><a href="https://www.amazon.com/Hasbro-Gaming-Original-Guessing-Players/dp/B08GD242TJ/ref=sr_1_2?crid=PE3YZYP5EG0B&dchild=1&keywords=guess+who&qid=1632355600&s=toys-and-games&sprefix=guess+who%2Ctoys-and-games%2C190&sr=1-2" target="_blank">
                          Guess Who</a> - a game that makes the littles hone their skills in deductive reasoning.</li>
                        <li><a href="https://www.amazon.com/World-Disney-Found-Board-Game/dp/B00BYD5JMG/ref=sr_1_1?dchild=1&keywords=eye+found+it&qid=1632355711&s=toys-and-games&sr=1-1" target="_blank">
                          Eye Found It!</a> - a cooperative game for Disney lovers!</li>
                      </ul>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
            </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
export default {
  name: "ParentingBlog",
  data() {
    return {
      view: 'homeschooling',
    }
  }
}
</script>

<style scoped>
.noBullets {
  list-style-type: none;
}
</style>