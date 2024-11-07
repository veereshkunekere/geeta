const mongoose=require("mongoose");
const Geeta=require("./schema.js");

main()
.then((res)=>{
  console.log(res);
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/geeta');
}

Geeta.updateMany({image:'db.geetas.updateMany({image:""})'});
// let data = [
//   {   
//     language: "Kannada",
//     chapter: 2,
//     verse: 33,
//     line1: "ನೀವು ಧರ್ಮಯುದ್ಧದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳದಿದ್ದರೆ,",
//     line2: "ನಿಮ್ಮ ಸ್ವಧರ್ಮವನ್ನು ಕಳೆದು, ಪಾಪದಲ್ಲಿ ಮುಳುಗಿಕೊಳ್ಳುತ್ತೀರಿ.",
//     meaning: "ನೀವು ಈ ಧರ್ಮಯುದ್ಧದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳದಿದ್ದರೆ, ನಿಮ್ಮ ರಕ್ಷಣೆಯೂ ಗೌರವವೂ ಕಳೆದು, ಪಾಪವಾಗಿ ಅವಳಾದೀರಿ."
//   },
//   {
//     language: "Kannada",
//     chapter: 2,
//     verse: 34,
//     line1: "ಅಕೀರ್ಥಿ ಮತ್ತು ಪೃಥ್ವಿಯಲ್ಲಿ ಎಲ್ಲಾ ಜೀವಿಗಳು ನಿಮ್ಮ ಬದರೆಯ ಕುರಿತು ಮಾತಾಡಲಿವೆ,",
//     line2: "ಮರಣಕ್ಕಿಂತ ಮೇಲಿರುವುದು ಗೌರವ ಮಾಡಲಾಗಿದೆ.",
//     meaning: "ನೀವು ಯುದ್ಧವನ್ನು ತ್ಯಜಿಸಿದರೆ, ಜನರು ನಿಮಗೆ coward ಮತ್ತು ತಪ್ಪು ಮಾಡಿ ಎಂದು ಹೇಳುತ್ತಾರೆ, ಇದು ಗೌರವ ತುಂಬಿದ ವ್ಯಕ್ತಿಗೆ ಮರಣಕ್ಕಿಂತ ಹೆಚ್ಚು ದುಃಖ."
//   },
//   {
//     language: "Kannada",
//     chapter: 2,
//     verse: 35,
//     line1: "ನೀವು ಮುಕ್ತಿಯಾಗದಿದ್ದರೆ, ಶತ್ರುಗಳು ನಿಮಗೆ ಕಷ್ಟಪಡುವುದರಿಂದ,",
//     line2: "ಪರಿಶುದ್ಧ ಬೋಧನೆಗಳು ಅವರಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
//     meaning: "ನೀವು ಯುದ್ಧವನ್ನು ತ್ಯಜಿಸಿದರೆ, ಶತ್ರುಗಳು ನಿಮಗೆ ಭಯಮೂರ್ತಿಕವಾಗಿ ಬಲಾತ್ಕಾರ ಮಾಡಬಹುದು."
//   },
//   {
//     language: "Kannada",
//     chapter: 2,
//     verse: 36,
//     line1: "ಅನೇಕ ರೀತಿಯಲ್ಲಿ ಅನೇಕ ವರ್ಣಗಳನ್ನು ನೋಡಲು,",
//     line2: "ಅವರಿಗೆ ಒಳ್ಳೆಯ ಫಲವತ್ತಾಯದ ಕುರಿತು ಸೂಚಿಸು.",
//     meaning: "ನೀವು ಯಾರಾದರೂ ತಮ್ಮ ಘನತೆ ಹಾಗೂ ಶಕ್ತಿಯನ್ನು ಹೊತ್ತಿದ್ದೀರಿ."
//   },
//   {language: "Kannada",
//     chapter: 2,
//     verse: 37,
//     line1: "ಮರಣ ಹೋದೆ ಮಿತಿಯೊಂದಿಗೆ ಉಳಿದುಕೊಳ್ಳಿ,",
//     line2: "ವಿಜಯ ಅಥವಾ ಭೂಮಿಯಲ್ಲಿ ಸಾಧಿಸಲು.",
//     meaning: "ನೀವು ಸೋತಿದ್ದರೂ ನೀತಿವಂತತನವನ್ನು ಮುಂದುವರಿಸಿ."
//   },
//   {
//     language: "Kannada",
//     chapter: 2,
//     verse: 38,
//     line1: "ನಮ್ಮ ಶಕ್ತಿಯನ್ನು ಆವರಿಸಿ",
//     line2: "ನಮಗೆ ಅರ್ಹತೆ ಇದ್ದು.",
//     meaning: "ನೀವು ಹೇಗಾದರೂ ಉಳಿಯಲು ಸಾಹಸಗಳನ್ನು ಮಾಡಿ."
//   }
// ];



// Geeta.insertMany(data);


// Geeta.findOneAndUpdate({chapter:2},{image:"https://www.holy-bhagavad-gita.org/public/images/bg/2.jpg"})
// Geeta.findOneAndDelete({verse:33});