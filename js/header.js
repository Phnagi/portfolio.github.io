// const props = defineProps({
//     handleHeader:{
//         type:Boolean,
//         default:true,
//     },
// });

// let useHandleHeader = ref(props.handleHeader);
// const handleHeader=ref(false);
// function handleF(){

//     handleHeader.value = !handleHeader.value;
//    console.log(handleHeader.value)
// };
let handleHeader = false;
let headerPage = document.querySelector(".headerPage");
function handleF(){
    if(!handleHeader){
        headerPage.classList.add("headerPageAct");
        handleHeader = true;
    }else{
        headerPage.classList.remove("headerPageAct");
        handleHeader = false;
    }
}