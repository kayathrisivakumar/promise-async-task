let catinfo=document.getElementById('catinfo')
let url1='https://api.thecatapi.com/v1/images/search'
let catdetail=document.createElement('div')

// extract data using async function

async function getcatdata(){
    catinfo.innerHTML=""  
    let data=await fetch(url1)
    let res=await data.json()
    console.log(res[0].url)
    console.log(res[0].width)
    let image=document.createElement('img')
    image.src=res[0].url
    image.setAttribute('height','400px')
    image.setAttribute('width','400px')
    catinfo.append(image)    
    catdetail.innerHTML=`width:${res[0].width}
                        height:${res[0].height}`
    catinfo.append(catdetail)   

}
getcatdata()

// extract data using promise

let myPromise=new Promise((resolve,reject)=>{
    let request=new XMLHttpRequest()     
    request.open('GET','https://api.thecatapi.com/v1/images/search')   
    request.send()  
    request.onload= function(){
        console.log(request)
        if(request.status==200){           
            var data=JSON.parse(request.response)
            resolve(data)
        }else{
            reject("Something Went Wrong!!!!")
        }
    }
})
myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err))

