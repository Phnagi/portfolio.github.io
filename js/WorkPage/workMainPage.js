// import { NuxtLink } from "#build/components";

let worksPageMainBox = document.querySelector('#worksPageMainBox');
let worksPageMainScroll = document.querySelector('#worksPageMainScroll')
let worksPageMainScroll0 = document.querySelector('#worksPageMainScrollV0')
let worksPageMainScroll1 = document.querySelector('#worksPageMainScrollI1')
let worksPageMainScroll2 = document.querySelector('#worksPageMainScrollI2')
let worksPageMainScroll3 = document.querySelector('#worksPageMainScrollI3')
let worksPageMainScroll4 = document.querySelector('#worksPageMainScrollI4')
let worksPageMainScroll5 = document.querySelector('#worksPageMainScrollI5')

let worksVideoBox1 = document.querySelector("#worksVideoBox1");
let worksImgBox1 = document.querySelector("#worksImgBox1");
let worksImgBox2 = document.querySelector("#worksImgBox2");
let worksImgBox3 = document.querySelector("#worksImgBox3");
let worksImgBox4 = document.querySelector("#worksImgBox4");
let worksImgBox5 = document.querySelector("#worksImgBox5");


//文字
let worksPageMainText={
    GoAhand:'一個不論是身心障礙者或是普通人都可以拿來規劃無障礙旅行計畫及日常使用的一個app，可以根據你選擇的地點給予使用者無障礙路線導航與盲人輔助導航的需求。',
    HomeTrust:"嘉信驗屋，致力於提供全面的房屋檢測服務，為客戶提供可靠、準確且專業的房屋檢測服務，幫助他們了解房屋的真實狀況，保護他們的投資和利益。",
    Drop:'一間以白領上班族為主打的外帶咖啡店，標語為“Coffee on the move, Drop Coffee groove.“「隨處咖啡，跳動咖啡節奏」。',
    Maple:"楓茶米休閒農業區為一個封閉的里山環境，保留農田山林，溪谷終年有水，谷地以水稻種植為主，山嶺間茶園遍布，還有網室蔬菜及花卉苗木培育等，隨處可見豐富多樣的農村自然生態樣貌。",
    Photo:"平時的我喜歡在休閒或通勤時間，在街上街頭攝影，我喜歡拍攝光、生活的人們、及街景等，擅長運用強烈的光影構圖。",
    other:'除了以上的設計及拍攝外，還有一些零散的作品。'
}
let worksPageMainTitleList ={
    GoAhand:"GoAhand",
    HomeTrust:"HomeTrust",
    Drop:"Drop",
    Maple:"楓茶米",
    Photo:"Photo",
    other:"other",
};
let worksPageMainSubTitleList={
    GoAhand:"UI/UX",
    HomeTrust:"VI",
    Drop:"Design",
    Maple:"VI",
    Photo:"Nagi",
    other:"Design",
};

////改變DOM
    //控制影片/照片
    let videoImgControl = true;
    //選取影片
    let worksVideo = null;
    //選取照片
    // let worksImg = ref(null);
    // let worksImgBox =ref(null);
  
    // 選取worksPageindex
    let worksPageindexBoxGoAhand = document.querySelector(".worksPageindexBoxGoAhand");
    console.log(worksPageindexBoxGoAhand)
    let worksPageindexBoxHomeTrust = document.querySelector(".worksPageindexBoxHomeTrust");
    let worksPageindexBoxDrop = document.querySelector(".worksPageindexBoxDrop");
    let worksPageindexBoxMaple = document.querySelector(".worksPageindexBoxMaple");
    let worksPageindexBoxPhoto = document.querySelector(".worksPageindexBoxPhoto");
    let worksPageindexBoxOther = document.querySelector(".worksPageindexBoxOther");
    //控制
    let worksindex_GoAhandBolean = true;
    let worksindex_HomeTrustBolean = false;
    let worksindex_Drop = false;
    let worksindex_MapleBolean = false;
    let worksindex_PhotoBolean = false;
    let worksindex_OtherBolean = false;
    //選取簡介內容
    let worksPageintroTitle = document.querySelector("#worksPageintroTitle");
    let worksPageintroContent = document.querySelector("#worksPageintroContent");
    //選取底下標題
    let worksPageSubTitle = document.querySelector("#worksPageSubTitle");
    let worksPageTitle = document.querySelector("#worksPageTitle");
    //換顏色
    let changeColor = false;
    //字體
    let changeFont=false;
    //
    // let MainImg = reactive({
    //     HomeTrust:'_nuxt/assets/images/VI/VI1.jpg',
    //     Maple:'_nuxt/assets/images/VI/VI2.jpg',
    //     Photo:'_nuxt/assets/images/photo/2.jpg',
    //     Other:'_nuxt/assets/images/VI/VI1.jpg',

    
    // })
    //控制主要文字
    let mainWorkText='一個不論是身心障礙者或是普通人都可以拿來規劃無障礙旅行計畫及日常使用的一個app，可以根據你選擇的地點給予使用者無障礙路線導航與盲人輔助導航的需求。';
    let mainWorkTitle='GoAhand';
    let mainWorkSubTitle='UI/UX';

    let worksImg2 = document.querySelector(".worksImg");
    //控制初始文字
    worksPageintroContent.innerText=worksPageMainText.GoAhand
    // mainWorkText.value=worksPageMainText.GoAhand;
    worksPageSubTitle.innerText=`UI/UX`;
    worksPageTitle.innerText=`GoAhand`;

        let workTl = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll1,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_FirstOnEnter,
                // onLeave: worksPageMainScroll_FirstOnLeave,
                onEnterBack: worksPageMainScroll_FirstonEnterBack,
                // onLeaveBack: worksPageMainScroll_FirstonLeaveBack
            }
        });
        workTl.to(worksPageMainScroll1,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })

        //第二條timerLine Drop
        let workTl2 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll2,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_SecOnEnter,
                onEnterBack: worksPageMainScroll_SecOnEnterBack,

            }
        });
        workTl2.to(worksPageMainScroll2,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })

        //第三條timerLine 風茶米
        let workTl3 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll3,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_ThirdOnEnter,
                onEnterBack: worksPageMainScroll_ThirdOnEnterBack,

            }
        });
        workTl3.to(worksPageMainScroll3,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })

        //第四條timerLine 照片
                
        let workTl4 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll4,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_fourthOnEnter,
                onEnterBack: worksPageMainScroll_fourthOnEnterBack,

            }
        });
        workTl4.to(worksPageMainScroll4,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })

        //第五條timerLine 其他

        let workTl5 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll5,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_fiveOnEnter,
                onEnterBack: worksPageMainScroll_fiveOnEnterBack,

            }
        });
        workTl5.to(worksPageMainScroll4,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })


        //進入第二頁的DOM改變function
            //進入
            function worksPageMainScroll_FirstOnEnter(){
                worksImg2 = document.querySelector(".worksImg");
                // console.log('worksPageMainScroll1OnEnter')
                // worksindex_GoAhandBolean=false;
                // worksindex_HomeTrustBolean=true;

                //開關 workPageOpacity

                    worksVideoBox1.classList.remove("workPageOpacity");
                    worksImgBox1.classList.add("workPageOpacity");


                //開關 worksPageindexAnime
                    worksPageindexBoxGoAhand.classList.remove("worksPageindexAnime");
                    worksPageindexBoxHomeTrust.classList.add("worksPageindexAnime");

                worksPageintroContent.innerText=worksPageMainText.HomeTrust
                // mainWorkText.value=worksPageMainText.HomeTrust

                worksPageSubTitle.innerText=`VI`;
                worksPageTitle.innerText=`HomeTrust`;
                // mainWorkTitle.value=worksPageMainTitleList.HomeTrust;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.HomeTrust;


                // videoImgControl.value=false;

                // worksImg2.src =MainImg.HomeTrust;

                // worksImg.value.src='@/assets/images/VI/VI1.jpg';
            }
            // function worksPageMainScroll_FirstOnLeave(){
            //     console.log('worksPageMainScroll1onLeave')
            // }
            //離開
            function worksPageMainScroll_FirstonEnterBack(){
                worksImg2 = document.querySelector(".worksImg");

                // console.log('worksPageMainScroll1onEnterBack')
                // worksindex_GoAhandBolean.value=true;
                // worksindex_HomeTrustBolean.value=false;
                //開關 workPageOpacity

                    worksVideoBox1.classList.add("workPageOpacity");
                    worksImgBox1.classList.remove("workPageOpacity");
            
            
                //開關 worksPageindexAnime
                    worksPageindexBoxGoAhand.classList.add("worksPageindexAnime");
                    worksPageindexBoxHomeTrust.classList.remove("worksPageindexAnime");
            
                worksPageintroContent.innerText=worksPageMainText.GoAhand
                // mainWorkText.value=worksPageMainText.GoAhand;
                worksPageSubTitle.innerText=`UI/UX`;
                worksPageTitle.innerText=`GoAhand`;
                // mainWorkTitle.value=worksPageMainTitleList.GoAhand;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.GoAhand;
               
                // videoImgControl.value=true;
                    //相片改變
                    // console.log(worksImg.value.src);
                    // worksImg.value.src="@/assets/images/VI/VI2.jpg";
                    // worksImgBox.value.innerHTML=`<img class="worksImg" ref="worksImg" src="@/assets/images/VI/VI2.jpg" alt="">`
                    // console.log(worksImg2.src);
                  
                    // console.log(worksImg2.src);

                    // worksImg2.src =MainImg.HomeTrust;
            }
                // function worksPageMainScroll_FirstonLeaveBack(){
                //     console.log('worksPageMainScroll1onLeaveBack')
                // }
            //

        //進入第三頁的DOM改變function
            //進入
            function worksPageMainScroll_SecOnEnter(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_HomeTrustBolean.value=false;
                // worksindex_Drop.value=true;

                //開關 workPageOpacity

                    worksImgBox1.classList.remove("workPageOpacity");
                    worksImgBox2.classList.add("workPageOpacity");
                        
                        
                //開關 worksPageindexAnime
                    worksPageindexBoxHomeTrust.classList.remove("worksPageindexAnime");
                    worksPageindexBoxDrop.classList.add("worksPageindexAnime");
                        


                worksPageintroContent.innerText=worksPageMainText.Drop
                // mainWorkText.value=worksPageMainText.Drop;

                worksPageSubTitle.innerText=`Design`;
                worksPageTitle.innerText=`Drop Coffee`;
                // mainWorkTitle.value=worksPageMainTitleList.Drop;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.Drop;
                // worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                // worksPageTitle.value.style.letterSpacing= "1.6px";

                // worksImg2.src =MainImg.Maple;
            }
        //離開    
            function worksPageMainScroll_SecOnEnterBack(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_HomeTrustBolean.value=true;
                // worksindex_Drop.value=false;
                //開關 workPageOpacity

                worksImgBox1.classList.add("workPageOpacity");
                worksImgBox2.classList.remove("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxHomeTrust.classList.add("worksPageindexAnime");
                worksPageindexBoxDrop.classList.remove("worksPageindexAnime");
                    
           

                worksPageintroContent.innerText=worksPageMainText.HomeTrust
                // mainWorkText.value=worksPageMainText.HomeTrust;

                worksPageSubTitle.innerText=`VI`;
                worksPageTitle.innerText=`HomeTrust`;
                // mainWorkTitle.value=worksPageMainTitleList.HomeTrust;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.HomeTrust;
                // worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                // worksPageTitle.value.style.letterSpacing= "1.6px";

                // worksImg2.src =MainImg.HomeTrust;
            }


        //進入第四頁的DOM改變function
            //進入
            function worksPageMainScroll_ThirdOnEnter(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_Drop.value=false;
                // worksindex_MapleBolean.value=true;
                //開關 workPageOpacity

                worksImgBox2.classList.remove("workPageOpacity");
                worksImgBox3.classList.add("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxDrop.classList.remove("worksPageindexAnime");
                worksPageindexBoxMaple.classList.add("worksPageindexAnime");


                worksPageintroContent.innerText=worksPageMainText.Maple
                // mainWorkText.value=worksPageMainText.Maple;

                worksPageSubTitle.innerText=`VI`;
                worksPageTitle.innerText=`楓茶米`;
                // mainWorkTitle.value=worksPageMainTitleList.Maple;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.Maple;

                //字體改變
                // changeFont.value=true;
                worksPageTitle.style.fontFamily ="Noto Serif TC";
                worksPageTitle.style.letterSpacing= "8.2px";

                // worksImg2.src =MainImg.Maple;
            }
        //離開    
            function worksPageMainScroll_ThirdOnEnterBack(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_Drop.value=true;
                // worksindex_MapleBolean.value=false;

                //開關 workPageOpacity

                worksImgBox2.classList.add("workPageOpacity");
                worksImgBox3.classList.remove("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxDrop.classList.add("worksPageindexAnime");
                worksPageindexBoxMaple.classList.remove("worksPageindexAnime");

                


                worksPageintroContent.innerText=worksPageMainText.Drop
                // mainWorkText.value=worksPageMainText.Drop;

                worksPageSubTitle.innerText=`Design`;
                worksPageTitle.innerText=`Drop Coffee`;
                // mainWorkTitle.value=worksPageMainTitleList.Drop;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.Drop;

                //字體改變
                // changeFont.value=false;
                worksPageTitle.style.fontFamily ="Noto Sans TC";
                worksPageTitle.style.letterSpacing= "1.6px";
                // worksImg2.src =MainImg.HomeTrust;
            }
    
        //進入第五頁的DOM改變function
            //進入
            function worksPageMainScroll_fourthOnEnter(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_MapleBolean.value=false;
                // worksindex_PhotoBolean.value=true;

                //開關 workPageOpacity

                worksImgBox3.classList.remove("workPageOpacity");
                worksImgBox4.classList.add("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxMaple.classList.remove("worksPageindexAnime");
                worksPageindexBoxPhoto.classList.add("worksPageindexAnime");



                worksPageintroContent.innerText=worksPageMainText.Photo
                // mainWorkText.value=worksPageMainText.Photo;

                worksPageSubTitle.innerText=`photo`;
                worksPageTitle.innerText=`Nagi`;
                // mainWorkTitle.value=worksPageMainTitleList.Photo;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.Photo;
                //字體改變
                // changeFont.value=false;
                worksPageTitle.style.fontFamily ="Noto Sans TC";
                worksPageTitle.style.letterSpacing= "1.6px";
                //顏色改變
                // changeColor.value=true;
                worksPageindexBoxGoAhand.classList.add("changeSubColor");
                worksPageindexBoxHomeTrust.classList.add("changeSubColor");
                worksPageindexBoxDrop.classList.add("changeSubColor");
                worksPageindexBoxMaple.classList.add("changeSubColor");
                worksPageindexBoxOther.classList.add("changeSubColor");
                worksPageindexBoxPhoto.classList.add("changeColor");
                worksPageintroTitle.classList.add("changeColor");
                worksPageintroContent.classList.add("changeColor");
                worksPageSubTitle.classList.add("changeColor");
                worksPageTitle.classList.add("changeColor");


                // worksImg2.src =MainImg.Photo;


            }
        //離開    
            function worksPageMainScroll_fourthOnEnterBack(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_MapleBolean.value=true;
                // worksindex_PhotoBolean.value=false;

                //開關 workPageOpacity

                worksImgBox3.classList.add("workPageOpacity");
                worksImgBox4.classList.remove("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxMaple.classList.add("worksPageindexAnime");
                worksPageindexBoxPhoto.classList.remove("worksPageindexAnime");



                worksPageintroContent.innerText=worksPageMainText.Maple
                // mainWorkText.value=worksPageMainText.Maple;

                worksPageSubTitle.innerText=`VI`;
                worksPageTitle.innerText=`楓茶米`;
                // mainWorkTitle.value=worksPageMainTitleList.Maple;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.Maple;

                //字體改變
                worksPageTitle.style.fontFamily ="Noto Serif TC";
                worksPageTitle.style.letterSpacing= "8.2px";
                // changeFont.value=true;

                // changeColor.value=false;
                worksPageindexBoxGoAhand.classList.remove("changeSubColor");
                worksPageindexBoxHomeTrust.classList.remove("changeSubColor");
                worksPageindexBoxDrop.classList.remove("changeSubColor");
                worksPageindexBoxMaple.classList.remove("changeSubColor");
                worksPageindexBoxOther.classList.remove("changeSubColor");
                worksPageindexBoxPhoto.classList.remove("changeColor");
                worksPageintroTitle.classList.remove("changeColor");
                worksPageintroContent.classList.remove("changeColor");
                worksPageSubTitle.classList.remove("changeColor");
                worksPageTitle.classList.remove("changeColor");


                // worksImg2.src =MainImg.Maple;
            }

        //進入第六頁的DOM改變function
            //進入
            function worksPageMainScroll_fiveOnEnter(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_PhotoBolean.value=false;
                // worksindex_OtherBolean.value=true;

                //開關 workPageOpacity

                worksImgBox4.classList.remove("workPageOpacity");
                worksImgBox5.classList.add("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxPhoto.classList.remove("worksPageindexAnime");
                worksPageindexBoxOther.classList.add("worksPageindexAnime");




                worksPageintroContent.innerText=worksPageMainText.other
                // mainWorkText.value=worksPageMainText.other;

                worksPageSubTitle.innerText=`Design`;
                worksPageTitle.innerText=`other`;
                // mainWorkTitle.value=worksPageMainTitleList.other;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.other;
                // worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                // worksPageTitle.value.style.letterSpacing= "1.6px";
                //顏色改變
                // changeColor.value=false;

                worksPageindexBoxGoAhand.classList.remove("changeSubColor");
                worksPageindexBoxHomeTrust.classList.remove("changeSubColor");
                worksPageindexBoxDrop.classList.remove("changeSubColor");
                worksPageindexBoxMaple.classList.remove("changeSubColor");
                worksPageindexBoxOther.classList.remove("changeSubColor");
                worksPageindexBoxPhoto.classList.remove("changeColor");
                worksPageintroTitle.classList.remove("changeColor");
                worksPageintroContent.classList.remove("changeColor");
                worksPageSubTitle.classList.remove("changeColor");
                worksPageTitle.classList.remove("changeColor");


                // worksImg2.src =MainImg.Other;


            }
        //離開    
            function worksPageMainScroll_fiveOnEnterBack(){
                worksImg2 = document.querySelector(".worksImg");
                // worksindex_PhotoBolean.value=true;
                // worksindex_OtherBolean.value=false;

                //開關 workPageOpacity

                worksImgBox4.classList.add("workPageOpacity");
                worksImgBox5.classList.remove("workPageOpacity");
                    
                    
                //開關 worksPageindexAnime
                worksPageindexBoxPhoto.classList.add("worksPageindexAnime");
                worksPageindexBoxOther.classList.remove("worksPageindexAnime");



                worksPageintroContent.innerText=worksPageMainText.Photo
                // mainWorkText.value=worksPageMainText.Photo;

                worksPageSubTitle.innerText=`photo`;
                worksPageTitle.innerText=`Nagi`;
                // mainWorkTitle.value=worksPageMainTitleList.Photo;
                // mainWorkSubTitle.value=worksPageMainSubTitleList.Photo;
                // worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                // worksPageTitle.value.style.letterSpacing= "1.6px";

                // changeColor.value=true;
                worksPageindexBoxGoAhand.classList.add("changeSubColor");
                worksPageindexBoxHomeTrust.classList.add("changeSubColor");
                worksPageindexBoxDrop.classList.add("changeSubColor");
                worksPageindexBoxMaple.classList.add("changeSubColor");
                worksPageindexBoxOther.classList.add("changeSubColor");
                worksPageindexBoxPhoto.classList.add("changeColor");
                worksPageintroTitle.classList.add("changeColor");
                worksPageintroContent.classList.add("changeColor");
                worksPageSubTitle.classList.add("changeColor");
                worksPageTitle.classList.add("changeColor");


                // worksImg2.src =MainImg.Photo;
            }


        //index按鈕互動
        worksPageindex1.addEventListener("click",()=> {
            // console.log("worksPageindexBoxGoAhand")
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll0" , 
                offsetY:-1}
            
            });
        })
        worksPageindex2.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll1", 
                offsetY:-1}
            
            });
        })
        worksPageindex3.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll2", 
                offsetY:-1}
            
            });
        })
        worksPageindex4.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll3", 
                offsetY:-1}
            
            });
        })
        worksPageindex5.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll4", 
                offsetY:-1}
            
            });
        })
        worksPageindex6.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll5", 
                offsetY:-1}
            
            });
        })