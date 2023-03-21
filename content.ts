let ws_data:Array<number>;
let sc:number; 
let last_sc:number;
last_sc=0;
let data:any;
let obj:object;
let btn:any;
let inp:number;
let div:any;
let savebtn:any;
// savebtn =document.createElement("button");
// savebtn.innerText="save excel";
// savebtn.style.cssText="padding: 5px 20px;border: none;background: orange;cursor: pointer;border-radius: 10px;font-size: 16px;color: white;font-weight: 700;letter-spacing: 1px; margin-left:5px;"
btn = document.createElement("button");
inp = document.createElement("input");
inp.setAttribute("type", "number");
inp.placeholder="tekrar sayısı";
div = document.querySelector("#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div.srch-rslt-title");
btn.innerText="Fiyatları Listele";
btn.style.cssText="padding: 5px 20px;border: none;background: orange;cursor: pointer;border-radius: 10px;font-size: 16px;color: white;font-weight: 700;letter-spacing: 1px; margin-left:5px;"
inp.style.cssText="border: 1px solid orange;font-size: 16px;width: 110px;padding: 10px 16px;"
div.appendChild(inp)
div.appendChild(btn)
// div.appendChild(savebtn)
ws_data=[]
function sleep(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}
btn.addEventListener("click",async ()=>{
  sc= inp.value
  last_sc=0;
  while(sc!=last_sc){
    await sleep(3000)
    document.querySelector("html").scrollTo(0,document.querySelector("#search-app").scrollHeight);
    last_sc +=1
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
      ws_data.push(obj)
      
    })
    console.log(ws_data)
    // var wb = XLSX.utils.book_new();
    // wb.Props = {
    //         Title: "SheetJS Tutorial",
    //         Subject: "Test",
    //         Author: "Red Stapler",
    //         CreatedDate: new Date(2017,12,19)
    // };
    
    // wb.SheetNames.push("Test Sheet");
    // var ws = XLSX.utils.aoa_to_sheet(ws_data);
    // wb.Sheets["Test Sheet"] = ws;

    // var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
    // function s2ab(s) {

    //         var buf = new ArrayBuffer(s.length);
    //         var view = new Uint8Array(buf);
    //         for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    //         return buf;
            
    // }
    
    
    // console.log(ws_data)
    
  }
}
// savebtn.addEventListener("click",()=>{
//   saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
// })
)

