
// import react, { useState } from "react";




//       function ReadMore({ children, maxCharacterCount=190 }){
//         const text=children;
//        const [isTruncated, setisTruncated]=useState(true);
//         const resultstring=isTruncated?text.slice(0, maxCharacterCount): true;
//         // function toggleisTruncated  ()  {
//         //   setisTruncated(!isTruncated);
           
//         //   }
//         function toggleisTruncated () {

//             setisTruncated(!isTruncated);
     
//           }


//         return(
//           <p className="has-text-left">
//             {resultstring}
//             <span onclick={toggleisTruncated} className="tag is-info is-small" >
//               {isTruncated ?"Read More" : "Read Less" }
//             </span>
//           </p>
          
//           );
//         }

//         function Don (){
//             return(
//                <div className="content">
//                  <ReadMore maxCharacterCount={100}>
//                  Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems. 
//                  </ReadMore>
//                  <ReadMore maxCharacterCount={100}>
//                    In ullancorper metus adipiscing
//                    conubia sem habitasse cum lectus
//                     sociis Parturient ullamcorper
//                    orci eu vestibulum adipiscing qu
//                    hendrerit nan habitant vestibulu
//                    rhoncus urna. Sed et adipiscinge
//                    ullamcorper sagittis parturient
//                    vestibulum mi sem leo at adase
//                  </ReadMore>
//                  </div>
//             )
//         }
    
// export default Don;