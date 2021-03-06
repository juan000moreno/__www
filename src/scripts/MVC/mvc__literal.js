let FormModel = function (){};

FormModel.prototype.getInputText = function (){
  return document.querySelector("#inputtext").value;
};

FormModel.prototype.setInputText = function (value) {
  document.querySelector("#inputtext").value = value;
}

let FormController = function (pModel) {
  this.model = pModel || new FormModel ();

  this.fill_clicked = function (msg) {
    this.msg = msg || "Hello World";
    console.log("this.msg", this.msg);
    this.model.setInputText(this.msg);
  };

  this.clear_clicked = function () {
    this.model.setInputText("");
  }
}

FormController.prototype.init = function () {
  let self = this;

  document.querySelector("#fillbutton").onclick = function () {
    console.log("nada");
    let valueTxt = document.querySelector("#inputtext").value; 
    self.fill_clicked(valueTxt);
  }

  document.querySelector("#clearbutton").onclick = function () {
    self.clear_clicked();
  }
}


FormController.prototype.getModel = function () {
  return this.model;
}


document.addEventListener("DOMContentLoaded", () => {
  new FormController().init();
}, false);

