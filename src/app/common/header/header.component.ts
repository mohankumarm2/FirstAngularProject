import {Component} from "@angular/core";

@Component({
  selector: "firstapp-header",
  templateUrl: "./header.component.html"
})

export class HeaderComponent {

  SEARCH_TAG="Search for \"TAG\"";

  clickHandler() {
    alert("You Clicked");
  }

  searchButtonClickHandler() {
    alert("Search button Clicked!!!");
  }

  searchBoxAction() {
    alert("Search box focused!!!");
  }
}
