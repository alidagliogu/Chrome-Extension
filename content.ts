let fiyat:Array<number>;
let ht:number; 
let last_ht:number;
last_ht=0;
let data:any;
let obj:object;
let btn:any;
let inp:number;
let div:any;
btn = document.createElement("button");
inp = document.createElement("input");
inp.type="text";
inp.placeholder="tekrar sayısı"
div = document.querySelector("#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div.srch-rslt-title");
btn.innerText="fiyatları listele";
btn.style.cssText="padding:20px 40px; border:none; Background:lightgray;cursor:pointer;"
div.appendChild(btn)
div.appendChild(inp)
fiyat=[]
function sleep(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}
btn.addEventListener("click",async ()=>{
  ht= inp.value
  last_ht=0;
  while(ht!=last_ht){
    await sleep(3000)
    document.querySelector("html").scrollTo(0,document.querySelector("#search-app").scrollHeight);
    last_ht +=1
  }
  await dataekle()
  
  async function dataekle(){
    data = document.querySelectorAll("div.prc-box-dscntd.new-font")
    data.forEach(element=>{
      obj={
        fiyat:element.innerText,
        marka:element.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("span:nth-child(1)").innerText,
        description:element.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("span:nth-child(2)").innerText
      }
      fiyat.push(obj)
    })
    console.log(fiyat)
  }
})