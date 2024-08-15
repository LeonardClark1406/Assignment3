function handleSubmit() {
  // Lấy giá trị input của email
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // Lấy element của error
  const errorEmail = document.getElementById("error-email");
  // Điều kiện của mail
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // Dùng match để kiểm tra mail
  const check = emailValue.match(checkMail);
  // Lấy phần chứa thông tin user
  const sectionContent1 = document.querySelector("#info .section-content1");
  console.log("check section", sectionContent1);
  // Lấy element kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent1.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
function handleOnMouseOver(element) {
  const sectionContent = element.querySelector(".section-content");
  const viewMoreButton = element.querySelector(".view-more");
  const lessMoreButton = element.querySelector(".less-more");

  viewMoreButton.addEventListener("click", () => {
    sectionContent.style.display = "block";
    viewMoreButton.style.display = "none";
    lessMoreButton.style.display = "block";
  });

  lessMoreButton.addEventListener("click", () => {
    sectionContent.style.display = "none";
    viewMoreButton.style.display = "block";
    lessMoreButton.style.display = "none";
  });
}
