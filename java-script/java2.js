console.log('heooo java tava');
//// Home page js--------------------

let openList = [];
let closeList = [];
let currentStatus = 'all-btn'

async function loadIssues() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    console.log(res);
    const data = await res.json();
    displayIssues(data.data);

    // console.log(allCard);
};

const loadWordDetail = async (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const details = await res.json();
    displayWordDetails(details.data);

}
const displayWordDetails = (issue) => {
    console.log(issue);
    const detailsBox = document.getElementById('details-container');
    // detailsBox.innerHTML="Hi i am form ja";
    detailsBox.innerHTML = `
    <div class="space-y-2">
    <h2 class="text-[23px] font-semibold">${issue.title}</h2>
    <div class="space-y-2 flex flex-2 gap-4">
    <img src="" alt="">${issue.Status}
    <p class="hello text-[14px] ">${issue.author}</p>                     
    <p class="hello text-[14px]">${issue.createdAt}</p>
    </div>
    </div>

    <div class="space-y-2">
    <div class="btn bg-red-100 w-[61px] rounded-full text-red-600 text-[7px]  border-red-500"><span><i class="fa-brands fa-linux"></i></span>${issue.labels}</div>

    <div class="btn bg-orange-100 w-[90px] rounded-full text-orange-600 text-[7px]  px-[5px] border-orange-500"><span><i class="fa-brands fa-gg-circle"></i></span>${issue.labels}
    </div>
    

    <div class="space-y-2">
    <p>The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
    </div>
                        
   <div class="bg-gray-100 p-2 rounded-sm flex flex-3 gap-5 justify-around">
    <p class="hello text-[14px] ">Assignee: <span>${issue.assignee}</span></p>   
    <p class="hello text-[14px] ">Priority: <span>${issue.priority}</span></p>
     </div>
    `;

    document.getElementById('issue_modal').showModal();
}

function displayIssues(issues) {
    console.log(issues);
    issues.forEach(issues => {
        console.log(issues);

        const card = document.createElement('div');
        card.className = "allCards mt-1 p-3 sm:col md:grid-cols-4 bg-white space-y-2 ";
        card.innerHTML = ` 
          <div  onclick="loadWordDetail(${issues.id})" class="card bg-base-100 p-[15px] border-t-8 shadow-sm shadow-gray-600 space-y-3">
          
                    <figure class=" justify-between">
                        <img src="" alt="">${issues.Status}
                        <div class="badge bg-red-100 w-[70px] rounded-full text-red-600 text-[16px] py-[15px] px-[35px]"> ${issues.priority}</div>
                    </figure>
                    <h2 class="text-[23px] font-semibold">${issues.title}</h2>
                    <h3 class="hello text-[15px] ">${issues.description}</h3>
                    <div class="card-body w-full grid grid-cols-2 text-center ">
                     
                    
                        <div class="btn bg-red-100 w-[61px] rounded-full text-red-600 text-[7px]  border-red-500"><span><i class="fa-brands fa-linux"></i></span>${issues.labels}</div>

                        <div class="btn bg-orange-100 w-[90px] rounded-full text-orange-600 text-[7px]  px-[5px] border-orange-500"><span><i class="fa-brands fa-gg-circle"></i></span>${issues.labels}
                        </div>
                       
                        </div>                        
                        <hr class="hello">
                        <p class="hello text-[14px] pt-4">${issues.author}</p>
                        
                        <p class="hello text-[14px]">${issues.createdAt}</p>
                        <p class="hello text-[14px]">${issues.updatedAt}</p>
                    </div> 
                    
        `;
        allCard.appendChild(card);
    });
};

// const loadWordDetail= async(id)=>{
//     const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues/${id}`;
//     console.log(url);
//     const res= await fetch(url);
//     const details= await res.json();
//     displayWordDetails(details.data);
// };


// displayWordDetails=(issues)=>{
//     console.log(issues);
//       const detailsContainer= document.getElementById('details-container');
//    detailsContainer.innerHTML=`<div>
//                 <h2 class="text-2xl font-bold">${issues.title} (<i class="fa-solid fa-microphone-lines"></i>:${issues.Status})</h2>
//                 </div>

//                 <div>

//                 <p>${issues.description}</p>
//                 </div>

//                 <div>
//                 <h2 class=" font-bold">Example</h2>
//                 <p>${word.sentence}</p>
//                 </div>

//                 <div>
//                 <h2 class=" font-bold">Synonym</h2>
//                 <span class="btn"> Syn1</span>
//                 <span class="btn"> Syn1</span>
//                 <span class="btn"> Syn1</span>
//                 </div>`;
//    document.getElementById('word_modal').showModal();
// }

const allCard = document.getElementById('allCardSection')
const allbtn = document.getElementById('allBtn');
const openbtn = document.getElementById('openBtn');
const closedbtn = document.getElementById('closedBtn');

function toggleStyle(id) {
    // console.log('clicked :', id)
    allbtn.classList.remove('bg-blue-500', 'text-white')
    openbtn.classList.remove('bg-blue-500', 'text-white')
    closedbtn.classList.remove('bg-blue-500', 'text-white')

    allbtn.classList.add('bg-white', 'text-red-500');
    openbtn.classList.add('bg-white', 'text-red-500');
    closedbtn.classList.add('bg-white', 'text-red-500');

    // console.log(id);

    const selected = document.getElementById(id);
    currentStatus = id;
    // console.log(selected);

    selected.classList.remove('bg-white', 'text-red-500');
    selected.classList.add('bg-blue-500', 'text-white');
    // document.getElementById('notShowSection').classList.add('hidden');


    // if (id == 'openbtn') {
    //     allCard.classList.add('hidden');
    //     fillSection.classList.remove('hidden')
    //     // renderInterview()
    //     document.getElementById("total").innerText = openList.length;

    //     // if (openList.length <= 0) {
    //     //     document.getElementById('notShowSection').classList.remove('hidden');

    //     // }

    // }
    // else if (id == 'allbtn') {
    //     allCard.classList.remove('hidden');
    //     fillSection.classList.add('hidden');
    //     console.log(allCard.children.length);
    //     document.getElementById("total").innerText = allCard.children.length;

    // }
    // else if (id == 'closedbtn') {
    //     allCard.classList.add('hidden');
    //     fillSection.classList.remove('hidden')
    //     // renderRejected()
    //     document.getElementById("total").innerText = rejectList.length;
    //     // if (rejectList.length <= 0) {
    //     //     document.getElementById('notShowSection').classList.remove('hidden');

    //     // }
    // };

};


loadIssues();
// toggleStyle();

document.getElementById('btn-search').addEventListener('click', ()=>{
    const input= document.getElementById('input-search');
    const searchValue= input.value.trim().toLowerCase();
    console.log(searchValue);

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((data)=>{
        const allWords= data.data;
        console.log(allWords);
        const filterWords= allWords.filter(word=> word.word.toLowerCase().includes(searchValue));
        displayIssues(filterWords)
    });
});

