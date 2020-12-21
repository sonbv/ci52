// CRUD

// create: taok document

function addData() {
  firebase.firestore().collection("users").add({
    name: "Chinh",
    email: "tx@gmail.com",
    password: "12345678",
  });
}
// addData();

//read
async function readAllData() {
  let data = await firebase.firestore().collection("users").get();
  let parseData = data.docs.map(function (doc) {
    let dataDoc = doc.data;
    // data.doc.id = doc.id;
    // cách khác để thêm id
    dataDoc = { ...dataDoc, id: doc.id };

    // return doc.data;
    // console.log(doc.data());
  });
  console.log(parseData);
  //   console.log(data);
}
// readAllData();

async function searchUserByName(keyword) {
  let data = await firebase
    .firestore()
    .collection("users")
    .where("name", "==", keyword)
    .get();
  let layDulieu = data.docs.map(function (doc) {
    let dulieuGoc = doc.data;
    layDulieu = { ...dulieuGoc, id: doc.id };
  });
  console.log(layDulieu);
}

// searchUserByName("Chinh");

async function findOneUser(id) {
  let data = await firebase.firestore().collection("users").doc(id).get();
  console.log(data.data(), id);
}

// findOneUser("vSRCfLadHJzd7b3cAWUQ");

//doc.data trả về dữ liệu
//doc.id trả về id

//update

async function updateUser(id, data) {
  try {
    let dataParse = await firebase
      .firestore()
      .collection("users")
      .doc(id)
      .update({
        name: data,
      });
  } catch (error) {
    console.log(error.message);
  }
}

updateUser("vSRCfLadHJzd7b3cAWUQ", "Vân");
//delete

async function removeUser(id) {
  try {
    let dataParse = await firebase
      .firestore()
      .collection("users")
      .doc(id)
      .delete();
  } catch (error) {
    console.log(error.message);
  }
}
