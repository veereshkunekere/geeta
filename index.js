const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Geeta=require("./data/schema.js");
const port=8080;
const path=require("path");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/geeta');
}
app.use(express.static(path.join(__dirname,"./public")));
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

// let sloka1=new Geeta({
//   language:"English",
//   chapter:1,
//   verse:1,
//   line1:"dhṛitarāśhtra uvācha",
//   line2:"dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ",
//   line3:"māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
//   meaning:"The two armies had gathered on the battlefield of Kurukshetra, well prepared to fight a war that was inevitable. Still, in this verse, King Dhritarashtra asked Sanjay, what his sons and his brother Pandus sons were doing on the battlefield? It was apparent that they would fight, then why did he ask such a question?The blind King Dhritarashtras fondness for his own sons had clouded his spiritual wisdom and deviated him from the path of virtue. He had usurped the kingdom of Hastinapur from the rightful heirs; the Pandavas, sons of his brother Pandu. Feeling guilty of the injustice he had done towards his nephews, his conscience worried him about the outcome of this battle.",
//   image:"https://www.holy-bhagavad-gita.org/public/images/bg/1.jpg",
// });

// sloka1.save();




app.get("/geeta",async (req,res)=>{
    let data=await Geeta.find({language:"English"});
    res.render("home.ejs",{data:data[0]});
});

app.get("/geeta/language", async (req,res)=>{
  let {language}=req.query;
  let data=await Geeta.find({language:language});
    res.render("home.ejs",{data:data[0]});
});

app.get("/geeta/:language/chapter", async (req,res)=>{
   let {language}=req.params;
   language=`${language}`;
   let {chapter}=req.query;
   let {sloka}=req.query;
   chapter=parseInt(chapter);
   sloka=parseInt(sloka);
   console.log(sloka);
   console.log(chapter);
   console.log(language);
   let data=await Geeta.findOne({chapter:chapter,verse:sloka,language:language});
   console.log(data);
   res.render("home.ejs",{data:data});
  // res.send("testing")
  })
app.listen(port,()=>{
  console.log("server runnig");
});