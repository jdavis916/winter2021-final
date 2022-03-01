console.log("Script file connected");
let workoutVars = {
    ectomorph: [document.getElementById('btnEctomorph'),document.getElementById('ectomorph'),document.getElementById('ecto')],
    mesomorph: [document.getElementById('btnMesomorph'),document.getElementById('mesomorph'),document.getElementById('meso')],
    endomorph: [document.getElementById('btnEndomorph'),document.getElementById('endomorph'),document.getElementById('endo')]
};
/*id="ecto"
id="meso"
id="endo"*/
window.addEventListener('load', (event) => {
    if(document.getElementsByClassName('pgWorkout')){
        for(let i in workoutVars){
            showHide(workoutVars[i][0], workoutVars[i][1], workoutVars[i][2]);
        }
    }
});
function showHide(btn, ele, chk){
    btn.addEventListener('click', function(){
        for(let i in workoutVars){
            if(workoutVars[i][1] !== ele){
                console.log(workoutVars[i][1]);
                !workoutVars[i][1].classList.contains('d-none') ? workoutVars[i][1].classList.add('d-none') : '';
                workoutVars[i][2].checked ? workoutVars[i][2].checked = false : '';
            }
        }
        ele.classList.contains('d-none') ? ele.classList.remove('d-none') : ele.classList.add('d-none');
        chk.checked ? chk.checked = false : chk.checked = true;
    })
}