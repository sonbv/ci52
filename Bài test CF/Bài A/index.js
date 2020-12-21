//Bài A1: Viết một hàm nhập vào 2 mảng a1 và a2, đầu ra trả về một mảng mới chứa phần tử ko trùng nhau của hai mảng kia
let a1 = prompt(
  "Nhập vào các giá trị khác nhau, các giá trị cách nhau bởi dấu ,"
).split(",");
let a2 = prompt(
  "Nhập vào các giá trị khác nhau, các giá trị cách nhau bởi dấu ,"
).split(",");
let arr = [...a1, ...a2];
function getNonDuplicateElements(array) {
  var arr1 = array.slice().sort();
  var results = [];
  for (var i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] !== arr1[i + 1]) {
      results.push(arr1[i]);
    }
  }
  return results;
}
console.log(getNonDuplicateElements(arr));

// Bài A2: Viết chương trình xếp hạng rank theo số điểm các đội bóng đạt được trong giải đấu. Tên các đội bóng không trùng nhau. Nếu điểm trùng nhau thì đội xếp trên có hiệu số bàn thắng bại ít hơn, rồi mới xét đến tên nếu 2 đội trùng cả điểm số và hiệu số bàn thắng.
let club = [
  {
    name: "Arsenal",
    points: 99,
    GD: 45,
  },
  {
    name: "Chelsea",
    points: 75,
    GD: 39,
  },
  {
    name: "Manchester United",
    points: 60,
    GD: 29,
  },
  {
    name: "Liverpool",
    points: 88,
    GD: 39,
  },
];
// fc.sort(function(a,b) (
//     return b.points - a.points
// ))
let newClubList = [];
for (let i = 0; i < club.length; i++) {
  newClubList.push(club[i]);
}
function switchPosition() {
  for (let i = 0; i < club.length - 1; i++) {
    for (let j = i + 1; j < club.length; j++) {
      if (club[i].points < club[j].points) {
        let temp1 = club[i];
        club[i] = club[j];
        club[j] = temp1;
      }
    }
  }
  for (let i = 0; i < club.length - 1; i++) {
    for (let j = i + 1; j < club.length; j++) {
      if (club[i].points == club[j].points) {
        if (club[i].GD > club[j].GD) {
          let temp2 = club[i];
          club[i] = club[j];
          club[j] = temp2;
        }
      }
    }
  }
  for (let i = 0; i < club.length - 1; i++) {
    for (let j = i + 1; j < club.length; j++) {
      if (club[i].points == club[j].points && club[i].GD == club[j].GD) {
        club.sort(function () {
          if (club[i].name > club[j].name) {
            return -1;
          }
          if (club[i].name < club[j].name) {
            return 1;
          }
          return 0;
        });
      }
    }
  }
  for (let i = 0; i < newClubList.length; i++) {
    for (let j = 0; j < club.length; j++) {
      if (club[i].name == newClubList[j].name) {
        newClubList[j].position = i + 1;
        break;
      }
    }
  }
}
switchPosition();
console.log(newClubList);
