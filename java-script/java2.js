// console.log('heooo java tava');
//// Home page js--------------------
let allData = []; 

const createBadge = (arr) => {
    const htmlElement = arr.map((el) => {
        let colorClasses = " ";
        if (el === "bug") {
            colorClasses = "text-[#EF4444] bg-[#FECACA] border-red-300";
        } else if (el === "enhancement") {
            colorClasses = "text-green-700 bg-[#BBF7D0] border-green-300";
        } else if (el === "good first issue") {
            colorClasses = "text-orange-600 bg-orange-50 border-orange-300";
        } else if (el === "help wanted") {
            colorClasses = "text-[#D97706] bg-[#FDE68A] border-orange-300";
        } else if (el === "documentation") {
            colorClasses = "text-blue-600 bg-blue-50 border-blue-300";
        }
        return `
       <span class="uppercase mr-[5px] px-3 py-1 text-[12px] font-semibold rounded-full border ${colorClasses}">
          ${el}
       </span>
     `;
    });
    return htmlElement.join(" ");
};

const manageSpinner= (status)=>{
    if(status== true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('allCardSection').classList.add('hidden');
    }else{
        document.getElementById('allCardSection').classList.remove('hidden');
        document.getElementById('spinner').classList.add('hidden');
    };
};


async function loadIssues() {
    manageSpinner(true);
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    console.log(res);
    const data = await res.json();
    displayIssues(data.data);
    allData = data.data;
    manageSpinner(false);

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

    <span class="btn btn-primary rounded-full">${issue.status}
    <img src="" alt="" > </span>
    <p class="hello text-[14px] ">${issue.author}</p>                     
    <p class="hello text-[14px]">${issue.createdAt}</p>
    </div>
    </div>

    <div class="space-y-2">
    <div class="flex flex-wrap gap-2 mb-3 md:mb-4 mt-4">
        ${createBadge(issue.labels)}
     </div>
    

    <div class="space-y-2">
    <p>The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
    </div>
                        
   <div class="bg-gray-100 p-2 rounded-sm flex flex-3 gap-5 justify-around">
    <p class="hello text-[14px] ">Assignee: <span>${issue.assignee ? issue.assignee : "assignee not found"}</span></p>   
    <p class="hello text-[14px] ">Priority: <span class="badge bg-red-100 w-[70px] rounded-full text-red-600">${issue.priority}</span></p>
    </div>
    `;

    document.getElementById('issue_modal').showModal();
}

function displayIssues(issues) {
    issuecount.innerText = issues.length;
    allCard.innerHTML = " ";

    issues.forEach(element => {
        console.log(element);
        const borderTop = element.status === 'open' ? 'border-t-green-500' : 'border-t-purple-500'
        const card = document.createElement('div');
        card.className = "allCards mt-1 p-[10px] sm:col md:grid-cols-4 bg-white space-y-2 ";
        card.innerHTML = ` 
          <div  onclick="loadWordDetail(${element.id})" class="border border-t-4 card bg-base-100 p-[11px] ${borderTop} shadow-sm shadow-gray-600 space-y-1">
          
                    <figure class=" justify-between">
                        <span class=" px-[11px] py-[11px] rounded-full">
                        <img src="${element.status==="open" ? '../assets/Open-Status.png': '../assets/Closed-Status.png'}" alt="" ></span>
                        <div class="badge bg-red-100 w-[70px] rounded-full text-red-600 text-[16px] py-[15px] px-[45px]"> ${element.priority}</div>
                    </figure>
                    <h2 class="text-[23px] font-semibold">${element.title}</h2>
                    <h3 class="hello text-[15px] ">${element.description}</h3>
                    <div class="card-body w-full text-center">
                     
                    
                     <div class="flex flex-wrap gap-2 mb-3 md:mb-1">
                         ${createBadge(element.labels)}
                   </div>
                       
                       
                        </div>                        
                        <hr class="hello">
                        <p class="hello text-[14px] pt-4">${element.author}</p>
                        
                        <p class="hello text-[14px]">${element.createdAt}</p>
                        <p class="hello text-[14px]">${element.updatedAt}</p>
                    </div> 
                    
        `;
        allCard.appendChild(card);
    });
    manageSpinner(false);
};
             
const allCard = document.getElementById('allCardSection')
const allbtn = document.getElementById('allBtn');
const openbtn = document.getElementById('openBtn');
const closedbtn = document.getElementById('closedBtn');
const issuecount = document.getElementById('issueCount');

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
    
};


loadIssues();
// toggleStyle();

document.getElementById('btn-search').addEventListener('click', () => {
    const input = document.getElementById('input-search');
    const searchValue = input.value.trim().toLowerCase();
    console.log(searchValue);

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then((res) => res.json())
        .then((data) => {
            const allWords = data.data;
            console.log(allWords);
            const filterWords = allWords.filter(word => word.title.toLowerCase().includes(searchValue));
            displayIssues(filterWords);
        });
});
const filterIssue = (status) => {
    if (status !== 'all') {
        const filteredIssue = allData.filter(
            (item) => item.status.toLowerCase() === status.toLowerCase()
        );
        displayIssues(filteredIssue)

    }
    else if (status == 'all') {
        displayIssues(allData)
    }
};

displayIssues();






