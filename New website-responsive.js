<!DOCTYPE html>
<html lang="en"> 

<head>
<!--THE MAIN TITLE OF THE WEBPAGE-->
    <title>Cities encyclopedia</title>

       <!--META CONTENT FOR BETTER SEO SUCH AS KEYWORDS ,DESCRIPTION and AUTHOR NAME-->
         <meta name="keywords" content="london, paris, tokyo, cities, city, romans, londonium, history, culture, encyclopedia">
         <meta name="description" content="best cities in the world">
         <meta name="author" content="Koushik">

       <!--DEFINING THE MAIN CHARECTER SET USED-->
         <meta charset="UTF-8">

       <!--RESPONSIVE AND REFRESH ASPECT OF THE WEBSITE-->
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="refresh" content="30">

<!--THE MAIN CSS STYLING ELEMENTS-->
  <style>
    * {      /*global access indicating for all the elements */
      box-sizing: border-box;
    }

    /*BODY: <BODY>*/
       body { 
                font-family: Georgia, 'Times New Roman', Times, serif;
            }

    /* IMAGE: THIS SECTION INCLUDES ALL THE 3 MAIN IMAGES LONDON,PARIS AND TOKYO */
             image {
                       background-color: blue;

                   }

    /* HEADER: THIS SECTION INCLUDES THE MAIN HEADER */
             header {
                       background-color: rgb(226, 24, 169) ;
                       color: white;
                       font-size: 5vw;
                       padding: 30px;
                       text-align: center;
                    }

    /* FORM: THIS SECTION INCLUDES A FORM FOR FILLING IN USER DETAILS */
             form {
                       background-color: blue;
                       }

                /* SECTION: THIS SECTION INCLUDES A <SECTION> PART FOR SPLITTING NAVIGATION AND ARTICLE AND TO MAKE IT RESPONSIVE WITH FLEX */
                     section {
                            display: flex;
                            display: -webkit-flex;
                            padding: 0px;
                          }
                          
                          /* NAVIGATION: THIS SECTION IS THE MAIN NAVIGATION TAB */
                         nav {
                                 -webkit-flex: 1;
                                 -ms-flex: 1;
                                  flex: 1;
                                  padding: 1px;
                                  background-color: rgb(226, 24, 169) ;
                                  color: white;
                                  font-size: 1vw;
                            }
                            
                            /* UL NAVIGATION: THIS SECTION IS A SUB SECTION UNDER NAVIGATION FOR STYLING OF UN-ORDERED LISTS*/
                              nav ul {
                                     list-style-type: none;
                                     padding: 20px;
                                     text-align: center;
                                    }

                          /* ARTICLE: THIS SECTION IS THE MAIN ARTICLE TAB */
                          article {
                                  -webkit-flex: 3;
                                  -ms-flex: 3;
                                  flex: 3;
                                  background-color: rgb(164, 12, 240);
                                  color: white;
                                  padding: 30px;
                                  font-size: 3vw;
                                }

                        /* MEDIA-SECTION: THIS IS MEDIA ACCESS WHICH DENOTES TO THE SECTION TAB TO STRUCTURE IN COLUMN FORMAT, IF THE WIDTH COMES TO 600PX (RESPONSIVE LAYOUT)*/
                        @media (max-width: 600px){
                           section {
                           -webkit-flex-direction: column;
                           flex-direction: column;
                           flex-wrap: wrap;
                                   }
                               }

             /* FOOTER: THIS SECTION INCLUDES THE FINAL FOOTER FOR THE WEBPAGE */
             footer {
                       background-color: blue;
                       color: white;
                       font-size: 2vw;
                       padding: 25px;
                       text-align: center;

                    }
  </style>

<!--TOP SECTION INCLUDES MAIN TITLE AND BRIEF DESCRIPTION-->
  <body style="background-color:black; padding: 1vw;">
      <h1 style="text-align: center;color:white;">BEST CITIES ENCYCLOPEDIA </h1>
      <p style="color: white">Here are the list of cities which are the best in the world ranging from the eastern end from the land of raising sun :Tokyo 
      to the lush and verdant cityscapes of the perfume capital of the world , in the top of europe lies the heritage driven city :Paris 
      Then on to the north of Europe with history spanning from the Romans , viking era to the modern day wonders for all people :London <br>
      </p>

<!--INCLUDES 3 MAIN IMAGES OF LONDON ,PARIS AND TOKYO-->
      <image>
        <img src="london.jpg" style="width:100%;height:auto">
        <img src="paris.jpg" style="width:100%;height:auto">
        <img src="tokyo.jpeg" style="width:100%;height:auto">
      </image>
          <header>CITIES</header>

<!--THE FORM SECTION IN BLUE COLOR-->
          <form style="border: 1px solid grey;padding: 10px;" autocomplete="on"><!-- created a non legend white border -->
            <br>
            <fieldset>
                <legend style="color: white;background-color :rgb(226, 24, 169);font-size: 3vw;text-align: center;">USER FORM</legend>

    <!-- TWO MAIN TEXT FEILDS WITH THEIR LABELS -->
        <!-- 1) Label 1 and input 1 -->
            <label for="x" style="font-size: 3vw;color: white;padding-inline-start: 20px;">ENTER YOUR FULL NAME :</label><br>
            <br>

          <!-- created a divison for the input feild 1 to align the padding to 20px -->
            <div style="padding-inline-start: 2vw;">
            <input type="text" input="x" name="x" value="full name" style="font-size: 3vw;color: blue;"><br>
            </div>
            <br>
            <br>

        <!--2) Label 2 and input 2 -->
            <label for="y" style="font-size: 3vw;color: white;padding-inline-start: 20px;">OCCUPATION :</label><br>
            <br>

          <!-- created a divison for the input feild 2 to align the padding to 20px -->
            <div style="padding-inline-start: 2vw;">
            <input type="text" input="y" name="x" value="occupation" style="font-size: 3vw;color: blue;"><br>
            </div>
            <br>
            <hr>

    <!-- RADIO BUTTONS -->
            <p style="font-size: 3vw;color: white;padding-inline-start: 20px;">SELECT THE CITY YOU WOULD LIKE TO VISIT:</p>
            <div style="padding-inline-start: 2vw;">
            <input type="radio" id="a" name="city" value="LONDON" style="color: white;">
            <label for="a" style="font-size: 2vw;color: white;" style="font-size: 2vw;">LONDON</label><br>
            <br>
            <input type="radio" id="b" name="city" value="PARIS" style="color: white;">
            <label for="b" style="font-size: 2vw;color: white;" style="font-size: 2vw;">PARIS</label><br>
            <br>
            <input type="radio" id="c" name="city" value="TOKYO" style="color: white;">
            <label for="c" style="font-size: 2vw;color: white;" style="font-size: 2vw;">TOKYO</label><br>
            </div>
            <br>
            <hr>

    <!-- CHECK BOX -->
            <p style="font-size: 3vw;color: white;padding-inline-start: 20px;">WHAT ALL MAKES A CITY A GREAT CITY::</p>
            <div style="padding-inline-start: 10px;">
            <input type="checkbox" id="t" name="si" >
            <label for="si" style="font-size: 2vw;color: white;">HISTORY</label><br>
            <br>
            <input type="checkbox" id="t" name="cu" >
            <label for="si" style="font-size: 2vw;color: white;">CULTURE</label><br>
            <br>
            <input type="checkbox" id="t" name="va" >
            <label for="si" style="font-size: 2vw;color: white;">PEOPLE</label><br>
            </div>
            <br>
            <hr>
            <br>

    <!-- DROP DOWN -->
            <label for="cars" style="font-size: 3vw;color: white;padding-inline-start: 20px;">SELECT THE COUNTRY YOU WANT TO VISIT:</label><br>
         <br>
         <div style="font-size: 20px;color: white;padding-inline-start: 20px;">
         <select id="cars" name="cars" style="font-size: 3vw;">
          <br>
          <br>
          <option style="font-size: 3vw;color: white;background-color: blue;">UNITED KINGDOM</option>
          <option style="font-size: 3vw;color: white;background-color: blue;">FRANCE</option>
          <option style="font-size: 3vw;color: white;background-color: blue;">JAPAN</option>
          </div>
          <br>
         </select>
         <br>
         <br>
         <hr>

    <!-- ONE MORE SCROLL SELECT WITH SIZE ATTRIBUTE -->
            <label for="cit" style="font-size: 3vw;color: white;">SELECT THE OTHER CITIES YOU WISH TO VISIT :</label><br>
            <br>
            <select id="cit" name="cit" size="1" style="font-size: 3vw;">
              <option value="MUMBAI" style="font-size: 2vw;color: blue;padding-inline-start: 20px;">MUMBAI</option>
              <option value="BARCELONA" style="font-size: 2vw;color: blue;padding-inline-start: 20px;">BARCELONA</option>
              <option value="ANKARA" style="font-size: 2vw;color: blue;padding-inline-start: 20px;">ANKARA</option>
              <option value="RIO DI JENERIO" style="font-size: 2vw;color: blue;padding-inline-start: 20px;">RIO DI JENERIO</option>
            </select>
            <br>
            <br>

    <!-- THIS IS THE TEXT AREA -->
            <br>
            <hr>
            <div style="padding-inline-start: 20px;" >
            <p style="font-size: 3vw;color: white;">WHAT YOU LIKE ABOUT UR CURRENT OR NEARBY CITY:</p><br>
            <textarea name="texty" rows="12" cols="40" style="font-size: 3vw;">TYPE HERE:</textarea>
            </div>
            <br>
            <hr>

    <!-- THIS IS THE MAX DATE -MIN DATE SECTION -->        
         <br>
         <div style="padding-inline-start: 20px;font-size: 20px;color: white;" >
         <label for="datemin">ENTER UR AVAILIBLITY AFTER 22 OCT 2023:</label><br><br>
         <input type="date" id="datemin" name="datemin" min="23-10-2023"><br><br>
         <label for="datemax">ENTER UR FINAL STAY TILL 31-12-2023:</label><br><br>
         <input type="date" id="datemax" name="datemax" max="31-12-2023"><br><br>
         </div>
         

    <!-- THIS IS THE SUBMISSION BUTTON  -->
         <br>
         <div style="text-align: center;margin:auto;display:flex;justify-content: center;" >
         <input type="submit" value="SUBMIT" style="background-color:rgb(20, 220, 97);color: white;display: flex;justify-content: center;align-items: center;height: 3vw; border: 1px solid green; ">
          </div>
         </label>
            <br>
            <br>
        </div>
        </fieldset>
          </form>

<!-- THIS IS THE NAVIGATION BAR WITH FLEX UNDER SECTIONS (responsive segment) -->
          <section style="padding: 0px">
               <nav style="padding: 0px;;">
                <ul>
                  <hr> 
                  <li style="font-size:4.25vw;">LONDON</li><br>
                  <hr>
                  <li style="font-size:4vw;">PARIS</li><br>
                  <hr>
                  <li style="font-size:4vw;">TOKYO</li><br>
                  <hr>
                  <li style="font-size:4vw;">MUMBAI</li><br>
                  <hr>
                  <li style="font-size:4vw;">MOSCOW</li><br>
                  <hr>
                  <li style="font-size:4vw;">BERLIN</li><br>
                  <hr>
                  <li style="font-size:4vw;">ROME</li><br>
                  <hr>
                  <li style="font-size:4vw;">ANKARA</li><br>
                  <hr>
                </ul>
               </nav>

<!-- THIS IS THE ARTICLE BAR WITH FLEX UNDER SECTIONS (responsive segment) -->
               <article>
                <H1 style="color:white">LONDON</H1>
                <p>this city was once home of the mighty romans , was conquered by the Vikings of the nordic region,cradle of the tudor kings
                home turf for the invasion during 2nd world war from the German 3rd Reich. This city has seen it all .From 2 millenia when romas
                conquered the city they named it as londinium . The city was back then till now is moated by the lush fertile river of thames.
                </p>
                <p>
                  This city now holds cultural , historical and authoritarian significance not just in England and Europe but the whole world
                  from the days of the British colonies to the days of independence the monarchs of the British Empire have been seated there with 
                  iron fist . The historial architecural buildings, monuments , statues , the city-scapes and even the modern day fets of excellent 
                  engineering is a feat to behold . London offers everything to any visiters .
                </p>
               </article>
          </section>

<!-- THIS IS THE FOOTER SEGMENT -->
      <footer>All rights recieved .....Copyright under 2023 law of the land .</footer>
  </body>
</head>
</html>
