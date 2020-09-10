const staffBtn = document.getElementById('staff_btn');
const modalBack = document.getElementById('modal_back');

const toggleCallStaff = () => {
    if(modalBack.className === 'modal_back_none'){
        modalBack.className = 'modal_back_show';
    }else {
        modalBack.className = 'modal_back_none';
    }
}

staffBtn.addEventListener('click',toggleCallStaff);
modalBack.addEventListener('click',toggleCallStaff);