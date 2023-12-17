describe("Ringo - React Boilderplate Web App", () => {
  it("goes to the 'Check the Context in action' page  and back home", () => {
    cy.visit("/");

    cy.contains(
      "a.btn",
      "If you see this green button, bootstrap is working"
    ).should("be.visible");

    cy.contains("button", "Check the Context in action").click();

    cy.location("pathname").should("be.equal", "/demo");
    cy.get(".list-group-item").should("have.length", 2);

    cy.contains("button", "Back home").click();

    cy.location("pathname").should("be.equal", "/");
  });

  it("changes items colors", () => {
    const whiteBackgroundCSS =
      "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box";
    const orangeBackgroundCSS =
      "rgb(255, 165, 0) none repeat scroll 0% 0% / auto padding-box border-box";

    cy.visit("/demo");

    cy.get(".list-group-item").as("items").should("have.length", 2);
    cy.get("@items").should("have.css", "background", whiteBackgroundCSS);

    cy.get("button:contains(Change Color)").as("buttons");
    cy.get("@buttons").first().click();
    cy.get("@buttons").last().click();

    cy.get("@items").should("have.css", "background", orangeBackgroundCSS);
  });
});
