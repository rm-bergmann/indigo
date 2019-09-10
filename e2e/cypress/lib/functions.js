export const waitLongEnough = seconds => cy.wait(seconds * 1000);

export const convertSpacesToHyphens = str => str.split(' ').join('-');
