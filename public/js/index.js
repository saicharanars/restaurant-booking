var api = "http://localhost:4000";
async function order(event) {
  event.preventDefault();
  const orderamount = document.getElementById("orderamount").value;
  const orderdish = document.getElementById("orderdish").value;
  const ordertable = document.getElementById("ordertable").value;
  const obj = {
    orderamount,
    orderdish,
    ordertable,
  };

  // axios
  //   .post(`${api}/expense`, obj)
  //   .then((res) => {
  //     showexpenseonscreen(res.data);
  //   })
  //   .catch((err) => console.error(err));
  try {
    const res = await axios.post(`${api}/add-order`, obj);
    showorderonscreen(res.data.orders);
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener("DOMContentLoaded", async() => {
  try {
    const res = await axios.get(`${api}/get-data`);
    console.log(res.data.orders.length);
    for (let i = 0; i < res.data.orders.length; i++) {
      showorderonscreen(res.data.orders[i]);
      console.log(res.data.orders[i].orderamount);
    }
    
  } catch (error) {
    console.log(error)
  }
  
    
});
function showorderonscreen(obj) {
  
  const parentele = document.getElementById("listofitems");
  const table1 = document.getElementById("table1");
  const table2 = document.getElementById("table2");
  const table3 = document.getElementById("table3");
  const childele = document.createElement("li");
  childele.className ="list-group-item";
  childele.textContent = obj.orderamount + "   " + obj.orderdish + "   " + obj.ordertable;
  
  const deletebtn = document.createElement("input");
  deletebtn.type = "button";
  deletebtn.value = "Delete";
  deletebtn.className="btn btn-outline-danger float-end"
  deletebtn.onclick = async() => {
    
    // axios.delete(`${api}/expense/${obj._id}`
    // ).then(() =>{
    //   if (obj.cat === "table1") {
    //     table1.removeChild(childele);
    //   } else if (obj.cat === "table2") {
    //     table2.removeChild(childele);
    //   } else {
    //     table2.removeChild(childele);
    //   }
    // }).catch((err)=>console.error(err));
    try {
    const res = await axios.delete(`${api}/delete-order/${obj.id}`);
    console.log(res);
    if (obj.ordertable === "table1") {
      table1.removeChild(childele);
    } else if (obj.ordertable === "table2") {
      table2.removeChild(childele);
    } else {
      table3.removeChild(childele);
    }
    } catch (error) {
    console.log(error);
     }
    
    
    //localStorage.removeItem(obj.etype);
    //parentele.removeChild(childele);
  };

  childele.appendChild(deletebtn);
  //childele.appendChild(editbtn);
  //table1.appendChild(childele);
  //parentele.appendChild(childele);

  if (obj.ordertable === "table1") {
    table1.appendChild(childele);
  } else if (obj.ordertable === "table2") {
    table2.appendChild(childele);
  } else {
    table3.appendChild(childele);
  }
}